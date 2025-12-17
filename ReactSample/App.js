import React from "react"; 
import ProfileCard from "./ProfileCard";

const App = () => {
  const userProfile = {
    image: "https://via.placeholder.com/150",
    name: "John Doe",
    jobTitle: "Web Developer",
    bio: "Passionate developer with a love for React."
  };

  const userProfile2 = {
    image: "https://via.placeholder.com/150/FFB6C1/000000?text=Jane",
    name: "Jane Smith",
    jobTitle: "UI/UX Designer",
    bio: "Designer focused on user-centered experiences."
  };

  const userProfile3 = {
    image: "https://via.placeholder.com/150/87CEFA/000000?text=Bob",
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
    </div>
  );
};

export default App;