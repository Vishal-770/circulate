# Circulate | The Universal Bridge

**Circulate** is a high-performance cross-chain bridge designed for seamless USDC transfers across multiple testnet ecosystems. Built with Circle's **Bridge Kit v2**, it offers sub-second finality and a premium swap-style user experience.

## Supported Testnets
- **Arc Testnet** (Native Gas)
- **Ethereum Sepolia**
- **Base Sepolia**
- **Arbitrum Sepolia**
- **Avalanche Fuji**
- **Optimism Sepolia**
- **Polygon Amoy**
- **Unichain Sepolia**
- **Linea Sepolia**

## Features
- **One-Click Bridging**: Simplified swap-style interface.
- **Auto-Chain Management**: Automatically adds networks and USDC tokens to your wallet.
- **Real-Time Progress**: Track every phase of the bridging process (Burn → Mint → Complete).
- **Secure by Default**: Powered by Circle CCTP.

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Auth & Wallet**: Privy SDK
- **Blockchain Interface**: Viem & Bridge Kit
- **Styling**: TailwindCSS v4 & shadcn/ui

## Getting Started

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Run the development server:
   ```bash
   pnpm dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) to start circulating.
