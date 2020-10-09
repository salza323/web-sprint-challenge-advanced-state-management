//deps
import React, { useState, useEffect } from 'react';

//internal material
import './App.css';
import { fetchSmurfs } from '../store/actions';
import { connect } from 'react-redux';
import SmurfForm from './SmurfForm';

function App(props) {
  const { fetchSmurfs } = props;
  const [url, setUrl] = useState('http://localhost:3333/smurfs');

  //fetching smurfs from server with setUrl
  useEffect(() => {
    fetchSmurfs(url);
  }, [fetchSmurfs, url]);

  return (
    <div className='App'>
      <h1>SMURFS! W/Redux</h1>
      <div>
        <SmurfForm seturl={setUrl} />
        {props.smurfs.map((smurf) => (
          <h1 key={smurf.id}>{smurf.name}</h1>
        ))}
      </div>
    </div>
  );
}

const mapStatetoProps = (state) => {
  return {
    smurfs: state.smurfs,
  };
};

export default connect(mapStatetoProps, { fetchSmurfs })(App);
