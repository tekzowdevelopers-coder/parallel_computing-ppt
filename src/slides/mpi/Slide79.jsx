import React from 'react';
import { motion } from 'framer-motion';
import LabSlide from '../../components/visuals/LabSlide';

export default {
  section: 'PRACTICAL LABS',
  title: 'LAB 4: SCATTER WORKLOAD',
  speakerNotes: 'Lab 4: Distribute an array evenly across ranks.',
  component: function Slide79() {
    return (
      <div className="slide">
        <div className="slide-label">79 / PRACTICAL LABS</div>
        <LabSlide 
          title="LAB 4: SCATTER WORKLOAD"
          steps={[
            "Rank 0 initializes master array [10, 20, 30, 40]",
            "All ranks prepare receiving buffer",
            "All ranks call MPI_Scatter",
            "Each rank prints its received chunk"
          ]}
          command="mpicc scatter.c -o scatter && mpiexec -n 4 ./scatter"
          icon="Network"
        />
      </div>
    );
  }
};
