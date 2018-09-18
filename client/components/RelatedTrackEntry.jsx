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
          <img height={50} width={50} src="https://i1.sndcdn.com/artworks-000303488604-edgrbo-t500x500.jpg" alt=""/>
        </EntryPic>

        <div style={{float:'left'}}>
        <UsernameTitleContainer style={{float:top}}>
          <UsernameText><span>Username</span></UsernameText> 
          <SoundTitle><span>Related Song</span></SoundTitle>
            <SoundStatsView />
        </UsernameTitleContainer>
        </div>


    </EntryDiv>
  )
}

export default RelatedTrackEntry;