import "./styel.css";



function Testimonial2(){

    return(
        <div className="p-4 relative mt-20 bg-slate-100 pt-10 pb-10">
          <div className="flex item-center justify-between flex-wrap gap-8">  
             <div className="flex flex-col items-start justify-between gap-8">
                  <h1 className="text-slate-900 text-base max-w-lg p-5">Golden made my travel hassle-free with their excellent service.</h1>
                  <div className="flex items-center justify-center p-5 gap-6">
                       <div className="container-image">
                            <img src="./images/testimonial5.JPG" alt="" className="image"/>
                       </div>
                       <div className="flex flex-col items-start gap-1">
                         <h1 className="font-medium text-slate-900">Ayele tafesse</h1>
                         <p className="text-gray-700 text-sm">Photographer</p>
                       </div>
                  </div>
             </div>

             <div className="flex flex-col items-start justify-between gap-8">
                  <h1 className="text-slate-900 text-base p-5 max-w-lg">The car rental process was smooth and efficient, highly recommended!</h1>
                  <div className="flex items-center justify-center p-5 gap-6">
                       <div className="container-image">
                            <img src="./images/testimonial6.JPG" alt="" className="image"/>
                       </div>
                       <div className="flex flex-col items-start gap-1">
                         <h1 className="font-medium text-slate-900">Samrawit dejene</h1>
                         <p className="text-gray-700 text-sm">Doctor</p>
                       </div>
                  </div>
             </div>
             </div>
             {/* stick */}
             <div className="stick"></div>
        </div>
    )
}

export default Testimonial2;