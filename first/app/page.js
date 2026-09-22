import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto">
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