import React from "react";
import "./TrendCard.css";
import { Link } from "react-router-dom";
import { TrendData } from "../../Data/TrendData.js";
const TrendCard = () => {
  return (
    <div className="TrendCard">
      <h3>Trends for your</h3>

      {TrendData.map((trend, id) => {
        return (
          <div className="trend" key={id}>        
            <Link to={trend.link}>#{trend.name}</Link>
            <span>{trend.shares}k shares</span>
          </div>
        );
      })}
    </div>
  );
};

export default TrendCard;
