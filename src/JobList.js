import Job from "./Job";

function JobList({ jobs }) {
  return (
    <div className="job-list-container">
      {jobs.length > 0 ? (
        jobs.map((job) => (
          <Job
            imgSrc={job.photoLink}
            jobTitle={job.jobTitle}
            companyName={job.company}
            Location={job.location}
            jobLink={job.jobLink}
          />
        ))
      ) : (
        <p>No jobs found</p>
      )}
    </div>
  );
}

export default JobList;
