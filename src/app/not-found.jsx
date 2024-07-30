import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Page Not Found</h1>
      <p style={styles.message}>Sorry, the page you visited could not be found.</p>
      <Link href="/" style={styles.link}>
        Back to Homepage
      </Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '2em',
    color: '#333',
  },
  message: {
    fontSize: '1.2em',
    color: '#666',
  },
  link: {
    fontSize: '1em',
    color: '#0070f3',
    textDecoration: 'none',
  },
};

export default NotFound;