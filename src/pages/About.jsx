import React, { useEffect, useState } from 'react';
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import men from './assets/2men.avif'
import Footer from '../components/Footer';


const AboutPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      {/* Banner Section */}
      <section className='about-banner'>
            <div className='banner-content'>
             <h1>About CyberSecure</h1>
            </div>
      </section>

       {/* Cyberthreats Section */}
            <section className="Cyberthreats-section" data-aos="fade-right">
              <div className="Cyberthreats-container">
                    <div className="Cyberthreats-text">
                        <h2>
                            <span>We Protect </span>your business's<br />  
                             data <strong>and</strong> fend off cyberthreats
                        </h2>
                        <p>
                         While larger organizations are often better equipped to withstand
                         financial and reputational damage from a cyberattack, many smaller
                          businesses may struggle to recover.
                        </p>
                        <p>
                         We have provided a clear, step-by-step incident response guide
                          designed to help organizations act swiftly and effectively during a cyberattack.
                     </p>
                    </div>
                    <div className="Cyberthreats-image">
                  <img src={men} alt="Cybersecurity Risk Assessment Guide" />
                </div>
              </div>
            </section>

            <Footer /> {/* Place this at the end */}
    </>

  );
};

export default AboutPage;