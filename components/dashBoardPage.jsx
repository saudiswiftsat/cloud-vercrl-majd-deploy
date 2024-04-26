"use client";
import { NavBar } from "@/components/NavBar";
import { GetContract } from "@/hookes/getContract";
import { useDisconnect, useWeb3ModalAccount } from "@web3modal/ethers/react";
import { useRouter } from "next/navigation";
import React from "react";
import { useEffect, useState } from "react";
import { ItemCard } from "./itemCard";
const DashbordPage = () => {
  const { address, chainId, isConnected } = useWeb3ModalAccount();
  const { disconnect } = useDisconnect();

  console.log("iam her at layput of dashbaord");

  useEffect(() => {
    getAdminAddress();
  }, [GetContract, address]);
  const [satelliteData, setSatelliteData] = useState([]);

  const router = useRouter();

  const getAdminAddress = async () => {
    console.log("MNMN====>eeee");

    const contract = await GetContract();
    console.log("MNMN====>", contract);
    const isExistToWatchData = await contract.addressExists(address);

    if (!isExistToWatchData) {
      disconnect();
      router.refresh();

      return;
    }
    console.log(isExistToWatchData, "AMDIN");
    const getAllSatelliteData = await contract.getAllSatelliteData();

    console.log(getAllSatelliteData);
    const data = getAllSatelliteData.map((item) => ({
      location: item.location,
      date: item.dateTimeSTamp,
      ipfsHash: item.ipfsHash,
    }));
    console.log(data);
    setSatelliteData(data);
  };

  return (
    <div className="container mx-auto">
      <NavBar />
      <p className="text-center text-7xl font-bold pt-12 text-main-dark-color">
        Satellites Blockchain Network{" "}
        <span className=" text-main-green-color">Data</span>
      </p>

      {/* <div>
        <h1>Satellite Data</h1>
        <ul>
          {satelliteData &&
            satelliteData.map((data, index) => (
              <li key={index}>
                Location: {data.location}, Date: {data.date.toString()}
              </li>
            ))}
        </ul>
      </div> */}

      <div className=" items-center justify-center pt-12">
        {satelliteData &&
          satelliteData.map((data, index) => (
            <ItemCard item={data} key={index} />
          ))}
      </div>
    </div>
  );
};

export default DashbordPage;
