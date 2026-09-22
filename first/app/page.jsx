"use client"
import Image from "next/image";
// import fs from "fs/promises"
import {useState} from "react";
 export default function Home() {
const [count, setcount] = useState(0)
//   let a =fs.readFile(".gitignore")
//   a.then(e=>console.log(e.toString()))
  return (
    <div>I am component
       {count}<br/>
      <button onClick={()=>setcount(count+1)}>Click</button>
    </div>
  );
}
