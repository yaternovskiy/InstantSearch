import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { InstantSearch, SearchBox, Hits, Highlight } from 'react-instantsearch-dom';

const Hit = ({hit}) =>
  <div className="hit">
    <div className="hitImage">
      <img src={hit.photo_urls[0]}/>
    </div>
      <div className = "hitName">
        <Highlight attribute = "name" hit = {hit}/>
      </div>
  </div>

const Content = () =>
  <div className = "content">
    <Hits hitComponent = {Hit}/>
</div>

class App extends Component {
  render() {
    return (
      <InstantSearch
        appId="6418JXEJAP"
        apiKey="cee5283ec0521081916c75ad09156f13"
        indexName="movies"
      >
          <header>
            Instant Search
            <SearchBox translations = {{placeholder:'Search Box'}}/>
          </header>
         
          <main>
            <Content/>
          </main>
      </InstantSearch>
    );
  }
}

export default App;
