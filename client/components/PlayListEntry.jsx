import React from 'react';
import EntryPic from '../styles/entries/EntryPic';

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
      <EntryPic>
        <img height={50} width={50} src="https://orig00.deviantart.net/75b5/f/2018/208/a/d/maki_ligon_ddlc_album_art_by_scoobymcsnack-dcig2o1.jpg" alt=""/>
      </EntryPic>    
    </div>
  )
}

export default PlayListEntry;