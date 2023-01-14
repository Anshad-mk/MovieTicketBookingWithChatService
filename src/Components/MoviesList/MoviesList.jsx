import React from 'react'
import './movieslist.css'
import { Link } from 'react-router-dom'

function MoviesList() {
    return (

        <div className='row'>
<h1>Thrillers</h1>
            <div className="posters">
            <div className="poster-card">
                  <Link to='/movie'><img className='poster' src={require('../../assets/Rectangle 1061.png')} alt="Poster" /></Link>
                  
                </div>
                <div className="poster-card">
                  <Link to='/movie'><img className='poster' src={require('../../assets/Rectangle 1061.png')} alt="Poster" /></Link>
                  
                </div>
                <div className="poster-card">
                  <Link to='/movie'><img className='poster' src={require('../../assets/Rectangle 1061.png')} alt="Poster" /></Link>
                  
                </div>
                <div className="poster-card">
                  <Link to='/movie'><img className='poster' src={require('../../assets/Rectangle 1061.png')} alt="Poster" /></Link>
                  
                </div>
                <div className="poster-card">
                  <Link to='/movie'><img className='poster' src={require('../../assets/Rectangle 1061.png')} alt="Poster" /></Link>
                  
                </div>
                <div className="poster-card">
                  <Link to='/movie'><img className='poster' src={require('../../assets/Rectangle 1061.png')} alt="Poster" /></Link>
                  
                </div>
                <div className="poster-card">
                  <Link to='/movie'><img className='poster' src={require('../../assets/Rectangle 1061.png')} alt="Poster" /></Link>
                  
                </div>
                <div className="poster-card">
                  <Link to='/movie'><img className='poster' src={require('../../assets/Rectangle 1061.png')} alt="Poster" /></Link>
                  
                </div>
            </div>
<div className='glass'>


</div>
            
        </div>


    )
}

export default MoviesList
