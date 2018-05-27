import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  header = { headers: new HttpHeaders(
    { 'Content-Type': 'application/json', 'Accept': 'application/json;odata=verbose' })
  };

  showArticles = [];
  farLeft = [];
  left = [];
  center = [];
  right = [];
  farRight = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  // fetchAllArticles() {}

  fetchFarLeft() {
    console.log('far left')
    let farLeftLocal = [
      'http://www.occupydemocrats.com/feed',
      'http://www.rawstory.com/feed',
      'http://www.addictinginfo.org/feed',
      'http://www.breitbartunmasked.com/feed'
    ];
    farLeftLocal.forEach(url => {
        this.http.get('https://api.rss2json.com/v1/api.json?rss_url=' + url + '&api_key=8hhoydj1d8idddxgazjhvhiazyecynsi2rasmfga')
        .subscribe(data => {
          // console.log(data['items'])
          let articles = data['items'];
          articles.forEach(article => {
            this.farLeft.push(article);
          })
        });
    });
    console.log(this.farLeft);
    this.farLeft = this.showArticles;
  }

  fetchLeft() {
    console.log('left')
    // 'http://www.huffingtonpost.com/section/politics/feed',
    // 'http://www.msnbc.com/feeds/latest',
    // 'http://www.vox.com/rss/index.xml',
    // 'http://www.theguardian.com/us/rss',
    // 'https://www.politico.com/rss/politics08.xml'
  }

  fetchCenter() {
    console.log('center')
    // http://feeds.reuters.com/reuters/topNews
    // http://rssfeeds.usatoday.com/usatoday-NewsTopStories
    // http://www.ft.com/?format=rss
    // https://knowherenews.com/static/rss.xml
    // https://politics.leadstories.com/atom.xml
  }

  fetchRight() {
    console.log('right')
    // http://feeds.foxnews.com/foxnews/politics
    // http://thehill.com/rss/syndicator/19110
    // http://thefiscaltimes.com/feeds/articles/all/rss.xml
    // http://www.theamericanconservative.com/feed
    // http://feeds.feedburner.com/realclearpolitics/qlMj
  }

  fetchFarRight() {
    console.log('far right')
    // http://www.theblaze.com/rss
    // http://www.infowars.com/feed
    // http://www.dailycaller.com/feed
    // http://feeds.feedburner.com/breitbart?format=xml
    // https://patriotpost.us/feed.atom
  }

  sliderValue() {
    let slider = (<HTMLInputElement>document.querySelector(".range-input"));
    console.log(slider.value);
    if (slider.value === '1') {
        this.fetchFarLeft();
    }else if (slider.value == '2') {
        this.fetchLeft();
    }else if (slider.value == '3') {
        this.fetchCenter();
    } else if(slider.value == '4') {
      this.fetchRight();
    } else {
      this.fetchFarRight();
    }
  }
}
