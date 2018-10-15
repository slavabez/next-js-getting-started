import React from "react";
import Link from 'next/link'

const Index = () => {
  return (
    <div>
      <Link href={{ pathname: '/about', query: { name: 'Zeit' } }}>
        <button>About Page</button>
      </Link>
      <p>Hello Next.js</p>
    </div>
  );
};

export default Index;
