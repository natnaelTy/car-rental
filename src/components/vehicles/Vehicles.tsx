import HeaderPhoto from "../Header/HeaderPhoto";
import RoutingNav from "../Header/RoutingNav";
import Footer from "../footer/Footer";
import Vehicle from "./Data";
import { IoMdHeart } from "react-icons/io";
import { GiGasPump } from "react-icons/gi";
import { TfiDashboard } from "react-icons/tfi";
import FAQ from "./FAQ";
import Discount from "../discount/Discount";
import {  useFavStore } from "../store/Store";
import Testimonial2 from "../testimonial/Testimonal2";


function Vehicles(){

   
    const {addToFav, removeFromFav, favList,} = useFavStore();
  
    return(
        <>
        {/* comman header photo */}
        <div className="relative">
            <HeaderPhoto/>
            <RoutingNav/>
            <div className="absolute top-32 left-16 text-white">
               <h2 className="hidden font-semibold md:flex md:text-2xl lg:text-3xl">Vehicles</h2>
            </div>
             <h1 className="absolute bottom-0 right-0 opacity-20 text-white font-bold text-gray-500 text-6xl md:text-8xl">Vehicles</h1>
        </div>

        <div className="text-center flex items-center justify-center gap-4 p-4 flex-col mt-16">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-medium text-slate-900">Discover Our Fleet</h1>
            <p className="text-gray-700 max-w-xl">Explore our diverse selection of vehicles, tailored to meet your travel and wedding needs.</p>
            {/* car object */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 gap-14 mt-8 mb-10">
                {
                  Vehicle && Vehicle.length ? 
                  Vehicle.map((cars) => (
                    <div key={cars.id} className="max-w-[400px] min-h-[460px] rounded-md shadow-lg p-4 relative">
                    <div className="max-w-[330px] md:w-[330px] h-[250px]">
                        <img src={cars.image} alt={cars.model} className="w-full h-full object-cover" />
                        <div className="flex flex-col items-start gap-3 mt-3">
                            <h1 className="text-slate-900 text-lg font-medium">{cars.model}</h1>
                            <p className="flex items-center gap-1 text-gray-700 text-sm"><TfiDashboard className="text-lg text-gray-800"/> Transmission :  {cars.transmission}</p>
                            <p className="flex items-center gap-1 text-gray-700 text-sm"><GiGasPump className="text-lg text-gray-800"/>Scooter : {cars.scooter}</p>
                            <p className="absolute right-4 bottom-4 font-medium text-slate-900">{cars.rentalPrice} / per day</p>
                            <button onClick={favList.some((car) => car.id === cars.id) ? () => removeFromFav(cars.id) : () => addToFav(cars)} className={favList.some((car) => car.id === cars.id) ? "text-red-500 text-3xl " : "text-3xl text-slate-500"}><IoMdHeart/></button>
                        </div>
                    </div>
                    </div>
                  ))
                  : <div>Loading..</div>
                }
            </div>
        </div>
        <Discount/>
        <FAQ/>
        <Testimonial2/>
        <Footer/>
        </>
    )
}

export default Vehicles;