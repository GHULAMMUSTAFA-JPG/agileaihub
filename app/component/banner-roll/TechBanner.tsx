import React from "react";
import Image from "next/image";

// Define a type for the logo objects
type Logo = {
  name: string;
  src: string;
};

const logos: Logo[] = [
  { name: "SAP", src: "/logo/SAP.png" },
  { name: "McAfee", src: "/logo/McAfee2.png" },
  { name: "Cisco", src: "/logo/Cisco1.png" },
  { name: "UiPath", src: "/logo/Uipath1.png" },
  { name: "IBM", src: "/logo/IBM.png" },
  { name: "Jira Software", src: "/logo/jira1.png" },
];

const TechBanner = () => {
  // LogoList is typed as Logo[] (array of Logo objects)
  const LogoList: Logo[] = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="w-full text-center my-20">
      <p className="font-medium text-3xl">Technologies we specialize in</p>
      <div className="flex justify-center  overflow-hidden space-x-10 mt-6 bg-gray-100">
        {LogoList.map((logo, index) => (
          <Image
            key={index}
            src={logo.src}
            alt={logo.name}
            height={50}
            width={100}
            className="object-contain min-w-20 flex animate-marquee overflow-hidden justify-items-center filter grayscale group-hover:grayscale-0 transition duration-300"
          />
        ))}
      </div>
    </div>
  );
};

export default TechBanner;
