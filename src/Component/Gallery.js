import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import $ from 'jquery';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const Gallery = () => {
  const navigate = useNavigate();
  const DonateLink = () => {
    navigate("/Signin", { replace: true });
  };
  //   useEffect(() => {
  //     const loadScript = (src) => {
  //       return new Promise((resolve, reject) => {
  //           if (document.querySelector(`script[src="${src}"]`)) {
  //               resolve();
  //               return;
  //           }

  //           const script = document.createElement('script');
  //           script.src = src;
  //           script.async = true;
  //           script.onload = () => resolve(src);
  //           script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
  //           document.body.appendChild(script);
  //       });
  //   };
  //   const initializeFancybox = () => {
  //     if (window.$ && window.$.fancybox) {
  //         $(".fancybox").fancybox();
  //     } else {
  //         console.error('Fancybox or jQuery is not available');
  //     }
  // };
  //     const initMap = () => {
  //       // Ensure `google.maps` is defined before trying to use it.
  //       if (window.google && window.google.maps) {
  //           // Initialize the map or whatever you want to do with `google.maps`
  //           console.log('Google Maps API is ready to use');
  //       } else {
  //           console.error('Google Maps API failed to load');
  //       }
  //   };
  //     const loadScriptsInOrder = async () => {
  //         try {
  //             await loadScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false');
  //             await loadScript('/js/jquery.min.js');
  //             await loadScript('/js/jquery-migrate-3.0.1.min.js');
  //             await loadScript('/js/popper.min.js');
  //             await loadScript('/js/bootstrap.min.js');
  //             await loadScript('/js/jquery.easing.1.3.js');
  //             await loadScript('/js/jquery.waypoints.min.js');
  //             await loadScript('/js/jquery.stellar.min.js');
  //             await loadScript('/js/owl.carousel.min.js');
  //             await loadScript('/js/jquery.magnific-popup.min.js');
  //             await loadScript('/js/bootstrap-datepicker.js');
  //             await loadScript('/js/jquery.fancybox.min.js');
  //             await loadScript('/js/aos.js');
  //             await loadScript('/js/jquery.animateNumber.min.js');
  //             await loadScript('/js/google-map.js');
  //             await loadScript('/js/main.js');
  //         } catch (error) {
  //             console.error('Script loading failed:', error);
  //         }
  //     };

  //     loadScriptsInOrder();
  //     return () => {
  //       const scripts = document.querySelectorAll('script[src^="/js/"], script[src^="https://maps.googleapis.com"]');
  //       scripts.forEach(script => script.parentNode.removeChild(script));
  //   };
  // }, []);
  const loadScript = (src) => {
    return new Promise((resolve, reject) => {
      if (document.querySelector(`script[src="${src}"]`)) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.onload = () => resolve(src);
      script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
      document.body.appendChild(script);
    });
  };
  useEffect(() => {
    const initializeLibraries = async () => {
      try {
        await loadScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false');
        await loadScript('/js/jquery.min.js');
        await loadScript('/js/jquery-migrate-3.0.1.min.js');
        await loadScript('/js/popper.min.js');
        await loadScript('/js/bootstrap.min.js');
        await loadScript('/js/jquery.easing.1.3.js');
        await loadScript('/js/jquery.waypoints.min.js');
        await loadScript('/js/jquery.stellar.min.js');
        await loadScript('/js/owl.carousel.min.js');
        await loadScript('/js/jquery.magnific-popup.min.js');
        await loadScript('/js/bootstrap-datepicker.js');
        await loadScript('/js/jquery.fancybox.min.js');
        await loadScript('/js/aos.js');
        await loadScript('/js/jquery.animateNumber.min.js');
        await loadScript('/js/google-map.js');
        await loadScript('/js/main.js');
  
        // Check if libraries are available
        console.log('Fancybox:', window.$ && window.$.fancybox);
        console.log('Google Maps API:', window.google && window.google.maps);
      } catch (error) {
        console.error('Script loading failed:', error);
      }
    };
  
    initializeLibraries();
  
    return () => {
      // Cleanup scripts
      const scripts = document.querySelectorAll('script[src^="/js/"], script[src^="https://maps.googleapis.com"]');
      scripts.forEach(script => script.parentNode.removeChild(script));
    };
  }, []);
  
      return (
        <div>
          <link rel="stylesheet" href="/css/style.css" />
            <link href="https://fonts.googleapis.com/css?family=Overpass:300,400,500|Dosis:400,700" rel="stylesheet"/>
    <link rel="stylesheet" href="/css/open-iconic-bootstrap.min.css"/>
    <link rel="stylesheet" href="/css/animate.css"/>
    <link rel="stylesheet" href="/css/owl.carousel.min.css"/>
    <link rel="stylesheet" href="/css/owl.theme.default.min.css"/>
    <link rel="stylesheet" href="/css/magnific-popup.css"/>
    <link rel="stylesheet" href="/css/aos.css"/>
    <link rel="stylesheet" href="/css/ionicons.min.css"/>
    <link rel="stylesheet" href="/css/bootstrap-datepicker.css"/>
    <link rel="stylesheet" href="/css/jquery.timepicker.css"/>
    <link rel="stylesheet" href="/css/flaticon.css"/>
    <link rel="stylesheet" href="/css/icomoon.css"/>
    <link rel="stylesheet" href="/css/fancybox.min.css"/>

    <link rel="stylesheet" href="/css/bootstrap.css"/>
          <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
            <div className="container">
              <a className="navbar-brand" href="index.html">Share & Care</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="oi oi-menu"></span> Menu
              </button>
              <div>
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item"><Link to={'/'} className="nav-link">Home</Link></li>
                  <li className="nav-item active"><Link to={'/gallery'} className="nav-link">Gallery</Link></li>
                  <li className="nav-item"><Link to={'/contact'} className="nav-link">Contact</Link></li>
                  <li className="nav-item"><Link to={'/pages'} className="nav-link">Pages</Link></li>
                  <li className="nav-item"><button className='btn btn-success btn-hover-white' style={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          backgroundColor: 'green',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
        }} onClick={() => {
          DonateLink();
        }}>Donate</button></li>
                </ul>
              </div>
            </div>
          </nav>
    
          <div className="block-31" style={{ position: 'relative' }}>
            <div className="owl-carousel loop-block-31">
              <div className="block-30 block-30-sm item" style={{ backgroundImage: "url('/images/bg_1.jpg')" }} data-stellar-background-ratio="0.5">
                <div className="container">
                  <div className="row align-items-center justify-content-center text-center">
                    <div className="col-md-7">
                      <h2 className="heading">Our Gallery</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="site-section">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <a href="images/img_1.jpg" className="img-hover" data-fancybox="gallery">
            <span className="icon icon-search"></span>
            <img src="images/img_1.jpg" alt="Image placeholder" className="img-fluid"/>
          </a>
        </div>
        <div className="col-md-4">
          <a href="images/img_2.jpg" className="img-hover" data-fancybox="gallery">
            <span className="icon icon-search"></span>
            <img src="images/img_2.jpg" alt="Image placeholder" className="img-fluid"/>
          </a>
        </div>
        <div className="col-md-4">
          <a href="images/img_3.jpg" className="img-hover" data-fancybox="gallery">
            <span className="icon icon-search"></span>
            <img src="images/img_3.jpg" alt="Image placeholder" className="img-fluid"/>
          </a>
        </div>
        <div className="col-md-4">
          <a href="images/img_4.jpg" className="img-hover" data-fancybox="gallery">
            <span className="icon icon-search"></span>
            <img src="images/img_4.jpg" alt="Image placeholder" className="img-fluid"/>
          </a>
        </div>

        <div className="col-md-4">
          <a href="images/img_1.jpg" className="img-hover" data-fancybox="gallery">
            <span className="icon icon-search"></span>
            <img src="images/img_1.jpg" alt="Image placeholder" className="img-fluid"/>
          </a>
        </div>
        <div className="col-md-4">
          <a href="images/img_2.jpg" className="img-hover" data-fancybox="gallery">
            <span className="icon icon-search"></span>
            <img src="images/img_2.jpg" alt="Image placeholder" className="img-fluid"/>
          </a>
        </div>
      </div>
    </div>
  </div>


    
          <div className="featured-section overlay-color-2" style={{ backgroundImage: "url('/images/bg_2.jpg')" }}>
            <div className="container">
              <div className="row">
                <div className="col-md-6 mb-5 mb-md-0">
                  <img src="images/bg_2.jpg" alt="Image placeholder" className="img-fluid" />
                </div>
                <div className="col-md-6 pl-md-5">
                  <div className="form-volunteer">
                    <h2>Be A Volunteer Today</h2>
                    <form action="#" method="post">
                      <div className="form-group">
                        <input type="text" className="form-control py-2" id="name" placeholder="Enter your name" />
                      </div>
                      <div className="form-group">
                        <input type="text" className="form-control py-2" id="email" placeholder="Enter your email" />
                      </div>
                      <div className="form-group">
                        <textarea name="v_message" id="" cols="30" rows="3" className="form-control py-2" placeholder="Write your message"></textarea>
                      </div>
                      <div className="form-group">
                        <input type="submit" className="btn btn-white px-5 py-2" value="Send" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };

export default Gallery