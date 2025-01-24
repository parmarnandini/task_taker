import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../redux/slices/newsSlice';
import '../styles/NewsPage.css';

const NewsPage = () => {
  const { articles, loading, error } = useSelector((state) => state.news);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  if (loading) return <p>Loading news...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="news-page">
      <h2>Today's News</h2>
      <div className="news-container">
        {articles.map((article, index) => (
          <div key={index} className="news-card">
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;