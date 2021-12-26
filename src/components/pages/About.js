import React, { Fragment, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const About = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <Fragment>
      <div>
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
                <div className="navbar-brand">
                  <img
                    intrinsicsize="1268x512"
                    src="#"
                    srcSet="style/images/junoon-black.png 1x, style/images/junoon-black.png 3x"
                    alt=""
                  />
                  <div className="logoText">f22 PHOTOGRAPHY CLUB</div>
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
              <h2 className="section-title mb-40 text-center">Meet the Team</h2>
              <div className="row boxed grid-view">
                {/*/column */}
                <div className="col-md-11" style={{ margin: "0 auto" }}>
                  <div className="box bg-white shadow p-90">
                    <figure className="main">
                      <img src="style/images/fam.jpg" alt="" />
                    </figure>
                    <h4 className="mb-5">f22</h4>
                    <div className="meta mb-10"></div>
                    <p>Kashmir Based Photography Club</p>
                    <ul className="social social-mute">
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
                  {/* /.box */}
                  <div className="space100" />
                  <div className="rowCard">
                    <div className="photo">
                      <img className="img1" src="style/images/vikar.jpg" />
                    </div>
                    <div className="content">
                      <div>
                        <h3>Vikar Syed, Mentor</h3>
                      </div>
                      <p>
                        Lead Video Producer <br></br>at Free Press Kashmir
                      </p>
                    </div>
                  </div>
                  <div className="space100" />

                  <div className="rowCard">
                    <div className="photo">
                      <img className="img1" src="style/images/admin1.jpg" />
                    </div>
                    <div className="content">
                      <div>
                        <h3>Wani Umar, Admin</h3>
                      </div>
                      <p>
                        Freelance Photojournalist <br></br>Contact:
                        +91-8493025535
                      </p>
                    </div>
                  </div>
                  <div className="space100" />

                  <div className="rowCard">
                    <div className="photo">
                      <img className="img1" src="style/images/admin2.jpg" />
                    </div>
                    <div className="content">
                      <div>
                        <h3>Wani Hanan, Admin</h3>
                      </div>
                      <p>
                        Photographer and Educationist <br></br> Contact:
                        +91-7006404355
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space100" />

                {/*/column */}

                {/*/column */}

                {/*/column */}
              </div>
              {/*/.row */}
            </div>
            {/* /.container */}
          </div>

          {/* /.wrapper */}

          {/* /.wrapper */}
          {/* <div className='wrapper light-wrapper'>
            <div className='container inner'>
              <h2 className='section-title text-center'>Words of Alumuni</h2>
              <div className='cube-carousel cbp'>
                <div className='cbp-item'>
                  <div className='box bg-white shadow'>
                    <blockquote className='icon icon-left'>
                      <p>
                        Sed posuere consectetur est at lobortis. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. Duis
                        mollis, est non commodo luctus, nisi erat porttitor
                        ligula lacinia odio.
                      </p>
                      <footer className='blockquote-footer'>
                        Connor Gibson
                      </footer>
                    </blockquote>
                  </div>
                 
                </div>
               
                <div className='cbp-item'>
                  <div className='box bg-white shadow'>
                    <blockquote className='icon icon-left'>
                      <p>
                        Sed posuere consectetur est at lobortis. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. Duis
                        mollis, est non commodo luctus, nisi erat porttitor
                        ligula lacinia odio.
                      </p>
                      <footer className='blockquote-footer'>
                        Coriss Ambady
                      </footer>
                    </blockquote>
                  </div>
                 
                </div>
                
                <div className='cbp-item'>
                  <div className='box bg-white shadow'>
                    <blockquote className='icon icon-left'>
                      <p>
                        Sed posuere consectetur est at lobortis. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. Duis
                        mollis, est non commodo luctus, nisi erat porttitor
                        ligula lacinia odio.
                      </p>
                      <footer className='blockquote-footer'>
                        Barclay Widerski
                      </footer>
                    </blockquote>
                  </div>
                
                </div>
               
                <div className='cbp-item'>
                  <div className='box bg-white shadow'>
                    <blockquote className='icon icon-left'>
                      <p>
                        Sed posuere consectetur est at lobortis. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. Duis
                        mollis, est non commodo luctus, nisi erat porttitor
                        ligula lacinia odio.
                      </p>
                      <footer className='blockquote-footer'>
                        Nikola Brooten
                      </footer>
                    </blockquote>
                  </div>
                 
                </div>
              
                <div className='cbp-item'>
                  <div className='box bg-white shadow'>
                    <blockquote className='icon icon-left'>
                      <p>
                        Sed posuere consectetur est at lobortis. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. Duis
                        mollis, est non commodo luctus, nisi erat porttitor
                        ligula lacinia odio.
                      </p>
                      <footer className='blockquote-footer'>
                        Jackie Sanders
                      </footer>
                    </blockquote>
                  </div>
                  
                </div>
               
                <div className='cbp-item'>
                  <div className='box bg-white shadow'>
                    <blockquote className='icon icon-left'>
                      <p>
                        Sed posuere consectetur est at lobortis. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. Duis
                        mollis, est non commodo luctus, nisi erat porttitor
                        ligula lacinia odio.
                      </p>
                      <footer className='blockquote-footer'>Cory Zamora</footer>
                    </blockquote>
                  </div>
                 
                </div>
              
                <div className='cbp-item'>
                  <div className='box bg-white shadow'>
                    <blockquote className='icon icon-left'>
                      <p>
                        Sed posuere consectetur est at lobortis. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. Duis
                        mollis, est non commodo luctus, nisi erat porttitor
                        ligula lacinia odio.
                      </p>
                      <footer className='blockquote-footer'>
                        Pierce Bailey
                      </footer>
                    </blockquote>
                  </div>
                  
                </div>
               
              </div>
             
            </div>
           
          </div> */}
          {/* /.wrapper */}
          {/* <div className='wrapper gray-wrapper'>
            <div className='container inner'>
              <h2 className='section-title text-center'>Instagram Feed</h2>
              <p className='lead text-center'>
                Here you will find the latest shots from our Instagram feed.
              </p>
              <div className='space20' />
              <div className='tiles tiles-s'>
                <div id='instafeed' className='items row' />
              </div> */}
          {/*/.tiles */}
          {/* <div className='space40' />
              <div className='text-center'>
                <a href='#' className='btn'>
                  Instagram Page
                </a>
              </div>
            </div> */}
          {/* /.container */}
          {/* </div> */}
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
        {/*







*/}
      </div>
    </Fragment>
  );
};

export default About;
