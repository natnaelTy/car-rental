import { useState } from "react";
import FaqData from "./FAQData";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

function FAQ(){

    const [selected, setSelected] = useState<number[]>([]);
    const [toggleArrow, setToggleArrow] = useState<boolean>(false);

    function handleSelect(getId: number){
      let copySelected = [...selected];
      const findIndexOfCurrentId = copySelected.indexOf(getId);
      
      if(findIndexOfCurrentId === -1){
        copySelected.push(getId)
      }
      else{
        copySelected.splice(findIndexOfCurrentId, 1);
      }
      setSelected(copySelected);
      
    }

    function handleToggleArrow(){
        setToggleArrow(!toggleArrow);
    }

    return(
        <div className="flex items-start justify-between p-4 mt-14 mb-10 flex-wrap">
            {/* image */}
             <div className="max-w-[600px]">
                <img src="./images/Volkswagen-about1.jpg" alt="" className="w-full object-cover rounded-md" />
             </div>

             {/* FAQ */}
                <div className="flex flex-col items-start gap-6">
                    {/* description */}
                    <p className="text-blue-800 font-medium mt-6 md:mt-0 text-lg">FAQ</p>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl text-slate-900 font-medium max-w-lg">Car Rental Questions Answered</h1>
                     {/* mapping the data */}
                    {FaqData && FaqData.length ? 
                    FaqData.map((QA) => (
                     <div key={QA.id} className="w-full max-w-[500px] px-4 py-5 flex flex-col items-start gap-4 border-b-[1px]">
                        <div onClick={() => handleSelect(QA.id)} key={QA.id} className="flex items-center cursor-pointer justify-between w-full">
                          {/* question */}
                            <h1 className="text-slate-900 font-medium">{QA.question}</h1>
                            <div onClick={handleToggleArrow}>{selected.indexOf(QA.id) !== -1 ? <IoIosArrowUp/> : <IoIosArrowDown/>}</div>
                        </div>
                        {/* answer */}
                        {selected.indexOf(QA.id) !== -1 ? <div className="text-gray-700 max-w-md text-sm">{QA.answer}</div> : null}
                     </div>
                    ))
                    : null}
                </div>
        </div>
    )
}

export default FAQ;