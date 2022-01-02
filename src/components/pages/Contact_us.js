import React, { Fragment } from "react";

const Contact_us = () => {
  return (
    <Fragment>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="shortcut icon" href="style/images/favicon.png" />
      <title>Junoon</title>
      <link
        rel="stylesheet"
        type="text/css"
        href="style/css/bootstrap.min.css"
      />
      <link rel="stylesheet" type="text/css" href="style/css/plugins.css" />
      <link
        rel="stylesheet"
        type="text/css"
        href="style/revolution/css/settings.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="style/revolution/css/layers.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="style/revolution/css/navigation.css"
      />
      <link rel="stylesheet" type="text/css" href="style/type/icons.css" />
      <link rel="stylesheet" type="text/css" href="style.css" />
      <link
        rel="stylesheet"
        type="text/css"
        href="style/css/color/lavender.css"
      />
      <div className="content-wrapper">
        <nav className="navbar center navbar-expand-lg">
          <div className="container flex-lg-column">
            <div className="navbar-header">
              <a href="/">
                <div className="navbar-brand">
                  <img
                    intrinsicsize="1268x512"
                    src="#"
                    srcSet="style/images/junoon-black.avif 1x, style/images/junoon-black.avif 3x"
                    alt=""
                  />
                  <div className="logoText">f22 PHOTOGRAPHY CLUB</div>
                </div>
              </a>
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
            {/* /.navbar-header */}
            <div className="navbar-collapse collapse w-100 bg-light">
              <ul className="navbar-nav nav-fill w-100">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Home
                  </a>

                  {/*/.dropdown-menu */}
                </li>
                {/* <li className='nav-item dropdown'>
                    <a className='nav-link dropdown-toggle' href='/insta'>
                      Instagram
                    </a>
                    
                  </li>
                  <li className='nav-item dropdown'>
                    <a className='nav-link dropdown-toggle' href='/collection'>
                      Collections
                    </a>
                    
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
              </ul>
            </div>
          </div>
        </nav>
        <div className="wrapper light-wrapper">
          <div className="container inner pt-70">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <h2 className="section-title text-center">Get in Touch</h2>
                <p className="text-center">
                  Let's make something amazing together. Contact us for new
                  creative ideas, collaborations, photowalks and to get to know
                  more about f22 Photography Club .
                </p>
                <br></br>
                <div className="space20" />
                <div className="row text-center">
                  <div className="col-md-4 center-social">
                    {" "}
                    <span className="icon icon-color color-default fs-48 mb-10">
                      <a
                        href="https://www.facebook.com/f22photographyclub/"
                        target="_blank"
                      >
                        <i className="fa fa-facebook-f" />
                      </a>
                    </span>
                    <p className="fsocial-center">
                      <a
                        className="nocolor"
                        href="https://www.facebook.com/f22photographyclub/"
                        target="_blank"
                      >
                        f22 <br></br>Photography Club
                      </a>
                    </p>
                  </div>
                  {/*/column */}
                  <div className="col-md-4 center-social">
                    {" "}
                    <span className="icon icon-color color-default fs-48 mb-10">
                      <a
                        href="https://www.instagram.com/f22_photography_club/"
                        target="_blank"
                      >
                        <i className="fa fa-instagram" />
                      </a>
                    </span>
                    <p>
                      <a
                        className="nocolor"
                        href="https://www.instagram.com/f22_photography_club"
                        target="_blank"
                      >
                        f22
                      </a>
                    </p>
                  </div>
                  <div className="col-md-4 center-social">
                    {" "}
                    <span className="icon icon-color color-default fs-48 mb-10">
                      <a href="https://twitter.com/f22_club/" target="_blank">
                        <i className="fa fa-twitter" />
                      </a>
                    </span>
                    <p>
                      <a
                        className="nocolor"
                        href="https://twitter.com/f22_club"
                        target="_blank"
                      >
                        f22
                      </a>
                    </p>
                  </div>
                  {/*/column */}
                  <div className="col-md-4 center-social">
                    {" "}
                    <span className="icon icon-color color-default fs-48 mb-10">
                      <a
                        href="mailto: f22photographyclub@gmail.com"
                        target="_blank"
                      >
                        <i className="fa fa-envelope-o" />
                      </a>
                    </span>
                    <p>
                      <a
                        className="nocolor"
                        href="mailto: f22photographyclub@gmail.com"
                        target="_blank"
                      >
                        f22photographyclub@gmail.com
                      </a>
                    </p>
                  </div>
                  {/*/column */}
                </div>
                {/*/.row */}
                <div className="space30" />

                {/*/.form-container */}
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </div>
        {/* /.wrapper */}
      </div>
      {/* /.content-wrapper */}
      {/* SLIDER REVOLUTION 5.0 EXTENSIONS  (Load Extensions only on Local File Systems! The following part can be removed on Server for On Demand Loading) */}
      {/*







*/}
    </Fragment>
  );
};

export default Contact_us;
