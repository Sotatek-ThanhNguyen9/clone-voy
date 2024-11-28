import { createConfig, fallback, http } from 'wagmi';
import { arbitrum, arbitrumSepolia, mainnet, sepolia } from 'wagmi/chains';

//@ts-ignore
export const config = createConfig({
  chains: [mainnet, sepolia, arbitrum, arbitrumSepolia],
  connectors: [],
  transports: {
    [mainnet.id]: fallback([http('https://eth.llamarpc.com')]),
    [sepolia.id]: fallback([http('https://eth-sepolia.g.alchemy.com/v2/demo')]),
    [arbitrum.id]: fallback([http('https://arbitrum.llamarpc.com')]),
    [arbitrumSepolia.id]: fallback([
      http('https://arbitrum-sepolia.blockpi.network/v1/rpc/public'),
    ]),
  },
});
