import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';

function ToDo({ id, text, onBtnClick }) {
  return (
    <Link to={`/${id}`}>
      <li>
        {text} <button onClick={onBtnClick}>DEL</button>
      </li>
    </Link>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id)),
  };
}

export default connect(null, mapDispatchToProps)(ToDo);
