import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-accent/30 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start gap-6"
          >
            <div className="inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
              Nova Coleção 2026
            </div>
            <h2 className="font-heading text-5xl font-bold leading-tight lg:text-7xl">
              Conforto e estilo para seu <span className="text-primary italic">dia a dia</span>
            </h2>
            <p className="max-w-md text-lg text-muted-foreground">
              Descubra a combinação perfeita entre performance esportiva e design feminino. Sinta a leveza em cada passo.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full px-8 text-lg shadow-lg shadow-primary/20">
                Ver Coleção
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 text-lg">
                Saiba Mais
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -left-4 -top-4 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-4 -right-4 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
            <img 
              src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&q=80&w=800&h=800" 
              alt="Calçado Esportivo Feminino" 
              className="relative z-10 rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
