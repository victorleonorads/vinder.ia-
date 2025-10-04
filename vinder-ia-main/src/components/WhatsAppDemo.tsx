import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Phone, Video, MoreHorizontal, Smile, Paperclip, Mic } from "lucide-react";

interface Message {
  id: number;
  text: string;
  time: string;
  sent: boolean;
  read?: boolean;
  delivered?: boolean;
}

const WhatsAppDemo = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [showFinalMessage, setShowFinalMessage] = useState(false);

  const conversation = [
    {
      delay: 0,
      message: {
        id: 1,
        text: "Olá, quero saber mais como funciona e quanto custa",
        time: "14:32",
        sent: true,
        delivered: true,
        read: true
      }
    },
    {
      delay: 3000,
      typing: true,
      typingDuration: 2000
    },
    {
      delay: 5000,
      message: {
        id: 2,
        text: "Oi! Desculpe a demora. Vou te explicar, só um minuto 😊",
        time: "16:47",
        sent: false,
        delivered: true,
        read: true
      }
    },
    {
      delay: 10000,
      showFinal: true
    }
  ];

  useEffect(() => {
    let timeouts: NodeJS.Timeout[] = [];

    conversation.forEach((step, index) => {
      const timeout = setTimeout(() => {
        if (step.typing) {
          setIsTyping(true);
          const typingTimeout = setTimeout(() => {
            setIsTyping(false);
          }, step.typingDuration || 1000);
          timeouts.push(typingTimeout);
        } else if (step.message) {
          setMessages(prev => [...prev, step.message!]);
          setCurrentStep(index);
        } else if (step.showFinal) {
          setShowFinalMessage(true);
        }
      }, step.delay);
      
      timeouts.push(timeout);
    });

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, []);

  const MessageBubble = ({ message }: { message: Message }) => (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`flex ${message.sent ? 'justify-end' : 'justify-start'} mb-2`}
    >
      <div className={`max-w-[75%] relative ${message.sent ? 'order-1' : 'order-2'}`}>
        <div
          className={`px-3 py-2 rounded-2xl text-sm leading-relaxed ${
            message.sent
              ? 'bg-[#dcf8c6] text-gray-800 rounded-br-md'
              : 'bg-white text-gray-800 rounded-bl-md shadow-sm'
          }`}
        >
          {message.text}
          <div className={`flex items-center gap-1 mt-1 ${message.sent ? 'justify-end' : 'justify-start'}`}>
            <span className="text-xs text-gray-500">{message.time}</span>
            {message.sent && (
              <div className="flex">
                <div className={`w-3 h-3 ${message.read ? 'text-blue-500' : 'text-gray-400'}`}>
                  <svg viewBox="0 0 16 15" className="w-full h-full fill-current">
                    <path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l3.61 3.463c.143.14.361.125.484-.033L10.91 3.879a.366.366 0 0 0-.064-.512z"/>
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );

  const TypingIndicator = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex justify-start mb-2"
    >
      <div className="bg-white rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
        <div className="flex space-x-1">
          <motion.div
            className="w-2 h-2 bg-gray-400 rounded-full"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
          />
          <motion.div
            className="w-2 h-2 bg-gray-400 rounded-full"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
          />
          <motion.div
            className="w-2 h-2 bg-gray-400 rounded-full"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
          />
        </div>
      </div>
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-sm mx-auto"
    >
      {/* Phone Mockup */}
      <div className="relative bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
        {/* Phone Frame */}
        <div className="bg-black rounded-[2rem] overflow-hidden relative">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
          
          {/* WhatsApp Interface */}
          <div className="bg-[#f0f0f0] h-[600px] flex flex-col">
            {/* Header */}
            <div className="bg-[#075e54] px-4 py-3 pt-8 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 text-xs font-semibold">E</span>
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Empresa</h3>
                  <p className="text-xs text-green-300">online</p>
                </div>
              </div>
              <div className="flex gap-6">
                <Video className="w-5 h-5" />
                <Phone className="w-5 h-5" />
                <MoreHorizontal className="w-5 h-5" />
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-3 bg-[#e5ddd5] overflow-y-auto">
              <AnimatePresence>
                {messages.map((message) => (
                  <MessageBubble key={message.id} message={message} />
                ))}
                {isTyping && <TypingIndicator />}
              </AnimatePresence>
              
              {showFinalMessage && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="text-center mt-8"
                >
                  <p className="text-gray-500 text-sm italic">
                    Cliente não respondeu mais...
                  </p>
                  <div className="mt-4 p-3 bg-red-50 rounded-lg border-l-4 border-red-400">
                    <p className="text-red-700 text-xs font-medium">
                      💸 Cliente perdido por demora no atendimento
                    </p>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input Bar */}
            <div className="bg-[#f0f0f0] px-3 py-2 flex items-center gap-2">
              <Smile className="w-6 h-6 text-gray-500" />
              <div className="flex-1 bg-white rounded-full px-4 py-2">
                <span className="text-gray-400 text-sm">Mensagem</span>
              </div>
              <Paperclip className="w-6 h-6 text-gray-500" />
              <Mic className="w-6 h-6 text-gray-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Caption */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1, duration: 0.6 }}
        className="text-center mt-6"
      >
        <p className="text-white/80 text-sm">
          <span className="text-red-400 font-semibold">2h15min de demora = Cliente perdido</span>
        </p>
        <p className="text-white/60 text-xs mt-1">
          É isso que está travando o seu crescimento
        </p>
      </motion.div>
    </motion.div>
  );
};

export default WhatsAppDemo;