// import { RiRobot2Line } from "react-icons/ri";
// import React from "react";

// const ServicesComponent = () => {
//   return (
//     <div className="relative mt-10 mb-10 w-full h-auto">
//       {/* SVG Background Curve */}
//       <div className="absolute inset-0 z-0 overflow-hidden">
//         <svg
//           width="1570"
//           height="378"
//           viewBox="0 0 1570 378"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M1 16.2313C472.085 634.814 961.425 288.187 1171.51 80.4848C1475.27 -207.023 1569.43 377.473 1569.43 377.473"
//             stroke="black"
//             stroke-dasharray="10 10"
//           />
//         </svg>
//       </div>

//       {/* Service Blocks */}
//       <div className="relative z-10 px-[100px]  w-full flex flex-wrap overflow-hidden items-center justify-around gap-10 h-full">
//         {/* Block 1 */}
//         <div className=" mt-14  flex flex-col items-center text-center justify-center bg-gray-100 hover:bg-black hover:text-white py-10 px-14 rounded-lg shadow-lg h-[200px] w-[300px]">
//           <RiRobot2Line className="text-4xl text-blue-600 mb-2" />
//           <p className="text-lg font-medium">RPA, CPA-Gen(AI)</p>
//         </div>

//         {/* Block 2 */}
//         <div className=" mt-[200px] flex flex-col items-center justify-center text-center bg-gray-100 w-[300px] h-[200px] px-14 rounded-lg shadow-lg">
//           <RiRobot2Line className="text-4xl text-blue-600 mb-2" />
//           <p className="text-lg font-medium">IT Infrastructure</p>
//         </div>

//         {/* Block 3 */}
//         <div className="  flex flex-col items-center text-center justify-center top-7 mb-52 bg-gray-100 py-10 px-14 rounded-lg shadow-lg h-[200px] w-[300px]">
//           <RiRobot2Line className="text-4xl text-blue-600 mb-2" />
//           <p className="text-lg font-medium">Cyber Security</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServicesComponent;
import { RiRobot2Line } from "react-icons/ri";
// import Vector from "./vector-1.svg"

const ServicesComponent = () => {
  return (
    <div className="relative mt-10 mb-40 w-full h-[400px]">
      {/* SVG Background Curve */}
      <div className="absolute overflow-hidden  inset-0 z-0 ">
        <svg
          width="1570"
          height="378"
          viewBox="0 0 1570 378"
          fill="none"
          xmlns="httpwww.w3.org2000svg">
        
          <path
            d="M1 16.2313C472.085 634.814 961.425 288.187 1171.51 80.4848C1475.27 -207.023 1569.43 377.473 1569.43 377.473"
            stroke="black"
            stroke-dasharray="10 10"
          />
        </svg>
      </div>

      {/* Service Blocks */}
      <div className="relative z-10 px-4 lg:px-20 flex flex-wrap items-center justify-between  h-full">
        {/* Block 1 */}
        <div className="flex flex-col items-center text-center justify-center bg-gray-100 hover:bg-black hover:text-white py-10 px-14 rounded-lg shadow-lg h-[200px] w-[300px] transition-all duration-300 ease-in-out">
          <RiRobot2Line className="text-4xl text-blue-600 mb-2" />
          <p className="text-lg font-medium">RPA, CPA-Gen(AI)</p>
        </div>

        {/* Block 2 */}
        <div className="flex flex-col items-center absolute left-[600px] bottom-[0px] justify-center text-center bg-gray-100 hover:bg-black hover:text-white py-10 px-14 rounded-lg shadow-lg h-[200px] w-[300px] transition-all duration-300 ease-in-out">
          <RiRobot2Line className="text-4xl text-blue-600 mb-2" />
          <p className="text-lg font-medium">IT Infrastructure</p>
        </div>

        {/* Block 3 */}
        <div className="flex flex-col items-center text-center absolute right-[100px] top-[0px] justify-center bg-gray-100 hover:bg-black hover:text-white py-10 px-14 rounded-lg shadow-lg h-[200px] w-[300px] transition-all duration-300 ease-in-out">
          <RiRobot2Line className="text-4xl text-blue-600 mb-2" />
          <p className="text-lg font-medium">Cyber Security</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;
