import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

interface ContactButtonProps {
  phoneNumber: string;
  className?: string;
}

const ContactButton = ({ phoneNumber, className = "" }: ContactButtonProps) => {
  const formattedNumber = phoneNumber.replace(/[^0-9]/g, "");
  
  return (
    <Button 
      className={`font-semibold text-lg ${className}`}
      size="lg"
      onClick={() => window.location.href = `tel:${formattedNumber}`}
    >
      <Phone className="mr-2 h-5 w-5" />
      Позвонить
    </Button>
  );
};

export default ContactButton;
