import Info from "./Info";
import { motion } from "framer-motion";

function WhyUs(){

    return(
        <motion.div initial={{opacity: 0, y : 60 }}
                    whileInView={{opacity: 1, y : 0}}
                    transition={{duration: 1.9, delay: 0.4, ease: "linear"}}
                    viewport={{once: true}}
                    className="flex flex-col items-center justify-center mt-14 text-center w-full p-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-slate-950 mb-4">Why Choose Golden?</h1>
            <p className=" text-gray-700">Experience the ultimate convenience and flexibility with our premium car rental services</p>
            <div className="flex items-center justify-center flex-wrap mt-20">
                {Info.map((items) => (
                    <div key={items.id} className="text-white max-w-[380px] h-[380px] p-4 flex items-center justify-center flex-col gap-6 text-center border-[1px]">
                        <p className="text-blue-800 text-4xl">{items.icon}</p>
                        <h1 className="text-xl md:text-2xl font-medium lg:text-2xl text-slate-950">{items.title}</h1>
                        <p className="text-gray-700 max-w-xl">{items.description}</p>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}

export default WhyUs;