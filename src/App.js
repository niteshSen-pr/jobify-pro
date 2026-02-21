import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import JobDetails from "./pages/JobDetails";
import Navbar from "./components/Navbar";
import { JobProvider } from "./context/JobContext";

function App() {
  return (
    <JobProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/job/:id" element={<JobDetails />} />
        </Routes>
      </BrowserRouter>
    </JobProvider>
  );
}

export default App;