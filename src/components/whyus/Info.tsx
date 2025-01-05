import { FaCar } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";
import { FaMapLocationDot } from "react-icons/fa6";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaTags } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";

type ServiceInfo = {
    id: number,
    icon: JSX.Element,
    title: string,
    description: string,
}
 const Info: ServiceInfo[]  = [
    {
        id: 0,
        icon: <FaCar/>,
        title: "Wide Range of Vehicles",
        description: "Select from a diverse fleet of cars to suit every need and preference."  
    },
    {
        id: 1,
        icon: <IoTime/>,
        title: "24/7 Customer Support",
        description: "Our team is available around the clock to assist you with any queries."  
    },
    {
        id: 2,
        icon: <FaMapLocationDot/>,
        title: "Convenient Locations",
        description: "Pick up and drop off your rental at multiple convenient locations."  
    },
    {
        id: 3,
        icon: <AiFillSafetyCertificate/>,
        title: "Safety First",
        description: "Our vehicles are regularly maintained to ensure your safety on the road."  
    },
    {
        id: 4,
        icon: <FaTags/>,
        title: "Competitive Pricing",
        description: "Enjoy top-notch service without breaking the bank."  
    },
    {
        id: 5,
        icon: <FaStar/>,
        title: "Customer Satisfaction",
        description: "We strive to deliver an exceptional rental experience every time."  
    },
];



export default Info;