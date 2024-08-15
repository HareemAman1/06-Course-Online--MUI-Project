import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'
import '../styles/home.css'

const Home = () => {
  return (

    <Layout>
        <div className="home" >
          <div className="headerContainer">
            <h1>Online Courses</h1>
            <p>Learn prgramming skills</p>
            <Link to='/register'>
             <button>Register Now</button>
            </Link>
          </div>
        </div>
    </Layout>
    
  )
}

export default Home