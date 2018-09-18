import React, {Component} from 'react';
import axios from 'axios';

//styled-components//
import HeaderText from '../styles/HeaderText';
import HeaderIcon from '../styles/HeaderIcon';
import ViewAllText from '../styles/ViewAllText';

//React Components//
import RelatedTrackEntry from './RelatedTrackEntry.jsx';
import RelatedTracksIcon from '../assets/relatedTracks.jsx'

class RelatedTracksView extends Component {
  constructor(props){
    super(props);
    this.state ={

    }
    //function bindings

  }

  componentDidMount(){

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
        <div>
          {/* Temporarily hard coded */}
          <RelatedTrackEntry />
          <RelatedTrackEntry />
          <RelatedTrackEntry />
        </div>
      </div>
    )
  }
}


export default RelatedTracksView;