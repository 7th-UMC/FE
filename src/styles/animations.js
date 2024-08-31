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

export const sparkle = keyframes`
  0%, 100% {
    filter: brightness(1);
  }
  50% {
    filter: brightness(1.5);
  }
`;

export const sparkleText = keyframes`
  0%, 100% {
    text-shadow: 0 0 2.5px rgba(255, 255, 255, 0.5), 0 0 5px rgba(255, 255, 255, 0.7);
    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.5);
  }
  50% {
    text-shadow: 0 0 5px rgba(255, 255, 255, 1), 0 0 10px rgba(255, 255, 255, 1);
    -webkit-text-stroke: 1px rgba(255, 255, 255, 1);
  }
`;

export const sparkleImg = keyframes`
  0%, 100% {
    opacity: 1;
    filter: brightness(1);
  }
  25% {
    opacity: 0.3;
    filter: brightness(1.25);
  }
  50% {
    opacity: 0.6;
    filter: brightness(1.5);
  }
  75% {
    opacity: 0.3;
    filter: brightness(1.25);
  }
`;

export const twinkling = keyframes`
    0%, 100% {
      opacity: 0.3;
    }
    50% {
      opacity: 1;
    }
`;