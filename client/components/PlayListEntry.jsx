import React from 'react';
import SoundStatsView from './miniComponents/SoundStatsView.jsx';

import EntryPic from '../styles/entries/EntryPic';
import EntryDiv from '../styles/entries/EntryDiv';
import UsernameTitleContainer from '../styles/entries/UsernameTitleContainer';
import UsernameText from '../styles/entries/UsernameText';
import SoundTitle from '../styles/entries/SoundTitle';
import FrameDiv from '../styles/entries/FrameDiv';

import PlaylistFrame from '../assets/albumFrame.jsx'

const PlayListEntry = props => {
  return (
    <EntryDiv>

        <FrameDiv
          width={60}
          height={60}
        >
          <PlaylistFrame 
            width={60}
            height={60}
          />
        </FrameDiv>
        <EntryPic style={{
          position:'absolute',
          marginLeft:'5px',
          marginTop:'5px',
          borderLeft:'5px',
          borderRight:'5px',
          borderColor:'#fff',
          borderStyle:'solid',
          width:'40px',
          height:'45px'
        }}>
          <img 
          height={45} 
          width={40} 
          src={props.playlist.cover_art} 
          alt={props.playlist.title}
          />
        </EntryPic>

        <div style={{float:'left'}}>
        <UsernameTitleContainer style={{float:top}}>
        {console.log(props.playlist.cover_art)}
          <UsernameText><span>{props.playlist.user}</span></UsernameText> 
          <SoundTitle><span>{props.playlist.title}</span></SoundTitle>
            {/* <SoundStatsView 
            likes={props.playlist.likes}
            reposts={props.playlist.reposts} 
            /> */}
        </UsernameTitleContainer>
        </div>


    </EntryDiv>
  )
}

export default PlayListEntry;