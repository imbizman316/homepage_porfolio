import React from "react";

function CareerItem({ company }) {
  return (
    <div className="w-[300px] h-[350px]">
      <div
        style={{
          backgroundImage: `url(${company.logo})`,
          height: 100,
          width: 180,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      />
      <hr className="w-[100px] mt-5 border-1 border-black" />
      <div className="mt-20">
        <h1 className="font-bold text-xl mb-5">{company.name}</h1>
        <p>{company.description}</p>
      </div>
    </div>
  );
}

export default CareerItem;
