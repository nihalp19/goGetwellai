import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Building, MessageCircle, TrendingUp, Users, Clock, Bot, MonitorSmartphone } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Features: React.FC = () => {
  const features = [
    {
      title: 'Online Website With AI Agent',
      description: 'Intelligent digital presence',
      icon: <Bot className="w-12 h-12 text-blue-500" />,
    },
    {
      title: 'Build Digital Business',
      description: 'Scale your operations',
      icon: <Building className="w-12 h-12 text-blue-500" />,
    },
    {
      title: 'Patient Conversation',
      description: 'Seamless communication',
      icon: <MessageCircle className="w-12 h-12 text-blue-500" />,
    },
    {
      title: 'Boost Revenue',
      description: 'Increase your earnings',
      icon: <TrendingUp className="w-12 h-12 text-blue-500" />,
    },
    {
      title: 'Lead Generation Support',
      description: 'Convert visitors to clients',
      icon: <Users className="w-12 h-12 text-blue-500" />,
    },
    {
      title: '24/7 Support for patient',
      description: 'Round-the-clock assistance',
      icon: <Clock className="w-12 h-12 text-blue-500" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="features" className="section-padding bg-gray-50">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-16">
          <h2 className="section-title">Our Key Features</h2>
          <p className="section-subtitle">
            Empower your healthcare facility with intelligent tools designed to enhance patient 
            engagement and operational efficiency.
          </p>
        </AnimatedSection>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="feature-card flex flex-col items-center text-center p-8"
            >
              <div className="mb-6 p-4 bg-blue-50 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <AnimatedSection 
          className="mt-16 p-8 bg-blue-600 rounded-2xl shadow-xl text-white text-center"
          delay={0.3}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold mb-2">Ready to transform your healthcare practice?</h3>
              <p>Start with our AI-powered platform today.</p>
            </div>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 btn"
            >
              Get Started Now
            </motion.a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Features;