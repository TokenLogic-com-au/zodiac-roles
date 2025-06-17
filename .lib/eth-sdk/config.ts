import { defineConfig } from "@gnosis-guild/eth-sdk";
import { ethSdkConfig } from "zodiac-roles-sdk";
import contracts from "../../contracts";

export default defineConfig({ ...ethSdkConfig, contracts, etherscanKeys: {

  optimism: "3E4XE4JTCIDBNT3ZJHCF5TC1HA1XH1VB91",
},rpc: {
  optimism: "https://opt-mainnet.g.alchemy.com/v2/EpR2pj6iHb-Bal7J6_7uC",
} });



// RPC_URL_ETHEREUM=https://eth-mainnet.g.alchemy.com/v2/EpR2pj6iHb-Bal7J6_7uC
// RPC_URL_POLYGON=https://polygon-mainnet.g.alchemy.com/v2/EpR2pj6iHb-Bal7J6_7uC
// RPC_URL_ARBITRUM=https://arb-mainnet.g.alchemy.com/v2/EpR2pj6iHb-Bal7J6_7uC
// RPC_URL_OPTIMISM=https://opt-mainnet.g.alchemy.com/v2/EpR2pj6iHb-Bal7J6_7uC
// RPC_URL_BASE=https://base-mainnet.g.alchemy.com/v2/EpR2pj6iHb-Bal7J6_7uC