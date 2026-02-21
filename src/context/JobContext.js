import { createContext, useState } from "react";
import jobsData from "../data/jobs";

export const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobs] = useState(jobsData);
  const [savedJobs, setSavedJobs] = useState([]);

  const saveJob = (job) => {
    setSavedJobs([...savedJobs, job]);
  };

  return (
    <JobContext.Provider value={{ jobs, savedJobs, saveJob }}>
      {children}
    </JobContext.Provider>
  );
};