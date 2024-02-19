"use client";
import styles from "./styles/Slider.module.css";

import Image from "next/image";
import { useState } from "react";


const Slider = () => {


  const [index, setIndex] = useState(0);
  const images = [
    "/4.png",
    "/4.png",
    "/4.png",
  ];

  const handleArrow = (direction) =>{
      if(direction==="l"){
          setIndex(index !== 0 ? index-1 : 2)
      }
      if(direction==="r"){
          setIndex(index !== 2 ? index+1 : 0)
      }
  }
console.log(index)
  return (
    <div className={styles.container}>

      <div className="w-[5760px] h-full flex transition-transform duration-1500 ease-in-out" style={{transform:`translateX(${-100*index}vw)`}}>
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image src={img} alt="" layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>
      <div className="m-auto absolute w-[10%] h-[20%] top-0 bottom-0 cursor-pointer z-2" style={{ right: 0 }} onClick={()=>handleArrow("r")}>
        <Image src="/arrowr.png" layout="fill" alt="" objectFit="contain"/>
      </div>
      <div className="m-auto absolute w-[10%] h-[20%] top-0 bottom-0 cursor-pointer z-2" style={{ left: 0 }} onClick={()=>handleArrow("l")}>
        <Image src="/arrowl.png" alt="" layout="fill" objectFit="contain"/>
      </div>
    </div>
  );
};

export default Slider;
