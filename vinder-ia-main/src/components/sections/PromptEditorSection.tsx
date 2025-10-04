import { motion } from "framer-motion";
import { Workflow, Bot, Calendar, ShoppingBag, Wrench, Shield } from "lucide-react";
import vinderLogo from "@/assets/vinder-logo-new.png";

const PromptEditorSection = () => {
  const agents = [
    {
      icon: Shield,
      title: "Agente Supervisor",
      description: "Coordena e supervisiona todos os agentes especializados, garantindo respostas precisas e contextualizadas",
      color: "from-primary to-secondary"
    },
    {
      icon: Calendar,
      title: "Agente de Agendamentos",
      description: "Especialista em organizar consultas, reuniões e atendimentos de forma autônoma",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: ShoppingBag,
      title: "Agente de Produtos",
      description: "Conhece todo o catálogo e recomenda produtos de acordo com as necessidades do cliente",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Wrench,
      title: "Agente de Serviços",
      description: "Especializado em explicar e oferecer serviços personalizados",
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: Bot,
      title: "Agente Pré-Qualificador",
      description: "Identifica e qualifica leads antes de encaminhar para o time de vendas",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="prompt-editor" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Logo Watermark */}
      <motion.img 
        src={vinderLogo} 
        alt="Vinder.IA" 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-5 hidden lg:block"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.05 }}
        transition={{ duration: 2 }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 glass-card rounded-full">
            <Workflow className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold">Editor de Prompt Avançado</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Múltiplos Agentes <span className="text-primary">Especializados</span>
          </h2>
          
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Configure agentes de IA especializados para cada função específica do seu negócio. 
            Cada agente é treinado para uma tarefa específica, supervisionado por um agente central 
            que garante a qualidade e coerência das respostas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass-card rounded-2xl p-6 group hover:shadow-2xl transition-all duration-300"
            >
              <div className={`w-14 h-14 mb-4 rounded-xl bg-gradient-to-r ${agent.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <agent.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                {agent.title}
              </h3>
              
              <p className="text-white/70 text-sm leading-relaxed">
                {agent.description}
              </p>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="glass-card rounded-xl p-6 max-w-3xl mx-auto">
            <p className="text-white/80 leading-relaxed">
              <span className="text-primary font-semibold">Personalize cada agente</span> com 
              prompts específicos, defina comportamentos, respostas e estratégias únicas. 
              O editor avançado permite criar uma experiência de atendimento verdadeiramente customizada 
              para o seu negócio.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PromptEditorSection;
