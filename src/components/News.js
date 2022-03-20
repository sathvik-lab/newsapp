import React, {useEffect,useState} from 'react';
import NewsItem from './NewsItem';
import Spinner from './spinner';
import PropTypes from 'prop-types' ;
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props)=>{
    const [articles, setarticles] = useState([])
    const [loading, setloading] = useState(true)
    const [page, setpage] = useState(1)
    const [totalArticles, settotalArticles] = useState(0)
    const capitalizeFirstLetter = (string)=>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const updateNews = async () =>{
        props.setprogress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pagesize}`
        let data = await fetch(url)
        props.setprogress(30);
        let parsedData = await data.json()
        props.setprogress(70);
        setarticles(parsedData.articles)
        settotalArticles(parsedData.totalResults)
        setloading(false);
   
        props.setprogress(100);
        document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;  

  }
  useEffect(() => {    
    updateNews();
    // eslint-disable-line
  },[])
  
  const fetchMoreData = async() => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pagesize}`;
    setpage(page+1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setarticles(articles.concat(parsedData.articles)) 
    settotalArticles(parsedData.totalResults)
 
    document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;  


    };


return( 
    <>
        <h1 className='text-center' style={{margin:"25px",marginTop:"90px"}}>NewsMonkey-Top {capitalizeFirstLetter(props.category)} Headlines</h1>
        {loading && <Spinner/>}
        <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalArticles}
        loader={ <Spinner/>}
        >
        <div className='container'>
            <div className='row'>
            {articles.map((element)=>{
                return <div className='col-md-4' key={element.url}>
                <NewsItem title={element.title?element.title.slice(0,45)+'...':'...'} description={element.description?element.description.slice(0,88)+'...':'...'}
                imageUrl={element.urlToImage?element.urlToImage:'https://du5jhqks4kn0y.cloudfront.net/5d7889182ff8f000702bcb08/b287c465-139b-b166-5845-8df58d9b2af8.jpg'} 
                newsUrl={element.url} author={element.author?element.author:"Unknown"} date = {new Date(element.publishedAt).toGMTString()} source={element.source.name}/>
            </div>
            })}
            </div>
        </div>
        </InfiniteScroll> 
        </>
);
}
     


News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News;
