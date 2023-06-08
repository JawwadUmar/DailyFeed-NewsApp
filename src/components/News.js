import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
  articles = [];
  // articles= [
  //   {
  //     "source": { "id": "al-jazeera-english", "name": "Al Jazeera English" },
  //     "author": "Al Jazeera",
  //     "title": "AC Milan striker Zlatan Ibrahimovic retires from football at 41",
  //     "description": "Sweden’s all-time top scorer has played for some of Europe’s biggest clubs including Juventus, Barcelona, PSG and Milan.",
  //     "url": "http://www.aljazeera.com/sports/2023/6/5/ac-milan-striker-zlatan-ibrahimovic-retires-from-football-at-41",
  //     "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/06/31337707-1685948089.jpg?resize=1920%2C1440",
  //     "publishedAt": "2023-06-05T09:17:52Z",
  //     "content": "AC Milans Swedish striker Zlatan Ibrahimovic says he has decided to retire from playing at the age of 41 after a trophy-laden career at some of Europes top clubs.\r\nIbrahimovics Milan contract expires… [+2669 chars]"
  //   },
  //   {
  //     "source": { "id": "four-four-two", "name": "FourFourTwo" },
  //     "author": "Ryan Dabbs",
  //     "title": "Steven Gerrard could become manager at surprise English club: report",
  //     "description": "The Liverpool management could return to management in the second tier of English football",
  //     "url": "https://www.fourfourtwo.com/news/steven-gerrard-could-become-manager-at-surprise-english-club-report",
  //     "urlToImage": "https://cdn.mos.cms.futurecdn.net/e6avZDNajBrzSz7HADrJPV-1200-80.jpg",
  //     "publishedAt": "2023-06-05T08:58:18Z",
  //     "content": "Steven Gerrard has been out of management since Aston Villa sacked him in October 2022, but he could to return to the dugout with Championship club Leeds United considering the 43-year-old as their n… [+1711 chars]"
  //   },
  //   {
  //     "source": { "id": "talksport", "name": "TalkSport" },
  //     "author": "161385360554578",
  //     "title": "Real Madrid target Kane, Spurs close in on Postecoglou, Ibrahimovic retires",
  //     "description": "talkSPORT.com brings you all the latest football news, views and transfer gossip from the Premier League and beyond. Top stories: Zlatan Ibrahimovic says goodbye to football aged 41Ange Postecoglou…",
  //     "url": "https://talksport.com/football/1445673/football-transfers-live-harry-kane-tottenham-ange-postecoglou/",
  //     "urlToImage": "https://talksport.com/wp-content/uploads/sites/5/2023/06/JF-TALKSPORT.jpg?strip=all&quality=100&w=1500&h=1000&crop=1",
  //     "publishedAt": "2023-06-05T08:36:36Z",
  //     "content": "Zlatan Ibrahimovic has announced his retirement from football at the age of 41.\r\nThe AC Milan striker made the announcement on the San Siro pitch following his club’s final game of the Serie A season… [+1314 chars]"
  //   },
  //   {
  //     "source": { "id": "bbc-sport", "name": "BBC Sport" },
  //     "author": null,
  //     "title": "Ibrahimovic retires from football at 41",
  //     "description": "AC Milan forward Zlatan Ibrahimovic announces his retirement from football at the age of 41.",
  //     "url": "http://www.bbc.co.uk/sport/football/65806224",
  //     "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/11787/production/_124395517_bbcbreakingnewsgraphic.jpg",
  //     "publishedAt": "2023-06-04T21:52:17.8227361Z",
  //     "content": "AC Milan's Swedish great Zlatan Ibrahimovic has announced his retirement from football at the age of 41.\r\n\"I say goodbye to football but not to you,\" he told AC Milan's fans after being serenaded by … [+208 chars]"
  //   },
  //   {
  //     "source": { "id": "espn", "name": "ESPN" },
  //     "author": null,
  //     "title": "Zlatan Ibrahimovic retires from football after AC Milan win - ESPN",
  //     "description": "AC Milan and Sweden striker Zlatan Ibrahimovic said on Sunday he had decided to end his football career.",
  //     "url": "https://www.espn.com/soccer/story/_/id/37795877/zlatan-ibrahimovic-retires-football-ac-milan-win",
  //     "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0604%2Fr1182528_1296x729_16%2D9.jpg",
  //     "publishedAt": "2023-06-04T21:49:00Z",
  //     "content": "AC Milan and Sweden striker Zlatan Ibrahimovic said on Sunday he had decided to end his football career.\r\nThe 41-year-old's Milan contract expires at the end of June and will not be renewed following… [+852 chars]"
  //   },
  //   {
  //     "source": { "id": "talksport", "name": "TalkSport" },
  //     "author": "Jackson Cole",
  //     "title": "Zlatan Ibrahimovic retires: Football icon breaks down in tears as he makes announcement...",
  //     "description": "Zlatan Ibrahimovic has retired from football with immediate effect aged 41. The football icon cut a tearful figure as he made the announcement following AC Milan’s final match of the 2022/23 …",
  //     "url": "https://talksport.com/football/1445651/zlatan-ibrahimovic-retires-football-breaks-down-tears/",
  //     "urlToImage": "https://talksport.com/wp-content/uploads/sites/5/2023/06/ibra.jpg?strip=all&quality=100&w=576&h=367&crop=1",
  //     "publishedAt": "2023-06-04T21:38:43Z",
  //     "content": "Zlatan Ibrahimovic has retired from football with immediate effect aged 41. \r\nThe football icon cut a tearful figure as he made the announcement following AC Milan's final match of the 2022/23 Serie … [+226 chars]"
  //   },
  //   {
  //     "source": { "id": "bleacher-report", "name": "Bleacher Report" },
  //     "author": "David Kenyon",
  //     "title": "Way-Too-Early 2023 Heisman Trophy Predictions and Sleepers",
  //     "description": "For the second straight year, the reigning Heisman Trophy winner will return to college football. USC quarterback Caleb Williams, as a result, is naturally…",
  //     "url": "https://bleacherreport.com/articles/10077427-way-too-early-2023-heisman-trophy-predictions-and-sleepers",
  //     "urlToImage": "https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1685369830/yo2xdhi5k3hpcnkw5qij.jpg",
  //     "publishedAt": "2023-05-30T13:30:54Z",
  //     "content": "Sarah Stier/Getty Images\r\nNot only is Caleb Williams the reigning Heisman winner, but he's also approaching the 2023 season with an ideal situation.\r\nAs a player, the 21-year-old is an electrifying a… [+1417 chars]"
  //   },
  //   {
  //     "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
  //     "author": null,
  //     "title": "Five famous people (and one cat) you didn't know have ESPNcricinfo profiles | ESPNcricinfo.com",
  //     "description": "Why do a footballer, a Nobel laureate and a prime minister (no, not Imran Khan) find themselves in the ESPNcricinfo player database? | ESPNcricinfo.com",
  //     "url": "http://www.espncricinfo.com/story/_/id/29102695/five-famous-people-one-cat-know-espncricinfo-profiles",
  //     "urlToImage": "https://a.espncdn.com/i/cricket/cricinfo/1221668_1296x1296.gif",
  //     "publishedAt": "2020-04-27T07:20:43Z",
  //     "content": "Why do a cat, a footballer, a Nobel laureate and a prime minister find themselves in the ESPNcricinfo database? Here are six player profiles you wouldn't have expected we had.\r\nPeter the catThe only … [+5504 chars]"
  //   }
  // ]

  static defaultProps = {
    country: 'in',
    pageSize: 9,
    category: "general"
  }

  static propTypes ={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  capitalizeFirstLetter = (string)=> {
    return string.charAt(0).toUpperCase()+ string.slice(1);
  }
    constructor(props){
        super(props);
        this.state = {
          articles: this.articles,
          loading: false,
          page: 1,
        }

        document.title =`DailyFeed ${this.capitalizeFirstLetter(this.props.category!=="general"? this.props.category: "" )}`;
    }

    async updateNews(){
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true}); //when first reqst goes 
      let data = await fetch(url);
      let parsedData = await data.json();
      // console.log(parsedData);
      this.setState(
        {articles: parsedData.articles,
          totalResults: parsedData.totalResults,
          loading: false
      });
    }

    async componentDidMount(){
      this.updateNews();
    }

    handlePreviousClick=async()=>{
      this.setState({
        page: this.state.page-1
      });
      this.updateNews();
    }


    handleNextClick= async()=>{

      this.setState({
        page: this.state.page+1
      });
      this.updateNews();
    }

  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center' style={{margin: "70px 0px"}}>DailyFeed-Top {this.capitalizeFirstLetter(this.props.category!=="general"? this.props.category: "" )} Headlines</h1>
        {this.state.loading && <Spinner/>}
        <div className="row">


        {!this.state.loading && this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
          <NewsItem  title = {element.title} description = {element.description} imageUrl = {element.urlToImage} newsUrl = {element.url} author={element.author} date = {element.publishedAt} source = {element.source.name}/>
          </div>

        })}
           
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr;Previous</button>
        <button disabled = {this.state.page+1> Math.ceil(this.state.totalResults/this.props.pageSize)}type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
        </div>
    
    )
  }
}

export default News
