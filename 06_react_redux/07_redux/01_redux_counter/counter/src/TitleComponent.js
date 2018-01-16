import React from 'react';
import { connect } from "react-redux";


function TitleCmp(props) {
  return(
    <span onClick={props.updateTitle}>{props.title}</span>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    updateTitle: () => dispatch({type: 'CHANGE'})
  }
}


function mapStateToProps(state) {
  return {
    title: state.title.title
  }
}

const TitleComponent = connect(mapStateToProps, mapDispatchToProps)(TitleCmp);
export default TitleComponent;
