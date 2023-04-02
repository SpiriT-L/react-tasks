import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NoteFound() {
  useEffect(() => {
    document.title = `404`;
  });
  return (
    <>
      <h1>404 NoteFound</h1>
      <Link to="/">GO HOME</Link>
    </>
  );
}
