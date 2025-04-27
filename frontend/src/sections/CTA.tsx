import React from 'react';
import { motion } from 'framer-motion';

const CTA: React.FC = () => {
  return (
    <section className="section-padding bg-blue-600 text-white">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get Your Patient Ready Website Now
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Use power AI to transform your online presence and automate patient interactions
          </p>
          
          <motion.a
            href="#"
            className="btn bg-white text-blue-600 hover:bg-blue-50 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join the Waiting List
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;