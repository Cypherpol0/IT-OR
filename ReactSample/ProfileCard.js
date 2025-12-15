import React from "react";

const ProfileCard = ({ image, name, jobTitle, bio }) => {
  return (
    <div className="profile-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{jobTitle}</p>
      <p>{bio}</p>
    </div>
  );
};

export default ProfileCard;