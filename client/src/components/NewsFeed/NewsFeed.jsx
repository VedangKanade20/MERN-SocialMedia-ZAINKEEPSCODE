import React, { useEffect, useState } from "react";
import { Card, Image, Segment } from "semantic-ui-react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { TrendData } from "../../Data/TrendData.js";

const NewsFeed = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=API_KEY"
        );
        setNewsItems(response.data.articles);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="TrendCard">
      <h1>News Feed!</h1>

      {newsItems.map((newsItem, index) => (
        <Card fluid key={index}>
          <Card.Content>
            <Image floated="right" size="mini" src={newsItem.urlToImage} />
            <Card.Header>{newsItem.title}</Card.Header>
            <Card.Meta>{newsItem.publishedAt}</Card.Meta>
            <Card.Description>{newsItem.description}</Card.Description>
          </Card.Content>
        </Card>
      ))}
    </div>
  );
};

export default NewsFeed;
