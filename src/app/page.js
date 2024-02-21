import Image from "next/image";
import Slider from "./components/Slider.jsx";
import ProductsList from"./components/ProductsList.jsx";
import Footer from "./components/Footer.jsx";
export default function Home() {
  return (
    <>
    
      <Slider />
    <ProductsList />
    <Footer />
    </>
  );
}
