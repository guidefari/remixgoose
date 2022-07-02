import { Link } from "@remix-run/react"

export default function Index() {
  return (
    <>
      <h1>Artists</h1>
      <ul>
        <li>
          <Link to="/artists/barcode">Barcode</Link>
        </li>
      </ul>
    </>
  )
}
