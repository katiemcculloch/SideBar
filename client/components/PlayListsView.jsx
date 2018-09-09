import React, { Component } from 'React';
import axios from 'axios';
import PlayListIcon from '../assets/playLists.jsx'

import PlayListEntry from './PlayListEntry.jsx'

const viewStyle = {
  header: {
    height: '31px',
    color: '#999',
    // display: 'inline',
    fontFamily:  'Lucida Sans Unicode',
    fontSize: '14px',
    fontWeight: '100',
    headerText: {
      // marginTop: '4px',
      // marginBottom: '-10px'
    },
    title: {
      // marginBottom: '-10px'
    },
    viewAll: {
      float: 'right'
    },
    icon: {
      float: 'left',
      width: '20.99px',
      margin: '4px'
    }
  }
}

class PlayListsView extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
    //function bindings 

  }
  componentDidMount() {

  }

  render() {
    return (
      <div>
        <h3>
          <div style={viewStyle.header}>
            <span style={viewStyle.header.icon}>
              <PlayListIcon />
            </span>
            <div style={viewStyle.header.headerText}>
              <span style={viewStyle.header.title}>In Playlists</span>
              <span style ={viewStyle.header.viewAll}>View all</span>
            </div>
          </div>
        </h3>
        <div>
          <PlayListEntry />
          <PlayListEntry />
          <PlayListEntry />
        </div>
      </div>
    )
  }
}

export default PlayListsView;