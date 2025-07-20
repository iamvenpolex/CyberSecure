import React, { useEffect, useState } from 'react';
import './Home.css';
import Footer from '../components/Footer';
import OIP from './assets/OIP.jpg'; // Guide image
import cybersample from './assets/cybersample.png';
import { FaLock, FaClipboardList, FaFileAlt, FaUserShield, FaShieldAlt, FaSearch, FaComments, FaCog, FaBullhorn, FaIdBadge } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const nistItems = [
  {
    icon: <FaUserShield size={36} color="#f59e0b" />,
    title: "Role Awareness",
    text: "Does everyone know their role in your organization?",
    details: "Ensuring all employees understand their responsibilities in the cybersecurity strategy strengthens accountability and defense readiness."
  },
  {
    icon: <FaIdBadge size={36} color="#f59e0b" />,
    title: "Identify Assets",
    text: "How do you Identify your network assets?",
    details: "Identifying assets allows organizations to know what to protect and where vulnerabilities may exist."
  },
  {
    icon: <FaShieldAlt size={36} color="#f59e0b" />,
    title: "Protect Network",
    text: "How do you Protect your network?",
    details: "Protection involves access controls, encryption, firewalls, and employee training to prevent unauthorized access."
  },
  {
    icon: <FaSearch size={36} color="#f59e0b" />,
    title: "Detect Threats",
    text: "How to Detect threats to your network?",
    details: "Detection relies on monitoring systems, intrusion detection tools, and threat intelligence."
  },
  {
    icon: <FaComments size={36} color="#f59e0b" />,
    title: "Respond to Threats",
    text: "How to Respond to threats to your network assets?",
    details: "Responding requires defined protocols, rapid containment, and communication workflows."
  },
  {
    icon: <FaCog size={36} color="#f59e0b" />,
    title: "Recover From Threats",
    text: "How do you Recover from threats to your network assets?",
    details: "Recovery includes backups, incident reviews, and continuous improvement."
  },
  {
    icon: <FaBullhorn size={36} color="#f59e0b" />,
    title: "Incident Communication",
    text: "How do you communicate during and after an incident?",
    details: "Effective communication ensures transparency and coordinated responses before, during, and after an event."
  }
];

const HomePage = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="overlay">
          <div className="hero-content">
            <h1>Safeguard your business against cyberattacks</h1>
            <p className='text-6xl'>
              We protect businesses' data with advanced cybersecurity solutions to detect,
              protect, and respond to modern threats.
            </p>
            <div className="hero-buttons">
              <button className="call-btn ">Schedule a call</button>
              <button className="assessment-btn">Try free assessment</button>
            </div>
          </div>
        </div>
      </section>

      {/* Guide Section */}
      <section className="guide-section" data-aos="fade-right">
        <div className="guide-container">
          <div className="guide-image">
            <img src={OIP} alt="Cybersecurity Risk Assessment Guide" />
          </div>
          <div className="guide-text">
            <h2>
              <span>Download</span> our cybersecurity<br />
              risk assessment <strong>guide</strong>
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
            <button className="download-btn">Download the guide</button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How it works</h2>
        <div className="steps" data-aos="flip-up">
          <div className="step">
            <FaLock size={40} color="#f59e0b" style={{ marginBottom: '20px' }} />
            <h3>Access to the platform</h3>
            <p>Get full access to the BSC International Data Security Platform for the length of your assessment.</p>
          </div>

          <div className="step">
            <FaClipboardList size={40} color="#f59e0b" style={{ marginBottom: '20px' }} />
            <h3>Start cybersecurity assessment/audit</h3>
            <p>Watch video to see guide, or just skip and start right away. Use slider to answer all questions.</p>
          </div>

          <div className="step">
            <FaFileAlt size={40} color="#f59e0b" style={{ marginBottom: '20px' }} />
            <h3>Get Report</h3>
            <p>A detailed summary of your data security risks that is yours to keep, even if you don’t become a customer.</p>
          </div>
        </div>
        <button className="how-btn">Try free cybersecurity assessment</button>
      </section>

      {/* NIST Section */}
      <section className="nist-section ">
        <h2> We leverage NIST key functions</h2>
        <p className="nist-description">
          These functions provide a high-level view of managing cybersecurity risks, helping organizations remain secure and resilient.
        </p>

        <div className="nist-grid">
          {nistItems.map((item, index) => (
            <div className="nist-card" key={index} data-aos="fade-up">
              <div className="nist-icon">{item.icon}</div>
              <p>{item.text}</p>
              <button className="learn-btn" onClick={() => setSelectedItem(item)}>Learn More</button>
            </div>
          ))}
        </div>

        {selectedItem && (
          <div className="modal-overlay" onClick={() => setSelectedItem(null)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <h3>{selectedItem.title}</h3>
              <p>{selectedItem.details}</p>
              <button onClick={() => setSelectedItem(null)}>Close</button>
            </div>
          </div>
        )}
      </section>

      {/* Audit Comparison Section */}
      <section className="audit-section">
        <div className="audit-container" data-aos="flip-up">
          <div className="audit-text">
            <h2>
              Get a more comprehensive report <br /> when you sign up for <span>audit</span>
            </h2>
            <p>
              With audit, we provide your organization with a detailed report, simplified using charts and tables.
              You'll also get a personalized dashboard for future tracking and decision-making.
            </p>

            <div className="audit-columns" data-aos="flip-up">
              <div className="audit-column">
                <h4>Sign up for full security audit</h4>
                <ul>
                  <li>✔ Full graph report</li>
                  <li>✔ Detailed table report</li>
                  <li>✔ Personal dashboard</li>
                  <li>✔ Report history</li>
                </ul>
                <button className="audit-btn filled">Sign up now</button>
              </div>
              <div className="audit-column">
                <h4>Free cybersecurity assessment</h4>
                <ul>
                  <li>✔ Full graph report</li>
                  <li>✔ Detailed table report</li>
                  <li>– Personal dashboard</li>
                  <li>– Report history</li>
                </ul>
                <button className="audit-btn outlined">Try free assessment</button>
              </div>
            </div>
          </div>

          <div className="audit-image" data-aos="flip-up">
             <img src={cybersample} alt="Cybersecurity Risk Assessment Guide" />
            <a href="#" className="sample-link">Get sample report →</a>
          </div>
        </div>
      </section>

{/* call to action Section */}
       <section className="cta-section" data-aos="fade-up">
      <h2 className="cta-heading" >
        Still in doubt if BSC International is the solution for you?
      </h2>
      <p className="cta-subtext">
        Talk to an expert to explain in detail.
      </p>
      <button className="cta-button">
        Schedule a call
      </button>
    </section>

    
      <Footer /> {/* Place this at the end */}
    </>
  );
};

export default HomePage;
