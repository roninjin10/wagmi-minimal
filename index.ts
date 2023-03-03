import { useContract } from "wagmi";

export function useMyContract() {
  return useContract({
    abi: [],
    address: "0x420",
  });
}
