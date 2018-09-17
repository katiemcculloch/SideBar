import React, { Component } from 'React';
import axios from 'axios';

//styled-components//
import HeaderText from '../styles/HeaderText';
import HeaderIcon from '../styles/HeaderIcon';
import ViewAllText from '../styles/ViewAllText';

//SVG->JSX Components
import PlayListIcon from '../assets/playLists.jsx';
import PlayListEntry from './PlayListEntry.jsx';

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
          <HeaderText>
            <HeaderIcon>
              <PlayListIcon />
            </HeaderIcon>
            <div className="headerText">
              <span>In Playlists</span>
              <ViewAllText>View all</ViewAllText>
            </div>
          </HeaderText>
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