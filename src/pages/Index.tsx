import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold text-foreground">Портфолио</h1>
            <div className="flex gap-6">
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                Обо мне
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Контакты
              </a>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row items-center gap-12 animate-fade-in">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-accent flex-shrink-0">
              <img 
                src="https://cdn.poehali.dev/files/71931a9b-62ec-4d68-8c3d-f31973500cce.jpg" 
                alt="Фото профиля"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Профессионал своего дела
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                Специалист с фокусом на качество и результат
              </p>
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Связаться со мной
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-4xl animate-fade-in">
          <h3 className="text-3xl font-bold text-foreground mb-8">Обо мне</h3>
          <Card className="p-8 bg-card border-border">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Добро пожаловать в мое портфолио! Я профессионал, который стремится к совершенству в каждом проекте.
              </p>
              <p>
                Мой подход основан на внимании к деталям, системном мышлении и постоянном развитии. 
                Я верю, что качественная работа говорит сама за себя.
              </p>
              
              <div className="pt-6">
                <h4 className="text-xl font-semibold text-foreground mb-4">Ключевые навыки</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle2" size={20} className="text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Профессионализм</p>
                      <p className="text-sm">Высокий уровень ответственности</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle2" size={20} className="text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Внимание к деталям</p>
                      <p className="text-sm">Тщательный подход к работе</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle2" size={20} className="text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Коммуникация</p>
                      <p className="text-sm">Эффективное взаимодействие</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle2" size={20} className="text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Развитие</p>
                      <p className="text-sm">Постоянное обучение</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl animate-fade-in">
          <h3 className="text-3xl font-bold text-foreground mb-8">Контакты</h3>
          <Card className="p-8 bg-card border-border">
            <p className="text-muted-foreground mb-8">
              Свяжитесь со мной любым удобным способом. Я всегда открыт к новым проектам и возможностям сотрудничества.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a 
                href="mailto:contact@example.com" 
                className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-accent hover:bg-accent/5 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Icon name="Mail" size={24} className="text-accent" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p className="text-sm text-muted-foreground">contact@example.com</p>
                </div>
              </a>

              <a 
                href="tel:+79000000000" 
                className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-accent hover:bg-accent/5 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Icon name="Phone" size={24} className="text-accent" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Телефон</p>
                  <p className="text-sm text-muted-foreground">+7 (900) 000-00-00</p>
                </div>
              </a>

              <a 
                href="https://t.me/username" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-accent hover:bg-accent/5 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Icon name="Send" size={24} className="text-accent" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Telegram</p>
                  <p className="text-sm text-muted-foreground">@username</p>
                </div>
              </a>

              <a 
                href="https://linkedin.com/in/username" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-accent hover:bg-accent/5 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Icon name="Linkedin" size={24} className="text-accent" />
                </div>
                <div>
                  <p className="font-medium text-foreground">LinkedIn</p>
                  <p className="text-sm text-muted-foreground">linkedin.com/in/username</p>
                </div>
              </a>
            </div>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto max-w-4xl text-center text-sm text-muted-foreground">
          <p>© 2025 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
