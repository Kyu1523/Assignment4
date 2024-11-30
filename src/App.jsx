import './App.css'
import { useState } from 'react';
import { Tooltip } from 'react-tooltip'

function App() {
    const janData = [{date:"1st",day:"Saturday", mostPlayed:"Potyguara Bardo - Oasis (Ao Vivo no Estúdio MangoLab)", timesPlayed:"39", img:"https://i.scdn.co/image/ab67616d0000485147309606034fbf178c6bbfe7", scale:"1"},
      {date:"2nd",day:"Sunday",mostPlayed:"Potyguara Bardo - Você Não Existe,Potyguara Bardo",timesPlayed:"26",img:"https://i.scdn.co/image/ab67616d0000485183a6cf276d1ec69f167ac260",scale:"1"},
      {date:"3rd",day:"Monday",mostPlayed:"Aly & AJ - Potential Breakup Song,Luísa Sonza",timesPlayed:"66",img:"https://i.scdn.co/image/ab67616d000048519642e82608c68ebc941755de",scale:"2"},
      {date:"4th",day:"Tuesday",mostPlayed:"Urias - Peligrosa,Aly & AJ",timesPlayed:"41",img:"https://i.scdn.co/image/ab67616d00004851b1a07e16215fc423473e56e6",scale:"2"},
      {date:"5th",day:"Wednesday",mostPlayed:"Lorde - Stoned at the Nail Salon",timesPlayed:"116",img:"https://i.scdn.co/image/ab67616d0000485136615a0a60523dd62135ab3a",scale:"3"},
      {date:"6th",day:"Thursday",mostPlayed:"Lorde - Perfect Places",timesPlayed:"91",img:"https://i.scdn.co/image/ab67616d00004851f8553e18a11209d4becd0336",scale:"3"},
      {date:"7th",day:"Friday",mostPlayed:"Loona - WOW",timesPlayed:"17",img:"https://i.scdn.co/image/ab67616d00004851608cf05fbd3605c77444917f",scale:"1"},
      {date:"8th",day:"Saturday",mostPlayed:"Lorde - Green Light",timesPlayed:"81",img:"https://i.scdn.co/image/ab67616d00004851f8553e18a11209d4becd0336",scale:"3"},
      {date:"9th",day:"Sunday",mostPlayed:"FBC - Se Tá Solteira",timesPlayed:"34",img:"https://i.scdn.co/image/ab67616d00004851833e6be15c4f974106ed68ef",scale:"1"},
      {date:"10th",day:"Monday",mostPlayed:"Danny Bond - Traz o B",timesPlayed:"5",img:"https://i.scdn.co/image/ab67616d00004851b97ac37ba0850227ab63c015",scale:"1"},
      {date:"11th",day:"Tuesday",mostPlayed:"Marina - Happy Loner",timesPlayed:"124",img:"https://i.scdn.co/image/ab67616d00004851ccbe716313392350f3ce4624",scale:"4"},
      {date:"12th",day:"Wednesday",mostPlayed:"Arca - Intimate Flesh",timesPlayed:"22",img:"https://i.scdn.co/image/ab67616d000048514d8cf86a052ca229b2f72f14",scale:"1"},
      {date:"13th",day:"Thursday",mostPlayed:"Ariana Grande - test drive",timesPlayed:"200",img:"https://i.scdn.co/image/ab67616d000048519508fb7ca2eedc0d98b9139f",scale:"5"},
      {date:"14th",day:"Friday",mostPlayed:"Pabllo Vittar - Trago Seu Amor de Volta - Live",timesPlayed:"55",img:"https://i.scdn.co/image/ab67616d00004851f8400a7740e9a2b70ab9913e",scale:"2"},
      {date:"15th",day:"Saturday",mostPlayed:"Mateus Carrilho - Noite de Caça",timesPlayed:"3",img:"https://i.scdn.co/image/ab67616d00004851e6fa43231f5471e7768e67fb",scale:"1"},
      {date:"16th",day:"Sunday",mostPlayed:"My Chemical Romance - I'm Not Okay (I Promise)",timesPlayed:"21",img:"https://i.scdn.co/image/ab67616d00004851cab7ae4868e9f9ce6bdfdf43",scale:"1"},
      {date:"17th",day:"Monday",mostPlayed:"Liniker e os Caramelows - Caeu",timesPlayed:"35",img:"https://i.scdn.co/image/ab67616d00004851fa34543e07658932f51582da",scale:"1"},
      {date:"18th",day:"Tuesday",mostPlayed:"Kim Petras - Coconuts",timesPlayed:"37",img:"https://i.scdn.co/image/ab67616d00004851fe4e15d98f12fa9fe186c39d",scale:"1"},
      {date:"19th",day:"Wednesday",mostPlayed:"Charli XCX - Good Ones",timesPlayed:"21",img:"https://i.scdn.co/image/ab67616d00004851f629eb64fd8ef76a97b154f5",scale:"1"},
      {date:"20th",day:"Thursday",mostPlayed:"Grag Queen - ESTILO ANA MARIA",timesPlayed:"2",img:"https://i.scdn.co/image/ab67616d0000485119f98ff0808bac83af1b6ec1",scale:"1"},
      {date:"21th",day:"Friday",mostPlayed:"Grag Queen - DIN DIRIN DIN",timesPlayed:"8",img:"https://i.scdn.co/image/ab67616d0000485119f98ff0808bac83af1b6ec1",scale:"1"},
      {date:"22th",day:"Saturday",mostPlayed:"Arca - Bruja",timesPlayed:"18",img:"https://i.scdn.co/image/ab67616d000048514d8cf86a052ca229b2f72f14",scale:"1"},
      {date:"23th",day:"Sunday",mostPlayed:"Kali Uchis - telepatía",timesPlayed:"154",img:"https://i.scdn.co/image/ab67616d00004851044a5466dac00f7b3c570b99",scale:"4"},
      {date:"24th",day:"Monday",mostPlayed:"Arca - Bruja",timesPlayed:"43",img:"https://i.scdn.co/image/ab67616d000048514d8cf86a052ca229b2f72f14",scale:"2"},
      {date:"25th",day:"Tuesday",mostPlayed:"Rina Sawayama - Tokyo Love Hotel",timesPlayed:"2",img:"https://i.scdn.co/image/ab67616d000048515b131d745dafd8666254fe96",scale:"1"},
      {date:"26th",day:"Wednesday",mostPlayed:"Pabllo Vittar - Buzina",timesPlayed:"99",img:"https://i.scdn.co/image/ab67616d0000485170546528c21a19530a22bb78",scale:"3"},
      {date:"27th",day:"Thursday",mostPlayed:"Charli XCX - Beg for You (feat. Rina Sawayama)",timesPlayed:"62",img:"https://i.scdn.co/image/ab67616d00004851f629eb64fd8ef76a97b154f5",scale:"2"},
      {date:"28th",day:"Friday",mostPlayed:"Ghast - pon pon",timesPlayed:"77",img:"https://i.scdn.co/image/ab67616d00004851589f2529b55c74d718c2e5b4",scale:"2"},
      {date:"29th",day:"Saturday",mostPlayed:"Charli XCX - Beg for You (feat. Rina Sawayama)",timesPlayed:"37",img:"https://i.scdn.co/image/ab67616d00004851f629eb64fd8ef76a97b154f5",scale:"1"},
      {date:"30th",day:"Sunday",mostPlayed:"Rina Sawayama - XS",timesPlayed:"3",img:"https://i.scdn.co/image/ab67616d000048515b131d745dafd8666254fe96",scale:"1"},
      {date:"31th",day:"Monday",mostPlayed:"Anitta - Boys Don't Cry",timesPlayed:"147",img:"https://i.scdn.co/image/ab67616d0000485171fe31f1c28cabcde929f401",scale:"4"},
  ];
  
  function display(id){
    console.log(id.target);
  }

//use useState to change variable to be none or block for card display on hover?
  const MapData = janData.map(janData => 
    <div key = {janData.date} className = {`day scale${janData.scale}`} id={janData.date} onMouseOver={display} data-tooltip-id = {janData.date}>
      <Tooltip id = {janData.date} place = "right">
             <p className = "Date">{janData.day}, January {janData.date}</p>
              <p className="info">{janData.mostPlayed}</p>
              <p className="info">{janData.timesPlayed}</p>
              <img src = {janData.img}></img>
      </Tooltip>
    </div>
    )

  return(
  <>
  <div className="map">
      <h1 id = "Title">January Heatmap</h1>
      <div className="calender">
        {MapData}
      </div>
    </div>
  </>
  )
}

export default App
