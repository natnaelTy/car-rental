import Info from "./Info";
import { motion } from "framer-motion";
import "./style.css";
function WhyUs(){

    return(
        <motion.div initial={{opacity: 0, y : 60 }}
                    whileInView={{opacity: 1, y : 0}}
                    transition={{duration: 1.9, delay: 0.4, ease: "linear"}}
                    viewport={{once: true}}
                    className="flex flex-col items-center justify-center mt-14 text-center w-full p-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-slate-950 mb-4">Why Choose Golden?</h1>
            <p className=" text-gray-700">Experience the ultimate convenience and flexibility with our premium car rental services</p>
            <div className="flex items-center justify-center gap-10 p-4 flex-wrap mt-20">
                {Info.map((items) => (
                    <div key={items.id} className="w-[340px] h-[340px] p-4 gap-6 text-center border-[1px] relative">
                        <div className="content">
                            <p className="text-blue-800 text-4xl">{items.icon}</p>
                            <p className="text-xl font-medium text-slate-950">{items.title}</p>
                            <p className="text-gray-700 text-sm max-w-lg">{items.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}

export default WhyUs;