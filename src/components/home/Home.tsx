import NavBar from "../Header/NavBar";
import CarCategories from "../Categories/CarCategories";
import WhyUs from "../whyus/WhyUs";
import Discount from "../discount/Discount";
import About from "../about/About";
import Testimonial from "../testimonial/Testimonial1";
import Footer from "../footer/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router";

function Home(){

    return(
        <>
        <NavBar/>
        <div className="bg-gradient-to-r from-white via-blue-200 to-white flex items-center justify-center md:mt-0 mt-10 lg:h-screen">
            <div className="flex items-center justify-around flex-wrap p-4 mt-14 md:mt-0">
                <motion.div initial={{opacity: 0, y : 60 }}
                            whileInView={{opacity: 1, y : 0}}
                            transition={{duration: 1.9, delay: 0.4, ease: "linear"}}
                            viewport={{once: true}} 
                            className="flex flex-col gap-5">
                    <h1 className="text-4xl lg:text-5xl max-w-lg font-semibold">Hit the road with<span className="text-blue-800"> Golden</span></h1>
                    <p className="text-gray-700 text-sm md:text-base max-w-lg">Discover a seamless car rental experience with top-notch vehicles and unmatched convenience. Golden Rentals is your gateway to hassle-free journeys.</p>
                    <div className="flex gap-4">
                        <Link to={'/vehicles'}><button className="bg-blue-800 hover:bg-blue-700 px-4 py-3 font-medium  rounded-md text-white">Explore Cars</button></Link>
                        <Link to={'/contact'}><button className="border-[1.5px] border-blue-800 text-blue-800 font-medium px-4 py-3 rounded-md">Book Now</button></Link>
                    </div>
                </motion.div>
                {/* car image */}
                    <motion.div initial={{opacity: 0, y : 60 }}
                                whileInView={{opacity: 1, y : 0}}
                                transition={{duration: 1.9, delay: 0.4, ease: "linear"}}
                                viewport={{once: true}} 
                                className="relative max-w-[550px]">
                        <img src="./images/Suzuki-SwiftRemoved.png" alt=""  className="w-full object-cover"/>
                    </motion.div>
            </div>
        </div>
        <About/>
        <WhyUs/>
        <CarCategories/>
        <Discount/>
        <Testimonial/>
        <Footer/>
        </>
    )
}

export default Home;