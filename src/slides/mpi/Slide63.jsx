import React from 'react';
import { motion } from 'framer-motion';
import { Gauge, CheckCircle, TrendingUp, AlertTriangle } from 'lucide-react';

export default {
  section: 'DISTRIBUTED COMPUTING',
  title: 'REAL-WORLD MPI APPLICATIONS',
  speakerNotes: 'Every top 500 supercomputer runs scientific MPI workloads like these.',
  component: function Slide63() {
    return (
      <div className="slide">
        <div className="slide-label">63 / DISTRIBUTED COMPUTING</div>
        <motion.h1 
          className="text-6xl font-bold mb-12 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          REAL-WORLD MPI APPLICATIONS
        </motion.h1>
        
        <motion.div 
          className="grid grid-cols-2 gap-8 w-full max-w-5xl"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
        >
          {[
            { title: 'Weather Forecasting', desc: 'Spatial grid partitioning (NOAA)', icon: <TrendingUp className="w-10 h-10 text-cyan" /> },
            { title: 'Fluid Dynamics', desc: 'Aircraft airflow simulation', icon: <Gauge className="w-10 h-10 text-cyan" /> },
            { title: 'Molecular Dynamics', desc: 'Particle domain decomposition (NAMD)', icon: <CheckCircle className="w-10 h-10 text-cyan" /> },
            { title: 'Astrophysics', desc: 'N-body galaxy simulation', icon: <AlertTriangle className="w-10 h-10 text-cyan" /> }
          ].map((item, i) => (
            <motion.div 
              key={i}
              className="glass p-8 rounded-xl flex items-center space-x-6"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              {item.icon}
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xl text-secondary">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
  }
};
