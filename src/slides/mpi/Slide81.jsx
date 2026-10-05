import React from 'react';
import { motion } from 'framer-motion';
import LabSlide from '../../components/visuals/LabSlide';

export default {
  section: 'PRACTICAL LABS',
  title: 'LAB 6: GLOBAL REDUCE',
  speakerNotes: 'Lab 6: Compute the global total across all processes without sending raw arrays.',
  component: function Slide81() {
    return (
      <div className="slide">
        <div className="slide-label">81 / PRACTICAL LABS</div>
        <LabSlide 
          title="LAB 6: GLOBAL REDUCE"
          steps={[
            "Each rank holds a local value",
            "Rank 0 prepares variable for global sum",
            "All ranks call MPI_Reduce with MPI_SUM",
            "Rank 0 prints the grand total"
          ]}
          command="mpicc reduce.c -o reduce && mpiexec -n 4 ./reduce"
          icon="Network"
        />
      </div>
    );
  }
};
