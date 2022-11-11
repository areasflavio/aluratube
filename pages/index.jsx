import styled from 'styled-components';

import { CSSReset } from '../src/components/CSSReset';
import { Menu } from '../src/components/Menu';
import { StyledTimeline } from '../src/components/Timeline';

import config from '../config.json';
import { Banner } from '../src/components/Banner';
import { useState } from 'react';

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.backgroundLevel1};

  section {
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }

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
      <Banner url={config.banner} />

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

function Timeline({ valorDoFiltro, playlists }) {
  const playlistNames = Object.keys(playlists);

  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = playlists[playlistName];

        return (
          <section key={playlistName}>
            <h2>{playlistName}</h2>
            <div>
              {videos
                .filter((video) =>
                  video.title
                    .toLowerCase()
                    .includes(valorDoFiltro.toLowerCase())
                )
                .map((video) => (
                  <a href={video.url} key={video.url}>
                    <img src={video.thumb} alt={video.title} />

                    <strong>{video.title}</strong>
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
  const [valorDoFiltro, setValorDoFiltro] = useState('');

  return (
    <div>
      <CSSReset />

      <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
      <Header />
      <Timeline playlists={config.playlists} valorDoFiltro={valorDoFiltro} />
    </div>
  );
}

export default HomePage;
