import React from "react";
import Navbar from "./shared/Navbar";
import Filtercard from "./Filtercard.jsx";
import Job from "./Job";
import { useSelector } from "react-redux";



const Jobs = () => {
  const {allJobs}=useSelector(store=>store.job)
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-5 px-4">
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="w-full lg:w-1/5">
             <Filtercard />

          </div>
          {allJobs.length <= 0 ? (
            <span>Job not found</span>
          ) : (
            <div className="flex-1 h-[88vh] overflow-auto pb-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {allJobs.map((job) => (
                <div>
                    <Job key={job._id}  job={job} />
                </div>
              ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
