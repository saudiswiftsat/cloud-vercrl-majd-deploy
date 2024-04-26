import React from "react";
import logo from "@/public/logo.svg";
import Image from "next/image";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import { ethers, Wallet, utils } from "ethers";
import { useEffect, useState } from "react";
export const NavBar = () => {
  const { address, chainId, isConnected } = useWeb3ModalAccount();

  useEffect(() => {
    getBalance();
  }, [address]);

  const [balance, SetBalance] = useState("");
  let provider;
  const getBalance = async () => {
    if (window.ethereum == null) {
      console.log("MetaMask not installed; using read-only defaults");
      provider = new ethers.getDefaultProvider();
    } else {
      provider = new ethers.BrowserProvider(window.ethereum);
      const balance = await provider.getBalance(address);
      const balanceInEth = ethers.formatEther(balance.toString());
      SetBalance(balanceInEth);
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-between pt-8 items-center">
      <div>
        {" "}
        <Image src={logo} />
      </div>

      <div className="bg-main-dark-color text-main-green-color m-2 rounded-md text-center p-6">
        <p className="text-main-red-color font-bold text-2xl">
          Account Admin Data
        </p>
        {address && getBalance && (
          <p className="text-main-green-color font-bold text-2xl">
            {balance.substring(0, 12)} ETH
          </p>
        )}
        <p>{address}</p>
      </div>
    </div>
  );
};
