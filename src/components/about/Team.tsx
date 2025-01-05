import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

function Team(){

    return(
        <div className="flex items-start justify-between gap-3 flex-wrap p-4 mt-24 mb-10">
             <div className="mb-14">
                  <h1 className="text-2xl lg:text-3xl text-slate-900 font-medium">Meet Our Team</h1>
                  <p className="text-gray-700 max-w-sm mt-3">Our dedicated team ensures you have the best rental experience.</p>
             </div>

             <div className="max-w-[810px] flex items-start justify-stretch gap-8 flex-wrap">

             <div className="max-w-[380px]">
                <img src="./images/team1.JPG" alt=""  className="w-full h-[400px] object-cover rounded-xl"/>
                <div className="flex items-start justify-center gap-1 mt-6 flex-col">
                   <h1 className="text-lg lg:text-xl text-slate-900 font-medium">Werku beyene</h1>
                   <p className="text-gray-700 text-sm">Customer Support Lead</p>
                   <p className="text-gray-700 mt-3 text-sm">Werku oversees our customer support team, ensuring all inquiries are handled swiftly.</p>
                   {/* socials */}
                   <div className="flex items-center gap-2 text-gray-600 text-xl mt-4 cursor-pointer">
                       <FaFacebookSquare/>
                       <FaInstagram/>
                   </div>
                </div>
             </div>

             <div className="max-w-[380px]">
                <img src="./images/team3.jpg" alt=""  className="w-full h-[400px] object-cover rounded-xl"/>
                <div className="flex items-start justify-center gap-1 mt-6 flex-col">
                   <h1 className="text-lg lg:text-xl text-slate-900 font-medium">Dawit tesema</h1>
                   <p className="text-gray-700 text-sm">Fleet Manager</p>
                   <p className="text-gray-700 mt-3 text-sm">Dawit manages our fleet, ensuring each vehicle is in top condition.</p>
                   {/* socials */}
                   <div className="flex items-center gap-2 text-gray-600 text-xl mt-4 cursor-pointer">
                       <FaFacebookSquare/>
                       <FaInstagram/>
                   </div>
                </div>
             </div>

             <div className="max-w-[380px]">
                <img src="./images/team2.jpg" alt=""  className="w-full h-[400px] object-cover rounded-xl"/>
                <div className="flex items-start justify-center gap-1 mt-6 flex-col">
                   <h1 className="text-lg lg:text-xl text-slate-900 font-medium">Bereket tesfaye</h1>
                   <p className="text-gray-700 text-sm">Operations Director</p>
                   <p className="text-gray-700 mt-3 text-sm">Bereket leads our operations, focusing on seamless rental experiences.</p>
                   {/* socials */}
                   <div className="flex items-center gap-2 text-gray-600 text-xl mt-4 cursor-pointer">
                       <FaFacebookSquare/>
                       <FaInstagram/>
                   </div>
                </div>
             </div>
        
             </div>
        </div>
    )
}

export default Team;