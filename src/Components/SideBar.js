import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //Early return pattern
  if(!isMenuOpen) return null;

  return(
    <div className="p-5 shadow-lg w-48">
      <ul>
        <li> <Link to="/">Home</Link></li>
        <li>Short</li>
        <li>Live</li>
        <li>Explore</li>
      </ul>

      <h1 className="font-bold pt-5">For You</h1>
      <ul>
        <li>Your Channel</li>
        <li>History</li>
        <li>Watch Later</li>
        <li>Music</li>
      </ul>

      <h1 className="font-bold pt-5">Subscription</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Music</li>
      </ul>
    </div>
  );
};

export default SideBar;
