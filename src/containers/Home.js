import React from "react";
import Item from "../components/Item";
import backImage from "../img/background.jpg";

function Home() {
   const sectionStyle = {
      backgroundImage: `url(${backImage})`,
   };
   return (
      <div className="container mx-auto">
         <div
            className="bg-auto text-white rounded h-auto py-24 px-10 mt-5 mx-2"
            style={sectionStyle}
         >
            <div className="md:w-1/2">
               <p className=" font-bold text-sm uppercase">Experiencias</p>
               <p className="text-3xl font-bold">
                  Porque no viajas para Dormir
               </p>
               <p className="text-2xl mb-10 leading-none">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti consectetur omnis cumque. .
               </p>
               <a
                  href="/"
                  className="bg-white py-4 px-8 text-black font-bold uppercase text-xs rounded-xl "
                  target="_blank"
                  rel="noreferrer"
               >
                  Mas Información
               </a>
            </div>
         </div>
         {/* </Header> */}
         <section className="mt-5">
            <h2 className="text-2xl font-bold text-gray-800 mx-2">
               Alojamientos en New York
            </h2>
            <div className="md:flex md:justify-between ">
               <Item />
               <Item />
               <Item />
               <Item />
            </div>
         </section>
      </div>
   );
}

export default Home;
