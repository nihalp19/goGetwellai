import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Users, BarChart } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const About: React.FC = () => {
  const aboutFeatures = [
    {
      title: 'Modern Solutions',
      description: 'Leveraging AI technology for healthcare',
      icon: <Monitor className="w-6 h-6 text-blue-500" />,
    },
    {
      title: 'Patient-Centric',
      description: 'Personalized healthcare experiences',
      icon: <Users className="w-6 h-6 text-blue-500" />,
    },
    {
      title: 'AI-Powered Solutions',
      description: 'Optimizing operations with advanced technology',
      icon: <BarChart className="w-6 h-6 text-blue-500" />,
    },
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <h2 className="section-title">About Us</h2>
            <p className="text-gray-600 mb-8">
              We are a pioneering AI-driven platform focused on revolutionizing the medical tourism industry. 
              By addressing inefficiencies and disorganization, we empower healthcare facilitators to 
              modernize their operations, attract more patients, and deliver seamless, personalized 
              care across borders.
            </p>
            <p className="text-gray-600 mb-8">
              Our cutting-edge solutions are designed to streamline processes and enhance the overall 
              patient experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {aboutFeatures.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-4 p-2 bg-blue-100 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-xl overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Healthcare professionals in consultation" 
              className="w-full h-full object-cover"
            />
            
            <motion.div 
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/80 to-transparent p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3 className="text-white text-xl font-bold">Healthcare mission</h3>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;