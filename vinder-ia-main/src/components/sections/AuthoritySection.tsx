import { motion } from "framer-motion";
import { Award, TrendingUp, Users, Target } from "lucide-react";

const AuthoritySection = () => {
  const achievements = [
    {
      icon: Award,
      title: "4 Promoções",
      description: "Crescimento acelerado em vendas"
    },
    {
      icon: TrendingUp,
      title: "G4 Educação",
      description: "Experiência em grande escala"
    },
    {
      icon: Users,
      title: "Liderança",
      description: "Gestão de equipes de alto desempenho"
    },
    {
      icon: Target,
      title: "Resultados",
      description: "Foco em performance e eficiência"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-primary/10 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Quem Está Por Trás da <span className="text-primary">Vinder</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Experiência Real em Vendas
              </h3>
              <p className="text-white/80 leading-relaxed mb-6">
                Nossa fundadora construiu sua carreira em vendas no G4 Educação, onde conquistou 
                <span className="text-primary font-semibold"> 4 promoções consecutivas</span> e desenvolveu 
                métodos únicos para transformar atendimento em resultados concretos.
              </p>
              <p className="text-white/70 leading-relaxed">
                Essa experiência real no mundo das vendas é o que torna a Vinder diferente: 
                sabemos exatamente onde estão os gargalos e como resolvê-los.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                className="glass-card rounded-xl p-6 text-center group"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {achievement.title}
                </h4>
                <p className="text-sm text-white/70">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;