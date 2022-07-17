import { Outlet } from "@remix-run/react"

export default function Artist() {
  return (
    <div className="prose min-w-screen lg:px-16 lg:prose-xl">
      <Outlet />
    </div>
  )
}
