import React from "react";
import ProfileCard from "./ProfileCard";
import EmptyProfPic from "./EmptyProfPic.jpg";
import VarDisplay from "./VarDisplay";
import JobBoard from "./JobBoard";

const App = () => {
  const userProfile = {
    image: EmptyProfPic,
    name: "John Doe",
    jobTitle: "Web Developer",
    bio: "Passionate developer with a love for React."
  };

  const userProfile2 = {
    image: EmptyProfPic,
    name: "Jane Smith",
    jobTitle: "UI/UX Designer",
    bio: "Designer focused on user-centered experiences."
  };

  const userProfile3 = {
    image: EmptyProfPic,
    name: "Bob Lee",
    jobTitle: "Backend Engineer",
    bio: "Builds scalable APIs and services."
  };

  return (
    <div className="app">
      <h1>User Profiles</h1>
      <ProfileCard {...userProfile} />
      <ProfileCard {...userProfile2} />
      <ProfileCard {...userProfile3} />
       <VarDisplay />
       <JobBoard />
    </div>
  );
};

export default App;