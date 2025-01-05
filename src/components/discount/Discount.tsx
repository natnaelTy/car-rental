import "./style.css";
import { motion } from "framer-motion";

function Discount(){

    return(
        <div className="bg-black">
            <div className="image-container">
                <motion.div initial={{opacity: 0, y : 60 }}
                            whileInView={{opacity: 1, y : 0}}
                            transition={{duration: 1.9, delay: 0.4, ease: "linear"}}
                            viewport={{once: true}} 
                            className="flex items-center justify-center absolute z-10 gap-5 flex-col text-white p-4 mt-24 w-full">
                    <h1 className="text-3xl md:text-5xl font-semibold">Subscribe and Get <span className="text-amber-500">20% </span>Discount</h1>
                    <p className="text-sm md:text-base">Be the first to get latest news. promotions and much more.</p>
                  <div className="border-[1.5px] rounded-md py-1 px-1 flex items-center gap-2 justify-between max-w-[500px]">
                     <input type="text"  className="bg-transparent py-1 px-3 outline-none w-full" placeholder="Enter email address"/>
                   <button className="py-2 px-4 rounded-md text-sm md:text-base text-white font-medium bg-amber-500 hover:bg-amber-400">Subscribe</button>
                </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Discount;