import Icon from "@/components/ui/icon";

export default function Footer() {
  return (
    <footer className="bg-bank-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-bank-gold text-xl">🐵</span>
              <h3 className="text-xl font-bold">MonkeyBank</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Надёжный банк с 25-летней историей. Лицензия ЦБ РФ №1234.
            </p>
            <div className="flex space-x-4">
              <Icon name="Phone" size={20} className="text-bank-gold" />
              <span>8 800 100-00-00</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-bank-gold transition-colors">
                  Кредиты
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-bank-gold transition-colors">
                  Вклады
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-bank-gold transition-colors">
                  Карты
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-bank-gold transition-colors">
                  Переводы
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Офисы</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <Icon
                  name="MapPin"
                  size={16}
                  className="text-bank-gold mr-2 mt-1"
                />
                <span>Москва, ул. Тверская, 15</span>
              </li>
              <li className="flex items-start">
                <Icon
                  name="MapPin"
                  size={16}
                  className="text-bank-gold mr-2 mt-1"
                />
                <span>СПб, Невский пр., 28</span>
              </li>
              <li className="flex items-start">
                <Icon
                  name="MapPin"
                  size={16}
                  className="text-bank-gold mr-2 mt-1"
                />
                <span>Екатеринбург, ул. Ленина, 7</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Поддержка</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <Icon name="Clock" size={16} className="text-bank-gold mr-2" />
                <span>Круглосуточно</span>
              </li>
              <li className="flex items-center">
                <Icon name="Mail" size={16} className="text-bank-gold mr-2" />
                <span>info@monkeybank.ru</span>
              </li>
              <li className="flex items-center">
                <Icon
                  name="MessageCircle"
                  size={16}
                  className="text-bank-gold mr-2"
                />
                <span>Онлайн-чат</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; 2024 MonkeyBank. Все права защищены. Лицензия ЦБ РФ №1234.
          </p>
        </div>
      </div>
    </footer>
  );
}
