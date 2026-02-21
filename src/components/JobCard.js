import { useNavigate } from "react-router-dom";
import "../styles/jobcard.css";

function JobCard({ job }) {
  const navigate = useNavigate();

  return (
    <div className="job-card" onClick={() => navigate(`/job/${job.id}`)}>
      <h3>{job.title}</h3>
      <p>{job.company}</p>
      <p>{job.salary}</p>
      <span className="view">Click to view details →</span>
    </div>
  );
}

export default JobCard;