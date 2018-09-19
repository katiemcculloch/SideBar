import React, {Component} from 'react';

import UserEntry from './UserEntry.jsx';

//styled-components//
import HeaderText from '../styles/HeaderText';
import HeaderIcon from '../styles/HeaderIcon';
import ViewAllText from '../styles/ViewAllText';
import UserList from '../styles/UserList';

//SVG-->JSX
import AlbumFrame from '../assets/albumFrame.jsx';
import LikesIcon from '../assets/likesHeaderIcon.jsx';

class LikesView extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
    //function bindings
  }
  componentDidMount() {

  }

  render() {
    return (
      <div>
        <h3>
        <HeaderText>
          <HeaderIcon>
            <LikesIcon />
          </HeaderIcon>
          <div className="headerText" style={{paddingTop:'5px'}}>
            <span>
            {(Math.floor(Math.random() * (10 + 999)) - 10) + ' Likes' }
            </span>
            <ViewAllText>View all</ViewAllText>
          </div>
        </HeaderText>
      </h3>

      <div className="userList_div">
        <UserList>
          <UserEntry />
          <UserEntry />
          <UserEntry />
          <UserEntry />
          <UserEntry />
          <UserEntry />
          <UserEntry />
          <UserEntry />
          <UserEntry />
        </UserList>
      </div>
        
    </div>
      
    )
  }
}

export default LikesView;