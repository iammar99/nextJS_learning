import NavLinks from "./nav-links";
import NavSearch from "./nav-search";
// import { useState } from "react";

export default function Navbar() {
//   const [search, setSearch] = useState("");

  return (
    <nav className="bg-zinc-600 text-white flex justify-between items-center p-7">
      <NavLinks />
      <NavSearch/>
      {/* <NavSearch search={search} setSearch={setSearch} /> */}
    </nav>
  );
}
