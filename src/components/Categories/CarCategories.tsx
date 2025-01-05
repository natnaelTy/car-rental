import { SiHyundai } from "react-icons/si";
import { SiToyota } from "react-icons/si";
import { SiVolkswagen } from "react-icons/si";
import { SiSuzuki } from "react-icons/si";
import { SiHonda } from "react-icons/si";
import { MdPeopleAlt } from "react-icons/md";
import { GiCarDoor } from "react-icons/gi";
import { MdHeatPump } from "react-icons/md";
import { GiGasPump } from "react-icons/gi";
import { TfiDashboard } from "react-icons/tfi";
import { NavLink } from "react-router";
import Car from "./Car";
import { useState } from "react";
import { motion } from "framer-motion";
import "./style.css";


function CarCategories(){

    const [selected, setSelected] = useState<number>(0);

    return(
        <div className="bg-[aliceblue] flex items-center justify-center flex-col text-center p-2 mt-14">
            <motion.div initial={{opacity: 0, y : 30 }}
                         whileInView={{opacity: 1, y : 0}}
                         transition={{duration: 1.9, delay: 0.4, ease: "linear"}}
                         viewport={{once: true}} 
                         className="p-10">
                <h1 className="text-3xl md:text-4xl text-slate-950 mb-4">Biggest fleet of rental cars</h1>
                <p className="text-sm md:text-base text-gray-700">Our rental fleet has cars from all major segments ranging from economy, convertibles, SUVs to luxury and vans.</p>
            </motion.div>
            {/* Car brands */}
            <motion.div initial={{opacity: 0, y : 50 }}
                        whileInView={{opacity: 1, y : 0}}
                        transition={{duration: 1.9, delay: 0.4, ease: "linear"}}
                        viewport={{once: true}} 
                        className="flex items-center justify-around flex-wrap w-full text-4xl md:text-6xl text-gray-600 mb-10 mt-10">
                <SiToyota/>
                <SiHyundai/>
                <SiVolkswagen/>
                <SiSuzuki/>
                <SiHonda/>
            </motion.div>
            {/* categories */}
            <motion.div initial={{opacity: 0, y : 100 }}
                        whileInView={{opacity: 1, y : 0}}
                        transition={{duration: 1.9, delay: 0.4, ease: "linear"}}
                        viewport={{once: true}}
                         className="flex items-center justify-around gap-4 p-2 mt-14 w-full">
               <ul className="flex flex-col bg-white">
                {Car && Car.length ?
                Car.map((items) => (
                    <li onClick={() => setSelected(items.id)} key={items.id} className={selected === items.id ? "bg-blue-700 border-left border-[1px] cursor-pointer flex gap-3 p-1" : "border-[1px] cursor-pointer flex gap-3 p-1"}> 
                       <div className="hidden md:flex md:max-w-[90px]">
                          <img src={items.image} alt={items.model} className="w-full object-cover" />
                       </div>
                           <div className="text-left">
                               <h2 className={selected === items.id ? "text-sm md:text-base text-white" : "text-slate-950 text-sm md:text-base"}>{items.categorie}</h2>
                               <p className={selected === items.id ? "text-white text-xs" : "text-gray-700 text-xs"}>{items.model}</p>
                        </div>
                    </li>
                )) 
                : null}
                </ul>
                {/* categories with bigger image */} 
                <div>
                        {Car.map((items, index) => (
                            <div className={selected === index ? "flex items-start justify-center flex-col max-w-[700px] h-[520px]" : "hidden"} key={items.id}>
                            {/* categorie and model about the car */}
                                    <h2 className="bg-amber-500 px-4 py-2 text-sm md:text-lg mb-5 text-white">{items.categorie}</h2>
                                    <p className="max-w-md text-xl md:text-2xl text-gray-700 font-medium">{items.model}</p>
                                <div key={items.id} className="max-w-[400px] h-[290px]">
                                   <img src={items.image} alt={items.model} className="w-full object-cover" />
                                </div>
                                <ul className="specification grid grid-cols-1 md:grid-cols-3 gap-4 text-left text-gray-800">
                                    <p><MdHeatPump className="text-lg md:text-2xl"/>{items.airConditioning}</p>
                                    <p><MdPeopleAlt className="text-lg md:text-2xl"/>Seats : {items.seats}</p>
                                    <p><GiCarDoor className="text-lg md:text-2xl"/>Doors : {items.doors}</p>
                                    <p><TfiDashboard className="text-lg md:text-2xl"/>Transmission : {items.transmission}</p>
                                    <p><GiGasPump className="text-lg md:text-2xl"/>Scooter : {items.scooter}</p>
                                </ul>
                            </div>
                        ))}
                </div>
            </motion.div>
            {/* view all cars option */}
            <div className="flex items-center justify-center flex-col mt-12 mb-10 p-2">
                <h1 className="text-slate-900 font-medium">Don't see what you're looking for?</h1>
                <span className="text-gray-700 mb-4 mt-1">See all car rentals in Hawassa</span>
               <NavLink to={'/vehicles'}><button className="border-[1px] border-blue-700 rounded-full px-5 py-2 text-blue-800 font-medium">View all cars</button></NavLink>
            </div>
        </div>
    )
}



export default CarCategories;