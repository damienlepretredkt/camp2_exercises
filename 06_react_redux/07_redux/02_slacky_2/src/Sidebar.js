import React from 'react'
import { connect } from "react-redux";

import { replace } from 'react-router-redux'

function SideBar(props) {

  const channels = ['chan1', 'camp2', 'react-router-chan']

  return(
      <div className="sidenav">
        {channels.map((channel, index) => <a key={index} onClick={() => props.handleChannelSelect(channel)}>{channel}</a>)}
      </div>
  )
}


function mapDispatchToProps(dispatch) {
  return {
    handleChannelSelect: (channel) => {
      dispatch({type: "CHAN_CHANGE" ,currentChannel: channel})
      dispatch(replace('/chats/' + channel))
    }
  }
}

function mapStateToProps(state) {
  return {

  }
}


const SideBarComponent = connect(mapStateToProps, mapDispatchToProps)(SideBar)
export default SideBarComponent
