import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadFull } from "tsparticles";


export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 z-0"
      options={{
        background: {
          color: {
            value: 'transparent',
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: {
              enable: true
            }
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: ['#ff0000', '#ff3333', '#ff6666', '#ff9999', '#ffcc00', '#ff6600'],
          },
          links: {
            color: '#ff0000',
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              width: 1920,
              height: 1080,
            },
            value: 80,
          },
          opacity: {
            value: { min: 0.3, max: 0.8 },
            animation: {
              enable: true,
              speed: 1,
              sync: false,
            },
          },
          shape: {
            type: ['circle', 'triangle'],
          },
          size: {
            value: { min: 1, max: 3 },
            animation: {
              enable: true,
              speed: 2,
              sync: false,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}



