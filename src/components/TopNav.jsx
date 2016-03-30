import React from 'react';
import { Link } from 'react-router';

const styles = {};

styles.container = {
  padding: '15px 20px',
  overflow: 'hidden',
  background: '#444',
  color: 'white'
};

styles.link = {
  padding: '10px',
  color: 'white',
  fontWeight: 200
};

styles.currentLink = {
  padding: '10px',
  background: '#eee',
  color: '#444'
};

const TopNav = (props) => {
  return (
    <div style={styles.container}>
      <div style={{float: 'left'}}>
        <Link to='/' style={styles.link}>home</Link>
        <Link to='/content/javascript' style={styles.link} activeStyle={styles.currentLink}>javascript</Link>
        <Link to='/content/react' style={styles.link} activeStyle={styles.currentLink}>react</Link>
      </div>
      <div style={{float: 'right'}}>
        <Link style={styles.link} to='/profile'>Profile</Link>
      </div>
    </div>
  );
};

export default TopNav;
