import Link from "next/link";

export default function Post({ data }) {
  return <div>
    {data.map(item=>(
      <div key={item.id}>
          <p>{item.title}</p>
          <Link href={`/post/${item.id}`}>Go to details</Link>        
      </div>
    ))}
  </div>
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data = await res.json()
  return {
    props:{
      data
    }
  };
}