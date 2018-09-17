import React, {Component} from 'react';

import UserEntry from './UserEntry.jsx';

//styled-components//
import HeaderText from '../styles/HeaderText';
import HeaderIcon from '../styles/HeaderIcon';
import ViewAllText from '../styles/ViewAllText';
import UserList from '../styles/UserList';
import UserCircle from '../styles/entries/UserCircle';

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
            
          </HeaderIcon>
          <div className="headerText">
            <span>Likes</span>
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