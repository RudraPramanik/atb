import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import Container from '@/components/Container';
import SpinnerIcon from '@/components/Icon/SpinnerIcon';

const Login: React.FC = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (loading) {
      const handleRouteChange = () => setLoading(false);
      router.events.on('routeChangeComplete', handleRouteChange);
      return () => {
        router.events.off('routeChangeComplete', handleRouteChange);
      };
    }
  }, [loading, router.events]);

  // form value change handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  // form submit handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch('https://run.mocky.io/v3/961e27b4-4694-47e1-9ce6-fea6664ff40a', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      const data = await response.json();
      if (data.success) {
        localStorage.setItem('token', data.response.data.token);
        router.push('/profile');
      } else {
        setError(data.errors[0].message);
        setLoading(false);
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again.');
      setLoading(false);
    }
  };

  return (
    <Layout>
      <Container>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-3xl font-bold mb-4">Login</h1>
          <form onSubmit={handleSubmit} className="w-full max-w-sm">
            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={credentials.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="appearance-none border rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                placeholder="Password"
                required
                className="appearance-none border rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <button
              type="submit"
              className="bg-[#350880] hover:bg-[#100880] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              disabled={loading}
            >
              {loading ? <SpinnerIcon className="animate-spin mr-2 h-4 w-4" /> : null} {/* Display the spinner icon if loading */}
              Login
            </button>
          </form>
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
      </Container>
    </Layout>
  );
};

export default Login;
