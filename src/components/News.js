import React from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends  React.Component {
    static defaultProps = {
        country: 'in',
        pageSize: 6,
        category: "science",
        apiKey : "733f109d76a44c349ba921b38240ebc1"
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
        apiKey: PropTypes.string
    }
    
    constructor(){
        super();
        this.state = {
            articles : [],
            loading: false,
            page: 1
        }
    }
    
    async updateNews(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true})
        
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData);
        this.setState({
            articles: parsedData.articles, 
            totalResults: parsedData.totalResults , 
            loading: false
        })

    }

    async componentDidMount(){
        this.updateNews();
    }
    handlePrevClick = async () => {
        console.log("prev")
        this.setState({page: this.state.page - 1});
        this.updateNews();
    }
    handleNextClick = async () => {
        console.log("next");
        this.setState({page: this.state.page + 1});
        this.updateNews();
    }
    // eslint-disable-next-line
    render() {
        return (
            <div className='container my-3'>
                <h2 className='text-center'>Top Headlines</h2>
                { this.state.loading && <Spinner/>}
                <div className="row">
                {!this.state.loading && this.state.articles?.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                        <NewsItem  title={element.title ? element.title.slice(0, 45): ""} description={element.description ? element.description.slice(0, 70): ""} imageUrl={element.urlToImage ? element.urlToImage : ""} url={element.url ? element.url : ""} author={element.author} date={element.publishedAt} source={element.source.name}/>
                    </div>
                })}
                </div>
                <div className="container d-flex justify-content-between">
                <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News

