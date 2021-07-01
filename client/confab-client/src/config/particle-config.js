const particlesConfig = {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#110101"
        },
        shape: {
            stroke: {
                width: 0,
                color: "#000000"
            },
            polygon: {
                nb_sides: 4
            },
            image: {
                src: "img/github.svg",
                width: 0,
                height: 0
            }
        },
        opacity: {
            value: 0.0,
            random: true,
            anim: {
                enable: true,
                speed: 1.3976023976023977,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 0,
            random: true,
            anim: {
                enable: true,
                speed: 40.90626902008526,
                size_min: 3.2460945425035526,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 127.83700172831522,
            color: "#181010",
            opacity: 0.5761050563083505,
            width: 0.6313480069132609
        },
        move: {
            enable: true,
            speed: 5.470220103698914,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
};

export default particlesConfig