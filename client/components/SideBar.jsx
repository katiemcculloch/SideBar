import React from 'react';

// components:
import RelatedTracksView from './RelatedTracksView.jsx';
import PlayListsView from './PlayListsView.jsx'

// components end //

const divStyle = {
  sideBarMain: {
    background: '#fff',
    width: '300px',
    marginLeft: '5px',
    marginRight: '5px',
    
    // temporary //
    borderStyle: 'solid',
    borderWidth: '2px',
    borderColor: '#333',
  
    // Fonts //
    color: '#333333',
    font: '12px/1.4 "Lucida Grande","Lucida Sans Unicode","Lucida Sans",Garuda,Verdana,Tahoma,sans-serif',
    fontStyle: 'normal',
    fontVariantLigatures: 'normal',
    fontVariantCaps: 'normal',
    fontVariantNumeric: 'normal',
    fontVariantEastAsian: 'normal',
    fontStretch: 'normal',
    fontSize: '12px',
    lineHeight: 1.4,
  },
  eachComponent: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  }
}


const SideBar = props => {

  return (
    <div style={divStyle.sideBarMain}>
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
        #Likes View
      </div>
      {/* Users Reposted component  */}
      <div id="RepostsView" style={divStyle.eachComponent}>
        #Reposts View
      </div>
    </div>
  )
}

export default SideBar;