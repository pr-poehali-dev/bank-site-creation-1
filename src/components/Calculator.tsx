import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

export default function Calculator() {
  const [amount, setAmount] = useState(500000);
  const [term, setTerm] = useState(24);
  const [rate] = useState(8.9);

  const monthlyRate = rate / 100 / 12;
  const monthlyPayment = Math.round(
    (amount * monthlyRate * Math.pow(1 + monthlyRate, term)) /
      (Math.pow(1 + monthlyRate, term) - 1),
  );
  const totalPayment = monthlyPayment * term;
  const overpayment = totalPayment - amount;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-bank-navy mb-4">
            Кредитный калькулятор
          </h2>
          <p className="text-xl text-bank-text-gray">
            Рассчитайте ежемесячный платёж по кредиту
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-bank-navy">
                  <Icon name="Calculator" size={24} className="mr-2" />
                  Параметры кредита
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="amount">
                    Сумма кредита: {amount.toLocaleString()} ₽
                  </Label>
                  <Input
                    id="amount"
                    type="range"
                    min="50000"
                    max="5000000"
                    step="50000"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="mt-2"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>50 000 ₽</span>
                    <span>5 000 000 ₽</span>
                  </div>
                </div>

                <div>
                  <Label htmlFor="term">Срок кредита: {term} мес.</Label>
                  <Input
                    id="term"
                    type="range"
                    min="12"
                    max="84"
                    step="12"
                    value={term}
                    onChange={(e) => setTerm(Number(e.target.value))}
                    className="mt-2"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>1 год</span>
                    <span>7 лет</span>
                  </div>
                </div>

                <div>
                  <Label>Процентная ставка: {rate}% годовых</Label>
                  <p className="text-sm text-gray-500 mt-1">
                    Базовая ставка для всех клиентов
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-bank-navy">
                  <Icon name="Receipt" size={24} className="mr-2" />
                  Результат расчёта
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-bank-light-gray rounded-lg p-4">
                  <div className="text-center">
                    <p className="text-bank-text-gray mb-2">
                      Ежемесячный платёж
                    </p>
                    <p className="text-3xl font-bold text-bank-navy">
                      {monthlyPayment.toLocaleString()} ₽
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-bank-text-gray mb-1">Общая выплата</p>
                    <p className="text-xl font-semibold text-bank-navy">
                      {totalPayment.toLocaleString()} ₽
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-bank-text-gray mb-1">Переплата</p>
                    <p className="text-xl font-semibold text-orange-600">
                      {overpayment.toLocaleString()} ₽
                    </p>
                  </div>
                </div>

                <Button className="w-full bg-bank-gold hover:bg-yellow-600 text-bank-navy font-semibold">
                  <Icon name="Send" size={20} className="mr-2" />
                  Подать заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
