import HeaderPhoto from "../Header/HeaderPhoto";
import RoutingNav from "../Header/RoutingNav";
import Footer from "../footer/Footer";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWechat } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import React from "react";
import Swal from 'sweetalert2'

function Contact(){

    const [result, setResult] = React.useState("");

    const onSubmit = async (event: any) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "45f546c7-6041-46d0-ad23-7d9bc6b5b14a");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
         Swal.fire({
            title: "Success!",
            text: "Message was sent seccessfully",
            icon: "success"
          });
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
        console.log(result);
      }
    };



    return(
      <>
        <div className="relative">
            <HeaderPhoto/>
            <RoutingNav/>
            <div className="absolute top-32 left-16 text-white">
               <h2 className="hidden font-semibold md:flex md:text-2xl lg:text-3xl">Contact</h2>
            </div>
             <h1 className="absolute bottom-0 right-0 opacity-20 text-white font-bold text-gray-500 text-6xl md:text-8xl">Contact</h1>
        </div>

        <div className="flex flex-col text-center gap-2 mt-20 mb-10">
            {/* description */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-slate-900">Reach Out to Golden</h1>
            <p className="text-gray-700">We're here to assist you with your car rental needs.</p>
            {/* contact info container */}
            <div className="flex items-center p-3 justify-start md:justify-around flex-wrap gap-8 mt-16">
                {/* email info */}
                <div className="flex items-start gap-5">
                   <div className="bg-blue-800 text-white p-2 text-xl md:text-2xl rounded-md"><MdEmail/></div> 
                    <div className="flex flex-col items-start gap-3">
                        <h1 className="text-slate-900 text-base md:text-lg font-medium">Customer Service</h1>
                        <p className="text-gray-700 text-xs md:text-sm">Have questions? Our team is ready to help</p>
                        <p className="text-blue-800 text-medium text-sm md:text-base font-medium">goldeninfo99@gmail.com</p>
                    </div>
                </div>
                 {/* phone info */}
                <div className="flex items-start gap-5">
                   <div className="bg-blue-800 text-white p-2 text-xl md:text-2xl rounded-md"><FaPhoneAlt/></div> 
                    <div className="flex flex-col items-start gap-3">
                        <h1 className="text-slate-900 text-base md:text-lg font-medium">Phone Support</h1>
                        <p className="text-gray-700 text-xs md:text-sm">Call us for immediate assistance.</p>
                        <p className="text-blue-800 text-sm md:text-base font-medium">+251 911553260</p>
                    </div>
                </div>
                 {/* online chat */}
                <div className="flex items-start gap-5">
                   <div className="bg-blue-800 text-white p-2 text-xl md:text-2xl rounded-md"><IoLogoWechat/></div> 
                    <div className="flex flex-col items-start gap-3">
                        <h1 className="text-slate-900 text-base md:text-lg font-medium">Live Chat</h1>
                        <p className="text-gray-700 text-xs md:text-sm">Chat with our support team for quick answers.</p>
                        <p className="text-blue-800 text-sm md:text-base font-medium">Start Chat</p>
                    </div>
                </div>
            </div>
            {/* contact form */}
            <div className="p-4 mt-20 bg-[aliceblue] w-full">
                <div className="mb-10 flex flex-col gap-2">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-slate-900">Send us message!</h1>
                     <p className="text-gray-700 text-sm">Have questions? Our team is ready to help</p>
                </div> 
            <div className="flex items-center md:items-start gap-6 justify-between flex-wrap">
                {/*image */}
                <div className="max-w-[450px]">
                    <img src="./images/contactimg.png" alt="" className="w-full object-cover"/>
                </div>
                <form onSubmit={onSubmit} className="flex flex-wrap items-center justify-between gap-5 max-w-[650px]">
                     {/* name input */}
                     <div className="flex flex-col items-start gap-1 justify-start">
                        <label className="text-sm">Name</label>
                        <input type="text" name="name" placeholder="Name" className="text-sm rounded-sm p-2 bg-gray-100 w-[330px] md:w-[360px] lg:w-[390px]" required/>
                    </div>
                    {/* phone input */}
                    <div className="flex flex-col items-start gap-1 justify-start">
                        <label className="text-sm">Phone</label>
                        <input type="number" name="phone" placeholder="Phone number" className="text-sm rounded-sm p-2 bg-gray-100 w-[330px] md:w-[360px] lg:w-[390px]" required/>
                    </div>
                     {/* email input */}
                    <div className="flex flex-col items-start gap-1 justify-start">
                        <label className="text-sm">Email</label>
                        <input type="text" name="email" placeholder="Email" className="text-sm rounded-sm p-2 bg-gray-100 w-[330px] md:w-[350px] lg:w-[650px]" required/>
                    </div>
                     {/* message input */}
                    <div className="flex flex-col items-start gap-1 justify-start">
                        <label className="text-sm">Message</label>
                        <textarea name="message" id="" className="rounded-sm w-[330px] md:w-[350px] lg:w-[650px] h-[200px] bg-gray-100 resize-none p-2" required placeholder="Message">

                        </textarea>
                    </div>
                    <button type="submit" className="bg-blue-800 mx-auto hover:bg-blue-700 text-white font-medium rounded-md px-4 py-2 mb-4 mt-8">Send</button>
                </form>
            </div>
        
          </div>
          {/* locations */}
          <div className="flex items-center justify-between flex-wrap p-4 gap-8 mt-10">
             <div className="flex flex-col items-start gap-3">
                <h1 className="text-slate-900 text-2xl md:text-3xl lg:text-4xl font-medium">Visit Our Office</h1>
                <p className="text-gray-700 text-xs md:text-sm">Find us in the heart of the city for all your rental needs.</p>
                <p className="text-blue-800 font-medium flex items-center gap-2"><IoLocationSharp className="text-xl"/> Golden HQ</p>
             </div>
             {/* map */}
             <div>
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.48518535716687!2d38.485638499259935!3d7.037120773757576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17b14f773247c9a1%3A0xafacc19b5ca27058!2sGolden%20car%20rental!5e0!3m2!1sen!2set!4v1735667712053!5m2!1sen!2set"  loading="lazy" className="w-[340px] md:w-[600px] h-[300px] rounded-md" ></iframe>
             </div>
          </div>
        </div>
        <Footer/>
      </>
    )
}

export default Contact;