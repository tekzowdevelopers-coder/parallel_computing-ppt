import React from 'react';
import { motion } from 'framer-motion';
import LabSlide from '../../components/visuals/LabSlide';

export default {
  section: 'PRACTICAL LABS',
  title: 'LAB 2: POINT-TO-POINT SEND & RECV',
  speakerNotes: 'Lab 2: Pass an integer between process 0 and process 1 safely.',
  component: function Slide77() {
    return (
      <div className="slide">
        <div className="slide-label">77 / PRACTICAL LABS</div>
        <LabSlide 
          title="LAB 2: SEND & RECV"
          steps={[
            "Rank 0 determines value to send (e.g., 100)",
            "Rank 0 calls MPI_Send",
            "Rank 1 prepares a variable to receive",
            "Rank 1 calls MPI_Recv",
            "Rank 1 prints received value"
          ]}
          command="mpicc send_recv.c -o send_recv && mpiexec -n 2 ./send_recv"
          icon="Network"
        />
      </div>
    );
  }
};
