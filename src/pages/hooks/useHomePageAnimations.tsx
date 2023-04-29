import {useEffect} from 'react'
import {setupDissectionAnimation} from '../animations/_dissectionAnimation';
import {setupHeaderAnimations} from '../animations/_headerAnimation';

export const useHomePageAnimations = () => {
    useEffect(() => setupHeaderAnimations(), []);
    useEffect(() => setupDissectionAnimation(), []);
  };