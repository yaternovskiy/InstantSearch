import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { InstantSearch,
         SearchBox,
         Hits, 
         Highlight,
         connectAutoComplete } from 'react-instantsearch-dom';

const Autocomplete = ({ hits, currentRefinement, refine }) => (
  <ul>
    <li>
      <input
        type="search"
        value={currentRefinement}
        onChange={event => refine(event.currentTarget.value)}
      />
    </li>
    {hits.map(hit => (
      <li key={hit.objectID}>{hit.title}</li>
    ))}
  </ul>
);

const CustomAutocomplete = connectAutoComplete(Autocomplete);

const Hit = ({hit}) =>
  <div className="hit">
    <div className="hitImage" style={{backgroundImage: "url(" + hit.photo_urls[0] + ")"}}>
    </div>
      <div className="hitName">
        <Highlight attribute="title" hit={hit}/>
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
            <CustomAutocomplete translations = {{placeholder:'Search Box'}}/>
          </header>
         
          <main>
            <Content/>
          </main>
      </InstantSearch>
    );
  }
}

export default App;
