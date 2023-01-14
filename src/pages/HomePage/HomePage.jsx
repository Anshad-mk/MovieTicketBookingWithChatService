import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import Banner from '../../Components/Banner/Banner'
import MoviesList from '../../Components/MoviesList/MoviesList'
function HomePage() {
  return (
    <div>
      <NavBar />
      <Banner />
      <MoviesList />
      <MoviesList />
      <MoviesList />
      <MoviesList />
           
    </div>
  )
}

export default HomePage
