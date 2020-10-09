import React, { useState } from 'react';
import { connect } from 'react-redux';

import { postSmurfs } from '../store/actions/index';

const SmurfForm = (props) => {
  const { postSmurfs } = props;
  const [smurfs, setSmurfs] = useState('react');

  const handleChanges = (e) => {
    setSmurfs(e.target.value);
  };

  //submit function will call post function from actions and send data handled by handle changes
  const handleSubmit = (e) => {
    e.preventDefault();
    postSmurfs(smurfs);
  };
  //create form that will match endpoints that server requiers
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder='Smurf Name'
        type='text'
        onChange={handleChanges}
        value={smurfs.name}
      />
      <input
        placeholder='Smurf Age'
        type='text'
        onChange={handleChanges}
        value={smurfs.age}
      />
      <input
        placeholder='Smurf Height'
        type='text'
        onChange={handleChanges}
        value={smurfs.height}
      />
      <button>Add A Smurf</button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { postSmurfs })(SmurfForm);
