import Link from 'next/link';
import React from 'react';

function post({ result }) {
  return (
    <div key={result.id}>
      <div>{result.title}</div>
      <div>{result.body}</div>
      <Link href={`/post`}>Back to postList</Link>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data = await res.json()
  const paths = data.map(item=>({
    params: {id: item.id.toString()}
  })
  )
  return {
    paths,
    fallback: false // false or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + params.id)
  const result = await res.json()
  return {
    props: {result}, // will be passed to the page component as props
  }
}

export default post;