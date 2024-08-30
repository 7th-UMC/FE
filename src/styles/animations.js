import { keyframes } from 'styled-components';

export const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const fadeOutDown = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(20px);
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const revealFromLeft = keyframes`
  0% {
    opacity: 0;
    clip-path: inset(0 100% 0 0);
  }
  100% {
    opacity: 1;
    clip-path: inset(0 0 0 0);
  }
`;

export const slideDown = keyframes`
    0% {
      opacity: 0;
      clip-path: inset(0 0 100% 0);
    }

    100% {
      opacity: 1;
      clip-path: inset(0 0 0 0);
    }
`;


export const slideUp = keyframes`
    0% {
      opacity: 1;
      clip-path: inset(0 0 0 0);
    }

    100% {
      opacity: 0;
      clip-path: inset(0 0 100% 0);
    }
`;

export const bounceIn = keyframes`
    0% {
        transform: scale(0.8);
        opacity: 0;
    }
    60% {
        transform: scale(1.2);
        opacity: 1;
    }
    100% {
        transform: scale(1);
    }
`;

export const bounceOut = keyframes`
    0% {
        transform: scale(1);
        opacity: 1;
    }
    40% {
        transform: scale(1.2);
        opacity: 1;
    }
    100% {
        transform: scale(0.8);
        opacity: 0;
    }
`;