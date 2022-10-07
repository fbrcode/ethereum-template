import 'dotenv/config';
import { ethers } from 'ethers';

export async function getBlock(blockNumber: number | string): Promise<ethers.providers.Block> {
  const rpcProvider = process.env.RPC_PROVIDER;
  const provider = new ethers.providers.JsonRpcProvider(rpcProvider);
  const block = (await provider.getBlock(blockNumber)) as ethers.providers.Block;
  return block;
}

export function getContractInstance(contractAddress: string, contractABI: string): ethers.Contract {
  const rpcProvider = process.env.RPC_PROVIDER;
  const provider = new ethers.providers.JsonRpcProvider(rpcProvider);
  const contract = new ethers.Contract(contractAddress, contractABI, provider) as ethers.Contract;
  return contract;
}
