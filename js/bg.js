

tsParticles
  .load("tsparticles", {
    fpsLimit: 60,
    fullScreen: { enable: true },
    particles: {
      number: {
        value: 1
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.5
      },
      size: {
        value: 200,
        random: {
          enable: true,
          minimumValue: 50
        }
      },
      move: {
        enable: true,
        speed: 3,
        direction: "top",
        outModes: {
          default: "out",
          top: "destroy",
          bottom: "none"
        }
      }
    },
    interactivity: {
      detectsOn: "canvas",
      events: {
        resize: true
      }
    },
    detectRetina: true,
    themes: [
      {
        name: "light",
        default: {
          value: true,
          mode: "light"
        },
        options: {
          background: {
            color: "#f7f8ef"
          },
          particles: {
            color: {
              value: ["#5bc0eb", "#fde74c", "#9bc53d", "#e55934", "#fa7921"]
            }
          }
        }
      },
      {
        name: "dark",
        default: {
          value: true,
          mode: "dark"
        },
        options: {
          background: {
            color: "#080710"
          },
          particles: {
            color: {
              value: ["#004f74", "#5f5800", "#245100", "#7d0000", "#810c00"]
            }
          }
        }
      }
    ],
    emitters: {
      direction: "top",
      position: {
        x: 50,
        y: 150
      },
      rate: {
        delay: 1.2,
        quantity: 1
      },
      size: {
        width: 50,
        height: 0
      }
    }
  })
  .then((cnt) => {
    console.log(cnt);
  });