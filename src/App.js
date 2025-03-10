import React, { useState, useEffect } from "react";
import FilterList from "./FilterList";
import Button from "./Button";
import linkedin from "./assets/Linkedin.svg";
import indeed from "./assets/Indeed.svg";
import roundPhoto from "./assets/Photo.svg";
import JobList from "./JobList";

const tempJobs = [
  {
    jobTitle: "Software Engineer",
    companyName: "Google",
    location: "Mountain View, CA",
    jobType: "On-Site",
    experienceLevel: "Entry Level",
    photoLink: "https://logo.clearbit.com/google.com",
    jobLink: "https://careers.google.com/jobs",
  },
  {
    jobTitle: "Frontend Developer",
    companyName: "Facebook",
    location: "Menlo Park, CA",
    jobType: "Hybrid",
    experienceLevel: "Mid-Senior Level",
    photoLink: "https://logo.clearbit.com/facebook.com",
    jobLink: "https://www.facebook.com/careers",
  },
  {
    jobTitle: "Data Analyst",
    companyName: "Amazon",
    location: "Seattle, WA",
    jobType: "Remote",
    experienceLevel: "Associate",
    photoLink: "https://logo.clearbit.com/amazon.com",
    jobLink: "https://www.amazon.jobs",
  },
  {
    jobTitle: "Machine Learning Engineer",
    companyName: "Tesla",
    location: "Palo Alto, CA",
    jobType: "On-Site",
    experienceLevel: "Director",
    photoLink: "https://logo.clearbit.com/tesla.com",
    jobLink: "https://www.tesla.com/careers",
  },
  {
    jobTitle: "Cybersecurity Analyst",
    companyName: "Microsoft",
    location: "Redmond, WA",
    jobType: "Remote",
    experienceLevel: "Internship",
    photoLink: "https://logo.clearbit.com/microsoft.com",
    jobLink: "https://careers.microsoft.com",
  },
  {
    jobTitle: "Backend Developer",
    companyName: "Netflix",
    location: "Los Angeles, CA",
    jobType: "Hybrid",
    experienceLevel: "Executive",
    photoLink: "https://logo.clearbit.com/netflix.com",
    jobLink: "https://jobs.netflix.com",
  },
  {
    jobTitle: "Product Manager",
    companyName: "Spotify",
    location: "New York, NY",
    jobType: "On-Site",
    experienceLevel: "Associate",
    photoLink: "https://logo.clearbit.com/spotify.com",
    jobLink: "https://www.spotifyjobs.com",
  },
  {
    jobTitle: "Full Stack Developer",
    companyName: "Adobe",
    location: "San Francisco, CA",
    jobType: "Remote",
    experienceLevel: "Mid-Senior Level",
    photoLink: "https://logo.clearbit.com/adobe.com",
    jobLink: "https://adobe.wd5.myworkdayjobs.com",
  },
  {
    jobTitle: "DevOps Engineer",
    companyName: "IBM",
    location: "Austin, TX",
    jobType: "Hybrid",
    experienceLevel: "Director",
    photoLink: "https://logo.clearbit.com/ibm.com",
    jobLink: "https://www.ibm.com/employment",
  },
  {
    jobTitle: "UI/UX Designer",
    companyName: "Apple",
    location: "Cupertino, CA",
    jobType: "On-Site",
    experienceLevel: "Entry Level",
    photoLink: "https://logo.clearbit.com/apple.com",
    jobLink: "https://jobs.apple.com",
  },
  {
    jobTitle: "Cloud Engineer",
    companyName: "Oracle",
    location: "Seattle, WA",
    jobType: "Remote",
    experienceLevel: "Mid-Senior Level",
    photoLink: "https://logo.clearbit.com/oracle.com",
    jobLink: "https://www.oracle.com/careers",
  },
  {
    jobTitle: "Embedded Systems Engineer",
    companyName: "Intel",
    location: "Santa Clara, CA",
    jobType: "Hybrid",
    experienceLevel: "Associate",
    photoLink: "https://logo.clearbit.com/intel.com",
    jobLink: "https://www.intel.com/content/www/us/en/jobs",
  },
  {
    jobTitle: "QA Engineer",
    companyName: "Cisco",
    location: "San Jose, CA",
    jobType: "On-Site",
    experienceLevel: "Director",
    photoLink: "https://logo.clearbit.com/cisco.com",
    jobLink: "https://jobs.cisco.com",
  },
  {
    jobTitle: "Technical Writer",
    companyName: "Salesforce",
    location: "Chicago, IL",
    jobType: "Remote",
    experienceLevel: "Internship",
    photoLink: "https://logo.clearbit.com/salesforce.com",
    jobLink: "https://www.salesforce.com/company/careers",
  },
  {
    jobTitle: "Game Developer",
    companyName: "Electronic Arts",
    location: "Los Angeles, CA",
    jobType: "Hybrid",
    experienceLevel: "Executive",
    photoLink: "https://logo.clearbit.com/ea.com",
    jobLink: "https://www.ea.com/careers",
  },
  {
    jobTitle: "Blockchain Developer",
    companyName: "Coinbase",
    location: "San Francisco, CA",
    jobType: "Remote",
    experienceLevel: "Entry Level",
    photoLink: "https://logo.clearbit.com/coinbase.com",
    jobLink: "https://www.coinbase.com/careers",
  },
  {
    jobTitle: "IT Support Specialist",
    companyName: "Dell",
    location: "Austin, TX",
    jobType: "On-Site",
    experienceLevel: "Mid-Senior Level",
    photoLink: "https://logo.clearbit.com/dell.com",
    jobLink: "https://jobs.dell.com",
  },
  {
    jobTitle: "Business Analyst",
    companyName: "HP",
    location: "Houston, TX",
    jobType: "Hybrid",
    experienceLevel: "Associate",
    photoLink: "https://logo.clearbit.com/hp.com",
    jobLink: "https://jobs.hp.com",
  },
  {
    jobTitle: "Big Data Engineer",
    companyName: "Twitter",
    location: "New York, NY",
    jobType: "Remote",
    experienceLevel: "Director",
    photoLink: "https://logo.clearbit.com/twitter.com",
    jobLink: "https://careers.twitter.com",
  },
  {
    jobTitle: "AI Research Scientist",
    companyName: "OpenAI",
    location: "San Francisco, CA",
    jobType: "Hybrid",
    experienceLevel: "Executive",
    photoLink: "https://logo.clearbit.com/openai.com",
    jobLink: "https://openai.com/jobs",
  },
];

