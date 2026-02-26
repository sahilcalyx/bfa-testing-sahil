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
                     Logo on the event website with your service information in <strong>700 words</strong> with images
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
                    8 Social media promotion - 4 Paid Ad post total reach count 5,000 - 20,000
                   
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                 <img style={{width: '80%'}} src="../assets/img/pricing/8.png" alt /> 
                    </div>
                  </li>
                  <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Newsletter</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                    6 Newsletters sent to 2,000+ business contacts
                   
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                    <img style={{width: '80%'}} src="../assets/img/pricing/6.png" alt /> 
                    </div>
                  </li>
                  {/* <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Magazine Feature</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                    Feature in the Fintech magazine column
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                 <img style={{width: '80%'}} src="../assets/img/pricing/p-icon.png" alt /> 
                    </div>
                  </li> */}
                
                </ul>

           


                {/* ----------------------- Print Media Branding --------------------------------------------------------------------- */}
              

                <div className={isVisible ? "visible-div" : "hidden-div"}>
                <h2 className="cs-pricing_name cs-semi_bold fw-bolder  mt-0">Print Media Branding</h2>
                <ul className="cs-pricing_feature cs-mp0 mb-3">
                  <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Signage Branding</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                    Company logo will appear on venue signage, digital displays
                    </span>  <br /> <br />
                   
                   </div>
                    <div className='col-2 '>
                   
                 <img style={{width: '80%'}} src="../assets/img/pricing/p-icon.png" alt /> 
                    </div>
                  </li>
                  <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Signage Branding</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                    Individual Banner
                    </span>  <br /> 
                   
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
                     <span className='mb-0 pb-0' style={{fontSize: '11px', lineHeight: '10px !important'}}>
                      <br/><strong>(First Priority)</strong>
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
                     <span className='mb-0 pb-0' style={{fontSize: '11px', lineHeight: '10px !important'}}>
                      <br/><strong>(First Priority)</strong>
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
                    <span className='mb-0 pb-0' style={{fontSize: '11px', lineHeight: '10px !important'}}>
                      <br/><strong>(First Priority)</strong>
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
                    <span className='mb-0 pb-0' style={{fontSize: '11px', lineHeight: '10px !important'}}>
                      <br/><strong>(First Priority)</strong>
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
                    Logo in the ThankYou note of <br/>the return gift
                    </span>
                    <span className='mb-0 pb-0' style={{fontSize: '11px', lineHeight: '10px !important'}}>
                      <br/><strong>(First Priority)</strong>
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                 <img style={{width: '80%'}} src="../assets/img/pricing/p-icon.png" alt /> 
                    </div>
                  </li>
                  <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Customised Souvenir</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                    Premium Souvenir
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                 <img style={{width: '80%'}} src="../assets/img/pricing/p-icon.png" alt /> 
                    </div>
                  </li>
                </ul>
                </div>
                   {/* ----------------------- Awards Nomination --------------------------------------------------------------------- */}
                

                <div className={isVisible ? "visible-div" : "hidden-div"}>
                <h2 className="cs-pricing_name cs-semi_bold fw-bolder  mt-0">Award Nomination</h2>
                <ul className="cs-pricing_feature cs-mp0 mb-4">
                  <li className='row align-items-center '>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}> Award Nomination</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                     Offers complimentary award nominations.
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                 <img style={{width: '80%'}} src="../assets/img/pricing/3.png" alt /> 
                    </div>
                  </li>
                 
                
                </ul>
                </div>
                   {/* ----------------------- Lead Generation --------------------------------------------------------------------- */}
                

                <div className={isVisible ? "visible-div" : "hidden-div"}>
                <h2 className="cs-pricing_name cs-semi_bold fw-bolder  mt-0">Lead Generation</h2>
                <ul className="cs-pricing_feature cs-mp0 mb-4">
                  <li className='row align-items-center '>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}> Leads</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                     Access to attendee details (name, company, email) as shared by participants.
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
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Headline </h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                  Event named in association with Sponsor
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                 <img style={{width: '80%'}} src="../assets/img/pricing/p-icon.png" alt /> 
                    </div>
                  </li>
                  <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Exhibit Space</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                  Premium<br/>
                   <strong>(1st preference)</strong>
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
                    A short video to showcase your brand’s innovations - <strong> 2 Clips</strong>
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
                    Bring 6 of your team members to witness the Awards night
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                    <img style={{width: '80%'}} src="../assets/img/pricing/6.png" alt />  
                    </div>
                  </li>
                  <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Awards Night Sitting</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                      Front row - CENTRE 

                   
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                    <img style={{width: '80%'}} src="../assets/img/pricing/p-icon.png" alt />  
                    </div>
                  </li>
                
                </ul>
                </div>

                <div className="text-center" bis_skin_checked={1}>
        <a
          href="#"
          className={`cs-pricing_btn cs-primary_color cs-medium cs-accent_border ${
            isVisible ? "" : ""
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
                    Logo on the event website with your service information in <strong>500 words</strong> with images
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
                   5 Social media promotion -  3 Paid Ad post  total reach count 2,000 - 15,000
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                    <img style={{width: '80%'}} src="../assets/img/pricing/5.png" alt /> 
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
                  {/* <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Magazine Feature</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                    Feature in the Fintech magazine column
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                 <img style={{width: '80%'}} src="../assets/img/pricing/NA.png" alt /> 
                    </div>
                  </li> */}
               
                </ul>

                

                {/* ----------------------- Print Media Branding --------------------------------------------------------------------- */}
              

                <div className={isVisible ? "visible-div" : "hidden-div"}>
                <h2 className="cs-pricing_name cs-semi_bold fw-bolder  mt-0">Print Media Branding</h2>
                <ul className="cs-pricing_feature cs-mp0 mb-3 mb-3">
                <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Signage Branding</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                    Company logo will appear on venue signage, digital displays
                    </span>  
                    <br /> <br />
                   
                   </div>
                    <div className='col-2 '>
                   
                 <img style={{width: '80%'}} src="../assets/img/pricing/p-icon.png" alt /> 
                    </div>
                  </li>
                <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Signage Branding</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                     Individual Banner
                    </span>  
                    <br /> 
                   
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
                     <span className='mb-0 pb-0' style={{fontSize: '11px', lineHeight: '10px !important'}}>
                      <br/><strong>(Second Priority)</strong>
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
                    <span className='mb-0 pb-0' style={{fontSize: '11px', lineHeight: '10px !important'}}>
                      <br/><strong>(Second Priority)</strong>
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
                    <span className='mb-0 pb-0' style={{fontSize: '11px', lineHeight: '10px !important'}}>
                      <br/><strong>(Second Priority)</strong>
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
                    <span className='mb-0 pb-0' style={{fontSize: '11px', lineHeight: '10px !important'}}>
                      <br/><strong>(Second Priority)</strong>
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
                    Logo in the ThankYou note of <br/>the return gift
                    </span>
                    <span className='mb-0 pb-0' style={{fontSize: '11px', lineHeight: '10px !important'}}>
                      <br/><strong>(Second Priority)</strong>
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                 <img style={{width: '80%'}} src="../assets/img/pricing/p-icon.png" alt /> 
                    </div>
                  </li>
                   <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Customised Souvenir</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                    Standard Souvenir
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                 <img style={{width: '80%'}} src="../assets/img/pricing/p-icon.png" alt /> 
                    </div>
                  </li>
                  
                </ul>
                </div>
  {/* ----------------------- Awards Nomination --------------------------------------------------------------------- */}
                

                <div className={isVisible ? "visible-div" : "hidden-div"}>
                <h2 className="cs-pricing_name cs-semi_bold fw-bolder  mt-0">Award Nomination</h2>
                <ul className="cs-pricing_feature cs-mp0 mb-4">
                  <li className='row align-items-center '>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}> Award Nomination</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                     Offers complimentary award nominations.
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                 <img style={{width: '80%'}} src="../assets/img/pricing/2.png" alt /> 
                    </div>
                  </li>
                 
                
                </ul>
                </div>
                   {/* ----------------------- Lead Generation --------------------------------------------------------------------- */}
                

                <div className={isVisible ? "visible-div" : "hidden-div"}>
                <h2 className="cs-pricing_name cs-semi_bold fw-bolder  mt-0">Lead Generation</h2>
                <ul className="cs-pricing_feature cs-mp0 mb-4">
                  <li className='row align-items-center '>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}> Leads</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                     Access to attendee details (name, company, email) as shared by participants.
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                 <img style={{width: '80%'}} src="../assets/img/pricing/NA.png" alt /> 
                    </div>
                  </li>
                 
                
                </ul>
                </div>
                <div className={isVisible ? "visible-div" : "hidden-div"}>
                <h2 className="cs-pricing_name cs-semi_bold fw-bolder  mt-0">Awards Night Branding</h2>
                <ul className="cs-pricing_feature cs-mp0 mb-3 mb-3">
                  <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Headline </h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                  Event named in association with Sponsor
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                 <img style={{width: '80%'}} src="../assets/img/pricing/NA.png" alt /> 
                    </div>
                  </li>
                  <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Exhibit Space</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                    Standard <br/><strong>(2nd preference)</strong>
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
                    A short video to showcase your brand’s innovations - <strong> 1 Clip</strong>
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
                   Bring 4 of your team members to witness the Awards night
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                    <img style={{width: '80%'}} src="../assets/img/pricing/4.png" alt />  
                    </div>
                  </li>
                 <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Awards Night Sitting</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                      Front row - RIGHT

                   
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                    <img style={{width: '80%'}} src="../assets/img/pricing/p-icon.png" alt />  
                    </div>
                  </li>
                </ul>
                
                </div>
                <div className="text-center" bis_skin_checked={1}>
        <a
          href="#"
          className={`cs-pricing_btn cs-primary_color cs-medium cs-accent_border ${
            isVisible ? "" : ""
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
                    Logo on the event website with your service information in <strong>300 words</strong> with images
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
                     3 Social media promotion - 2 Paid Ad post  total reach count 1,000 - 10,000 
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                    <img style={{width: '80%'}} src="../assets/img/pricing/3.png" alt /> 
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
                  {/* <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Magazine Feature</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                     Feature in the Fintech magazine column 
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                 <img style={{width: '80%'}} src="../assets/img/pricing/NA.png" alt /> 
                    </div>
                  </li> */}
               
                </ul>

                {/* ----------------------- Print Media Branding --------------------------------------------------------------------- */}
              
                <div className={isVisible ? "visible-div" : "hidden-div"}>
                <h2 className="cs-pricing_name cs-semi_bold fw-bolder  mt-0">Print Media Branding</h2>
                <ul className="cs-pricing_feature cs-mp0 mb-3">
                <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Signage Branding</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                    Company logo will appear on venue signage, digital displays<br/><br/> 
                    </span> 
                   
                   </div>
                    <div className='col-2 '>
                   
                 <img style={{width: '80%'}} src="../assets/img/pricing/NA.png" alt /> 
                    </div>
                  </li>
                <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Signage Branding</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                    Banner in sharing with 2 Silver sponsors
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
                   
                    <span className='mb-0 pb-0' style={{fontSize: '11px', lineHeight: '10px !important'}}>
                      <br/><strong>(Third Priority)</strong>
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
                    <span className='mb-0 pb-0' style={{fontSize: '11px', lineHeight: '10px !important'}}>
                      <br/><strong>(Third Priority)</strong>
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
                    <br/>
                    <br/>
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
                    <span className='mb-0 pb-0' style={{fontSize: '11px', lineHeight: '10px !important'}}>
                      <br/><strong>(Third Priority)</strong>
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
                     Logo in the ThankYou note of <br/>the return gift
                    </span>
                    <span className='mb-0 pb-0' style={{fontSize: '11px', lineHeight: '10px !important'}}>
                      <br/><strong>(Third Priority)</strong>
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                 <img style={{width: '80%'}} src="../assets/img/pricing/p-icon.png" alt /> 
                    </div>
                  </li>
                   <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Customised Souvenir</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                    NA
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                 <img style={{width: '80%'}} src="../assets/img/pricing/NA.png" alt /> 
                    </div>
                  </li>
                </ul>
                </div>
                  {/* ----------------------- Awards Nomination --------------------------------------------------------------------- */}
                

                <div className={isVisible ? "visible-div" : "hidden-div"}>
                <h2 className="cs-pricing_name cs-semi_bold fw-bolder  mt-0">Award Nomination</h2>
                <ul className="cs-pricing_feature cs-mp0 mb-4">
                  <li className='row align-items-center '>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}> Award Nomination</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                     Offers complimentary award <br/>nomination.
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                 <img style={{width: '80%'}} src="../assets/img/pricing/1.png" alt /> 
                    </div>
                  </li>
                 
                
                </ul>
                </div>
                   {/* ----------------------- Lead Generation --------------------------------------------------------------------- */}
                

                <div className={isVisible ? "visible-div" : "hidden-div"}>
                <h2 className="cs-pricing_name cs-semi_bold fw-bolder  mt-0">Lead Generation</h2>
                <ul className="cs-pricing_feature cs-mp0 mb-4">
                  <li className='row align-items-center '>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}> Leads</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                     Access to attendee details (name, company, email) as shared by participants.
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                 <img style={{width: '80%'}} src="../assets/img/pricing/NA.png" alt /> 
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
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Headline </h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                   Event named in association with Sponsor 
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                 <img style={{width: '80%'}} src="../assets/img/pricing/NA.png" alt /> 
                    </div>
                  </li>
                  <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Exhibit Space</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                    Basic <br/><strong>(3rd preference)</strong>
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
                    A short video to showcase your brand’s innovations 
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
                    Bring 2 of your team members to witness the Awards night
                   
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                    <img style={{width: '80%'}} src="../assets/img/pricing/2.png" alt />  
                    </div>
                  </li>
                 <li className='row align-items-center'>
                   <div className='col-10' style={{lineHeight: '1'}}>
                    <h6 className='mb-1 pb-0 fw-bolder' style={{fontSize: '16px'}}>Awards Night Sitting</h6>
                    <span className='mb-0 pb-0' style={{fontSize: '13px', lineHeight: '10px !important'}}>
                      Second Row 

                   
                    </span>
                   </div>
                    <div className='col-2 '>
                   
                    <img style={{width: '80%'}} src="../assets/img/pricing/p-icon.png" alt />  
                    </div>
                  </li>
                </ul>
                </div>
                <div className="text-center" bis_skin_checked={1}>
        <a
          href="#"
          className={`cs-pricing_btn cs-primary_color cs-medium cs-accent_border ${
            isVisible ? "" : ""
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
