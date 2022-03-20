import './App.css';

import React, {useState } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import{
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App(){
  const apiKey = process.env.REACT_APP_API_KEY;
  const [progress, setprogress] = useState(0)

  
    return (
      <Router>
         <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
      />
          <NavBar/>
          <Routes>
            <Route  exact path="/" element={<News setprogress={setprogress} apikey={apiKey} key="general" pagesize={5} country="in" category="general"/>}/>
            <Route  exact path="/general" element={<News setprogress={setprogress} apikey={apiKey} key="general" pagesize={5} country="in" category="general"/>}/>
            <Route  exact path="/business" element={<News setprogress={setprogress} apikey={apiKey} key="business" pagesize={5} country="in" category="business"/>}/>
            <Route  exact path="/sports" element={<News setprogress={setprogress} apikey={apiKey} key="sports" pagesize={5} country="in" category="sports"/>}/>
            <Route  exact path="/science" element={<News setprogress={setprogress} apikey={apiKey} key="science" pagesize={5} country="in" category="science"/>}/>
            <Route  exact path="/entertainment" element={<News setprogress={setprogress} apikey={apiKey} key="entertainment" pagesize={5} country="in" category="entertainment"/>}/>
            <Route  exact path="/health" element={<News setprogress={setprogress} apikey={apiKey} key="health" pagesize={5} country="in" category="health"/>}/>
            <Route  exact path="/technology" element={<News setprogress={setprogress} apikey={apiKey} key="technology" pagesize={5} country="in" category="technology"/>}/>
            
          </Routes>
      </Router>
    )
  
}

export default App;
