import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, Database, MessageSquare, FileText, 
  Users, BookOpen, Languages, CreditCard, Search 
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Solutions: React.FC = () => {
  const solutions = [
    {
      title: 'Custom AI-Powered Website',
      description: 'Intelligent, responsive websites tailored to healthcare providers with automated patient interactions.',
      icon: <Globe className="w-8 h-8 text-blue-500" />,
    },
    {
      title: 'Enhanced Patient Conversion',
      description: 'Smart conversion optimization tools to turn visitors into patients with personalized experiences.',
      icon: <Users className="w-8 h-8 text-blue-500" />,
    },
    {
      title: 'Real-Time Query Handling',
      description: 'Instant response system for patient inquiries with AI-powered chat support.',
      icon: <MessageSquare className="w-8 h-8 text-blue-500" />,
    },
    {
      title: 'Medical Report Analysis',
      description: 'Advanced AI analysis of medical reports for quick and accurate patient assessments.',
      icon: <FileText className="w-8 h-8 text-blue-500" />,
    },
    {
      title: 'Improved Lead Generation',
      description: 'Data-driven lead generation strategies to attract and engage potential patients.',
      icon: <Users className="w-8 h-8 text-blue-500" />,
    },
    {
      title: 'Comprehensive Healthcare Database',
      description: 'Extensive medical information database for accurate patient guidance and support.',
      icon: <Database className="w-8 h-8 text-blue-500" />,
    },
    {
      title: 'Multilingual Support',
      description: 'Breaking language barriers with comprehensive multilingual communication tools.',
      icon: <Languages className="w-8 h-8 text-blue-500" />,
    },
    {
      title: 'Seamless Payment Handling',
      description: 'Secure and efficient payment processing for medical services globally.',
      icon: <CreditCard className="w-8 h-8 text-blue-500" />,
    },
    {
      title: 'Marketing And SEO Support',
      description: 'Optimized digital presence with advanced SEO and marketing strategies.',
      icon: <Search className="w-8 h-8 text-blue-500" />,
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
    <section id="solutions" className="section-padding">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-16">
          <h2 className="section-title">Our Comprehensive Solutions</h2>
          <p className="section-subtitle">
            Everything you need to build, grow, and manage your healthcare practice online.
          </p>
        </AnimatedSection>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="solution-card"
              whileHover={{ 
                y: -10,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                borderColor: '#3B82F6',
              }}
            >
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-blue-50 rounded-lg">
                  {solution.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{solution.title}</h3>
                  <p className="text-gray-600 text-sm">{solution.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;