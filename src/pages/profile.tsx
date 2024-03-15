import React from 'react';
import Header from '../components/Header';
import AuthGuard from '../components/AuthGuard';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import Container from '@/components/Container';

const Profile = ({ userData }) => {
    const router = useRouter();
  const { user, employer } = userData;

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/login');
  };

  return (
    <Layout>
        <Container>
    <div>
      {/* <Header /> */}
      <AuthGuard>
        <h1>Profile Page</h1>
        {user && (
          <div>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Contact Number: {user.contact_number}</p>
            {/* Add more user information */}
          </div>
        )}
        {employer && (
          <div>
            <p>Employer Name: {employer[0].employer_name}</p>
            <p>Slug: {employer[0].slug}</p>
            <p>Specialization: {employer[0].specialization}</p>
            {/* Add more employer information */}
          </div>
        )}
         <button onClick={handleLogout}>Logout</button>
      </AuthGuard>
    </div>
    </Container>
    </Layout>
  );
};

export async function getServerSideProps() {
  try {
    const response = await fetch('https://run.mocky.io/v3/961e27b4-4694-47e1-9ce6-fea6664ff40a');
    const data = await response.json();
    if (data.success) {
      return {
        props: {
          userData: data.response.data
        }
      };
    } else {
      return {
        props: {
          userData: null
        }
      };
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    return {
      props: {
        userData: null
      }
    };
  }
}

export default Profile;
