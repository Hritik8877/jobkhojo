import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/Label";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { useNavigate } from "react-router-dom";

const PostJobs = () => {
  const [input, setInput] = useState({
    title: "",
    description: "",
    requirement: "",
    salary: "",
    location: "",
    jobtype: "",
    experience: "",
    position: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Job Posted:", input);
    // API call can be added here
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-xl mx-auto my-10">
        <form onSubmit={handleSubmit}>
          {/* Header Row */}
          <div className="flex items-center gap-5 p-8">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-gray-500 font-semibold"
            >
              ← Back
            </Button>
            <h1 className="font-bold text-xl">Post a New Job</h1>
          </div>

          {/* Form Grid */}
          <div className="grid grid-cols-2 gap-4 px-8">
            <div>
              <Label htmlFor="title">Job Title</Label>
              <Input
                type="text"
                name="title"
                value={input.title}
                onChange={handleChange}
                placeholder="Software Engineer"
              />
            </div>

            <div>
              <Label htmlFor="location">Location</Label>
              <Input
                type="text"
                name="location"
                value={input.location}
                onChange={handleChange}
                placeholder="e.g. Bangalore, Remote"
              />
            </div>

            <div>
              <Label htmlFor="jobtype">Job Type</Label>
              <Input
                type="text"
                name="jobtype"
                value={input.jobtype}
                onChange={handleChange}
                placeholder="Full-time, Internship"
              />
            </div>

            <div>
              <Label htmlFor="salary">Salary</Label>
              <Input
                type="text"
                name="salary"
                value={input.salary}
                onChange={handleChange}
                placeholder="e.g. ₹8,00,000 per annum"
              />
            </div>

            <div>
              <Label htmlFor="experience">Experience</Label>
              <Input
                type="text"
                name="experience"
                value={input.experience}
                onChange={handleChange}
                placeholder="0-1 years"
              />
            </div>

            <div>
              <Label htmlFor="position">No. of Positions</Label>
              <Input
                type="text"
                name="position"
                value={input.position}
                onChange={handleChange}
                placeholder="e.g. 3"
              />
            </div>
          </div>

          {/* Full-width Fields */}
          <div className="mt-6 px-8">
            <Label htmlFor="description">Job Description</Label>
            <textarea
              name="description"
              value={input.description}
              onChange={handleChange}
              placeholder="Job description goes here..."
              rows="3"
              className="w-full px-3 py-2 border rounded mt-1"
            />
          </div>

          <div className="mt-4 px-8">
            <Label htmlFor="requirement">Requirements</Label>
            <textarea
              name="requirement"
              value={input.requirement}
              onChange={handleChange}
              placeholder="List the job requirements..."
              rows="3"
              className="w-full px-3 py-2 border rounded mt-1"
            />
          </div>

          {/* Submit Button */}
          <div className="px-8 mt-8">
            <Button type="submit" className="w-full">
              Post Job
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostJobs;
