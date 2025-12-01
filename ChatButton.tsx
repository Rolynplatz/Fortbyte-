import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChatDialog } from "./ChatDialog";

export const ChatButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-gradient-pink-orange shadow-glow-pink hover:shadow-glow-purple hover:scale-110 transition-all duration-300 animate-pulse-slow z-50"
        size="icon"
      >
        <MessageCircle className="w-7 h-7" />
      </Button>
      
      <ChatDialog open={open} onOpenChange={setOpen} />
    </>
  );
};
