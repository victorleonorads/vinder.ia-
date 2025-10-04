import { motion } from "framer-motion";
import { Sparkles, HeadphonesIcon, Zap } from "lucide-react";
import WhatsAppButton from "../WhatsAppButton";
import vinderLogo from "@/assets/vinder-logo-new.png";

const TestDriveSection = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
      </div>

      {/* Logo watermarks */}
      <motion.img
        src={vinderLogo}
        alt=""
        className="absolute top-10 right-10 w-24 h-24 opacity-5"
        initial={{ opacity: 0, rotate: -10 }}
        whileInView={{ opacity: 0.05, rotate: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />
      <motion.img
        src={vinderLogo}
        alt=""
        className="absolute bottom-20 left-10 w-32 h-32 opacity-5"
        initial={{ opacity: 0, rotate: 10 }}
        whileInView={{ opacity: 0.05, rotate: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Oferta Especial</span>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Teste <span className="text-primary">Grátis</span> por 7 Dias
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
              Com Suporte Dedicado
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Durante todo o período de teste, nossa equipe estará ao seu lado para 
            configurar e otimizar seu agente de IA. Garantimos que você aproveite 
            ao máximo a plataforma desde o primeiro dia.
          </motion.p>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <motion.div
              className="glass-card p-6 rounded-xl text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 text-foreground">Configuração Rápida</h3>
              <p className="text-sm text-muted-foreground">
                Seu agente pronto para atender em minutos
              </p>
            </motion.div>

            <motion.div
              className="glass-card p-6 rounded-xl text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeadphonesIcon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2 text-foreground">Suporte Ativo</h3>
              <p className="text-sm text-muted-foreground">
                Ajuda especializada durante todo o teste
              </p>
            </motion.div>

            <motion.div
              className="glass-card p-6 rounded-xl text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 text-foreground">Zero Compromisso</h3>
              <p className="text-sm text-muted-foreground">
                Cancele quando quiser, sem burocracia
              </p>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <WhatsAppButton 
              size="lg"
              className="text-lg px-8 py-6 shadow-2xl hover:scale-105 transition-transform"
            >
              Começar Teste Gratuito Agora
            </WhatsAppButton>
          </motion.div>

          {/* Trust Badge */}
          <motion.p
            className="text-center text-sm text-muted-foreground mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
          >
            ✓ Sem cartão de crédito • ✓ Configuração guiada • ✓ Suporte em português
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default TestDriveSection;
