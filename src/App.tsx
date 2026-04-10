import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProductCard } from "@/components/ProductCard";
import { Cart } from "@/components/Cart";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PRODUCTS } from "@/constants";
import { Product, CartItem } from "@/types";
import { motion } from "motion/react";
import { Truck, ShieldCheck, RefreshCcw, CreditCard } from "lucide-react";

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const removeFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar cartCount={cartCount} onOpenCart={() => setIsCartOpen(true)} />
      
      <main>
        <Hero />

        {/* Features Section */}
        <section className="bg-background py-12">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex items-center gap-4 rounded-2xl bg-accent/20 p-6 transition-all hover:bg-accent/30">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <Truck className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold">Entrega Rápida</h4>
                  <p className="text-xs text-muted-foreground">Para todo o Brasil</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-2xl bg-accent/20 p-6 transition-all hover:bg-accent/30">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold">Compra Segura</h4>
                  <p className="text-xs text-muted-foreground">Dados 100% protegidos</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-2xl bg-accent/20 p-6 transition-all hover:bg-accent/30">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <RefreshCcw className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold">Troca Grátis</h4>
                  <p className="text-xs text-muted-foreground">Até 30 dias para trocar</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-2xl bg-accent/20 p-6 transition-all hover:bg-accent/30">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <CreditCard className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold">Até 10x sem juros</h4>
                  <p className="text-xs text-muted-foreground">No cartão de crédito</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section id="produtos" className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row">
              <div className="text-center md:text-left">
                <h2 className="font-heading text-4xl font-bold">Nossos Favoritos</h2>
                <p className="text-muted-foreground">Os calçados mais amados pelas nossas clientes</p>
              </div>
              <div className="flex gap-2">
                {["Todos", "Corrida", "Casual", "Treino"].map((cat) => (
                  <button 
                    key={cat}
                    className="rounded-full border px-4 py-1 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {PRODUCTS.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProductCard product={product} onAddToCart={addToCart} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Promotion Banner */}
        <section id="promocoes" className="container mx-auto px-4 pb-20">
          <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-primary-foreground lg:px-20">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="relative z-10 space-y-6">
                <h2 className="font-heading text-4xl font-bold lg:text-5xl">Ofertas da Semana</h2>
                <p className="text-lg opacity-90">
                  Aproveite descontos de até 30% em modelos selecionados. Conforto premium por um preço que cabe no seu bolso.
                </p>
                <button className="rounded-full bg-background px-8 py-3 font-bold text-primary transition-transform hover:scale-105">
                  Aproveitar Agora
                </button>
              </div>
              <div className="relative hidden lg:block">
                <motion.img 
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: -5 }}
                  viewport={{ once: true }}
                  src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=600&h=600" 
                  alt="Oferta Especial" 
                  className="relative z-10 w-full rounded-2xl shadow-2xl"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
              </div>
            </div>
            <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-20 left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          </div>
        </section>
      </main>

      <Footer />
      
      <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
      />

      <WhatsAppButton />
    </div>
  );
}
