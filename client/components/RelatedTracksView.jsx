import React, {Component} from 'react';
import axios from 'axios';

//styled-components//
import HeaderText from '../styles/HeaderText';
import HeaderIcon from '../styles/HeaderIcon';
import ViewAllText from '../styles/ViewAllText';

//React Components//
import RelatedTrackEntry from './RelatedTrackEntry.jsx';
import RelatedTracksIcon from '../assets/relatedTracks.jsx';
import PlaceHolderEntry from './PlaceholderTrack.jsx';

class RelatedTracksView extends Component {
  constructor(props){
    super(props);
    this.state ={
      tracks: [1,2,3],
      loading: true
    }
    //function bindings
    this.renderTracks = this.renderTracks.bind(this);

  }

  componentDidMount(){
    this.getSongs();
  }

  getSongs() {
    axios
      .get('/api/relatedTracks', {
        // params: { tags: this.state.songTag}
      })
      .then( ({data}) => {
        // console.log(data)
        this.setState({
          tracks: data,
          loading: false
        }), ()=> console.log('related tracks: ', this.state.tracks)
      })
      .catch( err => console.log('error getting relatedTracks...', err))
  }

  renderTracks() {
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
          {this.state.tracks.map((track, index) => {
            return <RelatedTrackEntry
              key={index}
              track={track}
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
              <RelatedTracksIcon />
            </HeaderIcon>
            <div className="headerText" style={{paddingTop: '6px'}}>
              <span>Related Tracks</span>
              <ViewAllText>View all</ViewAllText>
            </div>
          </HeaderText>
        </h3>
        {this.renderTracks()}
      </div>
    )
  }
}


export default RelatedTracksView;