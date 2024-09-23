import React, { Component } from 'react';
import Newsitem from './Newsitem';
import axios from 'axios';

export default class News extends Component {
  state = {
    articles: [],
<<<<<<< HEAD
    loading: true, // Set loading to true initially
=======
    loading: true,
>>>>>>> 870ef1b2416647050e9f9696840e2e9a3f5206f9
    currentPage: 1,
    articlesPerPage: 6,
  };

  async componentDidMount() {
    try {
<<<<<<< HEAD
      const response = await axios.get("http://localhost:5000/api/news"); // Fetch from the proxy server
      this.setState({ articles: response.data.articles, loading: false });
    } catch (error) {
      console.error("Error fetching articles:", error.response ? error.response.data : error.message);
      this.setState({ loading: false });
    }
=======
    const response = await axios.get("https://newsapi.org/v2/everything?q=nellore&apiKey=3d37246c11894191b62fe0f5c2f80ad3");
    this.setState({ articles: response.data.articles, loading: false });
} catch (error) {
    console.error("Error fetching articles:", error.response ? error.response.data : error.message);
    this.setState({ loading: false });
}
>>>>>>> 870ef1b2416647050e9f9696840e2e9a3f5206f9
  }

  handlePageChange = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };

  render() {
    const { articles, loading, currentPage, articlesPerPage } = this.state;

    if (loading) {
      return <h2>Loading...</h2>;
    }

    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(articles.length / articlesPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="container my-3">
        <h2 className="text-center">NUSE EXCLUSIVE HEADLINES OF NELLORE</h2>
        <div className="row">
          {currentArticles.map((article, index) => (
            <div className="col-md-4" key={index}>
              <Newsitem 
                title={article.title} 
                description={article.description} 
                imageUrl={article.urlToImage} 
                newsUrl={article.url} 
              />
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center my-3">
          <nav>
            <ul className="pagination">
              {pageNumbers.map(number => (
                <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                  <button onClick={() => this.handlePageChange(number)} className="page-link">
                    {number}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
