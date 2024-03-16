import React, { useState } from "react";
import Card from "./Card";

export interface Job {
  id: number;
  title: string;
  description: string;
  language: string;
}

const JobListing: React.FC<{ jobs: Job[] }> = ({ jobs }) => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("all");

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedLanguage(event.target.value);
  };

  const filteredJobs: Job[] =
    selectedLanguage === "all"
      ? jobs
      : jobs.filter((job) => job.language === selectedLanguage);

  return (
    <div className="my-8 sm:my-20" >
      <div>
        <div className="max-w-md flex justify-center mx-auto text-2xl font-semibold space-x-4 my-10 ">
          <input
            type="radio"
            id="all"
            name="language"
            value="all"
            checked={selectedLanguage === "all"}
            onChange={handleFilter}
          />
          <label htmlFor="all">All</label>

          <input
            type="radio"
            id="js"
            name="language"
            value="js"
            checked={selectedLanguage === "js"}
            onChange={handleFilter}
          />
          <label htmlFor="js">JavaScript</label>

          <input
            type="radio"
            id="python"
            name="language"
            value="python"
            checked={selectedLanguage === "python"}
            onChange={handleFilter}
          />
          <label htmlFor="python">Python</label>

          <input
            type="radio"
            id="go"
            name="language"
            value="go"
            checked={selectedLanguage === "go"}
            onChange={handleFilter}
          />
          <label htmlFor="go">Go</label>
        </div>{" "}
      </div>
      <div>
        {/* filtered jobs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 " >
        {filteredJobs.map((job) => (
          
          <Card key={job.id} className="my-4" >
            <div className="space-y-2 p-4 " >
              <h3 className="text-lg font-semibold" >{job.title}</h3>
              <p className="" >{job.description}</p>
              <p className="" >Language: <span className=" text-xl font-semibold text-sky-800 " >{job.language}</span> </p>
            </div>
          </Card>
        ))}
      </div>
      </div>
    </div>
  );
};

export default JobListing;
