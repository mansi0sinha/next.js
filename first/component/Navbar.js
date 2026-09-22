import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-around bg-slate-800 text-white py-4">
      <div className="logo font-bold">Facebook</div>
      <div className="flex gap-6">
        <a href="/"><li>Home</li></a>
        <a href="/about"><li>About</li></a>
        <a href="/contact"><li>Contact</li></a>
      </div>
    </nav>
  )
}

export default Navbar
