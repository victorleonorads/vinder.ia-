
import { motion } from "framer-motion";
import { Brain, Zap, Repeat, Settings, Calendar, Globe } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "CRM Completo e Inteligente",
      description: "Centralize todos os seus contatos, leads e clientes em um só lugar. Automatize tarefas, organize seu fluxo de trabalho e tome decisões estratégicas com dados em tempo real",
      color: "from-purple-500 to-blue-500"
    },
    {
      icon: Brain,
      title: "IA que Qualifica",
      description: "Identifica automaticamente os leads mais promissores baseado no histórico de conversões da sua empresa",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Calendar,
      title: "Agendamentos Automáticos",
      description: "O agente de IA agenda consultas, reuniões e atendimentos de forma totalmente autônoma, organizando sua agenda 24/7",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Resposta Instantânea",
      description: "Sistema responde em segundos 24/7, mantendo o cliente engajado mesmo fora do horário comercial",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Repeat,
      title: "Remarketing e Pós-venda",
      description: "Recupera clientes que não fecharam e mantém relacionamento ativo para gerar novas oportunidades",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Settings,
      title: "Controle nas suas Mãos",
      description: "Dashboard intuitivo para acompanhar métricas, ajustar configurações e otimizar resultados",
      color: "from-primary to-secondary"
    },
    {
      icon: Globe,
      title: "Página de Agendamentos Online",
      description: "Tenha uma página de agendamentos online, sem precisar pagar por um site! Seus clientes podem agendar diretamente com acesso público 24/7",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ferramentas que <span className="text-primary">Revolucionam</span> seu Atendimento
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Tecnologia de ponta para transformar cada conversa em oportunidade de venda
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass-card rounded-2xl p-8 group hover:shadow-2xl transition-all duration-300"
            >
              <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-white/70 leading-relaxed">
                {feature.description}
              </p>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
