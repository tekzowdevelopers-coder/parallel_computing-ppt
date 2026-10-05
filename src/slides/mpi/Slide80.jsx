import React from 'react';
import { motion } from 'framer-motion';
import LabSlide from '../../components/visuals/LabSlide';

export default {
  section: 'PRACTICAL LABS',
  title: 'LAB 5: GATHER RESULTS',
  speakerNotes: 'Lab 5: Aggregate the distributed results back onto the coordinator.',
  component: function Slide80() {
    return (
      <div className="slide">
        <div className="slide-label">80 / PRACTICAL LABS</div>
        <LabSlide 
          title="LAB 5: GATHER RESULTS"
          steps={[
            "Each rank computes a local value (e.g., rank * 10)",
            "Rank 0 allocates array for results",
            "All ranks call MPI_Gather",
            "Rank 0 prints the collected array"
          ]}
          command="mpicc gather.c -o gather && mpiexec -n 4 ./gather"
          icon="Network"
        />
      </div>
    );
  }
};
