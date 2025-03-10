import Search from "./assets/Search.svg";
import Manager from "./assets/manager.svg";
import Job from "./assets/job.svg";

function FilterList({ setKeyword, setExperience, setJobType }) {
  return (
    <div className="filter-list">
      <p>Keyword</p>
      <div className="filter-input-container">
        <img src={Search} alt="search icon" />
        <input
          type="text"
          placeholder="e.g. Software Engineer"
          onChange={(e) => setKeyword(e.target.value)}
        />
      </div>

      <p>Experience Level</p>
      <div className="filter-input-container">
        <img src={Manager} alt="experience icon" />
        <select
          name="experience"
          id="experience"
          defaultValue=""
          onChange={(e) => setExperience(e.target.value)}
        >
          <option value="" disabled hidden>
            e.g. Internship
          </option>
          <option value="">All</option>
          <option value="Internship">Internship</option>
          <option value="Entry Level">Entry Level</option>
          <option value="Associate">Associate</option>
          <option value="Mid-Senior Level">Mid-Senior Level</option>
          <option value="Director">Director</option>
          <option value="Executive">Executive</option>
        </select>
      </div>

      <p>Job Type</p>
      <div className="filter-input-container">
        <img src={Job} alt="job type icon" />
        <select
          name="type"
          id="type"
          defaultValue=""
          onChange={(e) => setJobType(e.target.value)}
        >
          <option value="" disabled hidden>
            e.g. Remote
          </option>
          <option value="">All</option>
          <option value="On-Site">On-Site</option>
          <option value="Remote">Remote</option>
          <option value="Hybrid">Hybrid</option>
        </select>
      </div>
    </div>
  );
}

export default FilterList;
