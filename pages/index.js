import Link from "next/link"
import React from "react"

export default function Home() {
  return (
    <div>
      <div>Home Page</div>
      <Link href="/user">
        <a>Go user page</a>
      </Link>
    </div>
  )
}
