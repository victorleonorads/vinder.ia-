import { motion } from "framer-motion";
import { MessageSquare, TrendingUp, Heart } from "lucide-react";
import vinderLogo from "@/assets/vinder-logo-new.png";
const SolutionSection = () => {
  const steps = [{
    icon: MessageSquare,
    title: "Atendimento",
    description: "IA qualifica leads automaticamente 24/7",
    features: ["Resposta em segundos", "Qualificação inteligente", "Atendimento excelente desde o primeiro Oi"]
  }, {
    icon: TrendingUp,
    title: "Vendas",
    description: "Conversão otimizada com o humano - que tem mais tempo para negociar",
    features: ["Atendimento organizado", "Conversa inteligente com quem não respondeu", "Métricas em tempo real"]
  }, {
    icon: Heart,
    title: "Pós-venda",
    description: "Relacionamento que fideliza e gera indicações",
    features: ["Automações ilimitadas", "Remarketing personalizado", "Programa de indicações"]
  }];
  return <section id="solution" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Logo Watermark */}
      <motion.img 
        src={vinderLogo} 
        alt="Vinder.IA" 
        className="absolute top-20 right-10 w-48 h-48 opacity-5 hidden lg:block"
        initial={{ rotate: 0, opacity: 0 }}
        whileInView={{ rotate: 360, opacity: 0.05 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
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
            Atendimento <span className="text-primary">Super-Humano</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-4">CRM + IA que transforma seu WhatsApp em uma máquina de agendamentos e vendas</p>
          <div className="inline-block px-4 py-2 glass-card rounded-full text-sm text-primary font-semibold">
            3 Etapas Integradas
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.2,
          duration: 0.6
        }} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent z-10"></div>}

              <motion.div whileHover={{
            scale: 1.05,
            y: -10
          }} className="glass-card rounded-2xl p-8 text-center group hover:shadow-2xl transition-all duration-300 h-full">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-white/70 mb-6 leading-relaxed">
                  {step.description}
                </p>

                <ul className="space-y-2">
                  {step.features.map((feature, idx) => <li key={idx} className="text-sm text-white/60 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </li>)}
                </ul>
              </motion.div>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default SolutionSection;