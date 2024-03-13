import React from "react";

const Cards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* card */}
      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white ">
          <p className="font-bold text-2xl px-2 pt-4">Celebrity of South</p>
          <p className="px-2 "> Idalli : All Day</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4 hover:text-white hover:bg-black">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://www.ticklingpalates.com/wp-content/uploads/2020/06/Soft-Spongy-Idli-Recipe.jpg"
          alt="/"
        />
      </div>
      {/* card */}
      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white ">
          <p className="font-bold text-2xl px-2 pt-4">Simple Yet Flavorful</p>
          <p className="px-2 ">Rice Samber : Afternoons</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4 hover:text-white hover:bg-black">
          Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="/"
        />
      </div>
      {/* card */}
      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white ">
          <p className="font-bold text-2xl px-2 pt-4">Crispy and Crunchy</p>
          <p className="px-2 ">Vade : Mornings</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4 hover:text-white hover:bg-black">
          Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://img.freepik.com/premium-photo/vada-medu-vadai-with-sambar-chutney-popular-south-indian-snack-breakfast_466689-1581.jpg?w=360"
          alt="/"
        />
      </div>
    </div>
  );
};

export default Cards;
