"use client";
import { usePrivy } from "@privy-io/react-auth";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function WalletButton() {
  const { login, logout, authenticated, user } = usePrivy();
  const [isOpen, setIsOpen] = useState(false);

  // Shorten the wallet address for display
  const address = user?.wallet?.address;
  const shortAddress = address
    ? `${address.slice(0, 6)}...${address.slice(-4)}`
    : "";

  if (!authenticated) {
    return (
      <Button onClick={login} size="lg" className="h-9 px-6 font-bold">
        Connect Wallet
      </Button>
    );
  }

  return (
    <div className="relative">
      <Button
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-md border-border bg-background px-4 font-medium text-foreground hover:bg-accent"
      >
        <div className="h-2 w-2 rounded-full bg-emerald-500" />
        {shortAddress}
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md border border-border bg-popover p-1 z-50">
          <div className="px-4 py-3">
            <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/60">
              Connected Wallet
            </p>
            <p className="mt-0.5 truncate text-sm font-semibold text-foreground">
              {shortAddress}
            </p>
          </div>
          <div className="h-px bg-border mx-2" />
          <button
            onClick={() => {
              logout();
              setIsOpen(false);
            }}
            className="group flex w-full items-center rounded-lg px-4 py-2 text-sm text-destructive transition-colors hover:bg-destructive/10"
          >
            Disconnect
          </button>
        </div>
      )}
    </div>
  );
}
