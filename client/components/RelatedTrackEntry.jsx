import React from 'react';
import SoundStatsView from './miniComponents/SoundStatsView.jsx';

import EntryDiv from '../styles/entries/EntryDiv';
import EntryPic from '../styles/entries/EntryPic';
import UsernameTitleContainer from '../styles/entries/UsernameTitleContainer';
import UsernameText from '../styles/entries/UsernameText';
import SoundTitle from '../styles/entries/SoundTitle';
import SoundStats from '../styles/entries/SoundStats';



const RelatedTrackEntry = props => {
  return (
    <EntryDiv>

        <EntryPic>
          <img height={50} width={50} src={props.track.album_art} alt={props.track.title}/>
        </EntryPic>

        <div style={{float:'left'}}>
        <UsernameTitleContainer style={{float:top}}>
          <UsernameText><span>{props.track.artist}</span></UsernameText> 
          <SoundTitle><span>{props.track.title}</span></SoundTitle>
            <SoundStatsView />
        </UsernameTitleContainer>
        </div>


    </EntryDiv>
  )
}

export default RelatedTrackEntry;