import React from 'react';

const trackEntryStyle = {
  main: {
    width: '306px',
    height: '72.19px',
    marginLeft: '-5px',

    //temporary
    borderStyle: 'solid',
    borderWidth: '2px',
    borderColor: 'purple',
  },
  albumPreview: {
    height: '50px',
    width: '50px',
    background: 'black'
  }
}

const RelatedTrackEntry = props => {
  return (
    <div style={trackEntryStyle.main}>
      <div>
        <div style={trackEntryStyle.albumPreview}></div>
      </div>
    </div>
  )
}

export default RelatedTrackEntry;