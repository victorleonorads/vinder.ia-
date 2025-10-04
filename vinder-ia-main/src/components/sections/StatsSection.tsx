import { motion } from "framer-motion";

const StatsSection = () => {
  const stats = [
    {
      number: "92%",
      text: "das empresas perdem vendas por demora no WhatsApp",
      delay: 0
    },
    {
      number: "79%",
      text: "dos clientes pesquisam em mais de uma empresa antes de decidir",
      delay: 0.2
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Os Dados Não Mentem
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: stat.delay, duration: 0.6 }}
              className="glass-card rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
                {stat.number}
              </div>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                {stat.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;