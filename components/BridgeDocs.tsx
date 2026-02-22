import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Droplet,
  Zap,
  Shield,
  ExternalLink,
  Code2,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function BridgeDocs() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
      {/* About Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 mb-2">
          <BookOpen className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-bold tracking-tight uppercase">
            Documentation
          </h2>
        </div>

        <Card className="border-none shadow-none bg-transparent">
          <CardHeader className="px-0 pt-0">
            <CardTitle className="text-3xl font-bold tracking-tight">
              What is Circulate?
            </CardTitle>
            <CardDescription className="text-base">
              Circulate is a high-performance, cross-chain bridge protocol
              designed specifically for USDC liquidity movement across
              EVM-compatible testnets.
            </CardDescription>
          </CardHeader>
          <CardContent className="px-0 space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Built on top of <strong>Circle&apos;s Bridge Kit</strong>,
              Circulate eliminates the complexity of manual cross-chain
              transfers by handling liquidity abstraction and transaction
              routing in a single, unified interface.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex gap-3">
                <Zap className="h-5 w-5 text-primary shrink-0" />
                <div>
                  <h4 className="text-sm font-bold">Instant Setup</h4>
                  <p className="text-xs text-muted-foreground">
                    Add chains and import USDC tokens to your wallet in one
                    click.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Shield className="h-5 w-5 text-primary shrink-0" />
                <div>
                  <h4 className="text-sm font-bold">Safe Bridging</h4>
                  <p className="text-xs text-muted-foreground">
                    Built-in chain verification prevents sending funds to
                    incorrect networks.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Resources & Guide */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 mb-2">
          <Droplet className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-bold tracking-tight uppercase">
            Resources
          </h2>
        </div>

        <div className="grid gap-4">
          <a
            href="https://faucet.circle.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Card className=" bg-background">
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-md bg-background flex items-center justify-center text-primary">
                    <Droplet className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold">Circle USDC Faucet</h4>
                    <p className="text-xs text-muted-foreground">
                      Get testnet USDC for any supported network.
                    </p>
                  </div>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </CardContent>
            </Card>
          </a>

          <a
            href="https://developers.circle.com/circle-mint/docs/cctp-overview"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Card className=" bg-background">
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-md bg-background flex items-center justify-center text-primary">
                    <Code2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold">Developer Docs</h4>
                    <p className="text-xs text-muted-foreground">
                      Learn how the Bridge Kit handles CCTP under the hood.
                    </p>
                  </div>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </CardContent>
            </Card>
          </a>
        </div>

        <Card className="bg-background border-border">
          <CardHeader className="p-4 pb-0">
            <CardTitle className="text-sm font-bold flex items-center gap-2">
              <Zap className="h-4 w-4 text-primary" />
              Quick Guide
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-2">
            <ul className="text-xs space-y-3 font-medium text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary font-bold">1.</span>
                <span>Connect your MetaMask wallet.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">2.</span>
                <span>
                  Ensure the <strong>Source Chain</strong> is added and selected
                  in your wallet.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">3.</span>
                <span>
                  Select destination, enter USDC amount, and click{" "}
                  <strong>Bridge USDC</strong>.
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
