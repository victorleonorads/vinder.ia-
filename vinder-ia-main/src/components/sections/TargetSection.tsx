import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
const TargetSection = () => {
  const forYou = ["Você quer ajuda da tecnologia para melhorar o atendimento sem perder a humanização", "Precisa qualificar melhor os leads antes de passar para vendas", "Quer ter controle total sobre as métricas de conversão", "Busca uma solução que se adapta ao seu negócio específico", "Está disposto a investir em tecnologia para crescer", "Se você tem clínica (odontológica, estética, médica veterinária) ou escritório (advocacia, arquitetura, imobiliária)"];
  const notForYou = ["Você quer uma solução 100% gratuita", "Prefere fazer tudo manualmente", "Não tem interesse em métricas e dados", "Você não valoriza praticidade e automação no dia a dia", "Não está disposto a investir na escalabilidade do seu negócio", "Prefere continuar testando soluções improvisadas em vez de ter um sistema confiável"];
  return <section id="target" className="py-20 px-4 sm:px-6 lg:px-8">
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
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            A <span style={{ color: "hsl(225, 73%, 57%)" }}>Vinder</span><span style={{ color: "hsl(18, 100%, 60%)" }}>.IA</span> é <span className="text-primary">Para Você?</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Nossa solução não foi feita para todos.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Para Você */}
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
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                <Check className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                ✅ <span className="text-green-400">Vinder é para você se...</span>
              </h3>
            </div>

            <ul className="space-y-4">
              {forYou.map((item, index) => <motion.li key={index} initial={{
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
            }} className="flex items-start gap-3 text-white/80">
                  <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>)}
            </ul>
          </motion.div>

          {/* Não é Para Você */}
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
        }} className="glass-card rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center">
                <X className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                ❌ <span className="text-red-400">Não é para você se...</span>
              </h3>
            </div>

            <ul className="space-y-4">
              {notForYou.map((item, index) => <motion.li key={index} initial={{
              opacity: 0,
              x: 20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.1,
              duration: 0.3
            }} className="flex items-start gap-3 text-white/80">
                  <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>)}
            </ul>
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
        delay: 0.4,
        duration: 0.6
      }} className="text-center mt-12">
          <p className="text-lg text-white/70 mb-6">Se você se identificou com o primeiro grupo, vamos conversar!</p>
        </motion.div>
      </div>
    </section>;
};
export default TargetSection;