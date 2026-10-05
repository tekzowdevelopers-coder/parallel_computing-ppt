import React from 'react';
import { motion } from 'framer-motion';
import LabSlide from '../../components/visuals/LabSlide';

export default {
  section: 'PRACTICAL LABS',
  title: 'LAB 1: HELLO MPI',
  speakerNotes: 'Lab 1: Write, compile, and run your first multi-process program.',
  component: function Slide76() {
    return (
      <div className="slide">
        <div className="slide-label">76 / PRACTICAL LABS</div>
        <LabSlide 
          title="LAB 1: HELLO MPI"
          steps={[
            "Include mpi.h",
            "Initialize MPI",
            "Query rank and size",
            "Print identity",
            "Finalize MPI"
          ]}
          command="mpicc hello_mpi.c -o hello && mpiexec -n 4 ./hello"
          icon="Terminal"
        />
      </div>
    );
  }
};
