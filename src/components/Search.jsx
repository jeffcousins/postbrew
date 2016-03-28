import React from 'react';
// import data from '../../public/data';
import { Link } from 'react-router';

const Search = () => (
  <div>
    <input type='text' placeholder='Search' />
    <Link to='/content'>Get Content</Link>
  </div>
);

export default Search;
