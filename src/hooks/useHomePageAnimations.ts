import { useEffect } from 'react';
import { setupDissectionAnimation } from '../pages/animations/_dissectionAnimation';
import { setupHeaderAnimations } from '../pages/animations/_headerAnimation';

const useHomePageAnimations = () => {
  useEffect(() => {
    setupHeaderAnimations();
    setupDissectionAnimation();
  }, []);
};

export default useHomePageAnimations