import React from 'react';
import ReactDOM from 'react-dom';
import DropList from "./components/DropList"
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <DropList />
  </React.StrictMode>,
  document.getElementById('root')
);