export default function App() {
  const [searching, setSearching] = useState(false);
  const [filteredJobs, setFilteredJobs] = useState(tempJobs);
  const [keyword, setKeyword] = useState("");
  const [experience, setExperience] = useState("");
  const [jobType, setJobType] = useState("");

  {
    /*useEffect(() => {
    fetch(
      "https://127.0.0.1:8000/jobs" // This URL is just a placeholder
    )
      .then((res) => res.json())
      .then((data) => setJobs(data.jobs));
  }, []);*/
  }

  function handleSearchClick() {
    setSearching(true);
    // Apply filters
    const filtered = tempJobs.filter((job) => {
      const matchesKeyword =
        keyword === "" ||
        job.jobTitle.toLowerCase().includes(keyword.toLowerCase());
      const matchesExperience =
        experience === "" || job.experienceLevel === experience;
      const matchesJobType = jobType === "" || job.jobType === jobType;

      return matchesKeyword && matchesExperience && matchesJobType;
    });

    setFilteredJobs(filtered);
  }

  function handleResetClick() {
    setSearching(false);
    setKeyword("");
    setExperience("");
    setJobType("");
    setFilteredJobs(tempJobs);
  }

  return (
    <div>
      <header>
        <img src={linkedin} alt="LinkedIn" />
        <img src={indeed} alt="Indeed" />
      </header>
      <div className="container">
        <main>
          <div className="main > div">
            <div className="filter-list">
              <FilterList
                setKeyword={setKeyword}
                setExperience={setExperience}
                setJobType={setJobType}
              />
            </div>
            <Button text="Search" handleClick={handleSearchClick} />
            <Button text="Reset Filters" handleClick={handleResetClick} />
          </div>

          {searching ? (
            <JobList jobs={filteredJobs} />
          ) : (
            <img src={roundPhoto} alt="Background" />
          )}
        </main>
      </div>
    </div>
  );
}
