import React from 'react';
import { motion } from 'framer-motion';
import LabSlide from '../../components/visuals/LabSlide';

export default {
  section: 'PRACTICAL LABS',
  title: 'LAB 8: PARALLEL ARRAY PROCESSING',
  speakerNotes: 'Lab 8: Measure the performance speedup of distributed array transformation.',
  component: function Slide83() {
    return (
      <div className="slide">
        <div className="slide-label">83 / PRACTICAL LABS</div>
        <LabSlide 
          title="LAB 8: PARALLEL ARRAY PROCESSING"
          steps={[
            "Scatter 1M array elements",
            "Each rank performs local computation: array[i] *= 2",
            "Gather results back to Rank 0",
            "Measure total execution time (MPI_Wtime)"
          ]}
          command="mpicc array_proc.c -o array_proc && mpiexec -n 4 ./array_proc"
          icon="Network"
        />
      </div>
    );
  }
};
