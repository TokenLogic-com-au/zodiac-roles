import dotenv from "dotenv";
dotenv.config();

import { defineConfig } from "@gnosis-guild/eth-sdk";
import { ethSdkConfig } from "zodiac-roles-sdk";
import contracts from "../../contracts";

const allNetworks = Object.keys(contracts) as Array<
  "mainnet" | "optimism" | "polygon" | "arbitrumOne" | "base" | string
>;

const getEnv = (key: string): string => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
};

const etherscanKey = getEnv("ETHERSCAN_API_KEY");

const etherscanKeys = Object.fromEntries(
  allNetworks.map((network) => [network, etherscanKey])
);

const rpc = Object.fromEntries(
  allNetworks.map((network) => [
    network,
    getEnv(`RPC_URL_${network.toUpperCase()}`),
  ])
);

export default defineConfig({
  ...ethSdkConfig,
  contracts,
  etherscanKeys,
  rpc,
});
