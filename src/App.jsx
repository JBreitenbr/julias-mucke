import './App.css'
import {useState} from 'react'
import {tDict} from './tDict'
import {bandsDict} from './bandsDict'

export default function App() {
  let [letter, setLetter]=useState()
  let [bands, setBands]=useState([])
  let [bandName, setBandName]=useState("P.F.M.")
  function handleLetter(e){
    setLetter(e.target.value)
    setBands(bandsDict.find(item=>item.name===e.target.value).bands)
  }
  function handleBand(e){
    setBandName(e.target.value)
  }
  const topItems=
tDict[bandName].map(
(item,index) => {
return (
 <><li key={index} className="track-item"><div className="list-wrapper">
    <img className="track-album" src={item.imgUrl} />
    <div className="track-info">
    <div className="track-name">{item.track}</div>
     <div className="track-artist">{item.artist}</div></div></div> 
  </li></>)})


  return (
    <div className="alles">
      <h3>Julias Mucke</h3>
      <select onChange={handleLetter}>
      <option>--Select Letter--</option>
        {bandsDict.map(item=>
          <option key={item.name}>{item.name}</option>
        )}
      </select>
      <select onChange={handleBand}>
        <option>--Select Band--</option>
        {bands.map(item=>
          <option key={item.name}>{item.name}</option>
        )}</select><br/>
 <ol>{topItems}</ol>
    </div>
  )
}
