import Link from "next/link";
import React from "react";

type Props = {};

function Header({}: Props) {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/board">Board</Link>
    </nav>
  );
}

export default Header;
