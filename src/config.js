import { createConfig, http } from 'wagmi';
import { polygonMumbai } from 'wagmi/chains';

const config = createConfig({
 chains: [polygonMumbai],
 transports: {
    [polygonMumbai.id]: http('https://endpoints.omniatech.io/v1/matic/mumbai/public	'),
 },
});

export default config;
