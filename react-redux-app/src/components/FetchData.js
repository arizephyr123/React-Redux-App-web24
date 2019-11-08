import React from "react";
import { connect } from 'react-redux';
import {dataLoading, dataLoadSuccess, dataLoadFailure} from '../actions'

const FetchData = props => {
  console.log(props);
  return (
  <button>Get Data</button>);
};

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  {}
)(FetchData);
