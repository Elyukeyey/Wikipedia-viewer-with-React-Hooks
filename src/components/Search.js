import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Header from './Header';

 const Search = (props) => {
    const [input,setInput] = useState('');
    const handleChange = (e) => {
        setInput(e.currentTarget.value);
    }
    return (
        <div className={(props.res.length === 0) ? 'mb-3 p-3 text-center pos-abs middle' : 'mb-3 p-3 text-center'}>
            {(props.res.length === 0) && <Header />}
            <div className="mb-2">
                <input type="text" value={input} onChange={handleChange} className="rounded-lg p-3 border border-success" placeholder="Enter query ..."/>
            </div>
            <button onClick={props.fetchRes.bind(this,input)} className="btn btn-outline-success">Search</button>
        </div>
  )
}

Search.propTypes = {
    input: PropTypes.string,
    setInput: PropTypes.func
}
export default Search