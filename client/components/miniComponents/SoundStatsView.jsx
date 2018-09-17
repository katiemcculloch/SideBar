import React from 'react';

//styled-components
import SoundStats from '../../styles/entries/SoundStats';
import MiniStats from '../../styles/entries/MiniStats';
import StatIcon from '../../styles/entries/MiniStats';

//SVG->JSX icons
import PlayIcon from '../../assets/playSide.jsx'
import LikeIcon from '../../assets/likesSide.jsx'



const SoundStatsView = props => {
  return (
    <SoundStats>
      {/* Plays */}
      <MiniStats>
        <StatIcon>
          <PlayIcon />
        </StatIcon>
        <span className="temp">
          42.0K
        </span>
      </MiniStats>
      {/* Likes */}
      <MiniStats>
        <StatIcon>
          {/* <LikeIcon /> */}
        </StatIcon>
        <span className="temp">
          6.9K
        </span>
      </MiniStats>
      {/* Reposts */}
      <MiniStats>
        <StatIcon>

        </StatIcon>
        <span className="temp">
          4.2K
        </span>
      </MiniStats>
      {/* Comments */}
      <MiniStats>
        <StatIcon>

        </StatIcon>
        <span className="temp">
          42
        </span>      
      </MiniStats>
    </SoundStats>
  )
}

export default SoundStatsView;