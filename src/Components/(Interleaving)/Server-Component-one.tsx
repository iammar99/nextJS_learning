import fs from "fs"
// import ClientComponentOne from "./Client-Component-one";
import ServerComponentTwo from "./Server-Component-two";

export default function ServerComponentOne() {

  fs.readFileSync("src/Components/(Interleaving)/Server-Component-one.tsx", "utf-8");
  return (
    <>
      <div>ServerComponentOne</div>
      <ServerComponentTwo />
      {/* <ClientComponentOne /> */}
    </>
  )
}
