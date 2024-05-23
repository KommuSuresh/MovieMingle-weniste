import React, {Component} from 'react'
import axios from 'axios'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TopNavbar from '../TopNavbar'
import SideNavbar from '../SideNavbar'
import './index.css'

class Home extends Component {
  state = {
    movies: [],
    isLoading: true,
    error: null,
  }

  componentDidMount() {
    this.fetchMovies()
  }

  fetchMovies = async () => {
    try {
      const response = await axios.get(
        'https://movies-data-api.vercel.app/movies',
      )
      this.setState({movies: response.data, isLoading: false})
    } catch (error) {
      this.setState({error: error.message, isLoading: false})
    }
  }

  render() {
    const {movies, isLoading, error} = this.state

    if (isLoading) {
      return <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
    }

    if (error) {
      return <div>Error: {error}</div>
    }

    return (
      <div className="home-page">
        <TopNavbar className="topnavabar-size" />
        <SideNavbar className="sidenavabar-size" />
        <div className="home-page1">
          <h1>Movies</h1>
          <ul>
            {movies.map(movie => (
              <li key={movie.id}>{movie.title}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Home
