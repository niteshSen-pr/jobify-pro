import { useContext } from "react";
import { JobContext } from "../context/JobContext";
import JobCard from "../components/JobCard";

function Home() {
  const { jobs } = useContext(JobContext);

  return (
    <div style={{ padding: "20px" }}>
      <h2>All Jobs</h2>
      {jobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}

export default Home;