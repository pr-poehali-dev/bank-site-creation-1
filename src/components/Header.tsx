import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Header() {
  return (
    <header className="bg-bank-navy text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Landmark" size={32} className="text-bank-gold" />
            <h1 className="text-2xl font-bold">БанкРуси</h1>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="#services"
              className="hover:text-bank-gold transition-colors"
            >
              Услуги
            </a>
            <a
              href="#credits"
              className="hover:text-bank-gold transition-colors"
            >
              Кредиты
            </a>
            <a
              href="#deposits"
              className="hover:text-bank-gold transition-colors"
            >
              Вклады
            </a>
            <a
              href="#contacts"
              className="hover:text-bank-gold transition-colors"
            >
              Контакты
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              className="bg-transparent border-bank-gold text-bank-gold hover:bg-bank-gold hover:text-bank-navy"
            >
              <Icon name="LogIn" size={16} className="mr-2" />
              Интернет-банк
            </Button>

            <Button className="md:hidden" variant="ghost">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
