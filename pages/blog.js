

import { getSession } from 'next-auth/react';
import React from 'react'

const Blog = () => {
  return (
    <div>Blog</div>
  )
}

export default Blog;


export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props:{
       
    }
  }
}