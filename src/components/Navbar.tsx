import { ShoppingCart, Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export function Navbar({ cartCount, onOpenCart }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
          <h1 className="font-heading text-2xl font-bold tracking-tight text-primary">
            Passo Feminino
          </h1>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Início</a>
          <a href="#produtos" className="text-sm font-medium hover:text-primary transition-colors">Produtos</a>
          <a href="#promocoes" className="text-sm font-medium hover:text-primary transition-colors">Promoções</a>
          <a href="#contato" className="text-sm font-medium hover:text-primary transition-colors">Contato</a>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="relative" onClick={onOpenCart}>
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <Badge className="absolute -right-1 -top-1 h-5 w-5 justify-center rounded-full p-0 text-[10px]" variant="destructive">
                {cartCount}
              </Badge>
            )}
          </Button>
        </div>
      </div>
    </nav>
  );
}
