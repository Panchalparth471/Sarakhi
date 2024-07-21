
import Hamburger from 'hamburger-react';
import { motion } from "framer-motion";
import logo from "./Assets/logo.jpg";


import { useState } from "react";
function Navbar() {

    const [isOpen, setOpen] = useState(false)



    
    return (
    
               <div data-aos="fade-down" className="flex fixed bg-white z-[1000] flex-row font-semibold text-lg justify-between w-[100vw] h-[80px] shadow-md">
            <div className="p-2 ml-5 text-[30px] max-lg:text-[20px] max-lg:ml-4 flex justify-center items-center">   <img src={logo} className="flex  justify-center items-center w-[90px] h-[70px] max-md:w-[80px] max-md:h-[60px] "></img></div>
            <div className="flex text-[20px] max-lg:text-[13px] gap-4 max-lg:gap-2 mr-10 max-md:hidden">
                <div className="p-4 flex justify-center items-center cursor-pointer hover:scale-110 transition-all"><a href='#'>HOME</a></div>
                <div className="p-4 flex justify-center items-center cursor-pointer hover:scale-110 transition-all"><a href='#About'>ABOUT US</a></div>
                <div className="p-4 flex justify-center items-center  cursor-pointer hover:scale-110 transition-all"><a href='#Products'>GALLERY</a></div>
                <div className="p-4 flex justify-center items-center cursor-pointer hover:scale-110 transition-all"><a href='#Contact'>CONTACT</a></div>
        
            </div>
           
   <div className='md:hidden mt-3 absolute flex justify-center items-center right-0 z-[100000000]'><Hamburger toggled={isOpen} toggle={setOpen} color="orange"/></div>
            
            


 <div  className={`top-0 z-[150] flex flex-col md:hidden ${isOpen ? 'bg-[#FF8A00] justify-center h-[100vh] max-[300px]:w-[80%] w-[70%] transition-translate-x duration-150 ease-in-out translate-x-0 ' : 'w-[80vw] transition-translate-x duration-150 ease-in-out h-screen translate-x-72' } items-end gap-10 text-white`}>
   
    {
        isOpen ? (
            <div className='flex flex-col w-full justify-start mb-32 gap-8'>
                <a href="#" className="place-self-center" >HOME</a>
                <a href="#About" className="place-self-center">ABOUT US</a>
                <a href="#Products" className="place-self-center">GALLERY</a>
                <a href="#Contact" className="place-self-center">CONTACT</a>
     
               
            </div>
        ) : null
    }
</div> 
             
            
 

        </div>

        

            
    );
      
}

export default Navbar;

