import { Card } from "@/components/ui/card";
import { 
  Wrench, 
  Car, 
  Settings, 
  Battery, 
  Gauge,
  Phone,
  MapPin,
  Clock,
  Droplets
} from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import ContactButton from "@/components/ContactButton";

const Index = () => {
  const phoneNumber = "89954205373";
  
  return (
    <div className="min-h-screen bg-background">
      {/* Шапка */}
      <header className="bg-primary text-primary-foreground p-6">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold">Ремонт автомобилей</h1>
          <p className="text-xl opacity-90 mt-2">Качественное обслуживание вашего авто</p>
        </div>
      </header>
      
      {/* Основное содержимое */}
      <main className="container mx-auto px-4 py-10">
        <div className="grid gap-10">
          {/* Контактная карточка */}
          <Card className="p-6 bg-white shadow-lg border-none">
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
              <div className="flex-1">
                <h2 className="text-2xl font-bold">Алексей</h2>
                <p className="text-lg font-medium text-primary mt-1">{phoneNumber}</p>
                
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-accent" />
                    <span>Звоните в любое время</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-accent" />
                    <span>Выезд на место поломки</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-accent" />
                    <span>Быстрое и качественное обслуживание</span>
                  </div>
                </div>
              </div>
              
              <ContactButton phoneNumber={phoneNumber} className="w-full md:w-auto" />
            </div>
          </Card>
          
          {/* Услуги */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Наши услуги</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <ServiceCard 
                icon={Engine}
                title="Диагностика двигателя" 
                description="Выявление и устранение неисправностей двигателя с помощью современного оборудования"
              />
              <ServiceCard 
                icon={Wrench}
                title="Ремонт ходовой части" 
                description="Замена амортизаторов, пружин, рычагов и других элементов подвески"
              />
              <ServiceCard 
                icon={Battery}
                title="Автоэлектрика" 
                description="Диагностика и ремонт электрооборудования вашего автомобиля"
              />
              <ServiceCard 
                icon={Droplets}
                title="Замена масла и фильтров" 
                description="Регулярное техническое обслуживание для продления срока службы автомобиля"
              />
              <ServiceCard 
                icon={Gauge}
                title="Компьютерная диагностика" 
                description="Выявление ошибок и неисправностей электронных систем"
              />
              <ServiceCard 
                icon={Settings}
                title="Слесарные работы" 
                description="Профессиональный ремонт любой сложности с гарантией качества"
              />
            </div>
          </div>
          
          {/* Преимущества */}
          <div className="bg-muted p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Почему выбирают нас</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Только качественные запчасти и материалы</li>
              <li>Опыт работы более 10 лет</li>
              <li>Гарантия на все виды работ</li>
              <li>Разумные цены</li>
              <li>Индивидуальный подход к каждому клиенту</li>
            </ul>
          </div>
          
          {/* Нижняя контактная карточка */}
          <div className="text-center py-6">
            <h2 className="text-2xl font-bold mb-4">Нужна помощь с автомобилем?</h2>
            <p className="text-lg mb-6">Позвоните прямо сейчас!</p>
            <ContactButton phoneNumber={phoneNumber} className="mx-auto" />
          </div>
        </div>
      </main>
      
      {/* Подвал */}
      <footer className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4 text-center">
          <p>© 2023 Ремонт автомобилей | Алексей</p>
          <p className="mt-2">
            <Phone className="inline-block mr-2 h-4 w-4" />
            {phoneNumber}
          </p>
        </div>
      </footer>
    </div>
  );
};

// Добавляем компонент Engine, так как его нет в lucide-react
const Engine = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M7 4v2"></path>
    <path d="M19 9h2v8h-2"></path>
    <path d="M9 20h8"></path>
    <path d="M11 16v4"></path>
    <path d="M15 16v4"></path>
    <path d="M5 8h4"></path>
    <path d="M5 12h4"></path>
    <path d="M5 16h4"></path>
    <path d="M17 8h-4v8h4"></path>
    <path d="M9 8V4"></path>
  </svg>
);

export default Index;
