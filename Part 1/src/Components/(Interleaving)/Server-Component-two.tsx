import fs from "fs"

export default function ServerComponentTwo() {

  fs.readFileSync("src/Components/(Interleaving)/Server-Component-one.tsx", "utf-8");
  return (
    <div>ServerComponentTwo</div>
  )
}
