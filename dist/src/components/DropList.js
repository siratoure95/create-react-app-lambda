import contract from "../contract/contract.json";
import Web3 from "web3";
import { useState, useEffect } from "react";
// This function detects most providers injected at window.ethereum
import detectEthereumProvider from '@metamask/detect-provider';
import { useForm } from 'react-hook-form';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "../styles/style.css";
import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';

// This is a React Router v6 app
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link,
} from "react-router-dom";
import Home from "./Home";
// import About component
import About from "./About";
// import Whitelist component
import Whitelist from "./Whitelist";
import Form from "./Form";
import image from "../img/damondark.png";
import topimage from "../styles/images/tokyo_drop_banner@2x.png";
// import metamaskimage1 from "../styles/images/metamaskimage1.jpg";
import metamaskimage1 from "../styles/images/meta1_image.png";
import metamaskimage2 from "../styles/images/metamaskimage2.jpg";
import logo from "../styles/images/def_logo.png";
import realmlogo from "../styles/images/realm_logo.png";
import damenlogo from "../styles/images/dsharpe_logo.png";
import dlogo from "../styles/images/defintasy_side_wht@2x.png";
import rlogo from "../styles/images/realm_logo_wht.png";
import heartdrop from "../styles/images/aboutthedrop (1920 x 720 px).png";
import heartdropbanner from "../styles/images/headerbanner1920px720p (1920 x 718 px).png";
import aboutdamon from "../styles/images/aboutDamonSharpe.png";
import Participatecontainer from "../styles/images/howtoParticipate (1920 x 720 px) (1920 x 2000 px).png";
import ParticipateHeader from "../styles/images/Howtopartcipcate.png";
import AboutDamon from "../styles/images/ABOUT_DAMON(1920 x 718 px) .png";
import collab from "../styles/images/Collaborators(1920 x 718 px) (1920 x 500 px) (1920 x 250 px).png";
import roadmap from "../styles/images/Roadmap (1920 x 718 px) (1920 x 900 px).png";
// import Participatecontainer from "../styles/images/howtopart (1920 x 718 px).png";
// howtopart (1920 x 718 px)
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faYoutube
} from "@fortawesome/free-brands-svg-icons";

