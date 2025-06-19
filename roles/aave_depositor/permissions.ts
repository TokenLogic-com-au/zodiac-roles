
export default [
  allow.optimism.poolExposureSteward.multicall(),

  allow.arbitrumOne.poolExposureSteward.multicall(),

  allow.polygon.poolExposureSteward.multicall(),

  allow.base.poolExposureSteward.multicall(),

  allow.mainnet.poolExposureSteward.multicall(),
] satisfies Permissions;