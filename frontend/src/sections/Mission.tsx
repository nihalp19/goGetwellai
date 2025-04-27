import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, TrendingUp } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Mission: React.FC = () => {
  const missionPoints = [
    {
      title: 'AI-Powered Solutions',
      description: 'Optimizing operations with advanced technology',
      icon: <Rocket className="w-6 h-6 text-blue-500" />,
    },
    {
      title: 'Growth Focus',
      description: 'Maximizing revenue and opportunities',
      icon: <TrendingUp className="w-6 h-6 text-blue-500" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -right-16 top-16 w-96 h-96 rounded-full bg-blue-100 opacity-50"></div>
      <div className="absolute -left-16 bottom-16 w-80 h-80 rounded-full bg-purple-100 opacity-50"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <img 
              src="https://images.pexels.com/photos/3957987/pexels-photo-3957987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Healthcare mission" 
              className="rounded-xl shadow-xl w-full"
            />
          </motion.div>
          
          <AnimatedSection className="order-1 lg:order-2">
            <h2 className="section-title">Our Mission</h2>
            <p className="text-gray-600 mb-8">
              Our mission is to simplify the complex medical tourism process by leveraging advanced 
              AI tools that optimize healthcare facilitators operations, maximize revenue opportunities, 
              and provide patients with personalized and stress-free treatment journeys.
            </p>
            <p className="text-gray-600 mb-8">
              We strive to become the leading platform for healthcare tourism management and digital transformation.
            </p>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {missionPoints.map((point, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="flex items-start p-4 bg-gray-50 rounded-lg shadow-sm"
                >
                  <div className="mr-4 p-2 bg-blue-100 rounded-lg">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{point.title}</h3>
                    <p className="text-gray-600">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Mission;