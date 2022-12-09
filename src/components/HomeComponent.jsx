import React from "react";
import "../App.css";
const Homecomponent = () => {
  return (
    <main className="body">
      <nav className="navbar sticky-top mb-3">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex" />
          <i className="fa-solid fa-chevron-left chevrons" />
          <i className="fa-solid fa-chevron-right chevrons" />
        </div>
        <div className="d-flex align-items-center" id="rightnav">
          <div style={{ marginRight: "1rem" }}>
            <button
              type="button"
              className="btn btn-outline-white text-light"
              style={{ borderRadius: 20 }}
            >
              Upgrade
            </button>
          </div>
          <div className="dropdown">
            <button
              className="btn btn-dark dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ borderRadius: 25 }}
            >
              <img
                src="https://i.pinimg.com/564x/08/35/96/083596835424340eda90439fd20e5ee9.jpg"
                style={{ width: 30, height: 30, borderRadius: "50%" }}
              />
              &nbsp;&nbsp;Gh0stxt&nbsp;&nbsp;
            </button>
            <ul
              className="dropdown-menu dropdown-menu-dark"
              aria-labelledby="dropdownMenuButton1"
            >
              <li>
                <a className="dropdown-item" href="/Login/login.html">
                  Log out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div>
        <div className="margin-top">
          <h3 className="greeting mb-3">Good morning</h3>
        </div>
        <div>
          <div
            className="row row-cols-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-5 g-xl-2 g-xxl-3"
            id="topsidecards"
          >
            <div className="col" id="top-buttons">
              <div className="background-card mb-3" style={{ maxWidth: 540 }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="https://www.adobe.com/express/create/cover/media_1a853fd182c6e60cdbc8d24538ff63f378b5181c8.jpeg?width=400&format=jpeg&optimize=medium"
                      className="img-fluid rounded-start"
                      style={{ height: "100%", minWidth: "100%" }}
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8 d-flex align-items-center">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="background-card mb-3" style={{ maxWidth: 540 }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="https://d1csarkz8obe9u.cloudfront.net/themedlandingpages/tlp_hero_album-covers-d12ef0296af80b58363dc0deef077ecc-1552649680.jpg"
                      className="img-fluid rounded-start"
                      style={{ height: "100%", width: "100%" }}
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8 d-flex align-items-center">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="background-card mb-3" style={{ maxWidth: 540 }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="https://www.musicnotes.com/now/wp-content/uploads/the-miracle-queen.jpg"
                      className="img-fluid rounded-start"
                      style={{ height: "100%", width: "100%" }}
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8 d-flex align-items-center">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="background-card mb-3" style={{ maxWidth: 540 }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="https://www.sleek-mag.com/wp-content/uploads/2016/08/AlbumCovers_Blonde-1200x1200.jpg"
                      className="img-fluid rounded-start"
                      style={{ height: "100%", width: "100%" }}
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8 d-flex align-items-center">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="background-card mb-3" style={{ maxWidth: 540 }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="https://www.rockarchive.com/media/1890/david-bowie-db001duffy.jpg?crop=0.19186424300418511,0.18786141133986681,0.20427102269629802,0.20827385436061632&cropmode=percentage&width=800&height=800&rnd=132951122240000000&overlay=watermark.png&overlay.size=230,20&overlay.position=0,780"
                      className="img-fluid rounded-start"
                      style={{ height: "100%", width: "100%" }}
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8 d-flex align-items-center">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="background-card mb-3" style={{ maxWidth: 540 }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="http://cdn.cnn.com/cnnnext/dam/assets/210326104449-02-rizzoli-album-art-covers-restricted.jpg"
                      className="img-fluid rounded-start"
                      style={{ height: "100%", width: "100%" }}
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8 d-flex align-items-center">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="background-card mb-3" style={{ maxWidth: 540 }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="https://media.npr.org/assets/img/2012/12/07/mellon-collie-and-the-infinite-sadness---cover-art_custom-a7b8e04bc3d49db97a1d9aea22fd04581200e417.jpg"
                      className="img-fluid rounded-start"
                      style={{ height: "100%", width: "100%" }}
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8 d-flex align-items-center">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="background-card mb-3" style={{ maxWidth: 540 }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="https://blog.dozmia.com/content/images/2019/01/Portrait-The-Weeknd.jpg"
                      className="img-fluid rounded-start"
                      style={{ height: "100%", width: "100%" }}
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8 d-flex align-items-center">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="background-card mb-3" style={{ maxWidth: 540 }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/5/5b/Kavinsky_Nightcall_2010.png"
                      className="img-fluid rounded-start"
                      style={{ height: "100%", width: "100%" }}
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8 d-flex align-items-center">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="background-card mb-3" style={{ maxWidth: 540 }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/rap-album-cover-isaiah-morris.jpg"
                      className="img-fluid rounded-start"
                      style={{ height: "100%", width: "100%" }}
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8 d-flex align-items-center">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3 className="greeting mb-3 mt-3">Recently Played</h3>
      </div>

      <div>
        <div className="container-fluid">
          <div className="row row-cols-7 g-3" id="midsidecards">
            {/* row row-cols-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-5 g-xl-2 g-xxl-3 */}
            <div className="col">
              <div className="card" id="darker">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/2/25/YellowcardLightsandSounds.jpg"
                  className="img-fluid rounded-start p-2"
                  style={{ height: "100%", minWidth: "100%" }}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Song</h5>
                  <p className="card-text">Lorem ipsum...</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" id="darker">
                <img
                  src="https://i.pinimg.com/originals/28/16/66/2816667689d3dc79f5d6885a45ebbebb.jpg"
                  className="img-fluid rounded-start p-2"
                  style={{ height: "100%", minWidth: "100%" }}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Song</h5>
                  <p className="card-text">Lorem ipsum...</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" id="darker">
                <img
                  src="https://www.billboard.com/wp-content/uploads/2022/03/35.-Metallica-%E2%80%98Master-of-Puppets-1986-album-art-billboard-1240.jpg?w=600"
                  className="img-fluid rounded-start p-2"
                  style={{ height: "100%", minWidth: "100%" }}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Song</h5>
                  <p className="card-text">Lorem ipsum...</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" id="darker">
                <img
                  src="https://media.pitchfork.com/photos/5bcdf9b8a8f1ec1406cb9892/1:1/w_600/Queen_Bohemian%20Rhapsody%20OST.jpg"
                  className="img-fluid rounded-start p-2"
                  style={{ height: "100%", minWidth: "100%" }}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Song</h5>
                  <p className="card-text">Lorem ipsum...</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" id="darker">
                <img
                  src="https://i.scdn.co/image/ab6761610000e5eba00b11c129b27a88fc72f36b"
                  className="img-fluid p-2"
                  style={{
                    height: "100%",
                    minWidth: "100%",
                    borderRadius: "50%"
                  }}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Artist</h5>
                  <p className="card-text">Lorem ipsum...</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" id="darker">
                <img
                  src="https://i.scdn.co/image/ab67706f0000000387bff188c40608c48b82068f"
                  className="img-fluid rounded-start p-2"
                  style={{ height: "100%", minWidth: "100%" }}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Song</h5>
                  <p className="card-text">Lorem ipsum...</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" id="darker">
                <img
                  src="https://i.pinimg.com/originals/ee/2c/b9/ee2cb910d219ae7f276fadbae2fc3196.jpg"
                  className="img-fluid rounded-start p-2"
                  style={{ height: "100%", minWidth: "100%" }}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Song</h5>
                  <p className="card-text">Lorem ipsum...</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" id="darker">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/53b6eb62e4b06e0feb2d8e86/1607362705516-R5Q22H4FVIVPNMW8OWD7/SamSpratt_KidCudi_ManOnTheMoon3_AlbumCover_Web.jpg?format=original"
                  className="img-fluid rounded-start p-2"
                  style={{ height: "100%", width: "100%" }}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Song</h5>
                  <p className="card-text">Lorem ipsum...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="margin-top">
          <span>
            <h3 className="greeting mb-1 mt-3">Shows to try</h3>
            <p className="text-muted">
              Podcasts we think you'll get hooked on.
            </p>
          </span>
          <div>
            <div className="container-fluid">
              <div
                className="row row-cols-sm-2 row-cols-md-3 row-cols-xl-7 g-4"
                id="bottomsiderow"
              >
                <div className="col-xl-2 transition-play">
                  <div className="card" id="darker">
                    <img
                      src="https://i.pinimg.com/originals/45/22/8f/45228f8cd8ac51b0db4e1b64e5db2a4c.jpg"
                      className="card-img-top p-2"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Chill</h5>
                      <div className="d-flex align-items-baseline justify-content-between">
                        <p className="card-text">Chill lofi hip-hop mix.</p>
                        <i className="fa-solid fa-play 2-xl" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 transition-play">
                  <div className="card h-100" id="darker">
                    <img
                      src="https://images.unsplash.com/photo-1624339389686-cfca209567df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YWVzdGhldGljJTIwc2t5fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                      className="card-img-top p-2 aspect-ratio-one-to-one"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Feel Good</h5>
                      <div className="d-flex align-items-baseline justify-content-between">
                        <p className="card-text">Chill lofi hip-hop mix.</p>
                        <i className="fa-solid fa-play 2-xl" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 transition-play">
                  <div className="card h-100" id="darker">
                    <img
                      src="https://pbs.twimg.com/media/EIFEWqVU8AAw07Z.jpg"
                      className="card-img-top p-2"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <div className="d-flex align-items-baseline justify-content-between">
                        <p className="card-text">Chill lofi hip-hop mix.</p>
                        <i className="fa-solid fa-play 2-xl" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 transition-play">
                  <div className="card h-100" id="darker">
                    <img
                      src="https://hips.hearstapps.com/hmg-prod/images/archetypes-1661260594.jpeg"
                      className="card-img-top p-2"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <div className="d-flex align-items-baseline justify-content-between">
                        <p className="card-text">Chill lofi hip-hop mix.</p>
                        <i className="fa-solid fa-play 2-xl" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 transition-play">
                  <div className="card h-100" id="darker">
                    <img
                      src="https://lite-images-i.scdn.co/image/ab6765630000ba8a74ab03748c1f2e843974a968"
                      className="card-img-top p-2"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <div className="d-flex align-items-baseline justify-content-between">
                        <p className="card-text">Chill lofi hip-hop mix.</p>
                        <i className="fa-solid fa-play 2-xl" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 transition-play">
                  <div className="card h-100" id="darker">
                    <img
                      src="https://images.squarespace-cdn.com/content/v1/5ffdb7a83ff3ea0604bdfef2/0b181a38-bd03-4c82-9f89-210cc302b3d0/1024x1024+IG.jpg"
                      className="card-img-top p-2"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <div className="d-flex align-items-baseline justify-content-between">
                        <p className="card-text">Chill lofi hip-hop mix.</p>
                        <i className="fa-solid fa-play 2-xl" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container-fluid playBar d-flex justify-content-between align-items-center fixed-bottom">
        <div className="playbar d-flex align-items-center">
          <img
            className="albumImg img-fluid lilAlb m-2"
            src="https://glastonbury.davidbowie.com/images/album_cover.png"
          />
          <div className="justify-content-between">
            <h6>Absolute Beginners</h6>
            <p>David Bowie</p>
          </div>
          <div className="justify-content-between px-4 py-1">
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 21C11.355 20.428 10.626 19.833 9.85502 19.2H9.84502C7.13002 16.98 4.05302 14.468 2.69402 11.458C2.24754 10.4997 2.01093 9.45712 2.00001 8.4C1.99703 6.94948 2.57879 5.55898 3.61383 4.54276C4.64887 3.52654 6.04981 2.97039 7.50002 3C8.68065 3.00186 9.83586 3.34308 10.828 3.983C11.264 4.26596 11.6584 4.60825 12 5C12.3435 4.60979 12.7381 4.2677 13.173 3.983C14.1648 3.34295 15.3197 3.00171 16.5 3C17.9502 2.97039 19.3512 3.52654 20.3862 4.54276C21.4213 5.55898 22.003 6.94948 22 8.4C21.9898 9.45881 21.7532 10.5032 21.306 11.463C19.947 14.473 16.871 16.984 14.156 19.2L14.146 19.208C13.374 19.837 12.646 20.432 12.001 21.008L12 21ZM7.50002 5C6.56853 4.98834 5.6701 5.34484 5.00002 5.992C4.35441 6.62616 3.99358 7.49504 3.99994 8.4C4.01135 9.1705 4.18585 9.92985 4.51202 10.628C5.15353 11.9267 6.01913 13.102 7.06902 14.1C8.06002 15.1 9.20002 16.068 10.186 16.882C10.459 17.107 10.737 17.334 11.015 17.561L11.19 17.704C11.457 17.922 11.733 18.148 12 18.37L12.013 18.358L12.019 18.353H12.025L12.034 18.346H12.039H12.044L12.062 18.331L12.103 18.298L12.11 18.292L12.121 18.284H12.127L12.136 18.276L12.8 17.731L12.974 17.588C13.255 17.359 13.533 17.132 13.806 16.907C14.792 16.093 15.933 15.126 16.924 14.121C17.9741 13.1236 18.8397 11.9485 19.481 10.65C19.8131 9.9458 19.9901 9.1785 20.0001 8.4C20.0042 7.49783 19.6435 6.63229 19 6C18.3312 5.34992 17.4326 4.99048 16.5 5C15.3619 4.99032 14.274 5.46736 13.51 6.311L12 8.051L10.49 6.311C9.72609 5.46736 8.6381 4.99032 7.50002 5Z"
                fill="#f5f5f5"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              fill="currentColor"
              className="bi bi-folder-minus mx-4"
              viewBox="0 0 16 16"
            >
              <path d="m.5 3 .04.87a1.99 1.99 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14H9v-1H2.826a1 1 0 0 1-.995-.91l-.637-7A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09L14.54 8h1.005l.256-2.819A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2zm5.672-1a1 1 0 0 1 .707.293L7.586 3H2.19c-.24 0-.47.042-.683.12L1.5 2.98a1 1 0 0 1 1-.98h3.672z" />
              <path d="M11 11.5a.5.5 0 0 1 .5-.5h4a.5.5 0 1 1 0 1h-4a.5.5 0 0 1-.5-.5z" />
            </svg>
          </div>
        </div>
        <div className="align-items-center play">
          <div className="d-flex justify-content-center">
            <div className="playbar">
              <svg
                className="mx-2"
                width={18}
                height={18}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 20H14.5L16.549 17.95L13.42 14.82L14.83 13.41L17.96 16.539L20 14.5V20ZM5.41 20L4 18.59L16.54 6.04L14.5 4H20V9.5L17.96 7.46L5.411 20H5.41ZM9.17 10.58L4 5.41L5.41 4L10.59 9.17L9.17 10.579V10.58Z"
                  fill="#F5F5F5"
                />
              </svg>
              <svg
                className="mx-2"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 18L9.5 12L18 6V18ZM8 18H6V6H8V18Z"
                  fill="#F5F5F5"
                />
              </svg>
              <svg
                className="mx-2"
                width={35}
                height={35}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C6.47967 21.994 2.00606 17.5204 2 12V11.8C2.10993 6.30455 6.63459 1.92797 12.1307 2.0009C17.6268 2.07382 22.0337 6.5689 21.9978 12.0654C21.9619 17.5618 17.4966 21.9989 12 22ZM10 7.50002V16.5L16 12L10 7.50002Z"
                  fill="#F5F5F5"
                />
              </svg>
              <svg
                className="mx-2"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 18H16V6H18V18ZM6 18V6L14.5 12L6 18Z"
                  fill="#F5F5F5"
                />
              </svg>
              <svg
                className="mx-2"
                width={18}
                height={18}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 22L3 18L7 14V17H17V13H19V18C19 18.5523 18.5523 19 18 19H7V22ZM7 11H5V6C5 5.44772 5.44772 5 6 5H17V2L21 6L17 10V7H7V11Z"
                  fill="#F5F5F5"
                />
              </svg>
            </div>
          </div>
          <div className="playbar align-items-center justify-content-space-between d-flex px-2 m-0 position-relative">
            <span>xxx</span>
            <hr className="playbarline" />
            <span>xxx</span>
          </div>
        </div>
        <div className="playbar align-items-center justify-content-space-between d-flex px-2 m-0 position-relative">
          <span>
            <svg
              className="mx-1"
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </span>
          <span>
            <svg
              className="mx-1"
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
              <path d="M8 4.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zM8 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-3.5 1.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
            </svg>
          </span>
          <span>
            <svg
              className="mx-1"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M9 4a.5.5 0 0 0-.812-.39L5.825 5.5H3.5A.5.5 0 0 0 3 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 9 12V4zM6.312 6.39 8 5.04v5.92L6.312 9.61A.5.5 0 0 0 6 9.5H4v-3h2a.5.5 0 0 0 .312-.11zM12.025 8a4.486 4.486 0 0 1-1.318 3.182L10 10.475A3.489 3.489 0 0 0 11.025 8 3.49 3.49 0 0 0 10 5.525l.707-.707A4.486 4.486 0 0 1 12.025 8z" />
            </svg>
          </span>
          <hr className="volumebarline" />
        </div>
      </div> */}
    </main>
  );
};
export default Homecomponent;
