import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../redux/slices/newsSlice';

const NewsSection = () => {
  const { articles, loading, error } = useSelector((state) => state.news);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  if (loading) return <p>Loading news...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Today's News</h2>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsSection;
