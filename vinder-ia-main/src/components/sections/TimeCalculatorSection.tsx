import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Calendar, TrendingUp, Sparkles } from "lucide-react";
import { Slider } from "@/components/ui/slider";

const TimeCalculatorSection = () => {
  const [messagesPerDay, setMessagesPerDay] = useState(50);

  // Cálculos baseados em 2 minutos por mensagem
  const minutesPerDay = messagesPerDay * 2;
  const hoursPerDay = minutesPerDay / 60;
  const hoursPerWeek = hoursPerDay * 7;
  const hoursPerMonth = hoursPerDay * 30;

  const formatTime = (hours: number) => {
    if (hours < 1) {
      return `${Math.round(hours * 60)} minutos`;
    }
    const h = Math.floor(hours);
    const m = Math.round((hours - h) * 60);
    return m > 0 ? `${h}h ${m}min` : `${h}h`;
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Calculadora de Economia</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Descubra o tempo que sua empresa{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              perde todos os dias
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A Vinder.IA responde automaticamente pelo WhatsApp e devolve horas preciosas 
            para você focar no que importa.
          </p>
        </motion.div>

        {/* Interactive Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card rounded-3xl p-8 md:p-12"
        >
          {/* Slider Input */}
          <div className="mb-12">
            <label className="block text-center mb-6">
              <span className="text-lg font-medium text-foreground mb-2 block">
                Quantas mensagens você recebe por dia no WhatsApp?
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={messagesPerDay}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                >
                  {messagesPerDay}
                </motion.span>
              </AnimatePresence>
              <span className="text-muted-foreground block mt-2">mensagens/dia</span>
            </label>
            
            <Slider
              value={[messagesPerDay]}
              onValueChange={(value) => setMessagesPerDay(value[0])}
              min={10}
              max={500}
              step={10}
              className="w-full max-w-2xl mx-auto"
            />
            
            <div className="flex justify-between text-sm text-muted-foreground mt-2 max-w-2xl mx-auto">
              <span>10</span>
              <span>500</span>
            </div>
          </div>

          {/* Results Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={`day-${messagesPerDay}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-background/50 backdrop-blur-sm rounded-2xl p-6 text-center border border-border/50"
              >
                <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground mb-2">
                  {formatTime(hoursPerDay)}
                </div>
                <div className="text-sm text-muted-foreground">por dia</div>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={`week-${messagesPerDay}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-background/50 backdrop-blur-sm rounded-2xl p-6 text-center border border-border/50"
              >
                <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground mb-2">
                  {formatTime(hoursPerWeek)}
                </div>
                <div className="text-sm text-muted-foreground">por semana</div>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={`month-${messagesPerDay}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="bg-background/50 backdrop-blur-sm rounded-2xl p-6 text-center border border-border/50"
              >
                <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground mb-2">
                  {formatTime(hoursPerMonth)}
                </div>
                <div className="text-sm text-muted-foreground">por mês</div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Highlight Result */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`highlight-${messagesPerDay}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-2xl p-8 text-center border border-primary/30"
            >
              <p className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                Você pode estar perdendo até{" "}
                <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {Math.round(hoursPerMonth)} horas por mês
                </span>
                !
              </p>
              <p className="text-lg text-muted-foreground mt-4">
                Com a Vinder.IA, todo esse tempo volta para o crescimento do seu negócio 🚀
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Additional Info */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-sm text-muted-foreground mt-8"
        >
          * Cálculo baseado em média de 2 minutos por mensagem para atendimento manual
        </motion.p>
      </div>
    </section>
  );
};

export default TimeCalculatorSection;