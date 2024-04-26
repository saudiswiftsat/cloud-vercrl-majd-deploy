import React from "react";
import Image from "next/image";
import bgImage from "@/public/bg.png";
import logoWhite from "@/public/logo-white.png";
import {
  useWeb3Modal,
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
export const SplashPage = () => {
  const { open } = useWeb3Modal();
  const { address, chainId, isConnected } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();
  console.log(address, chainId, isConnected);
  return (
    <div>
      {" "}
      <div className="h-screen w-full relative ">
        <Image
          src={bgImage}
          alt="bgImage"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="absolute top-0 left-0 z-0"
        />
        <div className="relative z-10 flex flex-col items-center">
          <div className="container mx-auto h-screen flex flex-col justify-center items-center ">
            <Image
              src={logoWhite}
              alt="logoWhite"
              className="hover:opacity-80 max-w-[400px]  "
            />
            <button
              onClick={() => open()}
              type="button"
              className="mt-4 text-main-green-color bg-main-dark-color hover:bg-gray-100   focus:ring-4 focus:outline-none focus:ring-gray-100  rounded-lg text-sm px-12 font-bold py-4 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800  dark:text-white dark:hover:bg-gray-700 me-2 mb-2"
            >
              Login With MetaMask Wallet
            </button>

            <div className="py-12">
              <p className="text-main-green-color ">
                Copyright (C) Saudi Swift Team{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
