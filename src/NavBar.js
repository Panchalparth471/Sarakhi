import { motion } from "framer-motion";
import logo from "./Assets/logo.jpg";


import { Spin as Hamburger } from 'hamburger-react'
import { useState } from "react";

function Navbar() {
    const [isOpen, setOpen] = useState(false);
    return (
        <div className="w-[100vw] h-[80px] flex justify-evenly max-md:justify-between items-center bg-white fixed z-50">
            <div className="flex items-center h-full mt-2 justify-self-start">
                <img src={logo} className="flex  justify-center items-center w-[90px] h-[70px] max-md:w-[80px] max-md:h-[60px] "></img>
            </div>

            
            <div className="flex justify-end gap-12  items-center w-[60%] h-full font-semibold text-lg max-md:hidden">
                <a className="flex text-center cursor-pointer" href="#">HOME</a>
                <a className="flex text-center cursor-pointer" href="#About">ABOUT US</a>
                <a className="flex text-center cursor-pointer" href="#Products">GALLERY</a>
                <a className="flex text-center cursor-pointer" href="#Contact">CONTACT</a>
                 
            </div>

          <div className="md:hidden z-50">
    <Hamburger toggled={isOpen} toggle={setOpen} color="#ff5e14" />
</div>

            {
            (isOpen)?(<div className={`fixed top-0 left-0 flex flex-col justify-start pt-[30%] gap-5 items-center h-screen z-50 w-3/5 bg-white transition-transform ease-in-out duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <a id="txt" className="flex text-center cursor-pointer" href="#">HOME</a>
        <a id="txt" className="flex text-center cursor-pointer" href="#About">ABOUT US</a>
        <a id="txt" className="flex text-center cursor-pointer" href="#Products">GALLERY</a>
        <a id="txt" className="flex text-center cursor-pointer" href="#Contact">CONTACT</a>
    </div>):(<div className="w-0 h-0 hidden"></div>)
}


                

            
        
        </div>
    )
}
  

export default Navbar;
