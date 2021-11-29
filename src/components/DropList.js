import contract from "../contract/contract.json";
import Web3 from "web3";
import {useState, useEffect} from "react";
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
    Link ,
  } from "react-router-dom";
import Home from "./Home";
// import About component
import About from "./About";
// import Whitelist component
import Whitelist from "./Whitelist";
import Form from "./Form";
const DropList = () => {
    const Home = () => {
        return (
          <div>
            {/* Endpoint to route to Home component */}
            <div className="header">
                <h1>Damon Sharpen NFT</h1>
            </div>              
            <br />
            <ul>
              <li>
                {/* Endpoint to route to About component */}
                {/* <Link to="/whitelist">Whitelist</Link> */}
                <a href="#">
                <div className="whitelist">
                    {/* <a href="#">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Neon button
                    </a> */}
                    {/* <a href="#" onClick={() => shoot("Goal!")}> */}
                    
                        <Link to="/whitelist">
                            
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Whitelist
                            
                        </Link>
                    {/* <a href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Heart Drop
                    </a>               */}
                 </div>                
                 </a>
              
              
              </li>
            </ul>        
          </div>
        );
      };
      const Whitelist = () => {

        return (
            <div>
              {/* Endpoint to route to Home component */}
              {/* <div className="header">
                  <h1>Whitelist</h1>
              </div>  */}
              <br />  
              <br /> 
              <br /> 
              <br />

              <div className="whitelistForm">
                 <Form />  
              </div>
                
            </div>

          );




        // https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/





        
      };

    return (


        
        <div>
        {/* whitelist button cool button*/}
        {/* https://codepen.io/bhadupranjal/pen/vYLZYqQ */}
        {/* transition to the next page */}
        {/* https://rookiecoder.medium.com/react-button-click-navigate-to-new-page-6af7397ea220 */}
        {/* https://github.com/minioncoder/ReactButtonExample */}
        {/* This is the alias of BrowserRouter i.e. Router */}
        <Router>
        {/* https://www.geeksforgeeks.org/how-to-redirect-to-another-page-in-reactjs/ */}
        {/* https://www.youtube.com/watch?v=tiAlSpyWIDs */}
            <Switch>
                {/* This route is for home component 
                with exact path "/", in component props 
                we passes the imported component*/}
                <Route exact path="/" component={Home} />

                {/* This route is for about component 
                with exact path "/about", in component 
                props we passes the imported component*/}
                <Route path="/about" component={About} />

                {/* This route is for whitelist component
                with exact path "/whitelist", in 
                component props we passes the imported component*/}
                <Route path="/whitelist" component={Whitelist} />

                {/* If any route mismatches the upper 
                route endpoints then, redirect triggers 
                and redirects app to home component with to="/" */}
                <Redirect to="/" />
            </Switch>
        </Router>

        {/* <div className="content">
            <Tabs>
            <TabList>
                <Tab>Title 1</Tab>
                <Tab>Title 2</Tab>
            </TabList>

            <TabPanel>
            <button onClick={() => getDrops()}>Get Drops </button> 
                {drops.loading ? <p>Loading</p> : null} 
                <div style = {{height: '50'}}></div>
                {drops.list.map(item =>{
                    return (
                        <div className={"dropContainer"}>
                            <div>
                                <p className={"dropText"}>{item.name}</p>
                                <p className={"dropText"}>{item.description}</p>
                                <div style = {{height: '20'}}></div>
                                <img className = {"dropImage"} alt={"drop image"} src={item.imageUri} style={{ width: 40, height: 40 }}/>
                            </div>
                            <div>
                                <p>Twitter:  {item.social_1}</p>
                                <p>Discord: {item.social_2}</p>
                            </div>
                            <div>
                                <p className={"dropText"}>Price: {item.price} ETH</p>                            
                                <p className={"dropText"}>Total Supply: {item.supply}</p>
                                <p className={"dropText"}>Presale Date: {item.presale}</p>
                                <p className={"dropText"}>Sale Date: {item.sale}</p>                                
                            </div>                          
                        </div>
                    );
                })}
            </TabPanel>
            <TabPanel>
            <form onSubmit={handleSubmit(onSubmit)}>
                    <label>imageUri</label>
                    <input {...register("imageUri")} />
                    <br/>
                    <label>name</label>
                    <input {...register("name")} />
                    <br/>
                    <label>description</label>
                    <input {...register("description")} />
                    <br/>
                    <label>twitter</label>
                    <input {...register("social_1")} />
                    <br/>
                    <label>discord</label>
                    <input {...register("social_2")} />
                    <br/>
                    <label>website</label>
                    <input {...register("website")} />
                    <br/>
                    <label>price</label>
                    <input {...register("price")} />
                    <br/>
                    <label>supply</label>
                    <input {...register("supply")} />
                    <br/>
                    <label>presale</label>
                    <input {...register("presale")} />
                    <br/>
                    <label>sale</label>
                    <input {...register("sale")} />
                    <br/>
                    <label>chain</label>
                    <input {...register("chain")} />
                    <br/>
                    <input type="submit" />
                </form>  
            </TabPanel>
            </Tabs>
        </div> */}
        </div>
    ); 
};



export default DropList;
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
