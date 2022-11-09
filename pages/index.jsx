import styled from 'styled-components';

import { CSSReset } from '../src/components/CSSReset';
import { Menu } from '../src/components/Menu';
import { StyledTimeline } from '../src/components/Timeline';

import config from '../config.json';

const StyledHeader = styled.header`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  section {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;

    div {
      display: flex;
      flex-direction: column;
    }
  }
`;

function Header() {
  return (
    <StyledHeader>
      {/* <img src="banner" alt="Banner" /> */}

      <section>
        <img
          src={`https://github.com/${config.github}.png`}
          alt={config.name}
        />
        <div>
          <h2>{config.name}</h2>
          <p>{config.description}</p>
        </div>
      </section>
    </StyledHeader>
  );
}

function Timeline(props) {
  const playlistNames = Object.keys(props.playlists);

  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = props.playlists[playlistName];

        return (
          <section key={playlistName}>
            <h2>{playlistName}</h2>
            <div>
              {videos.map((video) => (
                <a href={video.url} key={video.url}>
                  <img src={video.thumb} alt={video.name} />

                  <strong>{video.name}</strong>
                </a>
              ))}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}

function HomePage() {
  return (
    <>
      <CSSReset />

      <Header />
      <Menu />
      <Timeline playlists={config.playlists} />
    </>
  );
}

export default HomePage;
