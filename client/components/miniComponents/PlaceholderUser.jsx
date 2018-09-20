import React from 'react';
import UserCircle from '../../styles/entries/UserCircle'

const styles = {
  image: {
    borderRadius: '50%',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: '#fff'
  },
  listItem: {
    display: 'inline'
  },
  li: {
    whiteSpace: 'nowrap',
    overflowX: 'auto',
    overflowY: 'hidden',
    display: 'inline',
    listStyleType: 'none',
    margin: '-7.75px',
    padding: '2px',
    
  }
}

const PlaceHolderUser = props => {
  return (
    <UserCircle style={styles.li}>
      <img 
      height={38} 
      width={38} 
      style={styles.image}
      src="https://78.media.tumblr.com/avatar_1210634d6e56_128.pnj"
      />
    </UserCircle>
  )
}

export default PlaceHolderUser;