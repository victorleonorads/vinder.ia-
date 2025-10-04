import { motion } from "framer-motion";
import { TrendingUp, Shield, DollarSign } from "lucide-react";
import WhatsAppButton from "../WhatsAppButton";
const ROISection = () => {
  const guarantees = [{
    icon: Shield,
    title: "Sem Fidelidade",
    description: "Cancele quando quiser, sem multas ou burocracias"
  }, {
    icon: TrendingUp,
    title: "ROI Garantido",
    description: "Monitoramos seu retorno e otimizamos continuamente"
  }, {
    icon: DollarSign,
    title: "Pagamento Flexível",
    description: "Mensalidade fixa, sem surpresas no orçamento"
  }];
  return <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Investimento que se <span className="text-primary">Paga Sozinho</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="glass-card rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-white mb-6">
              Exemplo Real de ROI
            </h3>
            
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <p className="text-white/80 mb-2">
                  <span className="font-semibold text-white">Antes da Vinder.IA:</span>
                </p>
                <p className="text-white/70">
                  • 100 leads/mês → 15 vendas (15% conversão)<br />
                  • Ticket médio: R$ 3.000<br />
                  • Faturamento: R$ 45.000/mês
                </p>
              </div>

              <div className="border-l-4 border-green-400 pl-6">
                <p className="text-white/80 mb-2">
                  <span className="font-semibold text-white">Depois da Vinder.IA:</span>
                </p>
                <p className="text-white/70">
                  • 100 leads/mês → 22 vendas (22% conversão)<br />
                  • Ticket médio: R$ 3.000<br />
                  • Faturamento: R$ 66.000/mês
                </p>
              </div>

              <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl p-6 text-center">
                <p className="text-2xl font-bold text-primary mb-2">
                  +R$ 21.000/mês
                </p>
                <p className="text-white/80">
                  Aumento no faturamento apenas melhorando a conversão
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="space-y-6">
            {guarantees.map((guarantee, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1,
            duration: 0.3
          }} className="glass-card rounded-xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center flex-shrink-0">
                  <guarantee.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    {guarantee.title}
                  </h4>
                  <p className="text-white/70">
                    {guarantee.description}
                  </p>
                </div>
              </motion.div>)}
          </motion.div>
        </div>

        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center">
          <WhatsAppButton size="lg" className="animate-glow">
            Agendar Análise Gratuita Agora
          </WhatsAppButton>
          <p className="text-white/60 mt-4">
            ⚡ Sem compromisso • 📞 30 minutos • 🎯 Diagnóstico completo
          </p>
        </motion.div>
      </div>
    </section>;
};
export default ROISection;