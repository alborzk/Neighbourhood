import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { generateClient } from 'aws-amplify/api';
import { getCurrentUser, signIn, signOut, type SignInInput } from 'aws-amplify/auth';
import { Box, Button, Group, PasswordInput, TextInput, Title } from '@mantine/core';
import { getUser } from '@/src/graphql/queries';

const client = generateClient({});

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  async function handleSignOut() {
    try {
      await signOut({ global: true });
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }

  async function handleSignIn({ username, password }: SignInInput) {
    try {
      await signIn({ username, password });
      const { userId } = await getCurrentUser();
      console.log('Currently logged in user ID from Cognito:', userId);
      const user = await client.graphql({
        query: getUser,
        variables: { id: userId },
      });
      console.log('User retrieved from Database:', user.data.getUser);
      localStorage.setItem('userData', JSON.stringify(user.data.getUser));
      router.push('/home');
    } catch (error) {
      console.log('Error signing in', error);
      setErrorMessage('Check your details and try again.');
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSignOut();
    handleSignIn({ username: email, password: pass });
  };

  return (
    <Box style={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={handleSubmit}>
        <Title order={2} style={{ textAlign: 'center' }} mb="lg">
          Login
        </Title>
        {errorMessage && <div style={{ color: 'red', marginBottom: 10 }}>{errorMessage}</div>}
        <TextInput
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
          required
        />
        <PasswordInput
          label="Password"
          value={pass}
          onChange={(e) => setPass(e.currentTarget.value)}
          required
          mt="md"
        />
        <Group align="center" mt="md">
          <Button type="submit">Login</Button>
        </Group>
      </form>
    </Box>
  );
};

export default LoginForm;
