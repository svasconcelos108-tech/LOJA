import { Product } from "./types";

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Tênis Soft Run Rosa",
    price: 189.90,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=600&h=600",
    description: "Conforto extremo para suas corridas matinais.",
    category: "Corrida",
    isPromotion: true,
    discountPrice: 149.90
  },
  {
    id: "2",
    name: "Sneaker Urban Mint",
    price: 159.90,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=600&h=600",
    description: "Estilo casual com toque esportivo para o dia a dia.",
    category: "Casual"
  },
  {
    id: "3",
    name: "Tênis Power Lift",
    price: 199.90,
    image: "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?auto=format&fit=crop&q=80&w=600&h=600",
    description: "Estabilidade e suporte para seus treinos de força.",
    category: "Treino",
    isPromotion: true,
    discountPrice: 179.90
  },
  {
    id: "4",
    name: "Air Flow Breeze",
    price: 129.90,
    image: "https://images.unsplash.com/photo-1560769129-d53b4710175b?auto=format&fit=crop&q=80&w=600&h=600",
    description: "Leveza e respirabilidade incomparáveis.",
    category: "Caminhada"
  },
  {
    id: "5",
    name: "Tênis Zen Yoga",
    price: 119.90,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=600&h=600",
    description: "Flexibilidade total para seus movimentos.",
    category: "Yoga"
  },
  {
    id: "6",
    name: "Speed Racer Pro",
    price: 179.90,
    image: "https://images.unsplash.com/photo-1512374382149-4332c6c02151?auto=format&fit=crop&q=80&w=600&h=600",
    description: "Alta performance para atletas exigentes.",
    category: "Corrida",
    isPromotion: true,
    discountPrice: 159.90
  }
];
