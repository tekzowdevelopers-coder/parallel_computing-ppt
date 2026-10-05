import React from 'react';
import { motion } from 'framer-motion';
import LabSlide from '../../components/visuals/LabSlide';

export default {
  section: 'PRACTICAL LABS',
  title: 'LAB 7: PARALLEL SUM (1 TO 1,000,000)',
  speakerNotes: 'Lab 7: Combine Scatter and Reduce to solve a 1-million number summation.',
  component: function Slide82() {
    return (
      <div className="slide">
        <div className="slide-label">82 / PRACTICAL LABS</div>
        <LabSlide 
          title="LAB 7: PARALLEL SUM"
          steps={[
            "Rank 0 initializes 1,000,000 element array",
            "MPI_Scatter array to all ranks",
            "Local ranks sum their chunk",
            "MPI_Reduce partial sums to global total on Rank 0"
          ]}
          command="mpicc par_sum.c -o par_sum && mpiexec -n 4 ./par_sum"
          icon="Network"
        />
      </div>
    );
  }
};
