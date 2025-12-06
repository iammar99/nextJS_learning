import Link from "next/link"

export default function NavLinks() {
    console.log("Nav Link")
  return (
    <>
    <nav>
        <ul className="flex gap-10 text-3xl font-bold">
            <li className="transition delay-300 hover:text-black">
                <Link href={"/"}>Home</Link>
            </li>
            <li className="transition delay-300 hover:text-black">
                <Link href={"/"}>About</Link>
            </li>
            <li className="transition delay-300 hover:text-black">
                <Link href={"/"}>Contact</Link>
            </li>
            <li className="transition delay-300 hover:text-black">
                <Link href={"/"}>Login</Link>
            </li>
        </ul>
    </nav>
    </>
  )
}
