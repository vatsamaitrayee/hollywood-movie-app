
import React from 'react';
import { Switch, Route, Link } from "react-router-dom";

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "reactstrap";

import MovieDetail from './pages/MovieDetail';
import MovieList from './pages/MovieList';

function App() {
  return (
    <main>
      <Link to="/">
        <navbar
          className="mb-2 text-black d-flex justify-content-center "
          style={{ background: "black", textDecoration: "none" }}
        >
          <h2 style={{ color: "white", textDecoration:"none"}}>
            Movies
          </h2>
        </navbar>
      </Link>
      <Switch>
        <Route path="/:movieId" component={MovieDetail} />
        <Route path="/" component={MovieList} />
      </Switch>
    </main>

  );
}

export default App;
