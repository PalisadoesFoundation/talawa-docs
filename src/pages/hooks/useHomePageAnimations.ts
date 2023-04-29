import { useEffect } from 'react';
import { setupDissectionAnimation } from '../animations/_dissectionAnimation';
import { setupHeaderAnimations } from '../animations/_headerAnimation';

const useHomePageAnimations = () => {
  useEffect(() => {
    setupHeaderAnimations();
    setupDissectionAnimation();
  }, []);
};

export default useHomePageAnimations