"use client";
import Image from "next/image";
import bgImage from "@/public/bg.png";
import logoWhite from "@/public/logo-white.png";
import {
  useWeb3Modal,
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { SplashPage } from "@/components/SplashPage";
import DashbordPage from "../components/dashBoardPage";

export default function Home() {
  const { open } = useWeb3Modal();
  const { address, chainId, isConnected } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();
  console.log(address, chainId, isConnected);
  return <>{isConnected ? <DashbordPage /> : <SplashPage />}</>;
}
