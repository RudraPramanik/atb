import React, { useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import Container from "@/components/Container";
import Card from "@/components/Card";
import SpinnerIcon from "@/components/Icon/SpinnerIcon";
import AuthGuard from "@/components/AuthGuard";

interface UserData {
  user: {
    name: string;
    email: string;
    contact_number: string;
  };
  employer: {
    id: number;
    employer_name: string;
    slug: string;
    contact: string;
    specialization: string;
  }[];
}

interface ProfileProps {
  userData: UserData | null;
}

const Profile: React.FC<ProfileProps> = ({ userData }) => {
  const router = useRouter();
  const { user, employer } = userData || {};
  const [loading, setLoading] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  if (loading || !userData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <SpinnerIcon className="w-8 h-8 text-[#350880]" />
      </div>
    );
  }

  return (
    <Layout>
      <Container>
        <AuthGuard>
        <div>
          <h1 className="text-2xl my-6 font-semibold">{user?.name}</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <Card className="p-4">
              <h2 className="text-xl font-semibold">User Details</h2>
              <div>
                <p>Name: {user?.name}</p>
                <p>Email: {user?.email}</p>
                <p>Contact Number: {user?.contact_number}</p>
              </div>
            </Card>
            <Card className="p-4">
              <h2 className="text-xl font-semibold">Employer Details</h2>
              {employer && (
                <div>
                  <p>Employer Name: {employer[0].employer_name}</p>
                  <p>{employer[0].slug}</p>
                  <p>Contact: {employer[0].contact}</p>
                  <p>Specialization: {employer[0].specialization}</p>
                </div>
              )}
            </Card>
          </div>

          <div className="flex justify-center my-10">
            <button
              onClick={handleLogout}
              type="submit"
              className="bg-[#350880] hover:bg-[#100880] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Logout
            </button>
          </div>
        </div>
        </AuthGuard>
      
      </Container>
    </Layout>
  );
};

export async function getServerSideProps() {
  try {
    const response = await fetch(
      "https://run.mocky.io/v3/961e27b4-4694-47e1-9ce6-fea6664ff40a"
    );
    const data = await response.json();
    if (data.success) {
      return {
        props: {
          userData: data.response.data,
        },
      };
    } else {
      return {
        props: {
          userData: null,
        },
      };
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    return {
      props: {
        userData: null,
      },
    };
  }
}

export default Profile;
