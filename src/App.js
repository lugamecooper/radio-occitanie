// eslint-disable-next-line
import { useState } from "react";
import ReactDOM from "react-dom/client";
// eslint-disable-next-line
import {Button,MenuItem,Menu} from "@mui/material";
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state'
// eslint-disable-next-line
import Modal from 'react-modal';
import './App.css'
import React from "react";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

class Test extends React.Component{
  constructor() {
    super();
    this.state = {background_color: "grey"};
    this.state = {partenaire: false};
    this.state = {contacter: false};
    this.state = {
      langue:{
        nos_escotar:"Nos escotar :",
        98.3:"en Paìs Tolsan",
        89.4:"en Comenge",
        Partenaris:"Partenaris",
        Contacts:"Contacts",
        106.1:"en Lauragués-Arièja",
        93.6:"en Roèrgue"
      }};
    this.render();
  }
  
//-------------------------------------//

  oc(){
    this.setState({
      langue:{
        nos_escotar:"Nos escotar :",
        98.3:"en Paìs Tolsan",
        89.4:"en Comenge",
        Partenaris:"Partenaris",
        Contacts:"Contacts",
        106.1:"en Lauragués-Arièja",
        93.6:"en Roèrgue"
      }})
  }

//-------------------------------------//

  fr(){
    this.setState({
      langue:{
        nos_escotar:"Nous écouter :",
        98.3:"à Toulouse",
      }})
  }

//-------------------------------------//

  en(){
    this.setState({
      langue:{
        nos_escotar:"Listen to us :",
        98.3:"in Toulouse",
      }})
  }

//-------------------------------------//

  render() {
    return <>
    <div style={{position:"fixed", zIndex:100, width:"100%",backgroundColor:"#d5001c"}}>
    <a alt="radio occitania" href="https://radio-occitania.com/"><img className="bandeau" src="LogoRougeJauneCarre1.png" alt="logo_radio_occitanie" height={"20%"} width={"20%"} style={{marginLeft:"12px"}}></img></a>
    
    <div className="bandeau">
    <p className="text_bandeau">
    98.3 {this.state.langue["98.3"]}
    </p>
    <p className="text_bandeau">
    89.4 {this.state.langue["89.4"]}
    </p>
    <p className="text_bandeau">
    106.1 {this.state.langue["106.1"]}
    </p>
    <p className="text_bandeau">
    93.6 {this.state.langue["93.6"]}
    </p>
    </div>

    <PopupState variant="popover" popupId="demoMenu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)} style={{marginTop:"5%",marginLeft:"4%",color: "gold",backgroundColor:"#d5001c"}}>
            <img src="Sans titre.png" alt="" style={{height:"40px",width:"40px"}}></img>
          </Button>
          <Menu {...bindMenu(popupState)} style={{color:"#d5001c"}}>
            <MenuItem onClick={() => {this.oc();popupState.close();}} style={{color: "gold",backgroundColor:"#d5001c"}}>Occitan</MenuItem>
            <MenuItem onClick={() => {this.en();popupState.close();}} style={{color: "gold",backgroundColor:"#d5001c"}}>English</MenuItem>
            <MenuItem onClick={() => {this.fr();popupState.close();}} style={{color: "gold",backgroundColor:"#d5001c"}}>Français</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
    <div className="player">
    <p style={{textAlign:"center"}}>
    {this.state.langue.nos_escotar}
    </p>

    <AudioPlayer
    src="https://www.comequip.eu/Radio-Occitania"
    showSkipControls = {false}
    showJumpControls = {false}
    layout="horizontal"
    customAdditionalControls={[]}
    style={{backgroundColor:"#d5001c",}}
    progressUpdateInterval = {5}
    volume={0.5}
    defaultDuration = {""}
    />
    </div>
    </div>
    <br></br>
    <div style={{marginTop:"163.3px",backgroundColor:"#d5001c",textAlign:"center"}}>
      <Button onClick={""} style={{marginRight:"41%",color: "gold",backgroundColor:"#d5001c"}} variant="contained">
        {this.state.langue.Partenaris}
      </Button>

      <Button onClick={""} style={{color: "gold",backgroundColor:"#d5001c"}} variant="contained">
        {this.state.langue.Contacts}
      </Button>
    </div>
    <br></br>
    
    <div>
    </div>
    <div>
			<div data-href="https://www.facebook.com/radiooccitania" data-tabs="timeline" data-height="100%" data-width="500px" data-small-header="true" data-hide-cover="false" data-show-facepile="true" data-hide-cta="false" style={{minHeight: "1px", height: "3100px"}} >
        <iframe name="intégration facedebook" height="100%" title="page Facebook" allowtransparency="true" allowfullscreen="true" allow="encrypted-media" style={{border: "medium", visibility: "visible", width: "500px", height: "100%"}} src="https://www.facebook.com/v2.10/plugins/page.php?app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Dfef335f179e560655%26domain%3Dradio-occitania.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fradio-occitania.com%252Ffa0b1bd93d2021731%26relation%3Dparent.parent&amp;container_width=540&amp;height=4200&amp;hide_cover=false&amp;hide_cta=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Fradiooccitania&amp;locale=fr_FR&amp;sdk=joey&amp;show_facepile=true&amp;small_header=true&amp;tabs=timeline&amp;width=500px">
      </iframe>
      </div>
    </div>      
    </>;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Test/>);

export default Test;