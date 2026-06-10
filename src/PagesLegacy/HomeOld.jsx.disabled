import React, { useEffect } from 'react';
import Odometer from 'odometer';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Home = () => {
  useEffect(() => {
    // Initialize odometers
    const odometers = document.querySelectorAll('.odometer');
    odometers.forEach(odometer => {
      new Odometer({
        el: odometer,
        format: '(ddd).dd',
        theme: 'default',
        duration: 2000 // Optional: Animation duration in milliseconds
      });
    });

    // Update counters
    const updateCounters = () => {
      const currentTime = new Date().getTime(); // Current time in milliseconds
      const eventTime = new Date('2024-10-10').getTime(); // Event time in milliseconds
      const timeDifference = eventTime - currentTime;

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      odometers[0].innerHTML = days;
      odometers[1].innerHTML = hours;
      odometers[2].innerHTML = minutes;
      odometers[3].innerHTML = seconds;
    };

    // Update counters initially
    updateCounters();

    // Update counters every second
    const intervalId = setInterval(updateCounters, 1000);

    // Clean up
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
        <Helmet>
        <title>Brit Fintech Awards | Home</title>
        <meta name="description" content="Description of your page" />
        
      </Helmet>
       <div>
  <div className="cs-height_90 cs-height_lg_80" />
  {/* Start Hero Seciton */}
  <div className="cs-flying_img_wrap cs-style5 cs-parallax">
    <img src="../assets/img/event-conference/flying-img1.png" alt="Flying image" className="cs-flying_img cs-posiiton1 cs-to_up" />
    <img src="../assets/img/event-conference/flying-img2.png" alt="Flying image" className="cs-flying_img cs-posiiton2 cs-to_up" />
    <div className="cs-hero cs-style12 cs-center text-center cs-gradient_overlay_35 cs-parallax cs-hobble" data-src="../assets/img/Banner.png" style={{backgroundSize: 'cover'}}>
      <div className="cs-hero_pattern cs-hover_layer3">
        <div className="cs-hero_pattern_in cs-bg_parallax" data-src="../assets/img/event-conference/hero-pattern.png" />
      </div>
      <div className="container wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
        <div className="cs-hero_text">
          {/* <div className="cs-center cs-hover_layer3">
            <a href="https://www.youtube.com/embed/jRcfE2xxSAw?autoplay=1" className="cs-player_btn cs-style1 cs-center cs-video_open cs-white cs-accent_bg_2 cs-accent_color_hover cs-accent_bg_2_hover">
              <span className="cs-player_btn_in cs-center cs-white"><i className="fas fa-play" /></span>
              <span className="cs-video_animaiton cs-center cs-accent_border_2">
                <span><span /></span>
              </span>
            </a>
          </div> */}
          {/* <h1 className="cs-hero_title cs-extra_bold cs-white text-uppercase">
          Brit FinTech Awards  2024
          <div className='mt-0'>  </div>
        

          </h1>
          <h3 className='text-white mt-3'>   Celebration of Innovation</h3> */}
        </div>
      </div>
      <div className="cs-hero_img cs-bg" data-src="../assets/img/assets/img/Banner.jpg">
        <div className="cs-hero_img_circle" />
      </div>
    </div>
  </div>
  {/* End Hero Seciton */}
  {/* Start Counter */}
  <div className="container">
      <div className="cs-counter_4_wrap cs-accent_bg_2 cs-parallax">
        <div className="cs-counter_4_wrap_in cs-bg_parallax" data-src="../assets/img/event-conference/counter_bg.png" style={{backgroundSize: 'cover'}}>
          <div className="cs-counter cs-style4 text-center">
            <h3 className="cs-counter_number cs-extra_bold cs-white">
              <span  className="odometer" />
            </h3>
            <div className="cs-counter_seperator cs-accent_bg bg-white " />
            <div className="cs-counter_title cs-medium text-uppercase cs-white cs-primary_font">
              Days
            </div>
          </div>
          <div className="cs-counter cs-style4 text-center">
            <h3 className="cs-counter_number cs-extra_bold cs-white">
              <span data-count-to={22} className="odometer" />
            </h3>
            <div className="cs-counter_seperator cs-accent_bg bg-white" />
            <div className="cs-counter_title cs-medium text-uppercase cs-white cs-primary_font">
              Hours
            </div>
          </div>
          <div className="cs-counter cs-style4 text-center">
            <h3 className="cs-counter_number cs-extra_bold cs-white">
              <span data-count-to={48} className="odometer" />
            </h3>
            <div className="cs-counter_seperator cs-accent_bg bg-white" />
            <div className="cs-counter_title cs-medium text-uppercase cs-white cs-primary_font">
              Minutes
            </div>
          </div>
          <div className="cs-counter cs-style4 text-center">
            <h3 className="cs-counter_number cs-extra_bold cs-white">
              <span  className="odometer" />
            </h3>
            <div className="cs-counter_seperator cs-accent_bg bg-white" />
            <div className="cs-counter_title cs-medium text-uppercase cs-white cs-primary_font">
              Seconds
            </div>
          </div>
        </div>
      </div>
    </div>
  <div className="cs-height_140 cs-height_lg_75" />
  {/* End Counter */}
  {/* Start About Seciton */}
  
  <div className="container">
    <div className="row">
    <div className="col-lg-5 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
  <div className="cs-vertical_middle">
    <div className="cs-vertical_middle_in">
      <div className="cs-text_box cs-style1 cs-type1">
        <div className="cs-text_box_subtitle cs-medium cs-accent_color">
          About Brit Fintech Awards
        </div>
        <h2 className="cs-text_box_title text-uppercase cs-bold">
          Welcome to the Brit Fintech Awards Celebration
        </h2>
        <div className="cs-height_35 cs-height_lg_25" />
        <div className="cs-text_box_text">
          The Brit Fintech Awards Celebration is a prestigious event recognising the outstanding achievements and innovations within the UK's financial technology sector. It brings together industry leaders, innovators, and enthusiasts to celebrate excellence and foster collaboration in the dynamic fintech landscape.
        </div>
        <div className="cs-height_35 cs-height_lg_25" />
        <div className="cs-text_icon_box">
          <div className="cs-text_box_icon cs-center cs-accent_color cs-accent_10_bg">
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="17px" height="22px">
              <path fillRule="evenodd" fill="currentColor" d="M11.644,18.318 C10.879,19.313 10.013,20.439 9.023,21.741 C8.900,21.904 8.706,21.999 8.500,21.999 C8.294,21.999 8.100,21.904 7.977,21.741 C6.981,20.432 6.111,19.302 5.343,18.305 C0.920,12.557 -0.000,11.360 -0.000,8.378 C-0.000,3.757 3.813,-0.001 8.500,-0.001 C13.187,-0.001 17.000,3.757 17.000,8.378 C17.000,11.355 16.077,12.554 11.644,18.318 ZM8.500,1.287 C4.534,1.287 1.308,4.468 1.308,8.378 C1.308,10.926 2.083,11.934 6.385,17.525 C7.016,18.346 7.717,19.255 8.500,20.281 C9.277,19.261 9.974,18.356 10.602,17.541 C14.915,11.933 15.692,10.921 15.692,8.378 C15.692,4.468 12.466,1.287 8.500,1.287 ZM8.500,12.890 C5.976,12.890 3.923,10.866 3.923,8.378 C3.923,5.890 5.976,3.866 8.500,3.866 C11.024,3.866 13.077,5.890 13.077,8.378 C13.077,10.866 11.024,12.890 8.500,12.890 ZM8.500,5.155 C6.697,5.155 5.231,6.601 5.231,8.378 C5.231,10.155 6.697,11.600 8.500,11.600 C10.303,11.600 11.769,10.155 11.769,8.378 C11.769,6.601 10.303,5.155 8.500,5.155 Z" />
            </svg>
          </div>
          <h3 className="cs-text_box_icon_title">
            Level39, One Canada Square, London E14 5AB
          </h3>
        </div>
        <div className="cs-height_45 cs-height_lg_30" />
        <a href="/sponsors" className="cs-btn cs-style1 cs-btn_lg cs-medium text_uppercase cs-primary_font cs-accent_bg_2 cs-accent_border_2 cs-white cs-accent_bg_hover cs-white_hover cs-accent_border_hover ">Sponsor Now</a>
      </div>
    </div>
  </div>
</div>

      {/* .col */}
      <div className="col-lg-6 offset-lg-1 wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.2s">
        <div className="cs-right_full_width">
          <div className="cs-height_0 cs-height_lg_50" />
          <div className="cs-image_box cs-style3 cs-type3 cs-parallax">
            <div className="cs-image_box_img">
              <img src="../assets/img/event-conference/about.png" alt="About Image" />
            </div>
            <div className="cs-image_box_text cs-to_up cs-accent_color">
              <div className="cs-image_box_text_in">
                <div className="cs-image_box_title cs-extra_bold cs-white cs-primary_font">
                  10
                </div>
                <h2 className="cs-image_box_subtitle cs-medium cs-white cs-medium">
                  Oct 2024
                </h2>
              </div>
            </div>
            <div className="cs-image_box_pattern cs-to_left cs-accent_color_2" />
          </div>
        </div>
      </div>
      {/* .col */}
    </div>
  </div>
  <div className="cs-height_135 cs-height_lg_80" />
  {/* End About Seciton */}
  {/* Start Schedule Section */}
  <div className="cs-accent_4_bg cs-flying_img_wrap cs-style6 cs-parallax">
    <img src="../assets/img/event-conference/flying-img3.png" alt="Flying image" className="cs-flying_img cs-posiiton1 cs-to_up" />
    <img src="../assets/img/event-conference/flying-img4.png" alt="Flying image" className="cs-flying_img cs-posiiton2 cs-to_up" />
    <div className="cs-height_35 cs-height_lg_35" />
    <div className="container wow fadeInDown " data-wow-duration="1s" data-wow-delay="0.2s">
      <div className="cs-section_heading cs-style2 cs-size3 text-center text-uppercase">
        <div className="cs-section_subtitle cs-primary_font cs-medium cs-accent_color">
        categories  and plans
        </div>
        <h2 className="cs-section_title cs-extra_bold">Awards Categories </h2>
      </div>
      <div className="cs-height_70 cs-height_lg_50" />
    </div>
    <div className="container wow fadeIn" data-wow-duration="1s" data-wow-delay="0.3s">
      <div className="cs-tabs cs-style2 cs-fade_tabs">
        <ul className="cs-tab_links cs-style5 cs-mp0 text-uppercase cs-accent_bg_2">
          <li className="active">
            <a href="#tab_one" className="cs-accent_bg_hover">
              <h3 className="cs-semi_bold cs-white">5:00 PM to 5:30 PM</h3>
              <p className="cs-white">10 Oct 2024</p>
            </a>
          </li>
          <li>
            <a href="#tab_two" className="cs-accent_bg_hover">
            <h3 className="cs-semi_bold cs-white">5:30 PM to 5:45 PM</h3>
              <p className="cs-white">10 Oct 2024</p>
            </a>
          </li>
          <li>
            <a href="#tab_three" className="cs-accent_bg_hover">
            <h3 className="cs-semi_bold cs-white">5:45 PM to 6:15 PM</h3>
              <p className="cs-white">10 Oct 2024</p>
            </a>
          </li>
          <li>
            <a href="#tab_four" className="cs-accent_bg_hover">
            <h3 className="cs-semi_bold cs-white">6:15 PM to 6:45 PM</h3>
              <p className="cs-white">10 Oct 2024</p>
            </a>
          </li>
          <li>
            <a href="#tab_five" className="cs-accent_bg_hover">
            <h3 className="cs-semi_bold cs-white">6:45 PM to 7:15 PM</h3>
              <p className="cs-white">10 Oct 2024</p>
            </a>
          </li>
          <li>
            <a href="#tab_six" className="cs-accent_bg_hover">
            <h3 className="cs-semi_bold cs-white">7:15 PM to 8:00 PM</h3>
              <p className="cs-white">10 Oct 2024</p>
            </a>
          </li>
          <li>
            <a href="#tab_seven" className="cs-accent_bg_hover">
            <h3 className="cs-semi_bold cs-white">8:00 PM to 9:00 PM</h3>
              <p className="cs-white">10 Oct 2024</p>
            </a>
          </li>
        </ul>
        <div className="cs-tab_content">
          <div id="tab_one" className="cs-tab active">
       
            <div className="cs-event cs-style1 cs-white_bg" style={{height: '110vh'}}>
              <div className="cs-avatar_group">
                <div className="cs-avatar cs-accent_border">
                  <img src="../assets/img/logo.svg" alt="Avatar" />
                </div>
               
              </div>
                <div className="cs-event_time text-uppercase cs-primary_color cs-primary_font">
                5:00 PM to 5:30 PM
                </div>
              <h2 className="cs-event_title text-uppercase cs-semi_bold">
               Welcome
              </h2>
             
             
              <div className="">
                <div className="cs-event_details">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim.
                </div>
                <div className="cs-event_location">
                  <div className="cs-event_location_icon cs-center cs-accent_color cs-accent_10_bg">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="17px" height="22px">
                      <path fillRule="evenodd" fill="currentColor" d="M11.644,18.318 C10.879,19.313 10.013,20.439 9.023,21.741 C8.900,21.904 8.706,21.999 8.500,21.999 C8.294,21.999 8.100,21.904 7.977,21.741 C6.981,20.432 6.111,19.302 5.343,18.305 C0.920,12.557 -0.000,11.360 -0.000,8.378 C-0.000,3.757 3.813,-0.001 8.500,-0.001 C13.187,-0.001 17.000,3.757 17.000,8.378 C17.000,11.355 16.077,12.554 11.644,18.318 ZM8.500,1.287 C4.534,1.287 1.308,4.468 1.308,8.378 C1.308,10.926 2.083,11.934 6.385,17.525 C7.016,18.346 7.717,19.255 8.500,20.281 C9.277,19.261 9.974,18.356 10.602,17.541 C14.915,11.933 15.692,10.921 15.692,8.378 C15.692,4.468 12.466,1.287 8.500,1.287 ZM8.500,12.890 C5.976,12.890 3.923,10.866 3.923,8.378 C3.923,5.890 5.976,3.866 8.500,3.866 C11.024,3.866 13.077,5.890 13.077,8.378 C13.077,10.866 11.024,12.890 8.500,12.890 ZM8.500,5.155 C6.697,5.155 5.231,6.601 5.231,8.378 C5.231,10.155 6.697,11.600 8.500,11.600 C10.303,11.600 11.769,10.155 11.769,8.378 C11.769,6.601 10.303,5.155 8.500,5.155 Z" />
                    </svg>
                  </div>
                  <h3 className="cs-event_location_title">
                  Level39, One Canada Square, London E14 5AB
                  </h3>
                </div>
              </div>
            </div>
          
          </div>
          {/* .cs-tab */}
          <div id="tab_two" className="cs-tab">
          <div className="cs-event cs-style1 cs-white_bg" style={{height: '110vh'}}>
              <div className="cs-avatar_group">
                <div className="cs-avatar cs-accent_border">
                  <img src="../assets/img/logo.svg" alt="Avatar" />
                </div>
               
              </div>
              <div className="cs-event_time text-uppercase cs-primary_color cs-primary_font">
              5:30 PM to 5:45 PM
              </div>
              <h2 className="cs-event_title text-uppercase cs-semi_bold">
               Introduction About Event
              </h2>
             
             
              <div className="">
                <div className="cs-event_details">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim.
                </div>
                <div className="cs-event_location">
                  <div className="cs-event_location_icon cs-center cs-accent_color cs-accent_10_bg">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="17px" height="22px">
                      <path fillRule="evenodd" fill="currentColor" d="M11.644,18.318 C10.879,19.313 10.013,20.439 9.023,21.741 C8.900,21.904 8.706,21.999 8.500,21.999 C8.294,21.999 8.100,21.904 7.977,21.741 C6.981,20.432 6.111,19.302 5.343,18.305 C0.920,12.557 -0.000,11.360 -0.000,8.378 C-0.000,3.757 3.813,-0.001 8.500,-0.001 C13.187,-0.001 17.000,3.757 17.000,8.378 C17.000,11.355 16.077,12.554 11.644,18.318 ZM8.500,1.287 C4.534,1.287 1.308,4.468 1.308,8.378 C1.308,10.926 2.083,11.934 6.385,17.525 C7.016,18.346 7.717,19.255 8.500,20.281 C9.277,19.261 9.974,18.356 10.602,17.541 C14.915,11.933 15.692,10.921 15.692,8.378 C15.692,4.468 12.466,1.287 8.500,1.287 ZM8.500,12.890 C5.976,12.890 3.923,10.866 3.923,8.378 C3.923,5.890 5.976,3.866 8.500,3.866 C11.024,3.866 13.077,5.890 13.077,8.378 C13.077,10.866 11.024,12.890 8.500,12.890 ZM8.500,5.155 C6.697,5.155 5.231,6.601 5.231,8.378 C5.231,10.155 6.697,11.600 8.500,11.600 C10.303,11.600 11.769,10.155 11.769,8.378 C11.769,6.601 10.303,5.155 8.500,5.155 Z" />
                    </svg>
                  </div>
                  <h3 className="cs-event_location_title">
                  Level39, One Canada Square, London E14 5AB
                  </h3>
                </div>
              </div>
            </div>
          </div>
          {/* .cs-tab */}
          <div id="tab_three" className="cs-tab">
          <div className="cs-event cs-style1 cs-white_bg" style={{height: '110vh'}}>
              <div className="cs-avatar_group">
                <div className="cs-avatar cs-accent_border">
                  <img src="../assets/img/logo.svg" alt="Avatar" />
                </div>
               
              </div>
              <div className="cs-event_time text-uppercase cs-primary_color cs-primary_font">
              5:45 PM to 6:15 PM
              </div>
              <h2 className="cs-event_title text-uppercase cs-semi_bold">
                HMRC Speakers
              </h2>
             
             
              <div className="">
                <div className="cs-event_details">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim.
                </div>
                <div className="cs-event_location">
                  <div className="cs-event_location_icon cs-center cs-accent_color cs-accent_10_bg">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="17px" height="22px">
                      <path fillRule="evenodd" fill="currentColor" d="M11.644,18.318 C10.879,19.313 10.013,20.439 9.023,21.741 C8.900,21.904 8.706,21.999 8.500,21.999 C8.294,21.999 8.100,21.904 7.977,21.741 C6.981,20.432 6.111,19.302 5.343,18.305 C0.920,12.557 -0.000,11.360 -0.000,8.378 C-0.000,3.757 3.813,-0.001 8.500,-0.001 C13.187,-0.001 17.000,3.757 17.000,8.378 C17.000,11.355 16.077,12.554 11.644,18.318 ZM8.500,1.287 C4.534,1.287 1.308,4.468 1.308,8.378 C1.308,10.926 2.083,11.934 6.385,17.525 C7.016,18.346 7.717,19.255 8.500,20.281 C9.277,19.261 9.974,18.356 10.602,17.541 C14.915,11.933 15.692,10.921 15.692,8.378 C15.692,4.468 12.466,1.287 8.500,1.287 ZM8.500,12.890 C5.976,12.890 3.923,10.866 3.923,8.378 C3.923,5.890 5.976,3.866 8.500,3.866 C11.024,3.866 13.077,5.890 13.077,8.378 C13.077,10.866 11.024,12.890 8.500,12.890 ZM8.500,5.155 C6.697,5.155 5.231,6.601 5.231,8.378 C5.231,10.155 6.697,11.600 8.500,11.600 C10.303,11.600 11.769,10.155 11.769,8.378 C11.769,6.601 10.303,5.155 8.500,5.155 Z" />
                    </svg>
                  </div>
                  <h3 className="cs-event_location_title">
                  Level39, One Canada Square, London E14 5AB
                  </h3>
                </div>
              </div>
            </div>
          </div>
          {/* .cs-tab */}
          <div id="tab_four" className="cs-tab">
          <div className="cs-event cs-style1 cs-white_bg" style={{height: '110vh'}}>
              <div className="cs-avatar_group">
                <div className="cs-avatar cs-accent_border">
                  <img src="../assets/img/logo.svg" alt="Avatar" />
                </div>
               
              </div>
              <div className="cs-event_time text-uppercase cs-primary_color cs-primary_font">
              6:15 PM to 6:45 PM
              </div>
              <h2 className="cs-event_title text-uppercase cs-semi_bold">
                FCA Speakers
              </h2>
             
             
              <div className="">
                <div className="cs-event_details">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim.
                </div>
                <div className="cs-event_location">
                  <div className="cs-event_location_icon cs-center cs-accent_color cs-accent_10_bg">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="17px" height="22px">
                      <path fillRule="evenodd" fill="currentColor" d="M11.644,18.318 C10.879,19.313 10.013,20.439 9.023,21.741 C8.900,21.904 8.706,21.999 8.500,21.999 C8.294,21.999 8.100,21.904 7.977,21.741 C6.981,20.432 6.111,19.302 5.343,18.305 C0.920,12.557 -0.000,11.360 -0.000,8.378 C-0.000,3.757 3.813,-0.001 8.500,-0.001 C13.187,-0.001 17.000,3.757 17.000,8.378 C17.000,11.355 16.077,12.554 11.644,18.318 ZM8.500,1.287 C4.534,1.287 1.308,4.468 1.308,8.378 C1.308,10.926 2.083,11.934 6.385,17.525 C7.016,18.346 7.717,19.255 8.500,20.281 C9.277,19.261 9.974,18.356 10.602,17.541 C14.915,11.933 15.692,10.921 15.692,8.378 C15.692,4.468 12.466,1.287 8.500,1.287 ZM8.500,12.890 C5.976,12.890 3.923,10.866 3.923,8.378 C3.923,5.890 5.976,3.866 8.500,3.866 C11.024,3.866 13.077,5.890 13.077,8.378 C13.077,10.866 11.024,12.890 8.500,12.890 ZM8.500,5.155 C6.697,5.155 5.231,6.601 5.231,8.378 C5.231,10.155 6.697,11.600 8.500,11.600 C10.303,11.600 11.769,10.155 11.769,8.378 C11.769,6.601 10.303,5.155 8.500,5.155 Z" />
                    </svg>
                  </div>
                  <h3 className="cs-event_location_title">
                  Level39, One Canada Square, London E14 5AB
                  </h3>
                </div>
              </div>
            </div>
          </div>
          {/* .cs-tab */}
          <div id="tab_five" className="cs-tab">
          <div className="cs-event cs-style1 cs-white_bg" style={{height: '110vh'}}>
              <div className="cs-avatar_group">
                <div className="cs-avatar cs-accent_border">
                  <img src="../assets/img/logo.svg" alt="Avatar" />
                </div>
               
              </div>
              <div className="cs-event_time text-uppercase cs-primary_color cs-primary_font">
              6:45 PM to 7:15 PM
              </div>
              <h2 className="cs-event_title text-uppercase cs-semi_bold">
                Round Table Conference
              </h2>
             
             
              <div className="">
                <div className="cs-event_details">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim.
                </div>
                <div className="cs-event_location">
                  <div className="cs-event_location_icon cs-center cs-accent_color cs-accent_10_bg">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="17px" height="22px">
                      <path fillRule="evenodd" fill="currentColor" d="M11.644,18.318 C10.879,19.313 10.013,20.439 9.023,21.741 C8.900,21.904 8.706,21.999 8.500,21.999 C8.294,21.999 8.100,21.904 7.977,21.741 C6.981,20.432 6.111,19.302 5.343,18.305 C0.920,12.557 -0.000,11.360 -0.000,8.378 C-0.000,3.757 3.813,-0.001 8.500,-0.001 C13.187,-0.001 17.000,3.757 17.000,8.378 C17.000,11.355 16.077,12.554 11.644,18.318 ZM8.500,1.287 C4.534,1.287 1.308,4.468 1.308,8.378 C1.308,10.926 2.083,11.934 6.385,17.525 C7.016,18.346 7.717,19.255 8.500,20.281 C9.277,19.261 9.974,18.356 10.602,17.541 C14.915,11.933 15.692,10.921 15.692,8.378 C15.692,4.468 12.466,1.287 8.500,1.287 ZM8.500,12.890 C5.976,12.890 3.923,10.866 3.923,8.378 C3.923,5.890 5.976,3.866 8.500,3.866 C11.024,3.866 13.077,5.890 13.077,8.378 C13.077,10.866 11.024,12.890 8.500,12.890 ZM8.500,5.155 C6.697,5.155 5.231,6.601 5.231,8.378 C5.231,10.155 6.697,11.600 8.500,11.600 C10.303,11.600 11.769,10.155 11.769,8.378 C11.769,6.601 10.303,5.155 8.500,5.155 Z" />
                    </svg>
                  </div>
                  <h3 className="cs-event_location_title">
                  Level39, One Canada Square, London E14 5AB
                  </h3>
                </div>
              </div>
            </div>
          </div>
          {/* .cs-tab */}
          <div id="tab_six" className="cs-tab">
          <div className="cs-event cs-style1 cs-white_bg" style={{height: '110vh'}}>
              <div className="cs-avatar_group">
                <div className="cs-avatar cs-accent_border">
                  <img src="../assets/img/logo.svg" alt="Avatar" />
                </div>
               
              </div>
              <div className="cs-event_time text-uppercase cs-primary_color cs-primary_font">
              7:15 PM to 8:00 PM
              </div>
              <h2 className="cs-event_title text-uppercase cs-semi_bold">
                Awards Function
              </h2>
             
             
              <div className="">
                <div className="cs-event_details">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim.
                </div>
                <div className="cs-event_location">
                  <div className="cs-event_location_icon cs-center cs-accent_color cs-accent_10_bg">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="17px" height="22px">
                      <path fillRule="evenodd" fill="currentColor" d="M11.644,18.318 C10.879,19.313 10.013,20.439 9.023,21.741 C8.900,21.904 8.706,21.999 8.500,21.999 C8.294,21.999 8.100,21.904 7.977,21.741 C6.981,20.432 6.111,19.302 5.343,18.305 C0.920,12.557 -0.000,11.360 -0.000,8.378 C-0.000,3.757 3.813,-0.001 8.500,-0.001 C13.187,-0.001 17.000,3.757 17.000,8.378 C17.000,11.355 16.077,12.554 11.644,18.318 ZM8.500,1.287 C4.534,1.287 1.308,4.468 1.308,8.378 C1.308,10.926 2.083,11.934 6.385,17.525 C7.016,18.346 7.717,19.255 8.500,20.281 C9.277,19.261 9.974,18.356 10.602,17.541 C14.915,11.933 15.692,10.921 15.692,8.378 C15.692,4.468 12.466,1.287 8.500,1.287 ZM8.500,12.890 C5.976,12.890 3.923,10.866 3.923,8.378 C3.923,5.890 5.976,3.866 8.500,3.866 C11.024,3.866 13.077,5.890 13.077,8.378 C13.077,10.866 11.024,12.890 8.500,12.890 ZM8.500,5.155 C6.697,5.155 5.231,6.601 5.231,8.378 C5.231,10.155 6.697,11.600 8.500,11.600 C10.303,11.600 11.769,10.155 11.769,8.378 C11.769,6.601 10.303,5.155 8.500,5.155 Z" />
                    </svg>
                  </div>
                  <h3 className="cs-event_location_title">
                  Level39, One Canada Square, London E14 5AB
                  </h3>
                </div>
              </div>
            </div>
          </div>
          {/* .cs-tab */}
          <div id="tab_seven" className="cs-tab">
          <div className="cs-event cs-style1 cs-white_bg" style={{height: '110vh'}}>
              <div className="cs-avatar_group">
                <div className="cs-avatar cs-accent_border">
                  <img src="../assets/img/logo.svg" alt="Avatar" />
                </div>
               
              </div>
              <div className="cs-event_time text-uppercase cs-primary_color cs-primary_font">
              8:00 PM to 9:00 PM
              </div>
              <h2 className="cs-event_title text-uppercase cs-semi_bold">
                Dinner
              </h2>
             
             
              <div className="">
                <div className="cs-event_details">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim.
                </div>
                <div className="cs-event_location">
                  <div className="cs-event_location_icon cs-center cs-accent_color cs-accent_10_bg">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="17px" height="22px">
                      <path fillRule="evenodd" fill="currentColor" d="M11.644,18.318 C10.879,19.313 10.013,20.439 9.023,21.741 C8.900,21.904 8.706,21.999 8.500,21.999 C8.294,21.999 8.100,21.904 7.977,21.741 C6.981,20.432 6.111,19.302 5.343,18.305 C0.920,12.557 -0.000,11.360 -0.000,8.378 C-0.000,3.757 3.813,-0.001 8.500,-0.001 C13.187,-0.001 17.000,3.757 17.000,8.378 C17.000,11.355 16.077,12.554 11.644,18.318 ZM8.500,1.287 C4.534,1.287 1.308,4.468 1.308,8.378 C1.308,10.926 2.083,11.934 6.385,17.525 C7.016,18.346 7.717,19.255 8.500,20.281 C9.277,19.261 9.974,18.356 10.602,17.541 C14.915,11.933 15.692,10.921 15.692,8.378 C15.692,4.468 12.466,1.287 8.500,1.287 ZM8.500,12.890 C5.976,12.890 3.923,10.866 3.923,8.378 C3.923,5.890 5.976,3.866 8.500,3.866 C11.024,3.866 13.077,5.890 13.077,8.378 C13.077,10.866 11.024,12.890 8.500,12.890 ZM8.500,5.155 C6.697,5.155 5.231,6.601 5.231,8.378 C5.231,10.155 6.697,11.600 8.500,11.600 C10.303,11.600 11.769,10.155 11.769,8.378 C11.769,6.601 10.303,5.155 8.500,5.155 Z" />
                    </svg>
                  </div>
                  <h3 className="cs-event_location_title">
                  Level39, One Canada Square, London E14 5AB
                  </h3>
                </div>
              </div>
            </div>
          </div>
          {/* .cs-tab */}
         
         

        </div>
      </div>
    </div>
    <div className="cs-height_135 cs-height_lg_80" />
  </div>
  {/* End Schedule Section */}
  {/* Start Team Seation */}
  {/* <div className="cs-flying_img_wrap cs-style7 cs-parallax">
    <img src="../assets/img/event-conference/flying-img5.png" alt="Flying image" className="cs-flying_img cs-posiiton1 cs-to_up" />
    <img src="../assets/img/event-conference/flying-img6.png" alt="Flying image" className="cs-flying_img cs-posiiton2 cs-to_up" />
    <div className="cs-height_130 cs-height_lg_70" />
    <div className="container wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.2s">
      <div className="cs-section_heading cs-style2 text-center cs-size2 text-uppercase">
        <h2 className="cs-section_title cs-extra_bold">Who’s Speaking</h2>
        <div className="cs-height_5 cs-height_lg_5" />
        <a href="#" className="cs-btn cs-style3 cs-primary_font cs-accent_color cs-accent_color_2_hover cs-medium cs-medium">
          <span className="cs-btn_text">View All Speakers</span>
          <span className="cs-btn_icon cs-center"><i className="fas fa-angle-right" /></span>
        </a>
      </div>
      <div className="cs-height_75 cs-height_lg_55" />
    </div>
    <div className="container wow fadeIn" data-wow-duration="1s" data-wow-delay="0.3s">
      <div className="row">
        <div className="col-lg-4">
          <div className="cs-team_member cs-style8 text-center cs-white_bg">
            <div className="cs-team_member_in cs-accent_5_bg cs-accent_5_bg_2_hover cs-transition_3 cs-accent_border cs-accent_border_2_hover">
              <div className="cs-member_image position-relative">
                <img src="../assets/img/event-conference/team1.jpg" alt="Member" className="cs-accent_border cs-transition_3" />
                <a href="#" className="cs-member_btn cs-center cs-accent_bg_2 cs-white cs-white_hover cs-accent_bg_hover">+</a>
              </div>
              <div className="cs-member_info">
                <h2 className="cs-member_name cs-semi_bold text-uppercase">
                  Gregory Lett
                </h2>
                <div className="cs-member_designation cs-primary_color">
                  Founder, Laralink
                </div>
              </div>
            </div>
          </div>
          <div className="cs-height_30 cs-height_lg_30" />
        </div>
        <div className="col-lg-4">
          <div className="cs-team_member cs-style8 text-center cs-white_bg">
            <div className="cs-team_member_in cs-accent_5_bg cs-accent_5_bg_2_hover cs-transition_3 cs-accent_border cs-accent_border_2_hover">
              <div className="cs-member_image position-relative">
                <img src="../assets/img/event-conference/team2.jpg" alt="Member" className="cs-accent_border cs-transition_3" />
                <a href="#" className="cs-member_btn cs-center cs-accent_bg_2 cs-white cs-white_hover cs-accent_bg_hover">+</a>
              </div>
              <div className="cs-member_info">
                <h2 className="cs-member_name cs-semi_bold text-uppercase">
                  Opal Boren
                </h2>
                <div className="cs-member_designation cs-primary_color">
                  Manager, Laralink
                </div>
              </div>
            </div>
          </div>
          <div className="cs-height_30 cs-height_lg_30" />
        </div>
        <div className="col-lg-4">
          <div className="cs-team_member cs-style8 text-center cs-white_bg">
            <div className="cs-team_member_in cs-accent_5_bg cs-accent_5_bg_2_hover cs-transition_3 cs-accent_border cs-accent_border_2_hover">
              <div className="cs-member_image position-relative">
                <img src="../assets/img/event-conference/team3.jpg" alt="Member" className="cs-accent_border cs-transition_3" />
                <a href="#" className="cs-member_btn cs-center cs-accent_bg_2 cs-white cs-white_hover cs-accent_bg_hover">+</a>
              </div>
              <div className="cs-member_info">
                <h2 className="cs-member_name cs-semi_bold text-uppercase">
                  KEVIN MARTIN
                </h2>
                <div className="cs-member_designation cs-primary_color">
                  Co-founder, Laralink
                </div>
              </div>
            </div>
          </div>
          <div className="cs-height_30 cs-height_lg_30" />
        </div>
      </div>
    </div>
    <div className="cs-height_110 cs-height_lg_50" />
  </div> */}
  {/* End Team Seation */}
  {/* Start Newsletter Section */}

  {/* End Newsletter Section */}
  {/* Start Testimonial Section */}
  {/* <div className="cs-height_135 cs-height_lg_75" />
  <div className="container wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.2s">
    <div className="cs-section_heading cs-style2 cs-size3 text-center text-uppercase">
      <div className="cs-section_subtitle cs-primary_font cs-medium cs-accent_color">
        Our testimonials
      </div>
      <h2 className="cs-section_title cs-extra_bold">What other saying</h2>
    </div>
    <div className="cs-height_70 cs-height_lg_50" />
  </div> */}

  {/* End Testimonial Section */}

  {/* Start Gallery Section */}
  <div className="cs-bg " data-src="../assets/img/event-conference/sponsor_bg.jpg">
    <div className="cs-height_35 cs-height_lg_35" />
    <div className="container wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.2s">
      <div className="cs-section_heading cs-style2 cs-size3 text-center text-uppercase">
        <div className="cs-section_subtitle cs-primary_font cs-medium cs-white_80">
          Brit Fintech Sponsors
        </div>
        <h2 className="cs-section_title cs-extra_bold cs-white">SPONSORS 2024</h2>
      </div>
      <div className="cs-height_70 cs-height_lg_50" />
    </div>
    <div className="container wow fadeIn" data-wow-duration="1s" data-wow-delay="0.3s">
      <div className="row">
        <div className="col-lg-3 col-sm-6">
          <div className="cs-logo_carousel cs-style3 cs-center cs-accent_bg_2 cs-accent_bg_hover cs-transition_3">
            <img src="../assets/img/event-conference/carousel-logo1.png" alt="Sponsor" />
          </div>
          <div className="cs-height_50 cs-height_lg_30" />
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="cs-logo_carousel cs-style3 cs-center cs-accent_bg_2 cs-accent_bg_hover cs-transition_3">
            <img src="../assets/img/event-conference/carousel-logo2.png" alt="Sponsor" />
          </div>
          <div className="cs-height_50 cs-height_lg_30" />
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="cs-logo_carousel cs-style3 cs-center cs-accent_bg_2 cs-accent_bg_hover cs-transition_3">
            <img src="../assets/img/event-conference/carousel-logo3.png" alt="Sponsor" />
          </div>
          <div className="cs-height_50 cs-height_lg_30" />
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="cs-logo_carousel cs-style3 cs-center cs-accent_bg_2 cs-accent_bg_hover cs-transition_3">
            <img src="../assets/img/event-conference/carousel-logo4.png" alt="Sponsor" />
          </div>
          <div className="cs-height_50 cs-height_lg_30" />
        </div>
      </div>
      <div className="text-center">
        <NavLink to="/sponsors" className="cs-btn cs-style1 cs-btn_lg cs-medium text_uppercase cs-primary_font cs-accent_bg cs-accent_border cs-white cs-accent_bg_2_hover cs-white_hover cs-accent_border_2_hover">Become a sponsor</NavLink>
      </div>
    </div>
    <div className="cs-height_140 cs-height_lg_80" />
  </div>
  
  {/* End Gallery Section */}
  {/* Start Blog Seciton */}
  <div className="cs-gradient_bg_2">
  <div className="cs-height_35 cs-height_lg_35" />
    <div className="container wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.2s">
      <div className="cs-section_heading cs-style4 cs-size4 text-uppercase">
        <div className="cs-section_heading_left">
          <div className="cs-section_subtitle cs-primary_font cs-medium cs-accent_color">
            Our Blogs
          </div>
          <h2 className="cs-section_title cs-extra_bold">Blog post of events</h2>
        </div>
        <div className="cs-section_heading_right">
          <a href="blog.html" className="cs-btn cs-style3 cs-primary_font cs-accent_color_2 cs-medium">
            <span className="cs-btn_text">View more article</span>
            <span className="cs-btn_icon cs-center"><i className="fas fa-angle-right" /></span>
          </a>
        </div>
      </div>
      <div className="cs-height_75 cs-height_lg_55" />
    </div>
    <div className="container wow fadeIn" data-wow-duration="1s" data-wow-delay="0.3s">
      <div className="row">
        <div className="col-lg-4">
          <div className="cs-post cs-style10 position-relative">
            <a href="blog-details.html" className="cs-post_thumb cs-bg" data-src="../assets/img/event-conference/post1.jpg" />
            <div className="cs-post_info">
              <span className="cs-posted_by cs-white cs-accent_60_bg_2 cs-rounded">10 Jan 2023</span>
              <h2 className="cs-post_title cs-white cs-white_hover">
                <a href="blog-details.html">Easy way to design attractive landing pages
                </a>
              </h2>
            </div>
          </div>
          <div className="cs-height_30 cs-height_lg_30" />
        </div>
        <div className="col-lg-4">
          <div className="cs-post cs-style10 position-relative">
            <a href="blog-details.html" className="cs-post_thumb cs-bg" data-src="../assets/img/event-conference/post2.jpg" />
            <div className="cs-post_info">
              <span className="cs-posted_by cs-white cs-accent_60_bg_2 cs-rounded">12 Jan 2023</span>
              <h2 className="cs-post_title cs-white cs-white_hover">
                <a href="blog-details.html">UI/UX guide gor beginner</a>
              </h2>
            </div>
          </div>
          <div className="cs-height_30 cs-height_lg_30" />
        </div>
        <div className="col-lg-4">
          <div className="cs-post cs-style10 position-relative">
            <a href="blog-details.html" className="cs-post_thumb cs-bg" data-src="../assets/img/event-conference/post3.jpg" />
            <div className="cs-post_info">
              <span className="cs-posted_by cs-white cs-accent_60_bg_2 cs-rounded">13 Jan 2023</span>
              <h2 className="cs-post_title cs-white cs-white_hover">
                <a href="blog-details.html">Easy way to design attractive landing pages
                </a>
              </h2>
            </div>
          </div>
          <div className="cs-height_30 cs-height_lg_30" />
        </div>
      </div>
    </div>
    <div className="cs-height_110 cs-height_lg_50" />
  </div>
  {/* End Blog Seciton */}
  {/* Start Sponsors Section */}
 
  {/* End Sponsors Section */}
  {/* Start Footer Section */}

  {/* End Footer Section */}
  {/* Start Video Popup */}
  <div className="cs-video_popup">
    <div className="cs-video_popup_overlay" />
    <div className="cs-video_popup_content">
      <div className="cs-video_popup_layer" />
      <div className="cs-video_popup_container">
        <div className="cs-video_popup_align">
          <div className="embed-responsive embed-responsive-16by9">
            {/* <iframe className="embed-responsive-item" src="about:blank" /> */}
          </div>
        </div>
        <div className="cs-video_popup_close" />
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Home
