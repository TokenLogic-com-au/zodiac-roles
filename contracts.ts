import type { Contracts } from "./.lib/types";

export default {
  //poolExposureSteward
  mainnet: {
    pes: "0x22aC12a6937BBBC0a301AF9154d08EaD95673122" as `0x${string}`,
  },
  arbitrumOne: {
    pes: "0xfB1D12D7C9c3Eb6b40fe0502801CdFCE816a0d18" as `0x${string}`,
  },
  polygon: {
    pes: "0xE5b11ab4D36E58C9171e3DB98Ba17336606Cd6ef" as `0x${string}`,
  },
  optimism: {
    pes: "0x4684b645386525057526EB85854045914Fe389d6" as `0x${string}`,
  },
  base: {
    pes: "0x4f1F3E32f20847a4c9F002882eB607aD750b6115" as `0x${string}`,
  },
} satisfies Contracts;
