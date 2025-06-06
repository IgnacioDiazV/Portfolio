import React, { useState } from 'react';
import Header from '../components/header.jsx';
import Main from '../components/main.jsx';
import Footer from '../components/footer.jsx';
import styles from '../App.css';

function Home() {
  const [section, setSection] = useState("home");

  return (
    <div>
      <Header setSection={setSection} />
      <Main section={section} setSection={setSection} />
      <Footer />
    </div>
  );
}

export default Home;