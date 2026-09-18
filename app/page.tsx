"use client"

import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const [pressed,setPressed] = useState(false)

  return (
    <div className="container">
      <h1>Testing Page</h1>
      <h2>Interaction Test</h2>
      <button onClick={() => setPressed(true)}>{pressed ? "Pressed" : "Press"}</button>
    </div>
  );
}
