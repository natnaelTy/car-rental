import { useEffect, useState } from "react";
import data from "./data";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { TbPointFilled } from "react-icons/tb";
import { RiDoubleQuotesL } from "react-icons/ri";
import { motion } from "framer-motion";
import "./styel.css";

function Testimonial(){

    const [currentSlide, setCurrentSlide] = useState<number>(0);

    function handlePrev(){
       setCurrentSlide(currentSlide === 0 ? data.length - 1 : currentSlide - 1); 
    }
    function handleNext(){
       setCurrentSlide(currentSlide === data.length - 1 ? 0 : currentSlide + 1); 
    }

   useEffect(() => {
    setTimeout(() => {
        handleNext();
    },6000)
   });

    return(
        <div className="relative p-4 flex items-center justify-center mt-10 mb-10">
               {/* arrow*/}
               <div className="text-3xl cursor-pointer">
                         <MdKeyboardArrowLeft onClick={ handlePrev} className="absolute left-5 top-36"/>
                         <MdKeyboardArrowRight onClick={handleNext} className="absolute right-5 top-36"/>
                 </div>
                {data && data.length > 0 ? 
                data.map((items, index) => (
                    <motion.div initial={{opacity: 0, y : 60 }}
                                whileInView={{opacity: 1, y : 0}}
                                transition={{duration: 1.9, delay: 0.4, ease: "linear"}}
                                viewport={{once: true}} 

                                key={items.id} 
                                className={currentSlide === index ? "mb-16 max-w-[800px] h-[250px] p-4 flex items-center flex-col gap-5 text-center" : "hidden"}>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl"><RiDoubleQuotesL/></h2>
                        <h1 className="text-lg md:text-2xl lg:text-3xl text-slate-900 max-w-3xl font-medium">{items.testimonial}</h1>
                        <div className="container-image">
                            <img src={items.image} alt={items.name} className="image" />
                        </div>
                        <div className="flex items-center gap-2 justify-around">
                            <p className="text-slate-900 font-medium text-xs md:text-sm">{items.name}</p>
                            <TbPointFilled className="text-xs text-gray-800"/>
                            <p className="text-gray-700 text-xs md:text-sm">{items.profestion}</p>
                        </div>
                    </motion.div>
                ))
                : null}
                {/* circle indicators */}
                <span className="absolute bottom-0 flex items-center gap-3">
                    {data && data.length ? 
                    data.map((_, index) => (
                        <button onClick={() => setCurrentSlide(index)} key={index} className={currentSlide === index ? 'bg-blue-700 w-[8px] h-[8px] rounded-full' : 'bg-gray-300 w-[8px] h-[8px] rounded-full'}></button>
                    ))
                    : null}
                </span>
        </div>
    )
}

export default Testimonial;