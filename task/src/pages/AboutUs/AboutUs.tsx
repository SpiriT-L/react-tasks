import React, { useEffect } from 'react';

export default function AboutUs() {
  useEffect(() => {
    document.title = `AboutUs`;
  });
  return (
    <div>
      <h2>About Us</h2>
    </div>
  );
}
