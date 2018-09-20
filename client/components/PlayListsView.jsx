import React, { Component } from 'React';
import axios from 'axios';

//styled-components//
import HeaderText from '../styles/HeaderText';
import HeaderIcon from '../styles/HeaderIcon';
import ViewAllText from '../styles/ViewAllText';

//SVG->JSX Components
import PlayListIcon from '../assets/playLists.jsx';
import PlayListEntry from './PlayListEntry.jsx';

import PlaceHolderEntry from './PlaceholderTrack.jsx';

class PlayListsView extends Component {
  constructor(props){
    super(props);
    this.state = {
      playlists: [],
      loading: true
    }
    //function bindings 
    this.renderPlaylists = this.renderPlaylists.bind(this);
  }
  componentDidMount() {
    this.getPlaylists();
  }

  getPlaylists() {
  axios
    .get('/api/playlists', {
      // params: {}
    })
    .then( ({data}) => {
      // console.log(data)
      this.setState({
        playlists: data,
        loading: false
      }), ()=> console.log('playlists: ', this.state.playlists)
    })
    .catch( err => console.log('error getting playlists...', err))
  }

  renderPlaylists() {
    if (!!this.state.loading) {
      return (
        <div>
          <PlaceHolderEntry />
          <PlaceHolderEntry />
          <PlaceHolderEntry />
        </div>
        )
    } else {
      return (
        <div>
          {this.state.playlists.map((playlist, index) => {
              return <PlayListEntry
                key={index}
                playlist={playlist}
              />
            })}
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <h3>
          <HeaderText>
            <HeaderIcon>
              <PlayListIcon />
            </HeaderIcon>
            <div className="headerText" style={{paddingTop:'5px'}}>
              <span>In Playlists</span>
              <ViewAllText>View all</ViewAllText>
            </div>
          </HeaderText>
        </h3>
        {this.renderPlaylists()}
      </div>
    )
  }
}

export default PlayListsView;