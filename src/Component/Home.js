import React, { useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Reviews from './Reviews';



const Home = () => {
  const navigate = useNavigate();
  const DonateLink = () => {
    navigate("/Signin", { replace: true });
  };
  const ComplaintsLink = () => {
    navigate("/complaints", { replace: true });
  };
//   useEffect(() => {
//     const loadScript = (src) => {
//         return new Promise((resolve, reject) => {
//             const script = document.createElement('script');
//             script.src = src;
//             script.async = true;
//             script.onload = resolve;
//             script.onerror = reject;
//             document.body.appendChild(script);
//         });
//     };
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

// }, []);
const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = resolve;
    script.onerror = () => reject(new Error(`Failed to load script ${src}`));
    document.body.appendChild(script);
  });
};

useEffect(() => {
  const loadScript = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.onload = resolve;
      script.onerror = () => reject(new Error(`Failed to load script ${src}`));
      document.body.appendChild(script);
    });
  };

  const handleGoogleMapsError = () => {
    console.error('Google Maps API failed to load properly.');
  };

  const loadScriptsInOrder = async () => {
    try {
      const googleMapsScript = document.createElement('script');
      googleMapsScript.src =
        'https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false';
      googleMapsScript.async = true;
      googleMapsScript.onerror = handleGoogleMapsError;
      document.body.appendChild(googleMapsScript);

      googleMapsScript.onload = async () => {
        // Check if Google Maps API loaded successfully
        if (!window.google || !window.google.maps) {
          handleGoogleMapsError();
          return;
        }

        const scripts = [
          '/js/jquery.min.js',
          '/js/jquery-migrate-3.0.1.min.js',
          '/js/popper.min.js',
          '/js/bootstrap.min.js',
          '/js/jquery.easing.1.3.js',
          '/js/jquery.waypoints.min.js',
          '/js/jquery.stellar.min.js',
          '/js/owl.carousel.min.js',
          '/js/jquery.magnific-popup.min.js',
          '/js/bootstrap-datepicker.js',
          '/js/jquery.fancybox.min.js',
          '/js/aos.js',
          '/js/jquery.animateNumber.min.js',
          '/js/google-map.js',
          '/js/main.js',
        ];

        for (const script of scripts) {
          await loadScript(script);
        }
      };
    } catch (error) {
      console.error('Script loading failed:', error);
    }
  };

  loadScriptsInOrder();
}, []);



  return (
    <>
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
        <a class="navbar-brand" href="index.html">Share & Care</a>
        {/* <a className="navb      <link rel="stylesheet" href="/css/style.css" />ar-brand" href="index.html" style={{ height: '50px', width: '70px'}}>
  <img src="data:image/png;base64,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"  alt="Share & Care Logo"/>
</a> */}

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="oi oi-menu"></span> Menu
          </button>

           <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active"><Link to={'/'} className="nav-link">Home</Link></li>
              <li className="nav-item"><Link to={'/gallery'} className="nav-link">Gallery</Link></li>
              <li className="nav-item"><Link to={'/contact'} className="nav-link">Contact</Link></li>
              <li className="nav-item"><Link to={'/pages'} className="nav-link">Pages</Link></li>
              <li className="nav-item"><Link to={'/ComplaintForm'} className="nav-link">Complaints</Link></li>
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
    <div>
    <div className="block-30 block-30-sm item" style={{ backgroundImage: "url('images/bg_2.jpg')" }} data-stellar-background-ratio="0.5">
        <div className="container">
          <div className="row align-items-center justify-content-center text-center">
            <div className="col-md-7">
              <h2 className="heading mb-5">Sharing is Caring</h2>
              {/* <p style={{display: 'inline-block'}}><a href="https://vimeo.com/channels/staffpicks/93951774"  data-fancybox className="ftco-play-video d-flex"><span className="play-icon-wrap align-self-center mr-4"><span className="ion-ios-play"></span></span> <span className="align-self-center">Watch Video</span></a></p> */}
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
  <div className="site-section section-counter">
    <div className="container">
      <div className="row">
        <div className="col-md-6 pr-5">
          <div className="block-48">
              <span className="block-48-text-1">Served Over</span>
              <div className="block-48-counter ftco-number" data-number="1321901">0</div>
              <span className="block-48-text-1 mb-4 d-block">Children in 150 Countries</span>
              {/* <p className="mb-0"><a href="#" className="btn btn-white px-3 py-2">View Our Program</a></p> */}
            </div>
        </div>
        <div className="col-md-6 welcome-text">
          <h2 className="display-4 mb-3">Who Are We?</h2>
          <p className="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
          <p className="mb-4">A small river named Duden flows by their place and supplies it with the necessary regelialia. </p>
          <p className="mb-0"><p className="btn btn-primary px-3 py-2">Learn More</p></p>
        </div>
      </div>
    </div>
  </div>

  <div className="site-section border-top">
    <div className="container">
      <div className="row">

        <div className="col-md-4">
          <div className="media block-6">
            <div className="icon"><span className="ion-ios-bulb"></span></div>
            <div className="media-body">
              <h3 className="heading">Our Mission</h3>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              {/* <p><a href="#" className="link-underline">Learn More</a></p> */}
            </div>
          </div>     
        </div>

        <div className="col-md-4">
          <div className="media block-6">
            <div className="icon"><span className="ion-ios-cash"></span></div>
            <div className="media-body">
              <h3 className="heading">Make Donations</h3>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              {/* <p><a href="#" className="link-underline">Learn More</a></p> */}
            </div>
          </div>  
        </div>

        <div className="col-md-4">
          <div className="media block-6">
            <div className="icon"><span className="ion-ios-contacts"></span></div>
            <div className="media-body">
              <h3 className="heading">We Need Volunteers</h3>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              {/* <p><a href="#" className="link-underline">Learn More</a></p> */}
            </div>
          </div> 
        </div>

      </div>
    </div>
  </div> 



  




  <div className="site-section fund-raisers">
    <div className="container">
      <div className="row mb-3 justify-content-center">
        <div className="col-md-8 text-center">
          <h2>Latest Donations</h2>
          <p className="lead">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <p className="mb-5"><a href="#" className="link-underline">View All Donations</a></p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 col-lg-3 mb-5">
          <div className="person-donate text-center">
            <img src="/images/person_1.jpg" alt="Image placeholder" className="img-fluid"/>
            <div className="donate-info">
              <h2>Jorge Smith</h2>
              <span className="time d-block mb-3">Donated Just now</span>
              <p>Donated <span className="text-success">$252</span> <br/> <em>for</em> <a href="#" className="link-underline fundraise-item">Water Is Life. Clean Water In Urban Area</a></p>
            </div>
          </div>    
        </div>

        <div className="col-md-6 col-lg-3 mb-5">
          <div className="person-donate text-center">
            <img src="/images/person_2.jpg" alt="Image placeholder" className="img-fluid"/>
            <div className="donate-info">
              <h2>Christine Charles</h2>
              <span className="time d-block mb-3">Donated 1 hour ago</span>
              <p>Donated <span className="text-success">$400</span> <br/> <em>for</em> <a href="#" className="link-underline fundraise-item">Children Needs Education</a></p>
            </div>
          </div>    
        </div>

        <div className="col-md-6 col-lg-3 mb-5">
          <div className="person-donate text-center">
            <img src="/images/person_3.jpg" alt="Image placeholder" className="img-fluid"/>
            <div className="donate-info">
              <h2>Albert Sluyter</h2>
              <span className="time d-block mb-3">Donated 4 hours ago</span>
              <p>Donated <span className="text-success">$1,200</span> <br/> <em>for</em> <a href="#" className="link-underline fundraise-item">Need Shelter for Children in Africa</a></p>
            </div>
          </div>    
        </div>

        <div className="col-md-6 col-lg-3 mb-5">
          <div className="person-donate text-center">
            <img src="/images/person_4.jpg" alt="Image placeholder" className="img-fluid"/>
            <div className="donate-info">
              <h2>Andrew Holloway</h2>
              <span className="time d-block mb-3">Donated 9 hours ago</span>
              <p>Donated <span className="text-success">$100</span> <br/> <em>for</em> <a href="#" className="link-underline fundraise-item">Water Is Life. Clean Water In Urban Area</a></p>
            </div>
          </div>    
        </div>
      </div>
    </div>
  </div> 
  <Reviews/>

  <div
  className="featured-section overlay-color-2"
  style={{ backgroundImage: "url('images/bg_3.jpg')" }}
>    
    <div className="container">
      <div className="row">

        <div className="col-md-6">
          <img src="/images/bg_3.jpg" alt="Image placeholder" className="img-fluid"/>
        </div>

        <div className="col-md-6 pl-md-5">
          <span className="featured-text d-block mb-3">Success Stories</span>
          <h2>Water Is Life. We Successfuly Provide Clean Water in South East Asia</h2>
          <p className="mb-3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          <span className="fund-raised d-block mb-5">We have raised $100,000</span>

          <p><a href="#" className="btn btn-success btn-hover-white py-3 px-5">Read The Full Story</a></p>
        </div>
        
      </div>
    </div>

  </div>

  <div className="site-section bg-light">
    <div className="container">
      <div className="row mb-5">
        <div className="col-md-12">
          <h2>Latest News</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0">
          <div className="post-entry">
            <a href="#" className="mb-3 img-wrap">
              <img src="/images/img_4.jpg" alt="Image placeholder" className="img-fluid"/>
            </a>
            <h3><a href="#">Be A Volunteer Today</a></h3>
            <span className="date mb-4 d-block text-muted">July 26, 2018</span>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
            <p><a href="#" className="link-underline">Read More</a></p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0">
          <div className="post-entry">
            <a href="#" className="mb-3 img-wrap">
              <img src="/images/img_5.jpg" alt="Image placeholder" className="img-fluid"/>
            </a>
            <h3><a href="#">You May Save The Life of A Child</a></h3>
            <span className="date mb-4 d-block text-muted">July 26, 2018</span>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
            <p><a href="#" className="link-underline">Read More</a></p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0">
          <div className="post-entry">
            <a href="#" className="mb-3 img-wrap">
              <img src="/images/img_6.jpg" alt="Image placeholder" className="img-fluid"/>
            </a>
            <h3><a href="#">Children That Needs Care</a></h3>
            <span className="date mb-4 d-block text-muted">July 26, 2018</span>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
            <p><a href="#" className="link-underline">Read More</a></p>
          </div>
        </div>
      </div>
    </div>
  </div> 

  <div
  className="featured-section overlay-color-2"
  style={{ backgroundImage: "url('images/bg_2.jpg')" }}
>    
    <div className="container">
      <div className="row">

        <div className="col-md-6 mb-5 mb-md-0">
          <img src="/images/bg_2.jpg" alt="Image placeholder" className="img-fluid"/>
        </div>

        <div className="col-md-6 pl-md-5">

          <div className="form-volunteer">
            
            <h2>Be A Volunteer Today</h2>
            <form action="#" method="post">
              <div className="form-group">
               <label htmlFor="name">Name</label>
                <input type="text" className="form-control py-2" id="name" placeholder="Enter your name"/>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" className="form-control py-2" id="email" placeholder="Enter your email"/>
              </div>
              <div className="form-group">
                 <label htmlFor="v_message">Message</label>
                <textarea name="v_message" id="" cols="30" rows="3" className="form-control py-2" placeholder="Write your message"></textarea>
              </div>
              <div className="form-group">
                <input type="submit" className="btn btn-white px-5 py-2" value="Send"/>
              </div>
            </form>
          </div>
        </div>
        
      </div>
    </div>

  </div> 

  <footer className="footer">
    <div className="container">
      <div className="row mb-5">
        <div className="col-md-6 col-lg-4">
          <h3 className="heading-section">About Us</h3>
          <p className="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
          <p className="mb-5">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
          <p><a href="#" className="link-underline">Read  More</a></p>
        </div>
        <div className="col-md-6 col-lg-4">
          <h3 className="heading-section">Recent Blog</h3>
          <div className="block-21 d-flex mb-4">
            <figure className="mr-3">
              <img src="/images/img_1.jpg" alt="" className="img-fluid"/>
            </figure>
            <div className="text">
              <h3 className="heading"><a href="#">Water Is Life. Clean Water In Urban Area</a></h3>
              <div className="meta">
                <div><a href="#"><span className="icon-calendar"></span> July 29, 2018</a></div>
                <div><a href="#"><span className="icon-person"></span> Admin</a></div>
                <div><a href="#"><span className="icon-chat"></span> 19</a></div>
              </div>
            </div>
          </div>

          <div className="block-21 d-flex mb-4">
            <figure className="mr-3">
              <img src="/images/img_2.jpg" alt="" className="img-fluid"/>
            </figure>
            <div className="text">
              <h3 className="heading"><a href="#">Life Is Short So Be Kind</a></h3>
              <div className="meta">
                <div><a href="#"><span className="icon-calendar"></span> July 29, 2018</a></div>
                <div><a href="#"><span className="icon-person"></span> Admin</a></div>
                <div><a href="#"><span className="icon-chat"></span> 19</a></div>
              </div>
            </div>
          </div>

          <div className="block-21 d-flex mb-4">
            <figure className="mr-3">
              <img src="/images/img_4.jpg" alt="" className="img-fluid"/>
            </figure>
            <div className="text">
              <h3 className="heading"><a href="#">Unfortunate Children Need Your Love</a></h3>
              <div className="meta">
                <div><a href="#"><span className="icon-calendar"></span> July 29, 2018</a></div>
                <div><a href="#"><span className="icon-person"></span> Admin</a></div>
                <div><a href="#"><span className="icon-chat"></span> 19</a></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="block-23">
            <h3 className="heading-section">Get Connected</h3>
              <ul>
                <li><span className="icon icon-map-marker"></span><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                <li><a href="#"><span className="icon icon-phone"></span><span className="text">+2 392 3929 210</span></a></li>
                <li><a href="#"><span className="icon icon-envelope"></span><span className="text">info@yourdomain.com</span></a></li>
              </ul>
            </div>
        </div>
        
        
      </div>
      <div className="row pt-5">
        <div className="col-md-12 text-center">
          
            <p>
            Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="ion-ios-heart text-danger" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" >Colorlib</a>
          
            </p>
          
        </div>
      </div>
    </div>
  </footer>


  {/* <div id="ftco-loader" className="show fullscreen"><svg className="circular" width="48px" height="48px"><circle className="path-bg" cx="24" cy="24" r="22" fill="none" strokeWidth="4" stroke="#eeeeee"/><circle className="path" cx="24" cy="24" r="22" fill="none" strokeWidth="4" strokeMiterlimit="10" stroke="#F96D00"/></svg></div> */}

  
  {/* <script src="/js/jquery.min.js"></script>
  <script src="/js/jquery-migrate-3.0.1.min.js"></script>
  <script src="/js/popper.min.js"></script>
  <script src="/js/bootstrap.min.js"></script>
  <script src="/js/jquery.easing.1.3.js"></script>
  <script src="/js/jquery.waypoints.min.js"></script>
  <script src="/js/jquery.stellar.min.js"></script>
  <script src="/js/owl.carousel.min.js"></script>
  <script src="/js/jquery.magnific-popup.min.js"></script>
  <script src="/js/bootstrap-datepicker.js"></script>

  <script src="/js/jquery.fancybox.min.js"></script>
  
  <script src="/js/aos.js"></script>
  <script src="/js/jquery.animateNumber.min.js"></script>
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false"></script>
  <script src="/js/google-map.js"></script>
  <script src="/js/main.js"></script> */}

    </>
  );
};

export default Home;
