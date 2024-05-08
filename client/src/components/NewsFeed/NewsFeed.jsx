import React, { useEffect, useState } from "react";
import { Card, Image } from "semantic-ui-react";
import axios from "axios";

const NewsFeed = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0197c61dbcde4beab30b37eac699d466"
        );
        setNewsItems(response.data.articles);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="TrendCard" style={{ maxHeight: "400px", overflowY: "auto", overflowX: "auto" }}>
      <h1>News Feed!</h1>

      {newsItems.map((newsItem, index) => (
        <Card fluid key={index}>
          <Card.Content>
            <Image src={newsItem.urlToImage} className="newsImage" />
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
