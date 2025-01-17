import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home';
import InfiniteScroll from './components/Home/InfiniteScroll';
import Category from './components/Category/Category';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Search from './components/Search/Search';
import Item from './components/Item/Item';
import Card from './components/Card/Card';

function Render() {
  return (
    <Router>
      <div className="flex w-[100vw] gap-1 bg-slate-500 shadow-lg">
        <Sidebar />
        <div className="bg-gradient-to-r from-blue-100 to-purple-100 w-[calc(100vw-84px)] h-screen rounded-sm">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category" element={<Category />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/search" element={<Search />} />
            <Route path="/item" element={ <Item/> } />
            <Route path="/card" element={ <Card/> } />
            {/* <Route path="/infinite-scroll" element={<InfiniteScroll />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default Render;
