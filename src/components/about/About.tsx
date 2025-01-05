import { motion } from "framer-motion";
import { Link } from "react-router";
function About(){

    return(
        <div>
             <motion.div initial={{opacity: 0, y : 60 }}
                         whileInView={{opacity: 1, y : 0}}
                         transition={{duration: 1.9, delay: 0.4, ease: "linear"}}
                         viewport={{once: true}} 
                         className="flex items-start justify-around gap-8 flex-wrap p-4 mt-20 mb-20">
                 <div className="flex flex-col gap-4 items-start justify-start">
                     <p className="text-xl font-medium text-blue-800">About</p>
                     <h1 className="text-3xl md:text-4xl max-w-lg text-slate-900 font-semibold">Superlative services with highly technology</h1>
                     <p className="max-w-md text-sm text-gray-700">we offer a comprehensive range of car rental services designed to meet the diverse needs of our customers. From short-term rentals for quick errands to long-term solutions for extended trips or business needs, we are here to provide the perfect vehicle for every occasion.</p>
                     <Link to={'/aboutDetail'}><button className="hover:bg-blue-700 bg-blue-800 px-4 py-3 text-white font-medium rounded-md ">Read more</button></Link>
                 </div>
                 {/* car photo */}
                 <div className="relative pb-14 pr-12">
                    <div className="max-w-[450px] ">
                        <img src="./images/Suzuki-Swiftabout.jpg" alt="" className="w-full object-cover"/>
                    </div>
                    <div className="max-w-[300px] absolute right-0 bottom-0 ">
                        <img src="./images/Suzuki-Swiftabout3.jpg" alt="" className="w-full object-cover "/>
                    </div>
                 </div>
             </motion.div>
        </div>
    )
}

export default About;