import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  allArticles = [];
  farLeft = [];
  left = [];
  center = [];
  right = [];
  farRight = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  // fetchAllArticles() {}

  fetchFarLeft() {
    // http://www.occupydemocrats.com/feed
    // http://www.rawstory.com/feed
    // http://www.addictinginfo.org/feed
    // http://www.breitbartunmasked.com/feed
  }

  fetchLeft() {
    // http://www.huffingtonpost.com/section/politics/feed
    // http://www.msnbc.com/feeds/latest
    // http://www.vox.com/rss/index.xml
    // http://www.theguardian.com/us/rss
    // https://www.politico.com/rss/politics08.xml
  }

  fetchCenter() {
    // http://feeds.reuters.com/reuters/topNews
    // http://rssfeeds.usatoday.com/usatoday-NewsTopStories
    // http://www.ft.com/?format=rss
    // https://knowherenews.com/static/rss.xml
    // https://politics.leadstories.com/atom.xml
  }

  fetchRight() {
    // http://feeds.foxnews.com/foxnews/politics
    // http://thehill.com/rss/syndicator/19110
    // http://thefiscaltimes.com/feeds/articles/all/rss.xml
    // http://www.theamericanconservative.com/feed
    // http://feeds.feedburner.com/realclearpolitics/qlMj
  }

  fetchFarRight() {
    // http://www.theblaze.com/rss
    // http://www.infowars.com/feed
    // http://www.dailycaller.com/feed
    // http://feeds.feedburner.com/breitbart?format=xml
    // https://patriotpost.us/feed.atom
  }

  sliderValue() {
    let slider = (<HTMLInputElement>document.querySelector(".range-input"));
    console.log(slider.value);
  }
}
