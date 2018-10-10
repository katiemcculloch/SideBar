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
      playlistsLoading: true,
      tracks: [1, 2, 3],
      tracksLoading: true
    };
    this.getSidebar = this.getSidebar.bind(this);
    // this.getPlaylists = this.getPlaylists.bind(this);
    // this.getSongs = this.getSongs.bind(this);
  }

  componentDidMount() {
    this.getSidebar();
  }
  getSidebar() {
    axios
      .get("/api/sidebar")
      .then(data => {
        console.log(data.data, "data");
        this.setState({
          users: data.data["user"],
          usersLoading: false,
          playlists: data.data["playlists"],
          playlistsLoading: false,
          tracks: data.data["songs"],
          tracksLoading: false
        });
      })
      .catch(err => {
        console.log("there was an error getting data...", err);
      });
  }

  render() {
    return (
      <Wrapper>
        {/* Related Tracks component  */}
        <div id="RelatedTracksView" style={divStyle.eachComponent}>
          <RelatedTracksView
            tracks={this.state.tracks}
            tracksLoading={this.state.tracksLoading}
          />
        </div>
        {/* In PlayLists component  */}
        <div id="PlayListsView" style={divStyle.eachComponent}>
          <PlayListsView
            playlistsLoading={this.state.playlistsLoading}
            playlists={this.state.playlists}
            user={this.state.users}
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
