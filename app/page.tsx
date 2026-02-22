"use client";

import BridgeUSDC from "@/components/BridgeUSDC";
import WalletButton from "@/components/WalletButton";
import BridgeDocs from "@/components/BridgeDocs";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { ModeToggle } from "@/components/ModeToggle";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans antialiased">
      {/* Header */}
      <div className="sticky top-0 z-50 w-full border-b border-border bg-background">
        <header className="mx-auto max-w-6xl">
          <div className="container mx-auto flex h-14 items-center justify-between px-6">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg  flex items-center justify-center text-primary-foreground text-lg font-bold ">
                <Image
                  src="/logo.png"
                  alt="Circulate Logo"
                  width={20}
                  height={20}
                />
              </div>
              <span className="text-xl font-bold tracking-tighter hidden sm:inline-block">
                Circulate
              </span>
            </div>

            <div className="flex items-center gap-4">
              <a
                className="hidden md:flex h-9 items-center justify-center gap-2 rounded-md border border-border bg-background px-5 text-xs font-bold text-foreground hover:bg-accent"
                href="https://faucet.circle.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                USDC Faucet
              </a>
              <WalletButton />
            </div>
          </div>
        </header>
      </div>

      <main className="flex flex-1 flex-col items-center gap-16 py-12 px-6 lg:px-32">
        <div className="flex w-full max-w-6xl flex-col items-center gap-12">
          {/* Main Bridge Section */}
          <div className="w-full flex justify-center">
            <BridgeUSDC />
          </div>

          <Separator className="max-w-md opacity-50" />

          {/* Documentation Section */}
          <div className="w-full">
            <BridgeDocs />
          </div>
        </div>
      </main>

      {/* Fixed theme toggle */}
      <div className="fixed bottom-6 right-6 z-50">
        <ModeToggle />
      </div>

      {/* Footer */}
      <footer className="w-full border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-muted-foreground text-xs">
          <p>© 2026 Circulate | Built with Circle Bridge Kit</p>
          <div className="flex gap-6">
            <a
              href="https://developers.circle.com/"
              target="_blank"
              className="hover:text-primary transition-colors"
            >
              Developers
            </a>
            <a
              href="https://github.com/circlefin/bridge-kit"
              target="_blank"
              className="hover:text-primary transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
