import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Como a IA da Vinder aprende sobre meu negócio?",
      answer: "Nossa IA analiza seu histórico de conversas, identifica padrões de leads que convertem e se adapta ao seu estilo de comunicação. Em 30 dias, ela já conhece seu negócio melhor que um vendedor novo."
    },
    {
      question: "Posso personalizar as respostas automáticas?",
      answer: "Sim! Você tem controle total sobre as mensagens. A IA aprende com suas respostas e sugere melhorias, mas você sempre pode ajustar o tom e conteúdo para refletir a personalidade da sua marca."
    },
    {
      question: "A Vinder substitui minha equipe de vendas?",
      answer: "Não, ela potencializa sua equipe! A Vinder qualifica leads e agenda reuniões, permitindo que seus vendedores foquem apenas em prospects qualificados e tenham mais tempo para fechar negócios."
    },
    {
      question: "Quanto tempo demora para implementar?",
      answer: "A implementação básica leva de 24 a 48 horas. Em uma semana, todo o sistema está funcionando perfeitamente integrado ao seu WhatsApp Business e CRM."
    },
    {
      question: "Existe período de teste?",
      answer: "Oferecemos uma análise gratuita do seu atendimento atual e 30 dias de garantia incondicional. Se não ficar satisfeito, cancelamos sem questionamentos."
    },
    {
      question: "Como funciona a integração com WhatsApp Business?",
      answer: "A integração é feita via API oficial do WhatsApp Business. Suas conversas ficam no mesmo lugar, mas agora com superpoderes de IA para qualificação e automação inteligente."
    },
    {
      question: "Quais métricas posso acompanhar?",
      answer: "Taxa de conversão, tempo de resposta, origem dos leads, ROI por canal, pipeline de vendas, satisfação do cliente e muito mais. Tudo em dashboards intuitivos e em tempo real."
    },
    {
      question: "A Vinder funciona para qualquer tipo de negócio?",
      answer: "Nossa especialidade são clínicas, escritórios e empresas de serviços B2B. Temos templates específicos para diferentes segmentos e a IA se adapta às particularidades do seu setor."
    }
  ];

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Dúvidas <span className="text-primary">Frequentes</span>
          </h2>
          <p className="text-xl text-white/70">
            Esclarecemos as principais questões sobre a Vinder.IA
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl p-8"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-white/10 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="text-left text-white hover:text-primary transition-colors p-6 hover:no-underline">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-white/80 p-6 pt-0 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;