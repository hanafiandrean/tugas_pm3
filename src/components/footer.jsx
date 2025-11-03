import React from 'react'
import "./footer.css"

export const Footer = () => {
  return (
    <>
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>&copy; {new Date().getFullYear()} Kantin Dua Bersaudara. All rights reserved.</p>
    </footer>
    </>
  )
}

export default Footer;