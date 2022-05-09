
import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
    <Navbar />
    <ItemListContainer/>
    <Footer />
    </div>
  );
}

export default App;
