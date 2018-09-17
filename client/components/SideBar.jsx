import React from 'react';
import {ThemeProvider} from 'styled-components';

//styled-components//
import Wrapper from '../styles/Wrapper';
import HeaderText from '../styles/HeaderText';

//react components//
import RelatedTracksView from './RelatedTracksView.jsx';
import PlayListsView from './PlayListsView.jsx'
import LikesView from './LikesView.jsx'


const divStyle = {
  eachComponent: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  }
}


const SideBar = props => {

  return (
      <Wrapper>
        {/* Related Tracks component  */}
        <div id="RelatedTracksView" style={divStyle.eachComponent}>
          <RelatedTracksView />
        </div>
        {/* In PlayLists component  */}
        <div id="PlayListsView" style={divStyle.eachComponent}>
          <PlayListsView />
        </div>
        {/* Users Liked component  */}
        <div id="LikesView" style={divStyle.eachComponent}>
          <LikesView />
        </div>
        {/* Users Reposted component  */}
        <div id="RepostsView" style={divStyle.eachComponent}>
          #Reposts View
        </div>
      </Wrapper>

  )
}

export default SideBar;