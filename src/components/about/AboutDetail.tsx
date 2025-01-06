import HeaderPhoto from "../Header/HeaderPhoto";
import RoutingNav from "../Header/RoutingNav";
import Team from "./Team";
import Footer from "../footer/Footer";
import Testimonial2 from "../testimonial/Testimonal2";
function AboutDetail(){

    return(
        <>
        <div className="relative">
            <HeaderPhoto/>
            <RoutingNav/>
            <div className="absolute top-32 left-16 text-white">
               <h2 className="hidden font-semibold md:flex md:text-2xl lg:text-3xl">About Us</h2>
            </div>
            <h1 className="absolute bottom-0 right-0 opacity-20 text-white font-bold text-gray-500 text-6xl md:text-8xl">About Us</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col items-start gap-4 p-6 pl-8">
                <h1 className="text-2xl md:text-3xl lg:text-4xl text-slate-900 font-medium">About Us</h1>
                <p className="max-w-xl text-gray-700"> we offer a comprehensive range of car rental services designed to meet the diverse needs of our customers. From short-term rentals for quick errands to long-term solutions for extended trips or business needs, we are here to provide the perfect vehicle for every occasion. you're not just renting a car – you're gaining a travel companion committed to safety, satisfaction, and freedom on the road. Let us take you places! Contact us today to book your ride and experience the difference.</p>
            </div>

            <div className="max-w-[700px]">
                <img src="./images/Volkswagen-about3.jpg" alt="" className="w-full  object-cover" />
            </div>

            <div className="max-w-[700px]">
                <img src="./images/Volkswagen-about2.jpg" alt="" className="w-full object-cover" />
            </div>

            <div className="flex flex-col items-start gap-4 p-6 pl-8 bg-neutral-300">
                <h1 className="text-2xl md:text-3xl lg:text-4xl text-slate-900 font-medium">Service</h1>
                <p className="max-w-xl  text-gray-700">Ideal for individuals who need a car for a few hours, a day, or a weekend getaway. Our short-term rental plans are flexible and designed to fit your schedule, ensuring you have the mobility you need without commitments. Perfect for those requiring a vehicle for weeks or months. Whether you're on an extended business assignment, relocating, or simply need a car for a prolonged period, our long-term rental options provide excellent value and convenience. We understand the dynamic needs of businesses. Our corporate rental plans cater to companies looking for reliable transportation solutions for employees, clients, or events. Enjoy tailored packages, volume discounts, and dedicated account management for a seamless experience. </p>
            </div>
        </div>
        <Team/>
        <Testimonial2/>
        <Footer/>
        </>
    )
}

export default AboutDetail;