import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, MessageSquare } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Challenges: React.FC = () => {
  const challengeSolutions = [
    {
      title: 'Efficient Operations',
      description: 'Streamlined booking and management',
      icon: <ClipboardCheck className="w-6 h-6 text-blue-500" />,
    },
    {
      title: 'Enhanced Support',
      description: 'Improved patient communication',
      icon: <MessageSquare className="w-6 h-6 text-blue-500" />,
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <h2 className="section-title">The Challenges We Solve</h2>
            <p className="text-gray-600 mb-8">
              Medical tourism, especially in India, is plagued by disorganization and inefficiency. 
              Facilitators often rely on outdated methods, leading to delayed bookings, inadequate 
              patient support, and missed growth opportunities.
            </p>
            <p className="text-gray-600 mb-8">
              Our platform addresses these pain points by streamlining lead management and improving 
              operational efficiency for facilitators and hospitals alike.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {challengeSolutions.map((solution, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white p-5 rounded-lg shadow-md"
                >
                  <div className="flex items-start">
                    <div className="mr-4 p-2 bg-blue-100 rounded-lg">
                      {solution.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{solution.title}</h3>
                      <p className="text-gray-600 text-sm">{solution.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Healthcare challenges" 
              className="rounded-xl shadow-xl w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Challenges;