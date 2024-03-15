import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import Container from "@/components/Container";
import JobChart from "@/components/JobChart";
import { JobStat } from "@/components/JobChart";
import Card from "@/components/Card";
import CompareOpening from "@/components/CompareOpening";

const inter = Inter({ subsets: ["latin"] });

const sampleJobStats = [
  { month: 'Jan', totalJobs: 20, totalCandidates: 35 },
  { month: 'Feb', totalJobs: 15, totalCandidates: 28 },
  { month: 'Mar', totalJobs: 22, totalCandidates: 40 },
  { month: 'Apr', totalJobs: 18, totalCandidates: 32 },
  { month: 'May', totalJobs: 25, totalCandidates: 50 },
  { month: 'Jun', totalJobs: 12, totalCandidates: 20 },
  { month: 'Jul', totalJobs: 17, totalCandidates: 38 },
  { month: 'Aug', totalJobs: 24, totalCandidates: 45 },
  { month: 'Sep', totalJobs: 19, totalCandidates: 30 },
  { month: 'Oct', totalJobs: 28, totalCandidates: 55 },
  { month: 'Nov', totalJobs: 10, totalCandidates: 15 },
  { month: 'Dec', totalJobs: 21, totalCandidates: 42 },
];

export default function Home() {
  const jobOpeningsData = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120];
  const jobCandidatesData = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];
  return (
  <Layout >
    <Container className=" text-indigo-900" >
      {/* <Chart jobOpeningsData={jobOpeningsData} jobCandidatesData={jobCandidatesData}  /> */}
      <h1 className="text-2xl text-indigo-900 font-extrabold text-center my-6 " >ABT Jobs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 " >
        <div className=" col-span-1 " >
        <Card className="flex flex-col justify-center" >
      <JobChart chartData={sampleJobStats} />
      <h3 className="text-center my-4 font-semibold " >Total Job VS Total Candidate</h3>
      </Card>
        </div>
        <div className="col-span-1" >
          <CompareOpening/>
        </div>
      </div>


    </Container>
  </Layout>
  );
}
