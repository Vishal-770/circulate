# Circulate | The Universal Bridge

**Circulate** is a premium, high-performance cross-chain bridge designed for seamless USDC transfers across multiple testnet ecosystems. Built with Circle's **Bridge Kit v2** and **CCTP**, it offers a streamlined "swap-style" experience with sub-second finality.

## 🌐 Supported Testnets (15)
Circulate provides a unified interface for 18 distinct testnet environments:

*   **Arc Testnet** (Native Gas)
*   **Ethereum Sepolia**
*   **Base Sepolia**
*   **Arbitrum Sepolia**
*   **Avalanche Fuji**
*   **Optimism Sepolia**
*   **Polygon Amoy**
*   **Unichain Sepolia**
*   **Linea Sepolia**
*   **Sei Testnet**
*   **World Chain Sepolia**
*   **Ink Testnet**
*   **XDC Apothem**
*   **Monad Testnet**
*   **Codex Testnet**

## ✨ Core Features
- **One-Click Integration**: Automatically adds networks and imports USDC tokens to MetaMask.
- **Transaction Batching**: Uses Privy Smart Wallets (ERC-4337) to batch "Approve" and "Burn" steps into a single atomic operation.
- **Real-Time Tracking**: Full visibility into the CCTP lifecycle (Burn → Attestation → Mint).
- **Responsive Design**: Premium dark/light mode UI with custom-tuned aesthetics and logo visibility.

## 🛠️ Tech Stack
- **Frontend**: Next.js 15 (App Router), React 19
- **Authentication**: [Privy](https://privy.io) (Embedded Wallets & Smart Accounts)
- **Bridging Logic**: [Circle Bridge Kit](https://github.com/circlefin/bridge-kit)
- **Engine**: Viem v2
- **Styling**: Tailwind CSS v4, Lucide React, Shadcn UI

## 🚀 Getting Started

1.  **Clone & Install**:
    ```bash
    pnpm install
    ```

2.  **Environment Setup**:
    Create a `.env.local` file with your Privy credentials:
    ```env
    NEXT_PUBLIC_PRIVY_APP_ID=your_app_id
    NEXT_PUBLIC_PRIVY_CLIENT_ID=your_client_id
    ```

3.  **Run Development**:
    ```bash
    pnpm dev
    ```

4.  **Circulate**:
    Open [http://localhost:3000](http://localhost:3000) and start moving USDC.

---

