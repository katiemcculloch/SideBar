import React, { Component } from "React";
import axios from "axios";

//styled-components//
import HeaderText from "../styles/HeaderText";
import HeaderIcon from "../styles/HeaderIcon";
import ViewAllText from "../styles/ViewAllText";

//SVG->JSX Components
import PlayListIcon from "../assets/playLists.jsx";
import PlayListEntry from "./PlayListEntry.jsx";

import PlaceHolderEntry from "./PlaceholderTrack.jsx";

class PlayListsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // playlists: [],
      // loading: true
    };
    //function bindings
    this.renderPlaylists = this.renderPlaylists.bind(this);
  }
  componentDidMount() {
    // this.getPlaylists();
  }

  renderPlaylists() {
    if (this.props.playlistsLoading) {
      return (
        <div>
          <PlaceHolderEntry />
          <PlaceHolderEntry />
          <PlaceHolderEntry />
        </div>
      );
    } else {
      return (
        <div>
          {this.props.playlists.map((playlist, index) => {
            return (
              <PlayListEntry
                key={index}
                playlist={playlist}
                user={this.props.user}
              />
            );
          })}
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h3>
          <HeaderText>
            <HeaderIcon>
              <PlayListIcon />
            </HeaderIcon>
            <div className="headerText" style={{ paddingTop: "5px" }}>
              <span>In Playlists</span>
              <ViewAllText>View all</ViewAllText>
            </div>
          </HeaderText>
        </h3>
        {this.renderPlaylists()}
      </div>
    );
  }
}

export default PlayListsView;
