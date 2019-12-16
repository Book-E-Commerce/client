import React from 'react';
import './style.scss'
import { useHistory } from "react-router-dom";
import Navbar from '../../components/navbar'
import { useSpring, animated } from 'react-spring'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`
const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`

function Home() {
  const history = useHistory()
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
  return(
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-container--header">
          <h1>Books give a soul to the universe,</h1>
          <h1>and life to everything</h1>
        </div>
        <div className="home-container--body">
          <button onClick={() => history.push('/home')} type="button" style={{fontSize: '22px', fontWeight: 'bold'}} className="btn btn-outline-light home-container--body--btns">Enter</button>
        </div>
        <div className="home-container--footer">
        <div class="footer-container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
          <animated.div class="card1" style={{ transform: props.xy.interpolate(trans1) }} />
          <animated.div class="card2" style={{ transform: props.xy.interpolate(trans2) }} />
          <animated.div class="card3" style={{ transform: props.xy.interpolate(trans3) }} />
          <animated.div class="card4" style={{ transform: props.xy.interpolate(trans4) }} />
        </div>
        </div>
      </div>
    </>
  )
}

export default Home

