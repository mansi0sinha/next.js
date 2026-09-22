import React from 'react'

const Footer = () => {
  return (
    <Footer className="flex justify-around bg-slate-800 text-white py-4">
<div className="text-center">Copyright 0 Facebook | All rights reserved</div>
<ul className="fkex gap-2 text-sm">
   <a href="/"><li className='text-xs'>Home</li></a>
        <a href="/about"><li className='text-xs'>About</li></a>
        <a href="/contact"><li className='text-xs'>Contact</li></a>
</ul>
    </Footer>
  )
}

export default Footer