import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import Container from "@/components/Container";
import JobChart from "@/components/JobChart";
import Card from "@/components/Card";
import CompareOpening from "@/components/CompareOpening";
import JobListing from "@/components/JobListing";
import { Job } from "@/components/JobListing";

const inter = Inter({ subsets: ["latin"] });

const sampleJobStats = [
  { month: "Jan", totalJobs: 20, totalCandidates: 35 },
  { month: "Feb", totalJobs: 15, totalCandidates: 28 },
  { month: "Mar", totalJobs: 22, totalCandidates: 40 },
  { month: "Apr", totalJobs: 18, totalCandidates: 32 },
  { month: "May", totalJobs: 25, totalCandidates: 50 },
  { month: "Jun", totalJobs: 12, totalCandidates: 20 },
  { month: "Jul", totalJobs: 17, totalCandidates: 38 },
  { month: "Aug", totalJobs: 24, totalCandidates: 45 },
  { month: "Sep", totalJobs: 19, totalCandidates: 30 },
  { month: "Oct", totalJobs: 28, totalCandidates: 55 },
  { month: "Nov", totalJobs: 10, totalCandidates: 15 },
  { month: "Dec", totalJobs: 21, totalCandidates: 42 },
];

const jobData: Job[] = [
  {
    id: 1,
    title: "Frontend Developer",
    description:
      "As a Front-End developer, you have to collaborate with back-end developers with coding and troubleshooting. You should be comfortable with front-end coding languages, development frameworks, and third-party libraries",
    language: "js",
  },
  {
    id: 2,
    title: "Backend Developer",
    description:
      "We are looking for a Node.js Developer responsible for managing the interchange of data between the server and the users",
    language: "js",
  },
  {
    id: 3,
    title: "Python Developer",
    description:
      "We are looking for a Node.js Developer responsible for managing the interchange of data between the server and the users",
    language: "python",
  },
  {
    id: 4,
    title: "Go Developer",
    description:
      "We are looking for a GoLang Developer responsible for managing the interchange of data between the server and the users",
    language: "go",
  },
  {
    id: 5,
    title: "Frontend Developer",
    description:
      "As a Front-End developer, you have to collaborate with back-end developers with coding and troubleshooting. You should be comfortable with front-end coding languages, development frameworks, and third-party libraries",
    language: "js",
  },
  {
    id: 6,
    title: "Backend Developer",
    description:
      "We are looking for a Node.js Developer responsible for managing the interchange of data between the server and the users",
    language: "js",
  },
  {
    id: 7,
    title: "Python Developer",
    description:
      "We are looking for a Node.js Developer responsible for managing the interchange of data between the server and the users",
    language: "python",
  },
  {
    id: 8,
    title: "Go Developer",
    description:
      "We are looking for a GoLang Developer responsible for managing the interchange of data between the server and the users",
    language: "go",
  },
  {
    id: 9,
    title: "Frontend Developer",
    description:
      "As a Front-End developer, you have to collaborate with back-end developers with coding and troubleshooting. You should be comfortable with front-end coding languages, development frameworks, and third-party libraries",
    language: "js",
  },
  {
    id: 10,
    title: "Backend Developer",
    description:
      "We are looking for a Node.js Developer responsible for managing the interchange of data between the server and the users",
    language: "js",
  },
  {
    id: 11,
    title: "Python Developer",
    description:
      "We are looking for a Node.js Developer responsible for managing the interchange of data between the server and the users",
    language: "python",
  },
  {
    id: 12,
    title: "Go Developer",
    description:
      "We are looking for a GoLang Developer responsible for managing the interchange of data between the server and the users",
    language: "go",
  },
  
];

export default function Home() {
  return (
    <Layout>
      <Container className=" text-indigo-900">
        <h1 className="text-2xl text-indigo-900 font-extrabold text-center mt-6 mb-2 ">
          ABT Jobs
        </h1>
        <h4 className="text-xl font-semibold text-center mb-6 ">
          Find your best Opportunity
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-2 sm:my-5 ">
          <div className=" col-span-1 ">
            <Card className="flex flex-col justify-center">
              <JobChart chartData={sampleJobStats} />
              <h3 className="text-center my-4 font-semibold ">
                Total Job VS Total Candidate
              </h3>
            </Card>
          </div>
          <div className="col-span-1  ">
            <CompareOpening />
          </div>
        </div>
        <JobListing jobs={jobData} />
      </Container>
    </Layout>
  );
}
