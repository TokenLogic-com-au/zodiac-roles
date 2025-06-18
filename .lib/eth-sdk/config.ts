import dotenv from "dotenv";
dotenv.config(); // Load environment variables from .env before accessing process.env

import { defineConfig } from "@gnosis-guild/eth-sdk";
import { ethSdkConfig } from "zodiac-roles-sdk";
import contracts from "../../contracts";

const activeNetwork = (process.env.NETWORK || "optimism") as
  | "ethereum"
  | "optimism"
  | "polygon"
  | "arbitrum"
  | "base";

// Utility to resolve env keys dynamically
const getEnv = (key: string): string => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
};

export default defineConfig({
  ...ethSdkConfig,
  contracts,
  etherscanKeys: {
    [activeNetwork]: getEnv(`ETHERSCAN_KEY_${activeNetwork.toUpperCase()}`),
  },
  rpc: {
    [activeNetwork]: getEnv(`RPC_URL_${activeNetwork.toUpperCase()}`),
  },
});
