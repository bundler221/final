import React from 'react';

export const Newsitem = ({ title, description, imageUrl, newsUrl }) => {
  return (
    <div>
      <div className="card" style={{ width: "100%", marginBottom: "20px" }}>
        <img src={imageUrl ? imageUrl : "https://via.placeholder.com/150"} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title ? title : "Title not available"}</h5>
          <p className="card-text">{description ? description : "Description not available"}</p>
          <a href={newsUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Read more</a>
        </div>
      </div>
    </div>
  );
};

export default Newsitem;
