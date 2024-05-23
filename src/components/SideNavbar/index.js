import React, {Component} from 'react'
import {IoHome} from 'react-icons/io5'
import {FaFireAlt} from 'react-icons/fa'
import {RiMovie2Fill} from 'react-icons/ri'
import {IoGameController} from 'react-icons/io5'
import {IoNewspaperOutline} from 'react-icons/io5'
import {GiTrophyCup} from 'react-icons/gi'
import {IoReorderThreeOutline} from 'react-icons/io5'
import {IoIosSave} from 'react-icons/io'
import './SideNavbar.css'

class SideNavbar extends Component {
  state = {
    sizeIncrese: true,
  }

  sizeChanging = () => {
    this.setState(prevState => ({
      sizeIncrese: !prevState.sizeIncrese,
    }))
  }

  render() {
    const {sizeIncrese} = this.state
    return (
      <nav className={sizeIncrese ? 'sizeIncrease' : 'decreaseSize'}>
        <IoReorderThreeOutline
          className="symbolStyle-control"
          onClick={this.sizeChanging}
        />
        <ul>
          <li className="list-item">
            <IoHome className="symbolStyle" />
            {sizeIncrese && <p>Home</p>}
          </li>
          <li className="list-item">
            <FaFireAlt className="symbolStyle" />
            {sizeIncrese && <p>Trending</p>}
          </li>
          <li className="list-item">
            <RiMovie2Fill className="symbolStyle" />
            {sizeIncrese && <p>Movies</p>}
          </li>
          <li className="list-item">
            <IoGameController className="symbolStyle" />
            {sizeIncrese && <p>Games</p>}
          </li>
          <li className="list-item">
            <IoNewspaperOutline className="symbolStyle" />
            {sizeIncrese && <p>News</p>}
          </li>
          <li className="list-item">
            <GiTrophyCup className="symbolStyle" />
            {sizeIncrese && <p>Sports</p>}
          </li>
          <li className="list-item">
            <IoIosSave className="symbolStyle" />
            {sizeIncrese && <p>Saved Videos</p>}
          </li>
        </ul>
        <ul
          className={
            sizeIncrese ? 'icons-img-ul-increase' : 'icons-img-ul-decrease'
          }
        >
          <img
            src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
            alt="linkedin"
            className="icon-imgs"
          />
          <img
            src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-256.png"
            alt="Twitter"
            className="icon-imgs"
          />
          <img
            src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-256.png"
            alt="Facebook"
            className="icon-imgs"
          />
        </ul>
      </nav>
    )
  }
}

export default SideNavbar
