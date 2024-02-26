// // Home.jsx
// import Slider from "./app/components/Slider.jsx";
// import ProductsList from"./app/components/ProductsList.jsx";
// import Footer from "./app/components/Footer.jsx";
// import axios from "axios";
// // // นำข้อมูลที่ต้องการใส่แทนที่มาทำเป็น array ของ objects
// // const noodleData = [
// //   {
// //     "_id": "1",
// //     "title":"noodle5",
// //     "img":"/1.jpg",
// //     "desc":"desc3",
// //     "prices": [
// //         12,
// //         13,
// //         14
// //     ],
// //     "extraOption":[
// //         {
// //             "text":"more sult",
// //             "price":2
// //         }
// //     ]
// //   }
// // ];



// const getData = async () => {
//   const response = await fetch("http://localhost:3000/api/products");
//   if (!response.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   const noodleData = await response.json();
//   //console.log("W ",noodleData)
//   return noodleData;
// };
 

// export default async function Home() {
//   const noodleList = await getData();
//   console.log(noodleList)
   
//   return (
//     <>
//       <Slider />
      
//        <ProductsList noodleList={noodleList} /> 
//       <Footer />
//     </>
//   );
// }





// Home.jsx

import Slider from "./app/components/Slider.jsx";
import ProductsList from "./app/components/ProductsList.jsx";
import Footer from "./app/components/Footer.jsx";
import axios from "axios";

export const getData = async (ctx) => {

  const res = await axios.get("http://localhost:3000/api/products");
  const noodleData = res.data;
  return noodleData;
};

export default async function Home() {
  const noodleList = await getData();
  console.log(noodleList);

  return (
    <>
      <Slider />
      <ProductsList noodleList={noodleList} />
      <Footer />
    </>
  );
}


