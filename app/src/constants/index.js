import {
    RxCrop,
    RxDesktop,
    RxPencil2,
    RxReader,
    RxRocket,
    RxAccessibility,
  } from "react-icons/rx";
  import { FaKitchenSet } from "react-icons/fa6";
  import { MdOutlineGirl } from "react-icons/md";
  import { GiEating } from "react-icons/gi";


  import interior1 from "../asset/interior-1.jpg";
  import interior2 from "../asset/interior-2.jpg";
  import interior3 from "../asset/interior-3.jpg";
  import interior4 from "../asset/interior-4.jpg";
  import interior5 from "../asset/interior-5.jpg";
  import interior6 from "../asset/interior-6.jpg";
  import interior7 from "../asset/interior-7.jpg";
  import interior8 from "../asset/interior-8.jpg";

  export const ServiceData = [
    {
      icon: RxCrop,
      title: "Developed", 
      backgroundImage: interior1,
    },
    {
      icon: FaKitchenSet,
      title: "Kitchen", 
      backgroundImage: interior2,
    },
    {
      icon: RxDesktop,
      title: "Design", 
      backgroundImage: interior3,
    },
    {
      icon: FaKitchenSet,
      title: "Kitchen", 
      backgroundImage: interior4,
    },
    {
      icon: RxAccessibility,
      title: "Management", 
      backgroundImage: interior5,
    },
    {
      icon: RxRocket,
      title: "Production", 
      backgroundImage: interior6,
    },
    {
        icon: GiEating,
        title: "Loved by Our Guests", 
        backgroundImage: interior7,
      },
      {
        icon: RxRocket,
        title: "Experience Outdoor", 
        backgroundImage: interior8,
      },
  ];