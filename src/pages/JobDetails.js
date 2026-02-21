import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { JobContext } from "../context/JobContext";

function JobDetails() {
  const { id } = useParams();
  const { jobs } = useContext(JobContext);
  const [applied, setApplied] = useState(false);

  const job = jobs.find(j => j.id === Number(id));

  return (
    <div style={{ padding: "30px" }}>
      <h2>{job.title}</h2>
      <h4>{job.company}</h4>
      <p><b>Tech:</b> {job.tech}</p>
      <p><b>Salary:</b> {job.salary}</p>

      {!applied ? (
        <button onClick={() => setApplied(true)}>
          Apply Now
        </button>
      ) : (
        <p style={{ color: "green" }}>
          ✅ Application Submitted Successfully
        </p>
      )}
    </div>
  );
}

export default JobDetails;