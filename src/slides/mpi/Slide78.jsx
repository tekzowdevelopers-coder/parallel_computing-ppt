import React from 'react';
import { motion } from 'framer-motion';
import LabSlide from '../../components/visuals/LabSlide';

export default {
  section: 'PRACTICAL LABS',
  title: 'LAB 3: BROADCAST CONFIGURATION',
  speakerNotes: 'Lab 3: Ensure all participating processes receive the exact same global parameter.',
  component: function Slide78() {
    return (
      <div className="slide">
        <div className="slide-label">78 / PRACTICAL LABS</div>
        <LabSlide 
          title="LAB 3: BROADCAST CONFIGURATION"
          steps={[
            "Rank 0 reads a configuration value (e.g., 500)",
            "All ranks declare a config variable",
            "All ranks call MPI_Bcast with root=0",
            "All ranks print their local config value"
          ]}
          command="mpicc bcast_config.c -o bcast && mpiexec -n 4 ./bcast"
          icon="Network"
        />
      </div>
    );
  }
};
