import React from 'react'
import Script from 'next/script'
const contact = () => {
  return (
    <div>
      <Script>
        {`alert("Welcome to contact page.");`}
      </Script>
      Contact</div>
  )
}

export default contact
export const metadata = {
  title: "Contact Facebook",
  description: "Contact Facebook -Connect to world using facebook...",
};