import React from 'react'
import Intro from '../Topbar/Intro/Intro';
import Work from '../Work/Work';
import Portfolio from './../Portfolio/Portfolio';
import Background from './../Background/Background';
import Contact from '../Contact/Contact';
import Aboutmy from '../Aboutmy/Aboutmy';
import Blog from '../Blog/Blog';

const Home = () => {
    return (
        <div>
            <Intro></Intro>
            <Aboutmy></Aboutmy>
            <br />
            <br />
            <Portfolio></Portfolio>
            <Work></Work>
            <Background></Background>
            <Blog></Blog>
            <Contact></Contact>

        </div>
    )
}

export default Home
