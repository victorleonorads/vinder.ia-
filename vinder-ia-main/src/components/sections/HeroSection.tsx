import { motion } from "framer-motion";
import WhatsAppButton from "../WhatsAppButton";
import WhatsAppDemo from "../WhatsAppDemo";
const HeroSection = () => {
  return <section id="home" className="min-h-screen flex items-center justify-center pt-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-secondary/20 to-transparent rounded-full blur-3xl animate-pulse" style={{
        animationDelay: '1s'
      }}></div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="space-y-8">
          <motion.h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight" initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          delay: 0.2,
          duration: 0.6
        }}>
            <span className="block text-white mb-4">O cliente pergunta preço</span>
            <span className="animate-[disappear_3s_ease-in-out_infinite] text-secondary">
              e some?
            </span>
          </motion.h1>

          <motion.p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.4,
          duration: 0.6
        }}>
            Seu serviço vale R$ 5.000, mas o WhatsApp da empresa está 
            <span className="text-primary font-semibold"> transmitindo amadorismo...</span>
          </motion.p>

          <motion.div className="pt-8" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.6,
          duration: 0.6
        }}>
            <WhatsAppButton size="lg" className="animate-glow">
              Faça um teste Gratuito por 7 dias
            </WhatsAppButton>
          </motion.div>

          <motion.div className="pt-4 text-sm text-white/60" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.8,
          duration: 0.6
        }}>
            ⚡ Sem compromisso • 📞 30 minutos • 🎯 Diagnóstico completo
          </motion.div>

          {/* WhatsApp Demo */}
          <motion.div className="pt-16" initial={{
          opacity: 0,
          y: 50
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 1.2,
          duration: 0.8
        }}>
            <WhatsAppDemo />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div className="absolute bottom-8 left-1/2 transform -translate-x-1/2" initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1,
      duration: 0.6
    }}>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div className="w-1 h-3 bg-primary rounded-full mt-2" animate={{
          y: [0, 12, 0]
        }} transition={{
          duration: 1.5,
          repeat: Infinity
        }} />
        </div>
      </motion.div>
    </section>;
};
export default HeroSection;