
const TopStories = (props) => {

  if(props && props.data === null){
    return;
  } else {
    return (
      <div>
        <h1>Top Strories for { props.category } </h1>

        { props.articles.map( (article, index) =>
          <div className="article" key={index}>

            { article.multimedia[0].url && <img key={index} src={article.multimedia[0].url} alt="pic" className="article_pic"/> }

            <img key={index} src={article.multimedia[0].url ? article.multimedia[0].url : " "} alt="pic" className="article_pic"/>
            <a href={article.url} target="_blank"><h2>{article.title}</h2></a>
            <p><em>{article.byline} </em></p>
            <p>Written on: {article.created_date.slice(0,10)}</p>
            <p>{article.abstract}</p>
          </div>)}
      </div>
    );

  }

}

export default TopStories;
