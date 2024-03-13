import React, { useState } from "react";
import { data } from "../data/data.js";


const Food = () => {
//   console.log(data);
const[foods, setFoods] = useState(data)

// fillterfoods
const filterType = (category) =>{
    setFoods(
        data.filter((item)=>{
            return item.category === category;
        })
    );
};

// fillterbyprice
const filterPrice = (price) => {
    setFoods(
        data.filter((item)=>{
            return item.price === price;
        })
    );
};

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-blue-600 font-bold text-4xl text-center">Top Rated Menu Iteams</h1>

      {/* filter row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* filter type  */}
        <div>
            <p className="font-bold text-gray-700">Filter Type</p>
            <div className=" flex justify-between flex-wrap">
                <button onClick={()=> setFoods(data)} className="border-blue-600 text-blue-600 hover:text-white hover:bg-blue-600 m-1">All</button>
                <button onClick={()=> filterType('idli')} className="border-blue-600 text-blue-600 hover:text-white hover:bg-blue-600 m-1">Idli</button>
                <button onClick={()=> filterType('dosa')} className="border-blue-600 text-blue-600 hover:text-white hover:bg-blue-600 m-1">Dosa</button>
                <button onClick={()=> filterType('rice')} className="border-blue-600 text-blue-600 hover:text-white hover:bg-blue-600 m-1">Rice</button>
                <button onClick={()=> filterType('vade')} className="border-blue-600 text-blue-600 hover:text-white hover:bg-blue-600 m-1">Vada</button>
            </div>
        </div>
        {/* filter row */}
        <div>
              <p className="font-bold text-gray-700">Filter price</p>
              <div className="flex justify-between max-w-[390px] w-full">
                <button onClick={()=> filterPrice('50')} className="border-blue-600 text-blue-600 hover:text-white hover:bg-blue-600 m-1">50</button>
                <button onClick={()=> filterPrice('100')} className="border-blue-600 text-blue-600 hover:text-white hover:bg-blue-600 m-1">100</button>
                <button onClick={()=> filterPrice('150')} className="border-blue-600 text-blue-600 hover:text-white hover:bg-blue-600 m-1">150</button>
                <button onClick={()=> filterPrice('200')} className="border-blue-600 text-blue-600 hover:text-white hover:bg-blue-600 m-1">200</button>
              </div>
        </div>
      </div>

      {/* display foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {foods.map((item, index)=> (
             
           <div key={index} className="border shadow-lg rounded-lg hover:scale-105 duration-300">
            <img src={item.image} alt={item.name} 
            className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4">
                <p className="font-bold">{item.name}</p>
                <p>
                    <span className="bg-blue-600 text-white p-1 rounded-full">Rs.{item.price}</span>
                </p>
            </div>
           </div>

          ) )}
      </div>
    </div>
  );
};

export default Food;
