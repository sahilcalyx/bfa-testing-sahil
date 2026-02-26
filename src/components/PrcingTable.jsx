import { Margin } from '@mui/icons-material';
import React, { useState } from 'react'

const PrcingTable = () => {
  const [isVisible, setIsVisible] = useState(false); // State to manage visibility

  const handleClick = () => {
    setIsVisible(!isVisible); // Toggle visibility
  };
  return (
    <div>
<div className=" wow fadeIn" data-wow-duration="1s" data-wow-delay="0.3s" style={{visibility: 'visible', animationDuration: '1s', animationDelay: '0.3s', animationName: 'fadeIn'}} bis_skin_checked={1}>
  <div className="cs-tabs cs-fade_tabs cs-style1" bis_skin_checked={1}>
    <div className="cs-tab_content" bis_skin_checked={1}>
    <div className="row" bis_skin_checked={1}>
    <div className="col-lg-4" bis_skin_checked={1}>
            <div className="cs-pricing_table cs-style1" bis_skin_checked={1}>
              <div className="cs-pricing_image cs-pricing-platinum cs-accent_15_bg" bis_skin_checked={1}>
                
              </div>
              <div className="cs-pricing_table_in" bis_skin_checked={1}>
              
                <h2 className="cs-pricing_name cs-semi_bold fw-bolder">Digital Branding</h2>
                <ul className="cs-pricing_feature cs-mp0 mb-3">
                  <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Website Presence</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                     Logo on the event website with your service information in 700 words with images 
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                 <img style={{width: '80%'}} src="../assets/img/pricing/p-icon.png" alt /> 
                    </div>
                  </li>
                  <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Video Branding</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                    Inclusion of your logo in all the BFA event-related videos 
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                 <img style={{width: '80%'}} src="../assets/img/pricing/p-icon.png" alt /> 
                    </div>
                  </li>
                  <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Email Branding</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                     Featuring your logo in all the BFA event-related newsletters sent to 2,000+ business contacts 
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                 <img style={{width: '80%'}} src="../assets/img/pricing/p-icon.png" alt /> 
                    </div>
                  </li>
               
                  <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Social Media Posts</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                    6 Social media promotion - 4 Paid Ad post total reach count 5,000 - 20,000
                   
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                 <img style={{width: '80%'}} src="../assets/img/pricing/6.png" alt /> 
                    </div>
                  </li>
                  <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Newsletter</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                    5 Newsletters sent to 2,000+ business contacts
                   
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                    <img style={{width: '80%'}} src="../assets/img/pricing/5.png" alt /> 
                    </div>
                  </li>
                  <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Magazine Feature</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                    Feature in the Fintech magazine column
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                 <img style={{width: '80%'}} src="../assets/img/pricing/p-icon.png" alt /> 
                    </div>
                  </li>
                
                </ul>

           


                {/* ----------------------- Print Media Branding --------------------------------------------------------------------- */}
              

                <div className={isVisible ? "visible-div" : "hidden-div"}>
                <h2 className="cs-pricing_name cs-semi_bold fw-bolder  mt-0">Print Media Branding</h2>
                <ul className="cs-pricing_feature cs-mp0 mb-3">
                  <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Signage Branding</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                    Banners and posters for maximum exposure.
                    </span>  <br /> <br />
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                    Featuring your logo and messages at regular intervals during the event.
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                 <img style={{width: '80%'}} src="../assets/img/pricing/p-icon.png" alt /> 
                    </div>
                  </li>
                 
             
                  <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Event Schedule</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                    Logo on digital & printed event schedule
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                 <img style={{width: '80%'}} src="../assets/img/pricing/p-icon.png" alt /> 
                    </div>
                  </li>
               
                  <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Registration Branding</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                    Logo on Attendee badge 
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                 <img style={{width: '80%'}} src="../assets/img/pricing/p-icon.png" alt /> 
                    </div>
                  </li>
                  <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Registration Branding</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                    Logo on Lanyard  
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                 <img style={{width: '80%'}} src="../assets/img/pricing/p-icon.png" alt /> 
                    </div>
                  </li>
                  <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Notepad Branding</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                    Logo featured on event notepads.
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                 <img style={{width: '80%'}} src="../assets/img/pricing/p-icon.png" alt /> 
                    </div>
                  </li>
               
                  <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Return Gift ThankYou Note</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                    Logo in the ThankYou note of the return gift
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                 <img style={{width: '80%'}} src="../assets/img/pricing/p-icon.png" alt /> 
                    </div>
                  </li>
                </ul>
                </div>

                   {/* ----------------------- Awards Night Branding --------------------------------------------------------------------- */}
                

                <div className={isVisible ? "visible-div" : "hidden-div"}>
                <h2 className="cs-pricing_name cs-semi_bold fw-bolder  mt-0">Awards Night Branding</h2>
                <ul className="cs-pricing_feature cs-mp0 mb-3">
                  <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Exhibit Space</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                    One exhibit space (1st preference)
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                 <img style={{width: '80%'}} src="../assets/img/pricing/p-icon.png" alt /> 
                    </div>
                  </li>
                  <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                   <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Award Sponsorship</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                    Opportunity to sponsor one Award of your choice
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                 <img style={{width: '80%'}} src="../assets/img/pricing/p-icon.png" alt /> 
                    </div>
                  </li>
                  <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Key Note Speaker</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                    Opportunity to be a Keynote Speaker
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                    <img style={{width: '80%'}} src="../assets/img/pricing/p-icon.png" alt /> 
                    </div>
                  </li>
               
                  <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Discussion Panel</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                      Opportunity to be a  member of Disscussion panel 
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                 <img style={{width: '80%'}} src="../assets/img/pricing/p-icon.png" alt /> 
                    </div>
                  </li>
                  <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Brand Video clip</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                    A short video showcase your brand’s innovations 
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                 <img style={{width: '80%'}} src="../assets/img/pricing/p-icon.png" alt /> 
                    </div>
                  </li>
                  <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Awards Night Tickets</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                    Bring 5 of your team members to witness the Awards night

                   
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                    <img style={{width: '80%'}} src="../assets/img/pricing/5.png" alt />  
                    </div>
                  </li>
                
                </ul>
                </div>

                <div className="text-center" bis_skin_checked={1}>
        <a
          href="#"
          className={`cs-pricing_btn cs-primary_color cs-medium cs-accent_border ${
            isVisible ? "cs-accent_bg_hover" : ""
          }`}
          onClick={(e) => {
            e.preventDefault(); // Prevent default anchor behavior
            handleClick(); // Call toggle logic
          }}
        >
          {isVisible ? "Load Less" : "Load More"}
        </a>
      </div>
                
               
              </div>
              
            </div>
            
            <div className="cs-height_30 cs-height_lg_30" bis_skin_checked={1} />
          </div>

                    {/* Gold Category +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

          <div className="col-lg-4" bis_skin_checked={1}>
            <div className="cs-pricing_table cs-style1" bis_skin_checked={1}>
              <div className="cs-pricing_image cs-pricing-gold cs-accent_15_bg" bis_skin_checked={1}>
                
              </div>
              <div className="cs-pricing_table_in " bis_skin_checked={1}>
              
                <h2 className="cs-pricing_name cs-semi_bold fw-bolder">Digital Branding</h2>
                <ul className="cs-pricing_feature cs-mp0 mb-3 mb-3">
                  <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Website Presence</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                    Logo on the event website with your service information in 500 words with images
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                 <img style={{width: '80%'}} src="../assets/img/pricing/p-icon.png" alt /> 
                    </div>
                  </li>
                  <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Video Branding</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                    Inclusion of your logo in all the BFA event-related videos
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                 <img style={{width: '80%'}} src="../assets/img/pricing/p-icon.png" alt /> 
                    </div>
                  </li>
                  <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Email Branding</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                     Featuring your logo in all the BFA event-related newsletters sent to 2,000+ business contacts 
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                 <img style={{width: '80%'}} src="../assets/img/pricing/p-icon.png" alt /> 
                    </div>
                  </li>
               
                  <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Social Media Posts</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                    4 Social media promotion -  3 Paid Ad post  total reach count 2,000 - 15,000
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                    <img style={{width: '80%'}} src="../assets/img/pricing/4.png" alt /> 
                    </div>
                  </li>
                  <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Newsletter</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                    4 Newsletters sent to 2,000+ business contacts
                   
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                    <img style={{width: '80%'}} src="../assets/img/pricing/4.png" alt /> 
                    </div>
                  </li>
                  <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Magazine Feature</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                    Feature in the Fintech magazine column
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                 <img style={{width: '80%'}} src="../assets/img/pricing/NA.png" alt /> 
                    </div>
                  </li>
               
                </ul>

                


                {/* ----------------------- Print Media Branding --------------------------------------------------------------------- */}
              

                <div className={isVisible ? "visible-div" : "hidden-div"}>
                <h2 className="cs-pricing_name cs-semi_bold fw-bolder  mt-0">Print Media Branding</h2>
                <ul className="cs-pricing_feature cs-mp0 mb-3 mb-3">
                <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Signage Branding</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                    Banners and posters for maximum exposure.
                    </span>  <br /> <br />
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                    Featuring your logo and messages at regular intervals during the event.
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                 <img style={{width: '80%'}} src="../assets/img/pricing/p-icon.png" alt /> 
                    </div>
                  </li>
                
             
                  <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Event Schedule</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                    Logo on digital & printed event schedule
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                 <img style={{width: '80%'}} src="../assets/img/pricing/p-icon.png" alt /> 
                    </div>
                  </li>
               
                  <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Registration Branding</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                    Logo on Attendee badge 
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                 <img style={{width: '80%'}} src="../assets/img/pricing/p-icon.png" alt /> 
                    </div>
                  </li>
                  <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Registration Branding</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                    Logo on Lanyard  
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                 <img style={{width: '80%'}} src="../assets/img/pricing/p-icon.png" alt /> 
                    </div>
                  </li>
                  <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Notepad Branding</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                    Logo featured on event notepads.
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                 <img style={{width: '80%'}} src="../assets/img/pricing/p-icon.png" alt /> 
                    </div>
                  </li>
               
                  <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Return Gift ThankYou Note</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                    Logo in the ThankYou note of the return gift
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                 <img style={{width: '80%'}} src="../assets/img/pricing/p-icon.png" alt /> 
                    </div>
                  </li>
                </ul>
                </div>

                <div className={isVisible ? "visible-div" : "hidden-div"}>
                <h2 className="cs-pricing_name cs-semi_bold fw-bolder  mt-0">Awards Night Branding</h2>
                <ul className="cs-pricing_feature cs-mp0 mb-3 mb-3">
                  <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Exhibit Space</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                    One exhibit space (2nd preference)
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                 <img style={{width: '80%'}} src="../assets/img/pricing/p-icon.png" alt /> 
                    </div>
                  </li>
                  <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                   <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Award Sponsorship</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                    Opportunity to sponsor one Award of your choice
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                    <img style={{width: '80%'}} src="../assets/img/pricing/NA.png" alt /> 
                    </div>
                  </li>
                  <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Key Note Speaker</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                    Opportunity to be a Keynote Speaker
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                    <img style={{width: '80%'}} src="../assets/img/pricing/NA.png" alt /> 
                    </div>
                  </li>
               
                  <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Discussion Panel</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                    Opportunity to be a  member of Disscussion panel 
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                 <img style={{width: '80%'}} src="../assets/img/pricing/p-icon.png" alt /> 
                    </div>
                  </li>
                  <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Brand Video clip</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                    A short video showcase your brand’s innovations 
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                    <img style={{width: '80%'}} src="../assets/img/pricing/NA.png" alt /> 
                    </div>
                  </li>
                  <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Awards Night Tickets</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                    Bring 3 of your team members to witness the Awards night!

                   
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                    <img style={{width: '80%'}} src="../assets/img/pricing/3.png" alt />  
                    </div>
                  </li>
                
                </ul>
                
                </div>
                <div className="text-center" bis_skin_checked={1}>
        <a
          href="#"
          className={`cs-pricing_btn cs-primary_color cs-medium cs-accent_border ${
            isVisible ? "cs-accent_bg_hover" : ""
          }`}
          onClick={(e) => {
            e.preventDefault(); // Prevent default anchor behavior
            handleClick(); // Call toggle logic
          }}
        >
          {isVisible ? "Load Less" : "Load More"}
        </a>
      </div>
                   {/* ----------------------- Awards Night Branding --------------------------------------------------------------------- */}
              
               
              </div>
              
            </div>
            
            <div className="cs-height_30 cs-height_lg_30" bis_skin_checked={1} />
          </div>

                    {/* Silver +++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
              <div className="col-lg-4" bis_skin_checked={1}>
            <div className="cs-pricing_table cs-style1" bis_skin_checked={1}>
              <div className="cs-pricing_image cs-pricing-silver cs-accent_15_bg" bis_skin_checked={1}>
                
              </div>
              <div className="cs-pricing_table_in" bis_skin_checked={1}>
              
                <h2 className="cs-pricing_name cs-semi_bold fw-bolder">Digital Branding</h2>
                <ul className="cs-pricing_feature cs-mp0 mb-3 mb-3">
                  <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Website Presence</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                    Logo on the event website with your service information in 300 words with images
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                 <img style={{width: '80%'}} src="../assets/img/pricing/p-icon.png" alt /> 
                    </div>
                  </li>
                  <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Video Branding</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                    Inclusion of your logo in all the BFA event-related videos
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                 <img style={{width: '80%'}} src="../assets/img/pricing/p-icon.png" alt /> 
                    </div>
                  </li>
                  <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Email Branding</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                     Featuring your logo in all the BFA event-related newsletters sent to 2,000+ business contacts 
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                 <img style={{width: '80%'}} src="../assets/img/pricing/p-icon.png" alt /> 
                    </div>
                  </li>
               
                  <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Social Media Posts</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                     2 Social media promotion - 2 Paid Ad post  total reach count 1,000 - 10,000 
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                    <img style={{width: '80%'}} src="../assets/img/pricing/2.png" alt /> 
                    </div>
                  </li>
                  <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Newsletter</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                     3 Newsletters sent to 2,000+ business contacts 
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                    <img style={{width: '80%'}} src="../assets/img/pricing/3.png" alt /> 
                    </div>
                  </li>
                  <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Magazine Feature</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                     Feature in the Fintech magazine column 
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                 <img style={{width: '80%'}} src="../assets/img/pricing/NA.png" alt /> 
                    </div>
                  </li>
               
                </ul>

                {/* ----------------------- Print Media Branding --------------------------------------------------------------------- */}
              
                <div className={isVisible ? "visible-div" : "hidden-div"}>
                <h2 className="cs-pricing_name cs-semi_bold fw-bolder  mt-0">Print Media Branding</h2>
                <ul className="cs-pricing_feature cs-mp0 mb-3">
                <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Signage Branding</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                    Banners and posters for maximum exposure.
                    </span>  <br /> <br />
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                    Featuring your logo and messages at regular intervals during the event.
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                 <img style={{width: '80%'}} src="../assets/img/pricing/p-icon.png" alt /> 
                    </div>
                  </li>
                
             
                  <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Event Schedule</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                     Logo on digital & printed event schedule 
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                 <img style={{width: '80%'}} src="../assets/img/pricing/p-icon.png" alt /> 
                    </div>
                  </li>
               
                  <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Registration Branding</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                     Logo on Attendee badge  
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                 <img style={{width: '80%'}} src="../assets/img/pricing/p-icon.png" alt /> 
                    </div>
                  </li>
                  <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Registration Branding</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                     Logo on Lanyard   
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                    <img style={{width: '80%'}} src="../assets/img/pricing/NA.png" alt /> 
                    </div>
                  </li>
                  <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Notepad Branding</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                    Logo featured on event notepads. 
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                 <img style={{width: '80%'}} src="../assets/img/pricing/p-icon.png" alt /> 
                    </div>
                  </li>
                
                  <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Return Gift ThankYou Note</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                     Logo in the ThankYou note of the return gift
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                 <img style={{width: '80%'}} src="../assets/img/pricing/p-icon.png" alt /> 
                    </div>
                  </li>
                </ul>
                </div>
                
                
                
                   {/* ----------------------- Awards Night Branding --------------------------------------------------------------------- */}
               

                <div className={isVisible ? "visible-div" : "hidden-div"}>
                <h2 className="cs-pricing_name cs-semi_bold fw-bolder  mt-0">Awards Night Branding</h2>
                <ul className="cs-pricing_feature cs-mp0 mb-3">
                  <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Exhibit Space</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                    One exhibit space (3rd preference)
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                 <img style={{width: '80%'}} src="../assets/img/pricing/p-icon.png" alt /> 
                    </div>
                  </li>
                  <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                   <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Award Sponsorship</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                    Opportunity to sponsor one Award of your choice
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                    <img style={{width: '80%'}} src="../assets/img/pricing/NA.png" alt /> 
                    </div>
                  </li>
                  <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Key Note Speaker</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                    Opportunity to be a Keynote Speaker
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                <img style={{width: '80%'}} src="../assets/img/pricing/NA.png" alt /> 
                    </div>
                  </li>
               
                  <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Discussion Panel</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                    Opportunity to be a  member of Disscussion panel 
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                    <img style={{width: '80%'}} src="../assets/img/pricing/NA.png" alt /> 
                    </div>
                  </li>
                  <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Brand Video clip</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                    A short video showcase your brand’s innovations 
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                    <img style={{width: '80%'}} src="../assets/img/pricing/NA.png" alt /> 
                    </div>
                  </li>
                  <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Awards Night Tickets</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                    Bring 2 of your team members to witness the Awards night!
                   
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                    <img style={{width: '80%'}} src="../assets/img/pricing/2.png" alt />  
                    </div>
                  </li>
                
                </ul>
                </div>
                <div className="text-center" bis_skin_checked={1}>
        <a
          href="#"
          className={`cs-pricing_btn cs-primary_color cs-medium cs-accent_border ${
            isVisible ? "cs-accent_bg_hover" : ""
          }`}
          onClick={(e) => {
            e.preventDefault(); // Prevent default anchor behavior
            handleClick(); // Call toggle logic
          }}
        >
          {isVisible ? "Load Less" : "Load More"}
        </a>
      </div>
               
              </div>
            </div>
            <div className="cs-height_30 cs-height_lg_30" bis_skin_checked={1} />
          </div>
          {/* .col */}
        </div>
    </div>
  </div>
</div>

    </div>
 
)}

export default PrcingTable
