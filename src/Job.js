function Job({ imgSrc, jobTitle, companyName, Location, jobLink }) {
  return (
    <div className="job-card">
      <div className="job-header">
        <img className="job-icon" src={imgSrc} alt="icon" />
        <h1 className="job-title">{jobTitle}</h1>
      </div>
      <div className="job-details">
        <div className="job-meta">
          <span className="company-name">{companyName}</span>
          <span className="job-location">{Location}</span>
        </div>
        <a
          className="visit-link"
          href={jobLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          View & Apply
        </a>
      </div>
    </div>
  );
}

export default Job;
