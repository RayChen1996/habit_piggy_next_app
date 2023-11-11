"use client";
import Image from "next/image";
import { Pagintion } from "./components/pagintion";

import { gql, useQuery } from "@apollo/client";
import Slogan from "./components/Landing/slogan";
import WelcomeText from "./components/Landing/welcomeText";
import About from "./components/Landing/about";
import Feature from "./components/Landing/feature";
import Faq from "./components/Landing/faq";
import Recommend from "./components/Landing/recommend";
import ActionButton from "./components/Landing/ActionButton";

// SECTION apollo
// NOTE 查詢商品列表
/** - 查詢商品列表 */
const GET_PRODUCTS = gql`
  query products {
    products {
      # "ID"
      id
      # "名稱"
      name
      # "相片"
      photos
      # "原價"
      originalPrice
      # "折扣價"
      discountPrice
    }
  }
`;
export default function Home() {
  const { data: productCountData, loading } = useQuery(GET_PRODUCTS);
  console.log(productCountData);
  console.log("123");
  return (
    <>
      <Slogan />
      <WelcomeText />
      <About />
      <Feature />
      <Faq />
      <Recommend />
      <ActionButton />
    </>
  );
}

// const PdList = () => {
//   return (

//   );
// };
