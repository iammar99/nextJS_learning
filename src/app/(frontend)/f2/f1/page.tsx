import Link from "next/link"

export default function f1() {
  return (
    <div>F1 Page | <Link href={"/f2"}>f2</Link></div>
  )
}
