import React from "react";

function Item() {
   return (
      <div className="mx-2 mb-3 flex-1 ">
         <img
            src="https://a.storyblok.com/f/89778/1168x728/578a7ddf01/us_us-ny_nyc_1.jpeg"
            className="mx-auto"
            alt=""
         />
         <div className="mt-3 text-center md:text-left leading-relaxed">
            <p className="uppercase text-xs font-bold text-gray-600">
               Habitacion sencilla
            </p>
            <p className="text-base text-gray-800 font-bold">
               Departamento de lujo en Manhatan
            </p>
            <p className="text-gray-600">$3000 USD</p>
         </div>
      </div>
   );
}

export default Item;
