import React from "react";
import Image from "next/image";

export const ItemCard = ({ item }) => {
  return (
    <div className="bg-main-dark-color text-white  inline-block m-2 p-2 rounded-md">
      <Image
        src={`https://open-sky.infura-ipfs.io/ipfs/${item.ipfsHash}`}
        width={300}
        height={300}
        className="rounded-md h-[150px]  object-cover"
      />

      <div className="p-3 ">
        <p className=" text-xl">
          <span className="text-2xl font-bold text-main-red-color ">
            Location
          </span>
          :{item.location}
        </p>
        <p className=" text-main-green-color text-xl">
          <span className="text-xl font-bold text-main-red-color">Date</span>:
          {item.date.toString()}
        </p>
      </div>
    </div>
  );
};
