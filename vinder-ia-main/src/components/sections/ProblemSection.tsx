import { motion } from "framer-motion";
import { TrendingDown, UserX, Clock } from "lucide-react";
import vinderLogo from "@/assets/vinder-logo-new.png";

const ProblemSection = () => {
  const problems = [
    {
      icon: TrendingDown,
      title: "Clientes Desistem",
      description: "Demora na resposta faz clientes procurarem a concorrência",
      color: "from-red-500 to-red-600"
    },
    {
      icon: UserX,
      title: "Funcionários Vão Embora",
      description: "Sobrecarga no atendimento gera alta rotatividade",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Clock,
      title: "Atendimento Congestionado",
      description: "Muitas conversas simultâneas prejudicam a qualidade",
      color: "from-primary to-secondary"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Logo Watermark */}
      <motion.img 
        src={vinderLogo} 
        alt="Vinder.IA" 
        className="absolute bottom-10 left-10 w-40 h-40 opacity-5 hidden lg:block"
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.05 }}
        transition={{ duration: 1.5 }}
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Os <span className="text-primary">3 Problemas</span> que Matam Vendas
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Sua empresa perde dinheiro todos os dias por causa destes gargalos no atendimento
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass-card rounded-2xl p-8 text-center group hover:shadow-2xl transition-all duration-300"
            >
              <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${problem.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <problem.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                {problem.title}
              </h3>
              
              <p className="text-white/70 leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;