const networks = [
  "optimism",
  "arbitrumOne",
  "polygon",
  "base",
  "mainnet"
] as const;

export default networks.map(
  (network) => allow[network].poolExposureSteward.multicall()
) satisfies Permissions;
