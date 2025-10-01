import React from "react";

function PetCard() {
  return (
    <div className="container">
        <div className="relative w-fit">
      
        <div className="h-[175px] w-[175px] bg-[#EA5B5B] rounded-full z-[9]"></div>
        <img src="dog-image.png" alt="Dog" className="dog" />
        <div className=" bg-[linear-gradient(180deg,rgba(234,91,91,0.6)_0%,rgba(255,227,200,0.6)_100%)] z-[999] h-[27px] w-[27px] rounded-full absolute  left-[-15px] top-[53%]"></div>
        <div className=" bg-[linear-gradient(180deg,rgba(234,91,91,0.6)_0%,rgba(255,227,200,0.6)_100%)] z-[999] h-[26px] w-[26px] rounded-full absolute  right-0"></div>
        <div className=" bg-[linear-gradient(180deg,rgba(234,91,91,0.6)_0%,rgba(255,227,200,0.6)_100%)] z-[999] h-[26px] w-[26px] rounded-full absolute  right-0"></div>
      
    </div>
    </div>
  );
}

export default PetCard;
