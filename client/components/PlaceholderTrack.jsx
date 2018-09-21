import React from 'react';

import EntryDiv from '../styles/entries/EntryDiv';
import EntryPic from '../styles/entries/EntryPic';
import UsernameTitleContainer from '../styles/entries/UsernameTitleContainer';
import UsernameText from '../styles/entries/UsernameText';
import SoundTitle from '../styles/entries/SoundTitle';



const PlaceHolderEntry = props => {
  return (
    <EntryDiv>
s
        <EntryPic>
          <img 
          src="https://loading.io/spinners/ellipsis/lg.discuss-ellipsis-preloader.gif" 
          alt="loading"
          width={50}
          />
        </EntryPic>

        <div style={{float:'left'}}>
        <UsernameTitleContainer style={{float:top}}>
          <UsernameText><span>Loading...</span></UsernameText> 
          <SoundTitle><span>Loading...</span></SoundTitle>
        </UsernameTitleContainer>
        </div>


    </EntryDiv>
  )
}

export default PlaceHolderEntry;