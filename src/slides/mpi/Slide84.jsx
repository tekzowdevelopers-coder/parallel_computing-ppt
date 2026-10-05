import React from 'react';
import { motion } from 'framer-motion';
import LabSlide from '../../components/visuals/LabSlide';

export default {
  section: 'PRACTICAL LABS',
  title: 'LAB 9: MATRIX DOMAIN DECOMPOSITION',
  speakerNotes: 'Lab 9: 2D Domain decomposition—the foundation of scientific grid computing.',
  component: function Slide84() {
    return (
      <div className="slide">
        <div className="slide-label">84 / PRACTICAL LABS</div>
        <LabSlide 
          title="LAB 9: MATRIX DOMAIN DECOMPOSITION"
          steps={[
            "Initialize matrices A and B (e.g. 100x100)",
            "Divide rows evenly across processes",
            "Each process calculates local segment of C = A + B",
            "Gather all segments of C back to Rank 0"
          ]}
          command="mpicc matrix_add.c -o matrix_add && mpiexec -n 4 ./matrix_add"
          icon="Network"
        />
      </div>
    );
  }
};
