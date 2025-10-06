import Link from "next/link"

export default function f2() {
  return (
    <div>F2 Page | <Link href={"/f2/f1"}>f1</Link> | <Link href={"/f3"}>f3</Link></div>
  )
}
