import { H2, Paragraph, SubmitButton, Theme, Text, YStack } from '@my/ui'
import { SchemaForm, formFields } from 'app/utils/SchemaForm'
import { useSupabase } from 'app/utils/supabase/useSupabase'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { Link } from 'solito/link'
import { hashString } from 'app/utils/hashString'

const SignUpSchema = z.object({
  name: formFields.text.min(4).describe('Name // Scoreboard name'),
  password: formFields.text.min(6).describe('Password // Choose a password'),
})

export const SignUpComponent = () => {
  const supabase = useSupabase()

  const form = useForm<z.infer<typeof SignUpSchema>>()

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
      const errorMessage = error?.message.toLowerCase()
      if (errorMessage.includes('name')) {
        form.setError('name', { type: 'custom', message: errorMessage })
      } else if (errorMessage.includes('password')) {
        form.setError('password', { type: 'custom', message: errorMessage })
      } else {
        form.setError('password', { type: 'custom', message: errorMessage })
      }
    }
  }

  return (
    <FormProvider {...form}>
      <SchemaForm
        form={form}
        schema={SignUpSchema}
        defaultValues={{
          name: '',
          password: '',
        }}
        props={{
          password: {
            secureTextEntry: true,
          },
        }}
        onSubmit={signUp}
        renderAfter={({ submit }) => (
          <>
            <Theme inverse>
              <SubmitButton onPress={() => submit()} borderRadius="$10">
                Sign Up
              </SubmitButton>
            </Theme>
            <SignInLink />
          </>
        )}
      >
        {(fields) => (
          <>
            <YStack gap="$3" mb="$4">
              <H2 $sm={{ size: '$8' }}>Get Started</H2>
              <Paragraph theme="alt2">Create a new account</Paragraph>
            </YStack>

            {Object.values(fields)}
          </>
        )}
      </SchemaForm>
    </FormProvider>
  )
}

const SignInLink = () => {
  return (
    <Link href={`/sign-in`}>
      <Paragraph textAlign="center" theme="alt1" mt="$2">
        Already signed up? <Text textDecorationLine="underline">Sign in</Text>
      </Paragraph>
    </Link>
  )
}
