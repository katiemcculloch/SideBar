import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import axios from "axios";

//styled-components//
import Wrapper from "../styles/Wrapper";
import HeaderText from "../styles/HeaderText";

//react components//
import RelatedTracksView from "./RelatedTracksView.jsx";
import PlayListsView from "./PlayListsView.jsx";
import LikesView from "./LikesView.jsx";
import RepostsView from "./RepostsView.jsx";
import GoMobile from "./GoMobile.jsx";

const divStyle = {
  eachComponent: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#d6d7da"
  }
};

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      usersLoading: true,
      playlists: [],
      playlistsLoading: true
    };
    this.getUsers = this.getUsers.bind(this);
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers() {
    axios
      .get("/api/users")
      .then(({ data }) => {
        console.log(data, "data from getUsers");
        this.setState({
          users: data,
          usersLoading: false
        });
        axios
          .get(`/api/users/${data[0].id}/playlists`, {
            // params: {}
          })
          .then(({ data }) => {
            // console.log(data)
            this.setState({
              playlists: data,
              playlistsLoading: false
            }),
              () => console.log("playlists: ", this.state.playlists);
          })
          .catch(err => console.log("error getting playlists...", err));
      })
      .catch(err => console.log("there was an error getting users...", err));
  }

  render() {
    return (
      <Wrapper>
        {/* Related Tracks component  */}
        <div id="RelatedTracksView" style={divStyle.eachComponent}>
          <RelatedTracksView />
        </div>
        {/* In PlayLists component  */}
        <div id="PlayListsView" style={divStyle.eachComponent}>
          <PlayListsView
            playlistsLoading={this.state.playlistsLoading}
            playlists={this.state.playlists}
            user={this.state.users[0]}
          />
        </div>
        {/* Users Liked component  */}
        <div id="LikesView" style={divStyle.eachComponent}>
          <LikesView users={this.state.users} />
        </div>
        {/* Users Reposted component  */}
        <div id="RepostsView" style={divStyle.eachComponent}>
          <RepostsView users={this.state.users} />
        </div>
        {/* Go Mobile: */}
        <div id="GoMobile" style={divStyle.eachComponent}>
          <GoMobile />
        </div>
      </Wrapper>
    );
  }
}

export default SideBar;
