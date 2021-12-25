import React, { Fragment } from "react";
import $ from "jquery";

/*
Inspired by Florin Pop's coding challenges, you can check them here: https://www.florin-pop.com/blog/2019/03/weekly-coding-challenge/
*/

const Home = () => {
  document.addEventListener("DOMContentLoaded", () => {
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= -65 &&
        rect.left >= -10 &&
        rect.bottom <=
          (window.innerHeight + 65 ||
            document.documentElement.clientHeight +
              65) /* or $(window).height() */ &&
        rect.right <=
          (window.innerWidth - 10 ||
            document.documentElement.clientWidth -
              10) /* or $(window).width() */
      );
    }

    function onVisibilityChange(el, callback) {
      var old_visible;
      return function () {
        var visible = isElementInViewport(el);
        if (visible != old_visible) {
          old_visible = visible;
          if (typeof callback == "function") {
            callback();
          }
        }
      };
    }

    var handler = onVisibilityChange(
      document.getElementById("count1"),
      function () {
        /* Your code go here */

        function counter(id, start, end, duration) {
          let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
              current += increment;
              obj.textContent = current;
              if (current == end) {
                clearInterval(timer);
              }
            }, step);
        }
        if (isElementInViewport(document.getElementById("count1"))) {
          counter("count1", 0, 124, 1000);
          counter("count2", 0, 45, 1000);
          counter("count3", 0, 57, 1000);
        } else {
          counter("count1", 0, 1, 1);
          counter("count2", 0, 1, 1);
          counter("count3", 0, 1, 1);
        }
      }
    );

    //console.log(handler);

    // jQuery
    $(window).on("DOMContentLoaded load resize scroll", handler);
  });

  return (
    <Fragment>
      <div className="content-wrapper">
        <nav className="navbar wide transparent absolute inverse-text navbar-expand-lg">
          <div className="container-fluid flex-row justify-content-center">
            <div className="navbar-header">
              <div className="navbar-brand">
                <a href="/">
                  <img
                    src="#"
                    srcSet="style/images/junoon-white.png 1x, style/images/junoon-white.png 4x"
                    alt=""
                  />
                </a>
              </div>
              <div className="navbar-hamburger ml-auto d-lg-none d-xl-none">
                <button
                  className="hamburger animate"
                  data-toggle="collapse"
                  data-target=".navbar-collapse"
                >
                  <span />
                </button>
              </div>
            </div>
            <div>
              f22 PHOTOGRAPHY <br /> CLUB
            </div>
            {/* /.navbar-header */}
            <div className="navbar-collapse collapse justify-content-between align-items-center">
              <ul className="navbar-nav plain mx-auto text-center">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Home
                  </a>

                  {/*/.dropdown-menu */}
                </li>

                {/* <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="/insta">Instagram</a>
                    
                  </li> */}
                {/* <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="/collection">Collections</a>
                    
                  </li> */}
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/about">
                    About
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/contact_us">
                    Contact
                  </a>
                </li>

                {/* <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="/timeline">timeline</a>
                  </li> */}
              </ul>
            </div>
            <div className="social-wrapper text-right">
              <ul className="social social-mute social-s mb-0">
                <li>
                  <a
                    href="https://www.facebook.com/f22photographyclub/"
                    target="_blank"
                  >
                    <i className="fa fa-facebook-f" />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.instagram.com/f22_photography_club/"
                    target="_blank"
                  >
                    <i className="fa fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
            {/*/.social-wrapper */}
          </div>
        </nav>
        <div className="rev_slider_wrapper fullscreen-container">
          <div
            id="slider10"
            className="rev_slider fullscreenbanner dark-wrapper"
            data-version="5.4.7"
          >
            <ul>
              <li data-transition="fade" data-thumb="style/images/cover6.jpg">
                <img src="style/images/cover6.jpg" alt="" />
              </li>
              <li data-transition="fade" data-thumb="style/images/cover5.jpeg">
                <img src="style/images/cover5.jpeg" alt="" />
              </li>
              <li data-transition="fade" data-thumb="style/images/cover7.jpeg">
                <img src="style/images/cover7.jpeg" alt="" />
              </li>
              <li data-transition="fade" data-thumb="style/images/cover4.jpeg">
                <img src="style/images/cover4.jpeg" alt="" />
              </li>
            </ul>
            <div className="tp-static-layers">
              <div
                className="tp-caption tp-static-layer tp-shape tp-shapewrapper tp-gradient"
                data-frames='[{"delay":0,"speed":300,"frame":"0","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                data-x="center"
                data-y="bottom"
                data-width="full"
                data-height={200}
                data-startslide={0}
                data-endslide={4}
                data-responsive_offset="on"
                data-textalign="['center','center','center','center']"
                data-type="shape"
                data-basealign="slide"
                data-whitespace="nowrap"
                style={{ zIndex: 6 }}
              />
              <div
                className="tp-caption tp-static-layer font-weight-500 color-white text-center"
                data-x="center"
                data-y="middle"
                data-voffset="['-80','-80','-80','-60']"
                data-fontsize="['55','55','55','35']"
                data-lineheight="['65','65','65','45']"
                data-width="['800','800','680','340']"
                data-textalign="['center','center','center','center']"
                data-whitespace="['normal','normal','normal','normal']"
                data-frames='[{"delay":1000,"speed":1200,"frame":"0","from":"y:-50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                data-startslide={0}
                data-endslide={4}
                data-responsive="on"
                data-responsive_offset="on"
                style={{ zIndex: 9 }}
              >
                f22
              </div>
              <div
                className="tp-caption tp-static-layer font-weight-200 color-white text-center"
                data-x="center"
                data-y="middle"
                data-voffset="['0','0','0','0']"
                data-fontsize="['26','26','26','20']"
                data-lineheight="['36','36','36','30']"
                data-width="['800','800','680','340']"
                data-textalign="['center','center','center','center']"
                data-whitespace="['normal','normal','normal','normal']"
                data-frames='[{"delay":1500,"speed":1200,"frame":"0","from":"x:-50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                data-startslide={0}
                data-endslide={4}
                data-responsive="on"
                data-responsive_offset="on"
                style={{ zIndex: 9, letterSpacing: "1px" }}
              >
                Kashmir Based Photography Club
              </div>
              <a
                className="tp-caption tp-static-layer btn btn-l btn-white scroll"
                data-x="center"
                data-y="middle"
                data-voffset="['90','90','90','70']"
                data-width="['auto','auto','auto','auto']"
                data-textalign="['center','center','center','center']"
                data-frames='[{"delay":2000,"speed":1200,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                data-startslide={0}
                data-endslide={4}
                data-responsive="on"
                data-responsive_offset="on"
                style={{ zIndex: 9 }}
                href="#portfolio"
              >
                See Our Works
              </a>
            </div>
            <div className="tp-bannertimer tp-bottom" />
          </div>
          {/* /.rev_slider */}
        </div>
        {/* /.rev_slider_wrapper */}
        <div className="wrapper dark-wrapper inverse-text fullscreen-container">
          <div className="container inner">
            <h2 className="section-title mb-30 text-center">About f22</h2>
            <div className="row d-flex align-items-center">
              <div className="col-lg-6 pr-35 pr-sm-15">
                <figure className="rounded">
                  <img src="style/images/junoon-logo-only.png" alt="" />
                </figure>
              </div>
              {/* /column */}
              <div className="space30 d-block d-lg-none d-xl-none" />
              <div className="col-lg-6">
                <p style={{ textAlign: "left" }} className="lead">
                  f22 was started as coming together of mentors and learners
                  with zeal to create, collaborate and grow together in
                  photographic adventures. A golden chance for all those who
                  have the desire and passion to work and learn with us
                </p>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}

            <div className="wrapper" id="anchor">
              <br></br>
              <br></br>
              <section>
                <div className="container">
                  <div className="row justify-content-center text-center">
                    <div className="col-md-4 col-sm-6">
                      <p>
                        <span id="count3" style={{ fontSize: "550%" }} />
                        <span> Competitions</span>
                      </p>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <p>
                        <span id="count1" style={{ fontSize: "550%" }} />
                        <span> Photowalks</span>
                      </p>
                    </div>
                    <div className="col-md-4 sol-sm-6">
                      <p>
                        <span id="count2" style={{ fontSize: "550%" }} />
                        <span> Work-Shops</span>
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="space60" />

            <div className="collage-container">
              <img className="collage" src="style/images/collage.jpeg" />
              <div className="col-lg-6">
                <p className="lead">
                  f22 presents an oppurtunity for you to learn and apply skills
                  taught by our renowned mentors in 2022. This workshop will
                  span 22 Sundays in the year. You can register by click on thre
                  button below.
                </p>
                <a
                  className=" btn btn-l btn-white scroll"
                  style={{ zIndex: 9 }}
                  href=""
                >
                  Register
                </a>
              </div>
            </div>
            <div className="space60" id="portfolio" />
            <h2 className="section-title mb-30 text-center">Our Craft</h2>
            <div className="tiles">
              <div className="items row boxed grid-view text-center">
                <div className="item col-md-6 col-lg-4">
                  <div className="box bg-inverse p-30">
                    <figure className="main mb-20 overlay overlay1 rounded">
                      <img src="style/images/h1.jpg" alt="" />
                      <figcaption>
                        <h5 className="text-uppercase from-top mb-0">
                          "Into the Mountains" <br></br>
                          <div className="space10" />
                          by umar farooq
                        </h5>
                      </figcaption>
                    </figure>
                  </div>
                  {/* /.box */}
                </div>
                {/*/.item */}
                <div className="item col-md-6 col-lg-4">
                  <div className="box bg-inverse p-30">
                    <figure className="main mb-20 overlay overlay1 rounded">
                      <img src="style/images/h2.jpg" alt="" />
                      <figcaption>
                        <h5 className="text-uppercase from-top mb-0">
                          "Be At Peace With Your Own Soul, Then Heaven And Earth
                          will Be At peace With You..."<br></br>
                          <div className="space10" />
                          by Amir Rafiq
                        </h5>
                      </figcaption>
                    </figure>
                  </div>
                  {/* /.box */}
                </div>
                {/*/.item */}
                <div className="item col-md-6 col-lg-4">
                  <div className="box bg-inverse p-30">
                    <figure className="main mb-20 overlay overlay1 rounded">
                      <img src="style/images/h3.jpg" alt="" />
                      <figcaption>
                        <h5 className="text-uppercase from-top mb-0">
                          "Choose only one Master— Nature." <br></br>
                          <div className="space10" />
                          by Sajad.
                        </h5>
                      </figcaption>
                    </figure>
                  </div>
                  {/* /.box */}
                </div>
                {/*/.item */}
                <div className="item col-md-6 col-lg-4">
                  <div className="box bg-inverse p-30">
                    <figure className="main mb-20 overlay overlay1 rounded">
                      <img src="style/images/h4.jpg" alt="" />
                      <figcaption>
                        <h5 className="text-uppercase from-top mb-0">
                          "Life is a succession of lessons which must be lived
                          to be understood."<br></br>{" "}
                          <div className="space10" />
                          by Abrar Fayaz
                        </h5>
                      </figcaption>
                    </figure>
                  </div>
                  {/* /.box */}
                </div>
                {/*/.item */}
                <div className="item col-md-6 col-lg-4">
                  <div className="box bg-inverse p-30">
                    <figure className="main mb-20 overlay overlay1 rounded">
                      <img src="style/images/h5.jpg" alt="" />
                      <figcaption>
                        <h5 className="text-uppercase from-top mb-0">
                          "We are like butterflies who flutter for a day and
                          think it is forever. -Carl Sagan"<br></br>
                          <div className="space10" /> by Abrar Fayaz
                        </h5>
                      </figcaption>
                    </figure>
                  </div>
                  {/* /.box */}
                </div>
                {/*/.item */}
                <div className="item col-md-6 col-lg-4">
                  <div className="box bg-inverse p-30">
                    <figure className="main mb-20 overlay overlay1 rounded">
                      <img src="style/images/h6.jpg" alt="" />
                      <figcaption>
                        <h5 className="text-uppercase from-top mb-0">
                          "Can I stop the flow of time? Oh can I swim in your
                          divine? Cause I don't I think I'd ever leave this
                          place"
                          <br></br>
                          <div className="space10" />
                          by Wani Umar.
                        </h5>
                      </figcaption>
                    </figure>
                  </div>
                  {/* /.box */}
                </div>
                {/*/.item */}
                <div className="item col-md-6 col-lg-4">
                  <div className="box bg-inverse p-30">
                    <figure className="main mb-20 overlay overlay1 rounded">
                      <img src="style/images/h7.jpg" alt="" />
                      <figcaption>
                        <h5 className="text-uppercase from-top mb-0"></h5>
                      </figcaption>
                    </figure>
                  </div>
                  {/* /.box */}
                </div>
                {/*/.item */}
                <div className="item col-md-6 col-lg-4">
                  <div className="box bg-inverse p-30">
                    <figure className="main mb-20 overlay overlay1 rounded">
                      <img src="style/images/h8.jpg" alt="" />
                      <figcaption>
                        <h5 className="text-uppercase from-top mb-0"></h5>
                      </figcaption>
                    </figure>
                  </div>
                  {/* /.box */}
                </div>
                {/*/.item */}
                <div className="item col-md-6 col-lg-4">
                  <div className="box bg-inverse p-30">
                    <figure className="main mb-20 overlay overlay1 rounded">
                      <img src="style/images/h9.jpg" alt="" />
                      <figcaption>
                        <h5 className="text-uppercase from-top mb-0"></h5>
                      </figcaption>
                    </figure>
                  </div>
                  {/* /.box */}
                </div>
                {/*/.item */}
              </div>
              {/*/.row */}
            </div>
            {/*/.tiles */}
            <div className="space150" />
            <h2 className="section-title mb-30 text-center">
              Best of Our Stories
            </h2>
            <div className="blog grid grid-view boxed">
              <div className="row isotope">
                <div className="item post grid-sizer col-md-6 mb-0">
                  <div className="box bg-inverse">
                    <figure className="main mb-30 overlay overlay1 rounded">
                      <a
                        href="https://www.facebook.com/f22photographyclub"
                        target="_blank"
                      >
                        {" "}
                        <img src="style/images/story3.jpg" alt="" />
                      </a>
                      <figcaption>
                        <h5 className="text-uppercase from-top mb-0">
                          Story 1
                        </h5>
                      </figcaption>
                    </figure>

                    <h2 className="post-title">
                      <a
                        href="https://www.facebook.com/f22photographyclub"
                        target="_blank"
                      >
                        Story 1
                      </a>
                    </h2>
                    <div className="post-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque pulvinar id magna sed varius. Cras rhoncus
                        orci vitae efficitur hendrerit. In feugiat ultrices
                        massa vel faucibus. Proin feugiat odio purus, nec
                        condimentum dolor efficitur pretium. Curabitur euismod
                        magna in egestas mollis. Ut ut metus auctor, congue nunc
                        eget, maximus eros. Phasellus at pretium augue. Maecenas
                        volutpat accumsan rhoncus. Curabitur imperdiet ipsum
                        metus, ut pellentesque erat posuere nec. Morbi at purus
                        eu mi maximus faucibus. Aliquam ante augue, dapibus a
                        semper ut, lacinia vel massa. Praesent fermentum ante
                        sit amet est mollis ornare. Fusce quis ullamcorper Sed
                        venenatis turpis non risus vestibulum.
                      </p>
                    </div>
                    {/* /.post-content */}
                    <hr />
                    <div className="meta meta-footer d-flex justify-content-between mb-0">
                      <span className="date">5 Jul 2018</span>
                      <span className="comments">
                        <a>12</a>
                      </span>
                    </div>
                  </div>
                  {/* /.box */}
                </div>
                {/* /.post */}
                <div className="item post grid-sizer col-md-6 mb-0">
                  <div className="box bg-inverse">
                    <figure className="main mb-30 overlay overlay1 rounded">
                      <a
                        href="https://www.facebook.com/f22photographyclub"
                        target="_blank"
                      >
                        {" "}
                        <img src="style/images/story1.jpg" alt="" />
                      </a>
                      <figcaption>
                        <h5 className="text-uppercase from-top mb-0">
                          Story 2
                        </h5>
                      </figcaption>
                    </figure>

                    <h2 className="post-title">
                      <a
                        href="https://www.facebook.com/f22photographyclub"
                        target="_blank"
                      >
                        Story 2
                      </a>
                    </h2>
                    <div className="post-content">
                      <p>
                        Fusce quis ullamcorper Sed venenatis turpis non risus
                        vestibulum, ulla ut tortor non justo luctus rhoncus. Sed
                        varius congue tellus, sit amet sodales arcu aliquet
                        quis. Duis dignissim, sapien quis tristique
                        sollicitudin, justo nulla facilisis lorem, nec accumsan
                        nulla lectus eget odio. Nunc vehicula ex et risus
                        gravida fringilla et sit amet neque. Vivamus vulputate
                        malesuada ipsum a pulvinar. Maecenas eget quam et diam
                        semper mollis. Nunc tempus, odio quis tempus eleifend,
                        lectus leo ultricies sapien, eget volutpat tellus urna
                        ac ante. Aliquam aliquet porttitor libero et rhoncus.
                        Aliquam sed neque non eros porta maximus at et lorem. In
                        ultricies tempus magna, et varius quam lacinia ac.Nulla
                        vulputate elit non placerat elementum.
                      </p>
                    </div>
                    {/* /.post-content */}
                    <hr />
                    <div className="meta meta-footer d-flex justify-content-between mb-0">
                      <span className="date">18 Jun 2018</span>
                      <span className="comments">
                        <a>15</a>
                      </span>
                    </div>
                  </div>
                  {/* /.box */}
                </div>
                {/* /.post */}
              </div>
              {/* /.row */}
            </div>
            {/* /.blog */}
          </div>
          {/* /.container */}
        </div>
        {/* /.wrapper */}
        <footer className="dark-wrapper inverse-text">
          <div className="container inner">
            <div className="row d-md-flex align-items-md-center">
              <div className="col-md-4 text-center text-md-left">
                <p className="mb-0"></p>
              </div>
              {/*/column */}
              <div className="col-md-4 text-center footy">
                <img
                  src="#"
                  srcSet="style/images/junoon-white.png 1x, style/images/junoon-white.png 4x"
                  alt=""
                />
              </div>
              {/*/column */}
              <div className="col-md-4 text-center text-md-right">
                <ul className="social social-mute social-s mt-10">
                  <li>
                    <a
                      href="https://www.facebook.com/f22photographyclub/"
                      target="_blank"
                    >
                      <i className="fa fa-facebook-f" />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.instagram.com/f22_photography_club/"
                      target="_blank"
                    >
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
              {/*/column */}
            </div>
            {/*/.row */}
          </div>
          {/* /.container */}
        </footer>
      </div>
      {/* /.content-wrapper */}
      {/* SLIDER REVOLUTION 5.0 EXTENSIONS  (Load Extensions only on Local File Systems! The following part can be removed on Server for On Demand Loading) */}
    </Fragment>
  );
};

export default Home;
