
import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Cards from './components/Cards/Cards';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
    <Navbar />
    <ItemListContainer greeting="Productos" />
    <Cards />
    <Footer />
    </div>
  );
}

export default App;
