import React, { Component } from 'react'

export default class NewItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-primary" style={{left: "90%", zIndex: "1"}}>{source}</span>
          <img src={imageUrl ? imageUrl : "https://www.hindustantimes.com/ht-img/img/2024/05/06/1600x900/Meteor-Shower-0_1713863409879_1714972998611.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}
