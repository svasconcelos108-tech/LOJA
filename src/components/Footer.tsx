import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, CreditCard, Smartphone, Truck } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer id="contato" className="bg-muted/50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="font-heading text-2xl font-bold text-primary">Passo Feminino</h3>
            <p className="text-sm text-muted-foreground">
              Sua loja especializada em calçados esportivos femininos. Unindo tecnologia, conforto e as últimas tendências da moda fitness.
            </p>
            <div className="flex gap-4">
              <a href="#" className="rounded-full bg-background p-2 text-muted-foreground hover:text-primary transition-colors shadow-sm">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="rounded-full bg-background p-2 text-muted-foreground hover:text-primary transition-colors shadow-sm">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="rounded-full bg-background p-2 text-muted-foreground hover:text-primary transition-colors shadow-sm">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold uppercase tracking-wider text-xs">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Início</a></li>
              <li><a href="#produtos" className="hover:text-primary transition-colors">Produtos</a></li>
              <li><a href="#promocoes" className="hover:text-primary transition-colors">Promoções</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold uppercase tracking-wider text-xs">Contato</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                (11) 99999-9999
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                contato@passofeminino.com.br
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" />
                Av. Paulista, 1000 - São Paulo, SP
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold uppercase tracking-wider text-xs">Formas de Pagamento</h4>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-md bg-background px-3 py-2 shadow-sm border">
                <CreditCard className="h-4 w-4 text-primary" />
                <span className="text-xs font-medium">Cartão</span>
              </div>
              <div className="flex items-center gap-2 rounded-md bg-background px-3 py-2 shadow-sm border">
                <Smartphone className="h-4 w-4 text-primary" />
                <span className="text-xs font-medium">PIX</span>
              </div>
              <div className="flex items-center gap-2 rounded-md bg-background px-3 py-2 shadow-sm border">
                <Truck className="h-4 w-4 text-primary" />
                <span className="text-xs font-medium">Entrega Rápida</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-12 opacity-50" />

        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <p className="text-xs text-muted-foreground">
            © 2026 Passo Feminino. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Truck className="h-4 w-4" />
              <span>Entrega em todo o Brasil</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
