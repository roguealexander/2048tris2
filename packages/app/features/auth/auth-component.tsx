import { H2, TSizableText, SubmitButton, XStack, YStack } from '@my/ui'
import { SchemaForm, formFields } from 'app/utils/SchemaForm'
import { useSupabase } from 'app/utils/supabase/useSupabase'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'

import { hashString } from 'app/utils/hashString'
import { observable } from '@legendapp/state'
import { observer } from '@legendapp/state/react'
import { stats$ } from 'app/statsState'
import { api } from 'app/utils/api'
import { appState$ } from 'app/appState'

const SignInSchema = z.object({
  name: formFields.text.min(4).describe('Name // Scoreboard name'),
  password: formFields.text.min(6).describe('Password // Enter your password'),
})

const SignUpSchema = z.object({
  name: formFields.text.min(4).describe('Name // Scoreboard name'),
  password: formFields.text.min(6).describe('Password // Choose a password'),
})

const signUpSignIn$ = observable<'sign-up' | 'sign-in'>('sign-up')

export const AuthComponent = observer(() => {
  const supabase = useSupabase()
  const form = useForm<z.infer<typeof SignInSchema>>()
  const updateStatsMutation = api.tris.updateUserStats.useMutation()

  const signingIn = signUpSignIn$.get() === 'sign-in'

  const persistExistingStats = async () => {
    const updatedStats = await updateStatsMutation.mutateAsync(stats$.get())
    stats$.set(updatedStats)
  }

  const handleError = (errorMessage: string) => {
    if (errorMessage.includes('email')) {
      form.setError('name', {
        type: 'custom',
        message: errorMessage.replaceAll('email', 'name').replaceAll('Email', 'Name'),
      })
    } else if (errorMessage.includes('password')) {
      form.setError('password', { type: 'custom', message: errorMessage })
    } else {
      form.setError('password', { type: 'custom', message: errorMessage })
    }
  }

  async function signIn({ name, password }: z.infer<typeof SignInSchema>) {
    const { error } = await supabase.auth.signInWithPassword({
      email: `${hashString(name)}@fake.com`,
      password: password,
    })

    if (error) {
      handleError(error.message.toLowerCase())
      return
    }

    appState$.onboarded.set(true)
    await persistExistingStats()
  }

  async function signUp({ name, password }: z.infer<typeof SignUpSchema>) {
    const { error } = await supabase.auth.signUp({
      email: `${hashString(name)}@fake.com`,
      password: password,
      options: {
        data: {
          name,
        },
      },
    })

    if (error) {
      handleError(error.message.toLowerCase())
      return
    }

    appState$.onboarded.set(true)
    await persistExistingStats()
  }

  return (
    <XStack bw={4} f={1} w="100%" boc="$border">
      <FormProvider {...form}>
        <SchemaForm
          form={form}
          schema={signingIn ? SignInSchema : SignUpSchema}
          defaultValues={{
            name: '',
            password: '',
          }}
          onSubmit={signingIn ? signIn : signUp}
          props={{
            password: {
              secureTextEntry: true,
            },
          }}
          renderAfter={({ submit }) => {
            return (
              <>
                <SubmitButton onPress={() => submit()} w={150}>
                  Sign {signingIn ? 'In' : 'Up'}
                </SubmitButton>
                <TSizableText size="$1">
                  {signingIn ? 'Dont have an account? ' : 'Already have an account? '}
                  <TSizableText
                    cur="pointer"
                    onPress={() => {
                      signUpSignIn$.set((curr) => (curr === 'sign-in' ? 'sign-up' : 'sign-in'))
                      form.clearErrors()
                    }}
                    textDecorationLine="underline"
                  >
                    Sign {signingIn ? 'Up' : 'In'}
                  </TSizableText>
                </TSizableText>
              </>
            )
          }}
        >
          {(fields) => (
            <>
              <YStack gap="$3">
                <H2 mb="$-4" color="$text">
                  Sign {signingIn ? 'In' : 'Up'}
                </H2>
                <TSizableText>to join the leaderboards</TSizableText>
              </YStack>

              {Object.values(fields)}
            </>
          )}
        </SchemaForm>
      </FormProvider>
    </XStack>
  )
})
