import { useEffect, useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import { AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router";
import { IoMdHeartEmpty } from "react-icons/io";
import { Link } from "react-router";
import useFavStore from "../store/Store";
import { motion } from "framer-motion";

function NavBar(){
    // importing favoriteslist
    const {favList} = useFavStore();
    const [showNavBar, setShowNavBar] = useState<boolean>(false);
    const [ShowMenu, setShowMenu] = useState<boolean>(false);

    useEffect(() => {
        function handleHeaderChange(){
            if(window.scrollY >= 60){
                setShowNavBar(true);
            }
            else{
                setShowNavBar(false);
            }
        }

        window.addEventListener('scroll', handleHeaderChange);
        return() => {
            window.removeEventListener('scroll', handleHeaderChange);
        }
    },[]);

    function handleIconChange(){
        setShowMenu(!ShowMenu);
    }

    function NavLinks(){

        return(
                 <>
                  <NavLink to={'/'}><li className="hover:text-blue-700">Home</li></NavLink>
                  <NavLink to={'/aboutDetail'}><li className="hover:text-blue-700">About</li></NavLink>
                  <NavLink to={'/vehicles'}><li className="hover:text-blue-700">Vehicles</li></NavLink>
                  <NavLink to={'/contact'}><li className="hover:text-blue-700">Contact</li></NavLink> 
                 </>
             )
    }
    
    return(
        <div className="flex items-center justify-center">
             <nav className={showNavBar ? "bg-slate-900 text-white max-w-[350px] md:max-w-[500px] lg:max-w-[700px] w-full rounded-full flex items-center justify-between py-2 px-6 h-[50px] fixed top-3 z-20" : "flex items-center justify-between lg:justify-around px-4 lg:px-8 w-full h-[60px] p-4 top-0 fixed bg-gradient-to-r from-white via-blue-200 to-white"}>
                {/* logo */}
               <Link to={'/'}><div className="max-w-[70px] flex cursor-pointer items-center gap-1">
                    <img src="./images/logo.png" alt="" className="w-full object-cover"/>
                </div></Link>
                       {/* nav links */}
                        <ul className="hidden gap-10 md:flex items-center justify-between cursor-pointer">
                           <NavLinks/>
                       </ul> 
                 <div className="text-2xl cursor-pointer relative p-3">
                     <NavLink to={'/favorites'}><IoMdHeartEmpty/></NavLink> 
                     <div className={favList && favList.length > 0 ? "bg-red-600 w-[6px] h-[6px] rounded-full absolute top-4 right-3" : "hidden"}></div>
                 </div>
                 {/* hamburger menu icon */}
                 {
                   <button onClick={handleIconChange} className="flex text-2xl md:hidden">{ShowMenu ? <div><LiaTimesSolid/></div> : <div>< AiOutlineMenu/></div>}</button>
                 }
             </nav>
                {/* drop down menu */}
                {
                    ShowMenu && <motion.div initial={{opacity: 0, y2 : 30 }}
                                            whileInView={{opacity: 1, y2 : 0}}
                                            transition={{duration: 0.5, delay: 0.2, ease: "linear"}}
                                            viewport={{once: true}}  
                                            className="md:hidden text-white flex items-center justify-center max-w-[350px] w-full h-[400px] top-3 rounded-2xl bg-slate-900 z-10 fixed p-6">
                        <ul className="flex flex-col items-center gap-4">
                           <NavLinks/>
                        </ul> 
                       {
                         <button onClick={handleIconChange} className="flex absolute top-3 right-3 text-2xl md:hidden">{ShowMenu ? <div><LiaTimesSolid/></div> : <div>< AiOutlineMenu/></div>}</button>
                      }
                    </motion.div>
                 }
        </div>
    )
}

export default NavBar;