import React from "react";
import { connect } from 'react-redux';
import { fetchData } from '../actions';
import DisplayData from './DisplayData'

const FetchData = props => {
  console.log(props);
  return (
      <>
  <button
  onClick={props.fetchData}
  >Get Data</button>
  <DisplayData data={props.current}/>
  </>
  )};

const mapStateToProps = state => ({
current: state.current
});

export default connect(
  mapStateToProps,
  { fetchData }
)(FetchData);
