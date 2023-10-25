import { H2, Paragraph, SubmitButton, Text, Theme, YStack } from '@my/ui'
import { SchemaForm, formFields } from 'app/utils/SchemaForm'
import { useSupabase } from 'app/utils/supabase/useSupabase'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Link } from 'solito/link'
import { useRouter } from 'solito/router'
import { z } from 'zod'

import { hashString } from 'app/utils/hashString'

const SignInSchema = z.object({
  name: formFields.text.min(4).describe('Name // Scoreboard name'),
  password: formFields.text.min(6).describe('Password // Enter your password'),
})

export const SignInComponent = () => {
  const supabase = useSupabase()
  const router = useRouter()
  const form = useForm<z.infer<typeof SignInSchema>>()

  async function signIn({ name, password }: z.infer<typeof SignInSchema>) {
    const { error } = await supabase.auth.signInWithPassword({
      email: `${hashString(name)}@fake.com`,
      password: password,
    })

    if (error) {
      const errorMessage = error?.message.toLowerCase()
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
    } else {
      router.replace('/')
    }
  }

  return (
    <FormProvider {...form}>
      <SchemaForm
        form={form}
        schema={SignInSchema}
        defaultValues={{
          name: '',
          password: '',
        }}
        onSubmit={signIn}
        props={{
          password: {
            secureTextEntry: true,
          },
        }}
        renderAfter={({ submit }) => {
          return (
            <>
              <Theme inverse>
                <SubmitButton onPress={() => submit()} borderRadius="$10">
                  Sign In
                </SubmitButton>
              </Theme>
              <SignUpLink />
            </>
          )
        }}
      >
        {(fields) => (
          <>
            <YStack gap="$3" mb="$4">
              <H2 $sm={{ size: '$8' }}>Welcome Back</H2>
              <Paragraph theme="alt1">Sign in to your account</Paragraph>
            </YStack>

            {Object.values(fields)}
          </>
        )}
      </SchemaForm>
    </FormProvider>
  )
}

const SignUpLink = () => {
  return (
    <Link href={`/sign-up`}>
      <Paragraph textAlign="center" theme="alt1">
        Don&apos;t have an account? <Text textDecorationLine="underline">Sign up</Text>
      </Paragraph>
    </Link>
  )
}
