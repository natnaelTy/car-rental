import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";

function Footer(){

    return(
        <div className="bg-slate-950 p-4 relative">
             <div className="md:flex-row flex flex-col gap-8 items-start justify-around pb-5 pt-8">
                {/* company logo */}
                 <div className="flex flex-col items-start gap-6 text-white">
                 <div className="max-w-[100px] flex cursor-pointer items-center gap-1">
                    <img src="./images/logo.png" alt="" className="w-full object-cover"/>
                </div>
                     <p>Drive Your Dreams with Golden</p>
                     <span className="flex items-center gap-2"><FaPhoneAlt/> <span className="text-slate-600">+251 975329588</span></span>
                     <span className="flex items-center gap-2"><MdEmail/> <span className="text-slate-600">goldeninfo99@gmail.com</span></span>
                 </div>
                 {/* usefull links */}
                 <div className="flex items-start flex-col text-white">
                    <h1 className="text-lg md:text-xl lg:text-2xl text-white font-medium mb-0 md:mb-6">Company</h1>
                     <ul className="flex flex-col items-start gap-4">
                        <li>About us</li>
                        <li>Careers</li>
                        <li>Blog</li>
                        <li>How we work</li>
                     </ul>
                 </div>
                 {/* working hours */}
                 <div className="flex flex-col items-start gap-2">
                    <h1 className="text-lg md:text-xl lg:text-2xl text-white font-medium mb-0 md:mb-6">Working Hours</h1>
                    <p className="text-gray-300 font-medium">Mon-Fri : <span className="text-slate-600 text-sm"> 09:00AM - 02:00PM</span></p>
                    <p className="text-gray-300 font-medium">Sat : <span className="text-slate-600 text-sm"> 09:00AM - 01:00PM</span></p>
                    <p className="text-gray-300 font-medium">Sun : <span className="text-slate-600 text-sm"> Closed</span></p>
                 </div>
                 {/* socials */}
                 <div className="flex flex-col items-start justify-around gap-3 text-white">
                     <h1 className="text-lg md:text-xl lg:text-2xl font-medium mb-0 md:mb-6">Follow Us</h1>
                     {/* icons */}
                     <div className="flex items-center gap-4 text-xl cursor-pointer lg:text-2xl">
                         <FaFacebookSquare className="hover:text-blue-700"/>
                         <FaInstagram className="hover:text-pink-700"/>
                         <FaTiktok className="hover:text-slate-900"/>
                     </div>
                 </div>
             </div>
             <hr />
             {/* copy rights */}
             <p className="pt-4 text-slate-600 opacity-40 text-sm text-center text-white">Copyright &copy; Golden 2025. All right reserved</p>
        </div>
    )
}

export default Footer;