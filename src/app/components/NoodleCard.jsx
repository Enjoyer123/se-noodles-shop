import Image from "next/image";
import Link from "next/link";

const NoodleCard = () => {
  return (
    <div className="w-1/5 pt-8 pr-8 flex flex-col items-center justify-center cursor-pointer">
        <Image src="/3.jpg" alt="" width="500" height="500" />
    
    <h1 className="text-lg font-bold text-red-800">เตี๋ยว</h1>
      <span className="text-lg font-bold text-[#666]">$50</span>
      <p className="pt-2 text-center text-[#777]">Lorem ipsum dolor, sit voluptater, sit  voluptater, sit  voluptate.</p>
   </div>
  );
};

export default NoodleCard;
