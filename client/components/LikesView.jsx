import React, { Component } from "react";
import axios from "axios";

import UserEntry from "./UserEntry.jsx";
import PlaceHolderUser from "./miniComponents/PlaceholderUser.jsx";

//styled-components//
import HeaderText from "../styles/HeaderText";
import HeaderIcon from "../styles/HeaderIcon";
import ViewAllText from "../styles/ViewAllText";
import UserList from "../styles/UserList";

//SVG-->JSX
import LikesIcon from "../assets/likesHeaderIcon.jsx";

class LikesView extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   loading: true,
    //   users: [0, 1, 2, 3, 4, 5, 6, 7, 8]
    // };
    //function bindings
    this.handleOnLoad = this.handleOnLoad.bind(this);
    this.renderUsers = this.renderUsers.bind(this);
  }

  handleOnLoad(e) {
    // console.log(e.target);
  }

  renderUsers() {
    if (this.props.usersLoading) {
      return (
        <UserList>
          <PlaceHolderUser />
          <PlaceHolderUser />
          <PlaceHolderUser />
          <PlaceHolderUser />
          <PlaceHolderUser />
          <PlaceHolderUser />
          <PlaceHolderUser />
          <PlaceHolderUser />
          <PlaceHolderUser />
        </UserList>
      );
    } else {
      return (
        <UserList>
          {this.props.users.map((user, key) => {
            return (
              <UserEntry user={user} key={user.id} load={this.handleOnLoad} />
            );
          })}
        </UserList>
      );
    }
  }

  render() {
    return (
      <div>
        <h3>
          <HeaderText>
            <HeaderIcon>
              <LikesIcon />
            </HeaderIcon>
            <div className="headerText" style={{ paddingTop: "5px" }}>
              <span>
                {Math.floor(Math.random() * (10 + 999)) - 1 + " Likes"}
              </span>
              <ViewAllText>View all</ViewAllText>
            </div>
          </HeaderText>
        </h3>

        <div className="userList_div">{this.renderUsers()}</div>
      </div>
    );
  }
}

export default LikesView;
