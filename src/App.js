import React from 'react';

import 'normalize.css';
import './App.css';


import NewsTable from './ShowPart';
import { SearchMore,Search} from './SearchPart';

function App() {
  return (
    <div className="App">
      <Search/>
      <NewsTable/>
      <SearchMore/>
    </div>
  );
}

export default App;
