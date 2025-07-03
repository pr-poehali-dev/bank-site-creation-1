import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Services() {
  const services = [
    {
      title: "Кредиты",
      description: "Потребительские кредиты от 8.9% годовых",
      icon: "Banknote",
      details: ["До 5 млн рублей", "Срок до 7 лет", "Без залога"],
      color: "text-green-600",
    },
    {
      title: "Вклады",
      description: "Депозиты до 7.5% годовых",
      icon: "PiggyBank",
      details: [
        "Страхование АСВ",
        "Минимальная сумма 1000₽",
        "Пополнение в любое время",
      ],
      color: "text-blue-600",
    },
    {
      title: "Карты",
      description: "Дебетовые и кредитные карты",
      icon: "CreditCard",
      details: [
        "Бесплатное обслуживание",
        "Кэшбэк до 5%",
        "Бесконтактные платежи",
      ],
      color: "text-purple-600",
    },
    {
      title: "Переводы",
      description: "Быстрые и безопасные переводы",
      icon: "ArrowRightLeft",
      details: ["Мгновенные переводы", "Низкие комиссии", "По номеру телефона"],
      color: "text-orange-600",
    },
  ];

  return (
    <section id="services" className="py-16 bg-bank-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-bank-navy mb-4">
            Наши услуги
          </h2>
          <p className="text-xl text-bank-text-gray">
            Полный спектр банковских услуг для физических и юридических лиц
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="text-center">
                <div className={`mb-4 ${service.color}`}>
                  <Icon
                    name={service.icon as any}
                    size={48}
                    className="mx-auto"
                  />
                </div>
                <CardTitle className="text-bank-navy">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-bank-text-gray">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {service.details.map((detail, i) => (
                    <li
                      key={i}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <Icon
                        name="Check"
                        size={16}
                        className="mr-2 text-green-500"
                      />
                      {detail}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-bank-navy hover:bg-bank-navy/90">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
