import { Inter } from "next/font/google";
import "./globals.css";
import { Web3Modal, Web3ModalProvider } from "../context/Web3Modal";
import {
  useWeb3Modal,
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Web3ModalProvider>{children}</Web3ModalProvider>
      </body>
    </html>
  );
}
