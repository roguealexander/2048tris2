import { H2, Paragraph, SizableText, SubmitButton, Text, Theme, XStack, YStack } from '@my/ui'
import { SchemaForm, formFields } from 'app/utils/SchemaForm'
import { useSupabase } from 'app/utils/supabase/useSupabase'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Link } from 'solito/link'
import { useRouter } from 'solito/router'
import { z } from 'zod'

import { hashString } from 'app/utils/hashString'
import { observable } from '@legendapp/state'
import { observer } from '@legendapp/state/react'

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

  const signingIn = signUpSignIn$.get() === 'sign-in'

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
    }
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
    }
  }

  return (
    <XStack bw={2} f={1} w="100%" boc="$border">
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
                <SubmitButton onPress={() => submit()} br="$0" w={250}>
                  Sign {signingIn ? 'In' : 'Up'}
                </SubmitButton>
                <SizableText
                  cur="pointer"
                  onPress={() => {
                    signUpSignIn$.set((curr) => (curr === 'sign-in' ? 'sign-up' : 'sign-in'))
                    form.clearErrors()
                  }}
                  textDecorationLine="underline"
                >
                  Sign {signingIn ? 'Up' : 'In'} Instead
                </SizableText>
              </>
            )
          }}
        >
          {(fields) => (
            <>
              <YStack gap="$3">
                <H2 mb="$-4">Sign {signingIn ? 'In' : 'Up'}</H2>
                <SizableText>to join the leaderboards</SizableText>
              </YStack>

              {Object.values(fields)}
            </>
          )}
        </SchemaForm>
      </FormProvider>
    </XStack>
  )
})
