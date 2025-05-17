import { useEffect, useRef, useState } from 'react';
import {
  useAnimation,
  useInView,
  AnimationControls,
  MotionProps,
  TargetAndTransition,
  VariantLabels,
} from 'framer-motion';

type Axis = 'x' | 'y';

interface UseScrollEffectsOptions {
  once?: boolean;
  amount?: number;
  enableMotionLinked?: boolean;
  sensitivity?: number;
  axis?: Axis;
  initial?: TargetAndTransition | VariantLabels;
  visible?: TargetAndTransition | VariantLabels;
}

export function useScrollEffects<T extends HTMLElement = HTMLElement>(
  options: UseScrollEffectsOptions = {}
): {
  ref: React.RefObject<T>;
  motionProps: Omit<MotionProps, 'ref'>;
} {
  const {
    once = true,
    amount = 0.2,
    enableMotionLinked = false,
    sensitivity = 1,
    axis = 'y',
    initial,
    visible,
  } = options;

  const defaultInitial =
    axis === 'x'
      ? { opacity: 0, x: -60 }
      : { opacity: 0, y: 60 };

  const defaultVisible =
    axis === 'x'
      ? { opacity: 1, x: 0, transition: { duration: 1 } }
      : { opacity: 1, y: 0, transition: { duration: 1 } };

  const ref = useRef<T>(null!) as React.RefObject<T>;
  const controls: AnimationControls = useAnimation();
  const isInView = useInView(ref, { once, amount });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (isInView) {
      controls.start(visible ?? defaultVisible);
    }
  }, [isInView, controls, visible, defaultVisible]);

  useEffect(() => {
    if (!enableMotionLinked) return;

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [enableMotionLinked]);

  const motionStyle = enableMotionLinked
    ? {
        scale: 1 - scrollY * 0.0005 * sensitivity,
        opacity: Math.max(1 - scrollY * 0.001 * sensitivity, 0.5),
        ...(axis === 'y'
          ? { y: scrollY * 0.1 * sensitivity }
          : { x: scrollY * 0.1 * sensitivity }),
      }
    : undefined;

  const motionProps: Omit<MotionProps, 'ref'> = {
    initial: initial ?? defaultInitial,
    animate: controls,
    style: motionStyle,
  };

  return {
    ref,
    motionProps,
  };
}
