import { ethers, utils } from "ethers";
import abiContract from "@/public/abi.json";

export const GetContract = async () => {
  try {
    if (window.ethereum) {
      const { ethereum } = window;
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      console.log(signer, provider, "we are here at 525");

      const contract = new ethers.Contract(
        process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
        abiContract,
        signer
      );

      console.log(contract, "we are here at contrcat");

      return contract;
    } else {
      console.error("MetaMask not detected");
    }
  } catch (error) {
    loadGetInitialProps(error, "Error at Deployed contract Function");
  }
};
