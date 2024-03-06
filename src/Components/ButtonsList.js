import React from "react";
import Buttons from "./Buttons";

const buttonNames = [
  "All",
  "Gaming",
  "Song",
  "Cricket",
  "News",
  "UPSC",
  "Cooking",
  "MPSC",
  "Stand-Up Comedy",
  "Marathi News",
  "Bhuvan Bam",
  "Comedy",
  "Javascript",
];

const ButtonsList = () => {
  return (
    <div className="flex">
      {buttonNames.map((buttonNames) => (
        <Buttons key={buttonNames} name={buttonNames} />
      ))}
    </div>
  );
};

export default ButtonsList;
