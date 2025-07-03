import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-bank-navy to-slate-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">
            Надёжный банк для вашего будущего
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Более 25 лет на рынке банковских услуг. Доверие миллионов клиентов
            по всей России.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-bank-gold hover:bg-yellow-600 text-bank-navy font-semibold"
            >
              <Icon name="CreditCard" size={20} className="mr-2" />
              Открыть счёт
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-bank-navy"
            >
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать кредит
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-bank-gold mb-2">
                <Icon name="Shield" size={32} className="mx-auto" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Безопасность</h3>
              <p className="text-gray-300">
                Защита средств клиентов гарантирована государством
              </p>
            </div>

            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-bank-gold mb-2">
                <Icon name="Clock" size={32} className="mx-auto" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Быстро</h3>
              <p className="text-gray-300">
                Мгновенные переводы и быстрое рассмотрение заявок
              </p>
            </div>

            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-bank-gold mb-2">
                <Icon name="Users" size={32} className="mx-auto" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Поддержка</h3>
              <p className="text-gray-300">
                Круглосуточная поддержка клиентов 24/7
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
