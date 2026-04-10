import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "5511999999999";
  const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os calçados da Passo Feminino.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <Button 
        size="icon" 
        className="h-14 w-14 rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#128C7E] transition-all hover:scale-110"
      >
        <MessageCircle className="h-8 w-8" />
      </Button>
    </a>
  );
}
