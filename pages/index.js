import config from '../config.json'
import styled from 'styled-components';
import { CSSReset } from '../src/components/CSSReset';
import Menu from '../src/components/Menu';
import { StyledTimeline } from '../src/components/timeline';


function HomePage() {

  const estiloDaHome = {
    //  backgroundColor: "purple"
  };
  // const message = 'Eu sou uma amoeba'

  return (

    <>
      <CSSReset />
      <div style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        // backgroundColor: "red",
      }}>
        <Menu />
        <Header />
        <Timeline playlists={config.playlists} />
      </div>

    </>

  )
}

export default HomePage

// function Menu() {

//   return (

//     <div>Menu</div>

//   )

// }

const StyledHeader = styled.div`
  
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }

    .user-info {
      margin-top: 70px;
      display: flex;
      align-items: center;
      width: 100%;
      padding: 16px 32px; 
      gap: 16px;
    }

  `;
function Header() {
  return (

    <StyledHeader>
      { /* <img src="Banner" /> */}
      <section className="user-info">

        <img src={`https://github.com/${config.github}.png`} />

        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>

      </section>
    </StyledHeader>

  )

}

function Timeline(propriedades) {

  const playlistsName = Object.keys(propriedades.playlists);

  return (

    <StyledTimeline>
      {playlistsName.map(function (playlistsName) {
        const videos = propriedades.playlists[playlistsName]
        return (
          <section>
            <h2>{playlistsName}</h2>
            <div>
              {videos.map(function (video) {
                return (
                  <a href={video.url}>
                    <img src={video.thumb} />
                    <span>
                      {video.title}
                    </span>
                  </a>
                );
              })}
            </div>
          </section>
        )
      })}
    </StyledTimeline>
  )
}


