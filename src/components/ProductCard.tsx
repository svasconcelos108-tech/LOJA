import { Product } from "@/types";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(product.price);

  const formattedDiscountPrice = product.discountPrice 
    ? new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.discountPrice)
    : null;

  return (
    <Card className="group overflow-hidden transition-all hover:shadow-xl">
      <CardHeader className="relative p-0">
        {product.isPromotion && (
          <Badge className="absolute left-3 top-3 z-10 bg-destructive text-destructive-foreground">
            Oferta
          </Badge>
        )}
        <div className="aspect-square overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {product.category}
        </p>
        <h3 className="mt-1 font-heading text-xl font-bold">{product.name}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
          {product.description}
        </p>
        <div className="mt-4 flex items-center gap-2">
          {product.discountPrice ? (
            <>
              <span className="text-lg font-bold text-primary">{formattedDiscountPrice}</span>
              <span className="text-sm text-muted-foreground line-through">{formattedPrice}</span>
            </>
          ) : (
            <span className="text-lg font-bold">{formattedPrice}</span>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full gap-2 rounded-full" 
          onClick={() => onAddToCart(product)}
        >
          <ShoppingCart className="h-4 w-4" />
          Comprar agora
        </Button>
      </CardFooter>
    </Card>
  );
}
