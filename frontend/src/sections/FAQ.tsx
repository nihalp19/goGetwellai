import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <motion.div 
      className="border-b border-gray-200 py-5"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={onClick}
      >
        <h3 className="text-lg font-medium">{question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="h-5 w-5 text-blue-500" />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-gray-600">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs = [
    {
      question: "What is gogetwell.ai?",
      answer: "GoGetWell.ai is an AI-powered healthcare platform designed for healthcare facilitators to modernize their operations, attract more patients, and provide seamless care through intelligent automation."
    },
    {
      question: "What is the AI Front Office for Healthcare Agents?",
      answer: "The AI Front Office is our flagship solution that serves as a digital assistant for healthcare facilitators. It handles patient inquiries, manages appointments, processes medical data, and provides 24/7 support - all powered by advanced AI technology."
    },
    {
      question: "How does the AI Agent assist me in my healthcare business?",
      answer: "Our AI Agent automates routine tasks like answering common questions, screening patients, scheduling appointments, and providing medical information. This frees up your time to focus on delivering personalized care while ensuring patients receive prompt responses at any time."
    },
    {
      question: "Can I customize the website for my healthcare services?",
      answer: "Absolutely! Our platform offers extensive customization options to match your brand identity and specific healthcare services. You can personalize the look and feel, add your services, integrate your patient management systems, and tailor the AI responses to your specific medical specialty."
    },
    {
      question: "How does this platform support independent healthcare facilitators like me?",
      answer: "Our platform is specifically designed for independent healthcare facilitators and small medical tourism operators. It provides affordable, enterprise-grade tools that previously were only available to large hospitals, helping you compete effectively with bigger players in the industry."
    },
    {
      question: "How does the platform help me manage patient leads?",
      answer: "The platform captures and qualifies patient leads 24/7, nurtures them with personalized follow-ups, tracks their engagement, and provides analytics on conversion rates. This streamlined approach ensures no potential patient falls through the cracks."
    },
    {
      question: "Is it easy to integrate the platform with the hospitals I work with?",
      answer: "Yes, our platform is designed with integration in mind. It can connect with various hospital management systems, EHRs, and booking platforms through our API. We also offer custom integration services if you work with specific proprietary systems."
    },
    {
      question: "Is the platform secure and compliant with healthcare regulations?",
      answer: "Security and compliance are our top priorities. The platform is fully HIPAA compliant, implements end-to-end encryption for all patient data, and follows international healthcare data protection standards to ensure patient information remains secure and private."
    },
    {
      question: "How quickly can I get started with the platform?",
      answer: "Most facilitators can get their AI-powered website up and running within 48 hours. Our guided setup process and templates specific to healthcare facilitation make it quick and easy to launch your digital presence."
    },
    {
      question: "What kind of customer support is available if I need help?",
      answer: "We provide comprehensive support including 24/7 chat assistance, detailed documentation, video tutorials, and personalized onboarding sessions. Premium plans include dedicated support managers familiar with the healthcare facilitation industry."
    },
    {
      question: "How does the platform help me attract more patients?",
      answer: "The platform includes built-in SEO tools, content generation for medical topics, multilingual support to reach international patients, and analytics to optimize your patient acquisition strategy. It also enables you to showcase success stories and testimonials effectively."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-16">
          <h2 className="section-title">Frequently Asked Questions</h2>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;