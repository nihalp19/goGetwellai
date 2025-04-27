import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, X } from 'lucide-react';

const Hero: React.FC = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative pt-32 lg:pt-36 pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 z-0"></div>
      
      {/* Animated shapes */}
      <motion.div 
        className="absolute top-1/4 right-1/6 w-64 h-64 rounded-full bg-blue-400 opacity-10 z-0"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/4 left-1/6 w-80 h-80 rounded-full bg-purple-400 opacity-10 z-0"
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
          y: [0, 50, 0],
        }}
        transition={{ 
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              AI-Powered <span className="text-blue-500">Healthcare</span> Solutions
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-8">
              Website Builder for healthcare facilitators
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Create your AI-powered healthcare platform in just 2 minutes and transform patient care delivery with intelligent automation.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.a 
                href="#" 
                className="btn btn-primary flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.a>
              <motion.button 
                onClick={() => setShowVideo(true)}
                className="btn btn-secondary flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img 
                src="https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Healthcare professional using digital technology" 
                className="w-full h-full object-cover"
              />
              
              <motion.div 
                className="absolute bottom-6 left-6 bg-white p-4 rounded-lg shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse" 
                }}
              >
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <p className="font-medium">24/7</p>
                </div>
                <p className="text-sm text-gray-600">AI Support</p>
                <p className="text-xs font-medium text-gray-800 mt-1">Always Online</p>
              </motion.div>
            </div>

            {showVideo && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="mt-6"
              >
                <div className="relative rounded-xl overflow-hidden aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/xQl8i2sO_Ls"
                    title="Demo Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
        >
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-blue-600">2.1k<span className="text-blue-600">+</span></p>
            <p className="text-gray-600 mt-2">Active Users</p>
          </div>
          
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-blue-600">2100<span className="text-blue-600">+</span></p>
            <p className="text-gray-600 mt-2">Qualified Doctors</p>
            <p className="text-sm text-gray-500">Expert healthcare professionals ready to serve</p>
          </div>
          
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-blue-600">1000<span className="text-blue-600">+</span></p>
            <p className="text-gray-600 mt-2">Hospitals</p>
            <p className="text-sm text-gray-500">Leading medical institutions worldwide</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;