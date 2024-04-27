import React from "react";
import Image from "next/image";

export const ItemCard = ({ item }) => {
  // Function to convert Unix timestamp to a readable date format
  const formatDate = (unixTimestamp) => {
    // Convert BigInt to Number explicitly if it's a BigInt
    const timestamp = typeof unixTimestamp === 'bigint' ? Number(unixTimestamp) : unixTimestamp;
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString("en-US", {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div className="bg-main-dark-color text-white inline-block m-2 p-2 rounded-md overflow-hidden">
      <Image
        src={`https://open-sky.infura-ipfs.io/ipfs/${item.ipfsHash}`}
        width={300}
        height={300}
        className="rounded-md object-cover"
        alt="Item Image"
      />

      <div className="p-3">
        <p className="text-xl">
          <span className="text-2xl font-bold text-main-red-color">
            Location
          </span>
          : {item.location}
        </p>
        <p className="text-main-green-color text-xl">
          <span className="text-xl font-bold text-main-red-color">Date</span>
          : {formatDate(item.date)}
        </p>
      </div>
    </div>
  );
};


