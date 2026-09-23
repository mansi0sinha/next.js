"use client"
import Image from "next/image";

export default function Home() {
  const handleClick = async () => {
    let data={
      name:"mansi",
      role:"coder"
    }
     let a = await fetch("/api/add", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      redirect: "follow",
      body: JSON.stringify(data),
    });

    let res = await a.json();
    console.log(res);
  };

  
  return (
    <div className="container mx-auto">
      <div>
        <h1 className="text-xl font-bold">Next.js Api demo</h1>
        <button onClick={handleClick}>Click Me</button>
      </div>
      <Image
        className="mx-auto"
        width={100}
        height={100}
        src="http://www.menucool.com/slider/prod/image-slider-3.jpg"
        alt="image"
      />
      I am home page
    </div>
  );
}