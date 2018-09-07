import React from 'react';

// components:
import RelatedTracksView from './RelatedTracksView.jsx';

// components end //

const divStyle = {
  sideBarMain: {
    background: '#f2f2f2',
    width: '300px',
    marginLeft: '3px',
    marginRight: '3px',
    
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
    fontWeight: 'normal',
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
    Hello from Sidebar!
      {/* Related Tracks component  */}
      <div id="RelatedTracksView" style={divStyle.eachComponent}>
        <RelatedTracksView />
      </div>
      {/* In PlayLists component  */}
      <div id="InPlayListsView" style={divStyle.eachComponent}>
        #PlayLists View
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