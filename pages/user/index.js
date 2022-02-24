import Link from "next/link"
import React from "react"
export default function User() {
  return (
    <div>
      <div>User Page 123</div>
      <Link href="/">
        <a>Go Home</a>
      </Link>
    </div>
  )
}
