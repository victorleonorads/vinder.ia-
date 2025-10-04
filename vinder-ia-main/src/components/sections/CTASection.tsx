import { motion } from "framer-motion";
import WhatsAppButton from "../WhatsAppButton";
import vinderLogo from "@/assets/vinder-logo-new.png";
const CTASection = () => {
  return <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse" style={{
        animationDelay: '1s'
      }}></div>
        {/* Logo Watermark */}
        <motion.img 
          src={vinderLogo} 
          alt="Vinder.IA" 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-5"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.05 }}
          transition={{ duration: 1 }}
        />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
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
      }} className="glass-card rounded-3xl p-12 space-y-8">
          <motion.h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight" initial={{
          opacity: 0,
          scale: 0.9
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.2,
          duration: 0.6
        }}>
            <span className="block text-white mb-4">Está pronto para um </span>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Atendimento Super-Humano
            </span>
            <span className="block text-white mt-4 my-[29px] py-[2px] px-0">que conquista clientes e aumenta resultados?</span>
          </motion.h2>

          <motion.p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed" initial={{
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
        }}>Não deixe mais nenhum cliente em aberto. Transforme seu WhatsApp em uma máquina de vendas que trabalha 24/7 com a Vinder.IA e facilite o crescimento da sua empresa.</motion.p>

          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.6,
          duration: 0.6
        }} className="flex flex-wrap items-center justify-center gap-8 text-white/70">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>⚡ Sem compromisso</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span>📞 30 minutos</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>🎯 Diagnóstico completo</span>
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.8,
          duration: 0.6
        }} className="pt-4">
            <WhatsAppButton size="lg" className="animate-glow text-lg px-12 py-6">
              Faça um teste Gratuito por 7 dias
            </WhatsAppButton>
          </motion.div>

        </motion.div>
      </div>
    </section>;
};
export default CTASection;