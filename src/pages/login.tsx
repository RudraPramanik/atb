import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import Container from '@/components/Container';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://run.mocky.io/v3/961e27b4-4694-47e1-9ce6-fea6664ff40a', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      const data = await response.json();
      if (data.success) {
        // Save token to local storage or session storage
        localStorage.setItem('token', data.response.data.token);
        // Redirect to dashboard if authentication is successful
        router.push('/profile');
      } else {
        setError(data.errors[0].message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Layout>
        <Container>
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" value={credentials.email} onChange={handleChange} placeholder="Email" required />
        <input type="password" name="password" value={credentials.password} onChange={handleChange} placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
    </Container>
    </Layout>
  );
};

export default Login;
