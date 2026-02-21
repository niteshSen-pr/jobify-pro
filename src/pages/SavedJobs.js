import { useContext } from "react";
import { JobContext } from "../context/JobContext";

function SavedJobs() {
  const { savedJobs } = useContext(JobContext);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Saved Jobs</h2>
      {savedJobs.map(job => (
        <p key={job.id}>{job.title}</p>
      ))}
    </div>
  );
}

export default SavedJobs;