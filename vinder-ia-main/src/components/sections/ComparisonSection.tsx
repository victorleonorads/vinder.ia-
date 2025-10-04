import { motion } from "framer-motion";
import { Check, X, Zap } from "lucide-react";
const ComparisonSection = () => {
  const comparisons = [{
    feature: "Qualificação Automática de Leads",
    others: false,
    chatbots: false,
    vinder: true
  }, {
    feature: "IA que Aprende com Seu Negócio",
    others: false,
    chatbots: false,
    vinder: true
  }, {
    feature: "Resposta em Tempo Real 24/7",
    others: false,
    chatbots: true,
    vinder: true
  }, {
    feature: "CRM Integrado",
    others: true,
    chatbots: false,
    vinder: true
  }, {
    feature: "Remarketing Automático",
    others: false,
    chatbots: false,
    vinder: true
  }, {
    feature: "Análise de Sentimento",
    others: false,
    chatbots: false,
    vinder: true
  }, {
    feature: "Métricas de Conversão",
    others: true,
    chatbots: false,
    vinder: true
  }, {
    feature: "Facilidade de Uso",
    others: false,
    chatbots: true,
    vinder: true
  }, {
    feature: "Editor de Prompt Avançado",
    others: false,
    chatbots: false,
    vinder: true
  }];
  return <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
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
            Por que Escolher a <span className="text-primary">Vinder.IA?</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Compare nossa solução com outras alternativas do mercado
          </p>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        scale: 0.95
      }} whileInView={{
        opacity: 1,
        scale: 1
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="glass-card rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-4 gap-4 p-6 bg-gradient-to-r from-primary/20 to-secondary/20 border-b border-white/10">
            <div className="text-white font-semibold">Recursos</div>
            <div className="text-center text-white/70">Outros CRMs</div>
            <div className="text-center text-white/70">Chatbots</div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                <span className="text-primary font-bold">Vinder.IA</span>
              </div>
            </div>
          </div>

          {/* Comparison Rows */}
          <div className="divide-y divide-white/5">
            {comparisons.map((comparison, index) => <motion.div key={index} initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1,
            duration: 0.3
          }} className="grid grid-cols-4 gap-4 p-6 hover:bg-white/5 transition-colors">
                <div className="text-white/90 font-medium">
                  {comparison.feature}
                </div>
                <div className="text-center">
                  {comparison.others ? <Check className="w-5 h-5 text-green-400 mx-auto" /> : <X className="w-5 h-5 text-red-400 mx-auto" />}
                </div>
                <div className="text-center">
                  {comparison.chatbots ? <Check className="w-5 h-5 text-green-400 mx-auto" /> : <X className="w-5 h-5 text-red-400 mx-auto" />}
                </div>
                <div className="text-center">
                  <Check className="w-5 h-5 text-primary mx-auto" />
                </div>
              </motion.div>)}
          </div>
        </motion.div>
      </div>
    </section>;
};
export default ComparisonSection;