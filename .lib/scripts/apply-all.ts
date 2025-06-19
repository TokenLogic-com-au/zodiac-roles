import { execSync } from "child_process";
import dotenv from "dotenv";

dotenv.config();

const roleKey = "aave_depositor"; 

const networks = [
  { key: "OPTIMISM", prefix: "oeth" },
  { key: "POLYGON", prefix: "matic" },
  { key: "ARBITRUM", prefix: "arb1" },
  { key: "MAINNET", prefix: "eth" },
  { key: "BASE", prefix: "base" },
];

for (const { key, prefix } of networks) {
  const envVar = `ROLE_MANAGER_${key}`;
  const address = process.env[envVar];

  if (!address) {
    console.warn(`⚠️  Skipping ${key}: ${envVar} is not set`);
    continue;
  }

  const prefixedAddress = `${prefix}:${address}`;
  console.log(`\n🔐 Applying role "${roleKey}" to ${prefixedAddress}`);
  execSync(`yarn apply ${roleKey} ${prefixedAddress}`, { stdio: "inherit" });
}
