import dotenv from "dotenv";
dotenv.config();

const raw = process.env.ROLES_MEMBERS;

if (!raw) {
  throw new Error("Missing ROLES_MEMBERS in .env");
}

const members = raw
  .split(",")
  .map((addr) => addr.trim())
  .filter((addr): addr is `0x${string}` =>
    /^0x[a-fA-F0-9]{40}$/.test(addr)
  );

export default members satisfies `0x${string}`[];
