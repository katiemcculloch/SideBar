import React, {Component} from 'react';
import axios from 'axios';

import RelatedTrackEntry from './RelatedTrackEntry.jsx';

class RelatedTracksView extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <div>
          <h3>Related Tracks</h3>
        </div>
        <RelatedTrackEntry />
        <RelatedTrackEntry />
        <RelatedTrackEntry />
      </div>
    )
  }
}


export default RelatedTracksView;