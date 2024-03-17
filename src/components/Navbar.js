import React from 'react'
import css from './Navbar.css'
import Button from "./Button";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
    <nav id="navbar">
        <div id="logo">
            <img src="https://moonlit-pithivier-51e278.netlify.app/static/media/lg.e2fffa5c2964d9ac5d05.webp" alt={props.title}/>
        </div>
        <ul>
            <li className="item"><a href="/">home</a></li>
            <li className="item"><a href="/safety">safety</a></li>
            <li className="item"><a href="/whyus">Why us</a></li>
            <li className="item"><a href="/franchise">Franchise</a></li>
        </ul>
        <div className='but'>
        <Link to="/login"><div><Button title='Admin Login'/></div></Link>
        </div>
    </nav>
    </>
  )
}
