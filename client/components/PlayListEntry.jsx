import React from 'react';
import SoundStatsView from './miniComponents/SoundStatsView.jsx';

import EntryPic from '../styles/entries/EntryPic';
import EntryDiv from '../styles/entries/EntryDiv';
import UsernameTitleContainer from '../styles/entries/UsernameTitleContainer';
import UsernameText from '../styles/entries/UsernameText';
import SoundTitle from '../styles/entries/SoundTitle';


const PlayListEntry = props => {
  return (
    <EntryDiv>

        <EntryPic>
          <img height={50} width={50} src="https://orig00.deviantart.net/75b5/f/2018/208/a/d/maki_ligon_ddlc_album_art_by_scoobymcsnack-dcig2o1.jpg" alt=""/>
        </EntryPic>

        <div style={{float:'left'}}>
        <UsernameTitleContainer style={{float:top}}>
          <UsernameText><span>Username</span></UsernameText> 
          <SoundTitle><span>Playlist Name</span></SoundTitle>
            <SoundStatsView />
        </UsernameTitleContainer>
        </div>


    </EntryDiv>
  )
}

export default PlayListEntry;