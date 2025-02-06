import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Image from "next/image";

export default function Home() {
  return (
   <main className="relative bg-black-100 flex justify-center items-center overflow-hidden flex-col mx-auto sm:px-10 px-5">
   <div className="max-w-7xl w-full">
    {/* <h1>Hello, Portfolio</h1> */}
    <FloatingNav 
    navItems={[
      {name: "Home", link: "/"},
      {name: "About", link: "/about"},
      {name: "Projects", link: "/projects"},
      {name: "Contact", link: "/contact"},
    ]}
    />
    <Hero />
   </div>
   </main>
  );
}
