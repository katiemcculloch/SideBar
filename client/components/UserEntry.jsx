import React from 'react';
import UserCircle from '../styles/entries/UserCircle'

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

const UserEntry = props => {
  return (
    <UserCircle style={styles.li}>
      <img 
      height={38} 
      width={38} 
      style={styles.image}
      src="https://i.pinimg.com/236x/8d/90/a9/8d90a954dd2cbd7b67ed7e5b4013c46e.jpg" 
      alt="userName"/>
    </UserCircle>
  )
}

export default UserEntry;