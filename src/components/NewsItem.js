import React, { Component } from 'react'

export class NewsItem extends Component {
    
    render() {
        let {title,description, imageUrl,url, author, date, source} = this.props;
        return (
        <div className='my-3'>
            <div className="card" >
                <span style={{left: '90%', zIndex: "1"}} className="position-absolute top-0  translate-middle badge rounded-pill bg-danger  ">{source}</span>
                <img src={!imageUrl ? "https://images.moneycontrol.com/static-mcnews/2022/04/HDFC-merger_pic.jpg": imageUrl} className="card-img-top" alt="..." style={{ height: "200px"}}/>
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                    <a href={url} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
        )
    }
}

export default NewsItem