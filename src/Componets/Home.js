import React from 'react'

import Header  from './Header/Header';

import Testimonial from './Testimonial/Testimonial';
import Courses from './Courses-section/Courses';
import ChooseUs from './Choose-us/ChooseUs';
import CompanySection from './Company-section/Company';
import "remixicon/fonts/remixicon.css";
import HeroSection from './Hero_Section/HeroSection'; 
import AboutUs from './About-Us/AboutUs';
import Features from './Feature-section/features';
import Newsletter from './Newsletter/Newsletter';
import chooseUs from './Choose-us/ChooseUs';
function Home ()  {
  return (
    <div>

<Header/>
<HeroSection/>
<AboutUs/>
<Features/> 
<Testimonial/>
<ChooseUs/>
 

    </div>
  )
}

export default Home
