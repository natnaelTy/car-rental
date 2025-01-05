import NavBar from "../Header/NavBar";
import { useFavStore } from "../store/Store";
import { FaTrashCan } from "react-icons/fa6";
import { Link } from "react-router";


function Favorites(){

   const {favList, removeFromFav} = useFavStore();

    console.log(favList)
    return(
            <>
            <NavBar/>
          <div className="mt-24">
            {
              favList && favList.length > 0 ? <h1 className="text-2xl md:text-3xl text-slate-900 font-medium text-center">Your Favorite Cars({favList.length})</h1> :
              <div className="flex flex-col items-center gap-4">
                   <h1 className="max-w-xl text-center text-xl md:text-2xl font-medium text-slate-900"> Favorites Car List is Empty! Go and click the heart ❤ button to add your favorite car.</h1>
                  <Link to={'/vehicles'}><button className="text-white bg-blue-800 px-4 py-2 rounded-md">Add Now +</button></Link> 
              </div>
            }
         </div>
         
            <div className="relative flex flex-col items-center justify-around p-4 gap-10">
            {/* mapping favorites cars */}
             {
               favList && favList.length ? 
               favList.map((items, index) => (
                <div key={index} className="flex flex-wrap items-center justify-around w-full">
                    <div className="max-w-[130px]">
                        <img src={items.image} alt="" className="w-full object-cover rounded-md"/>
                        <p className="text-sm font-medium text-slate-600 mt-1">{items.model}</p>
                    </div>
                    {/* car details container */}

                    {/* Type */}
                    <p className="hidden md:flex font-medium text-blue-800 flex-col items-start gap-1">Type:<span className="text-gray-700 text-sm">{items.categorie}</span></p>
                      {/* Scooter */}
                    <p className="hidden md:flex font-medium text-blue-800 flex-col items-start gap-1">Scooter:<span className="text-gray-700 text-sm">{items.scooter}</span></p>
                     {/* transmission */}
                    <p className="hidden md:flex font-medium text-blue-800 flex-col items-start gap-1">Transmission:<span className="text-gray-700 text-sm">{items.transmission}</span></p>
                     {/* seats */}
                    <p className="hidden md:flex font-medium text-blue-800 flex-col items-start gap-1">Seats:<span className="text-gray-700 text-sm">{items.seats}</span></p>
                    {/* price */}
                    <p className="flex font-medium text-blue-800 flex-col items-start gap-1">Rental Price:<span className="text-green-600 text-sm">{items.rentalPrice}<span className="text-gray-700"> / per day</span></span></p>
                    {/* delete button */}
                     <button onClick={() => removeFromFav(items.id)} className="text-red-600 hover:text-red-500 text-lg md:text-xl"><FaTrashCan/></button>
                    {/* choose button */}
                    <button className="bg-blue-800 hover:bg-blue-600 px-3 md:px-4 py-2 text-xs md:text-base rounded-md text-white font-medium">Choose</button>
                   
                </div>
               ))
               : null
             }
        </div>
        </>
    )
}

export default Favorites;