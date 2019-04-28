// Deps
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';

// Components
import Search from './components/Search';
import Results from './components/Results';

// Configs
import { API_URL, CB } from './config';

// Styles
import './App.css';

axios.defaults.baseURL = API_URL;

const App = () => {
  const [res,setRes] = useState([]);

  const fetchRes = (str) => {
    axios.get(encodeURIComponent(str) + CB, {
      adapter: jsonpAdapter,
      callbackParamName: 'callback'
    })
    .then(res=>{
      //console.log(res.data);
      let arr = [];
      for (let num in res.data.query.pages) {
        arr = [...arr, res.data.query.pages[num]];
      }
      //console.log(arr);
      setRes(arr);
    })
    .catch((err) => {
        console.log('Sum Ting Wong: ' + err);   
    });
  }
  return (
    <div className="main-container">
      <Search fetchRes={fetchRes} res={res}/>
      <Results res={res}/>
    </div>
  );
}

App.propTypes = {
  res: PropTypes.array,
  fetchREs: PropTypes.func.isRequired
}

export default App;
