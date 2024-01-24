import { motion } from "framer-motion";
import logo from "./Assets/logo.jpg";


import { Spin as Hamburger } from 'hamburger-react'
import { useState } from "react";

function Navbar() {
    const [isOpen, setOpen] = useState(false);
    return (
        <div className="w-[100vw] h-[80px] flex justify-evenly items-center bg-white fixed z-50">
            <div className="flex items-center h-full mt-2 justify-self-start">
                <img src={logo} className="flex  justify-center items-center w-[90px] h-[70px]"></img>
            </div>

            
            <div className="flex justify-end gap-12  items-center w-[60%] h-full font-semibold text-lg max-md:hidden">
                <a className="flex text-center cursor-pointer" href="#">HOME</a>
                <a className="flex text-center cursor-pointer" href="#About">ABOUT US</a>
                 <a className="flex text-center cursor-pointer" href="#Products">GALLERY</a>
                 <a className="flex text-center cursor-pointer" href="#Contact">CONTACT</a>
                 
            </div>

                

            
        
        </div>
    )
}
  

export default Navbar;