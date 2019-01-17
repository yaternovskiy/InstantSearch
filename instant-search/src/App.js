import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { InstantSearch, SearchBox } from 'react-instantsearch-dom';

class App extends Component {
  render() {
    return (
      <InstantSearch
        appId="instant-search"
        apiKey="cee5283ec0521081916c75ad09156f13"
        indexName="bestbuy"
      >
          <header>
            Instant Search
          </header>

          <SearchBox translations = {{placeholder:'Search Box'}}/>

      </InstantSearch>
    );
  }
}

export default App;
