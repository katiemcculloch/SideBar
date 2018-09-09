import React from 'react';

const playListEntryStyle = {
  main: {
    width: '306px',
    height: '72.19px',
    marginLeft: '-5px',

    //temporary
    borderStyle: 'solid',
    borderWidth: '2px',
    borderColor: 'orange',
  },
  imagePreview: {
    height: '50px',
    width: '50px',
    background: 'black',
    float: 'left',
    padding: '6px, 5px',

  }
}

const PlayListEntry = props => {
  return (
    <div style={playListEntryStyle.main}>
      <div><span style={playListEntryStyle.imagePreview}></span></div>
    </div>
  )
}

export default PlayListEntry;