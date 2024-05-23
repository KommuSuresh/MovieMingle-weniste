import {FaUserCircle} from 'react-icons/fa'
import './TopNavbar.css'

const TopNavbar = () => {
  return (
    <nav>
      <ul className="nav-list">
        <li className="hedaing-logo">
          <h1 className="first-heading">MOVIE</h1>
          <h1 className="sec-heading">MINGLE</h1>
        </li>
        <li className="user-btn">
          <FaUserCircle className="user-prf" />
          <button className="logoutBtn">Logout</button>
        </li>
      </ul>
    </nav>
  )
}

export default TopNavbar
