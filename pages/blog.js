

import { getSession } from 'next-auth/react';
import React from 'react'

const Blog = ({data}) => {
  return (
    <h2>{data}</h2>
  )
}

export default Blog;


export async function getServerSideProps(context) {
  const session = await getSession(context);
  if(!session){
    return {
      redirect:{
        destination: `/api/auth/signin?callbackUrl=http://localhost:3000/blog`,
        permanent: false,
      }
    }
  }
  return {
    props:{
       session,
       data: session?'List of 100 personalized blog posts' : 'List of free blog posts '
    }
  }
}