const DropList = () => {

        const Home = () => {
            return ( 
            <html>
                <body>              
                    <div className = 'topsectionimage' >
                        <img src = { heartdropbanner } className = "topsectionimage" style = {{ textDecoration: "none" }}/> 
                        <header style={{color: 'black'}} >Damon Sharpe's NFT</header>
                        <img src = { heartdrop } className = "topsectionimage1" />

                        <div className="blue-square-container">
                            
                            <div className="white-square">
                                <p style={{color: 'white'}}>The whitelist</p> 
                            </div> 
                            <br/>
                            <div className="blue-square">
                                <p style={{color: 'white'}}>The whitelist is a presale opportunity for you<br/>to confirm your place in the upcoming NFT drop.
                                <br/><br/>We appreciate your interest in joining the whitelist for</p>   
                                <p style={{color: '#ed0a72', fontWeight: 'bold'}}>Damon Sharpe's Tokyo CyberHeart Drop.<br/> </p> 
                                <p style={{color: 'white'}}><br/>To join the whitelist, click on the button below and<br/> complete the form.</p>  
                                <p style={{color: '#ed0a72', fontWeight: 'bold'}}><br/>Stay up to date with the latest information on Damon Sharpe's Tokyo CyberHeart Drop by following us (<a href="https://metamask.io/" style={{textDecoration : "none",color: '#1581b7', fontWeight: 'bold',textAlign: 'justify'}}> here </a>) </p>
                            </div>                          

                            <div className="blue-square" > 
                                <br/>
                                <p style={{color: 'white' ,backgroundColor:'#1d0c39', textAlign:'center'}}> 
                                    <div style={{textDecoration : "none",backgroundColor:'##000', fontWeight: 'bold',textAlign: 'center',color: "black"}}>Official Launch: 12.15.2021, 12:00 am PST</div> 
                                    <br/>    <a style={{textDecoration : "none",backgroundColor:'#1d0c39', fontWeight: 'bold',textAlign: 'center'}}>Whitelist Starts: 12.01.2021, 12:00 am PST </a>
                                    <br/>    <a style={{textDecoration : "none",backgroundColor:'#1d0c39', fontWeight: 'bold',textAlign: 'center'}}>Whitelist Closes: 12.14.2021, 11:59 pm PST </a>
                                    <br/>    <a style={{textDecoration : "none",backgroundColor:'#1d0c39', fontWeight: 'bold',textAlign: 'center'}}>Official Launch: 12.15.2021, 12:00 am PST<br/></a> <br/>
                                    <div style={{textDecoration : "none",backgroundColor:'##000', fontWeight: 'bold',textAlign: 'center',color: "black"}}>Official Launch: 12.15.2021, 12:00 am PST</div> 
                                    <div style={{textDecoration : "none",backgroundColor:'##000', fontWeight: 'bold',textAlign: 'center',color: "black"}}>Official Launch: 12.15.2021, 12:00 am PST</div> 
                                </p>  
                                
                                {/* <br/> */}
                                {/* <br/> */}
                            </div> 
                            <br/>
                            <br/>                            
 

                            <h1 style={{color: 'black'}} >Whitelist</h1>
                            <form action="http://eepurl.com/hLm95z"className="whitelistbutton">
                                <input type="submit" value="Join Now" className="button" style={{fontWeight: 'bold', fontSize:'100%'}}/>
                            </form>
                            <br/>
                            <br/>

                            <img src = { roadmap } className = "topsectionimage1"  style = {{ textDecoration: "none", width: "100%", height: "100%"}}/> 
                            <br/>
                            <img src = { Participatecontainer } className = "topsectionimage1" style = {{ textDecoration: "none", width: "100%", height: "100%"}}/> 
                           
                        </div>                            
                    </div> 
                    <div className = 'topsectionimage' >
                        <img src = { AboutDamon } className = "topsectionimage" style = {{ textDecoration: "none" }}/> 
                        <header style={{color: 'black'}} >Damon Sharpe's NFT</header>

                        <div className="blue-square-container" style={{textAlign: 'right'}}>
                            
                            <div className="blue-square"  style={{color: 'white', width: '70%', height: '100%'}}>
                                <p style={{color: 'white'}}>Grammy and ASCAP Award-Winning Producer,  
                                <br/>Songwriter,DJ, and Artist signed to Armada Music</p> 
                                <br/>  
                                <p style={{color: '#ed0a72', fontWeight: 'bold'}}>60M+ Streams as an Artist<br/> </p> 
                                <p style={{color: 'white'}}><br/>Features in Billboard, EDM.com, Dancing Astronaut,<br/> Cover of EDM World Magazine, and more</p>  
                                <br/>
                                <p style={{color: 'white'}}>Collabs with Loud Luxury, Gattuso, Disco 
                                <br/>Fries, Morgan Page, Zonderling, Dave Winnel,
                                <br/>Raven & Kreyn, DVRKO, Orjan Nilsen, Bijou,    
                                <br/>Elephante, and more.                                                          
                                </p> 
                                <br/>  
                                <p style={{color: '#ed0a72', fontWeight: 'bold'}}>Learn more about Damon Sharpe <a href="https://damonsharpe.com/about/" style={{textDecoration : "none",color: '#1581b7', fontWeight: 'bold',textAlign: 'justify'}}> here </a> <br/> </p> 
                            </div>                          

                            {/* <div className="blue-square">
                                <p style={{color: 'white'}}>Collabs with Loud Luxury, Gattuso, Disco 
                                <br/>Fries, Morgan Page, Zonderling, Dave Winnel,
                                <br/>Raven & Kreyn, DVRKO, Orjan Nilsen, Bijou,    
                                <br/>Elephante, and more.                                                          
                                </p> 
                                <br/>  
                                <p style={{color: '#ed0a72', fontWeight: 'bold'}}>Learn more about Damon Sharpe <a href="https://damonsharpe.com/about/" style={{textDecoration : "none",color: '#1581b7', fontWeight: 'bold',textAlign: 'justify'}}> here </a> <br/> </p> 
                            </div>    */}
                            <h1 style={{color: 'black'}} >Whitelist</h1>
                           
                        </div>                            
                    </div>
                <div className='middlebottomsectiomn'>
                  <div className="social-container" style={{
                      backgroundColor: 'black',
                      backgroundSize: 'contain',
                      justifyContent: "space-evenly",
                      alignItems:'baseline',
                    }}>
                  <div className="Paternship" style={{color: 'black',textDecoration:"none", textAlign: 'center'}} >
                  <div className="pink-square-collab"></div><br/>               
                    <img src = { collab } className = "topsectionimage" style = {{ textDecoration: "none" }}/> 
                    <a href="https://defintasy.com/" className="damonbrand">
                          <img src={logo}  />
                                                    
                    </a> 
                    <br/><br/>    
                    <a href="https://www.realm.art/" className="damonbrand">
                          <img src={realmlogo} />
                                                    
                    </a>  
                    <br/><br/>                       
                    <a href="https://damonsharpe.com//" className="damonbrand">
                        <img src={damenlogo}  />
                        
                    </a>  
                    <br/><br/> <br/>               
                    <h3 style={{color: "white", textAlign: "center"}}>Follow Us</h3>
                      <a href="https://www.facebook.com/Defintasy-233032421958691/"
                        className="facebook social">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                      </a>
                      <a href="https://twitter.com/defintasyk" className="twitter social">
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                      </a>
                      <a href="https://www.instagram.com/defintasy/"
                        className="instagram social">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                      </a> 
                   
                  </div>

                  </div>
                </div> 
                <div className="privacy">
                  <p>
                      <a href="https://defintasy.com/privacy.html" style={{color: 'white',textDecoration:"none", textAlign: 'center'}} >
                        <p>Copyright © 2021, Defintasy Inc. All Rights Reserved Privacy Policy</p>  
                      </a>
                  </p> 
                  <br/>   
                </div>                
              </body>
            </html>
        );
      };  

    return (
        <div>
           <Home /> 
        {/* whitelist button cool button*/}
        {/* https://codepen.io/bhadupranjal/pen/vYLZYqQ */}
        {/* transition to the next page */}
        {/* https://rookiecoder.medium.com/react-button-click-navigate-to-new-page-6af7397ea220 */}
        {/* https://github.com/minioncoder/ReactButtonExample */}
        {/* This is the alias of BrowserRouter i.e. Router */}
        {/* <Router> */}
        {/* https://www.geeksforgeeks.org/how-to-redirect-to-another-page-in-reactjs/ */}
        {/* https://www.youtube.com/watch?v=tiAlSpyWIDs */}
            {/* <Switch>
                <Route exact path="/" component={Home} />
                <Redirect to="/" />
            </Switch>
        </Router> */}
        </div>
    ); 
};



export default DropList;
 {/* Social media: https://www.digitalocean.com/community/tutorials/creating-a-social-follow-component-in-react */}
//  ["https://testtest.com/3.png","Test Collection","This is my drop for the month","twitter","https://testtest.com","fasfas","0.03","22","1635790237","1635790237",1,false]      
// struct Drop{
//     string imageUri;
//     string name;
//     string description;
//     string social_1;
//     string social_2;
//     string website;
//     string price;
//     uint256 supply;
//     uint256 presale;
//     uint256 sale;
//     uint8 chain;
//     bool approved;
    
// }
