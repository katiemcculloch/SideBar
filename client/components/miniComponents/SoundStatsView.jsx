import React from 'react';

//styled-components
import SoundStats from '../../styles/entries/SoundStats';
import MiniStats from '../../styles/entries/MiniStats';
import StatIcon from '../../styles/entries/MiniStats';

//SVG->JSX icons
import PlayIcon from '../../assets/playSide.jsx';
import LikeIcon from '../../assets/likesSide.jsx';
import RepostIcon from '../../assets/repostSide.jsx';
import CommentIcon from '../../assets/comment.jsx';


const SoundStatsView = props => {
  return (
    <SoundStats>
      {/* Plays */}
      <MiniStats>
        <StatIcon>
          <PlayIcon />
        </StatIcon>
        <span className="temp">
        {Math.floor(Math.random() * (10 + 999)) - 10}
        </span>
      </MiniStats>
      {/* Likes */}
      <MiniStats>
        <StatIcon>
          <LikeIcon />
        </StatIcon>
        <span className="temp">
          {Math.floor(Math.random() * (10 + 999)) - 10}
        </span>
      </MiniStats>
      {/* Reposts */}
      <MiniStats>
        <StatIcon>
          <RepostIcon />
        </StatIcon>
        <span className="temp">
        {Math.floor(Math.random() * (10 + 999)) - 10}
        </span>
      </MiniStats>
      {/* Comments */}
      <MiniStats>
        <StatIcon>
          <CommentIcon />
        </StatIcon>
        <span className="temp">
        {Math.floor(Math.random() * (10 + 999)) - 10}
        </span>      
      </MiniStats>
    </SoundStats>
  )
}

export default SoundStatsView;