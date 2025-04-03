gsap.registerPlugin(ScrollTrigger);


// start menu section //
//
console.clear();
$(function () {
    var menu = document.getElementById('menuBox');
    var bar1 = document.querySelector('.bar1');
    var bar2 = document.querySelector('.bar2');
    var bar3 = document.querySelector('.bar3');
    var closeIcon = document.querySelector('.close-icon'); // Select the close icon
    var isChangingState = false;
    var isOpen = false;
    var menuTL = new TimelineMax();

    function menuOver() {
        if (!isChangingState) {
            menuTL.clear();
            if (!isOpen) {
                menuTL
                    .to(bar1, 0.35, {
                        x: 12,
                        ease: Power1.easeOut
                    }, "one")
                    .to(bar3, 0.35, {
                        x: -16,
                        ease: Power1.easeOut
                    }, "one");
            }
        }
    }

    function menuOut() {
        if (!isChangingState) {
            menuTL.clear();
            if (!isOpen) {
                menuTL
                    .to(bar1, 0.35, {
                        x: 0,
                        ease: Power1.easeOut
                    }, "one")
                    .to(bar3, 0.35, {
                        x: 0,
                        ease: Power1.easeOut
                    }, "one");
            }
        }
    }

    function showCloseMenu() {
        menuTL.clear();
        menuTL
            .to(bar1, 0.2, {
                opacity: 0
            }, "close")
            .to(bar2, 0.2, {
                opacity: 0
            }, "close")
            .to(bar3, 0.2, {
                opacity: 0,
                onComplete: function () {
                    isChangingState = false;
                    isOpen = true;
                    closeIcon.style.display = "block"; // Show the close icon
                }
            }, "close");
    }

    function showOpenMenu() {
        closeIcon.style.display = "none"; // Hide the close icon
        menuTL.clear();
        menuTL
            .to(bar2, 0.2, {
                opacity: 1
            })
            .to(bar3, 0.2, {
                opacity: 1,
                onComplete: function () {
                    isChangingState = false;
                    isOpen = false;
                }
            }, "open")
            .to(bar1, 0.2, {
                opacity: 1,
                delay: -0.2
            });
    }
    menu.onmouseover = function () {
        menuOver();
    };
    menu.onmouseout = function () {
        menuOut();
    };
    menu.onclick = function () {
        if (!isChangingState) {
            isChangingState = true;
            if (!isOpen) {
                showCloseMenu();
            } else {
                showOpenMenu();
            }
        }
    };
});

console.clear();
var menuAnimation = new TimelineMax({
    paused: true
});
var menuAnimationBack = new TimelineMax({
    paused: true
});
var navMain = document.getElementById("nav-main");
var menuButton = document.getElementById("menu-button");
var toggle = true;

// Animation for expanding the menu (top-to-bottom)
menuAnimation
    .to(navMain, 0.8, {
        height: "100vh", // Add quotes to ensure it's treated as a string
        className: "+=reveal",
        ease: Power2.easeInOut,
        transform: "translate3d(0,0,0)",
        onStart: function () {
            // Disable body scrolling when the menu appears
            document.body.classList.add("no-scroll");
        }
    }, 0);

// Animation for collapsing the menu (bottom-to-top)
menuAnimationBack
    .to(navMain, 0.5, {
        height: 0,
        className: "+=back",
        ease: Power4.easeIn,
        transform: "translate3d(0,0,0)",
        onStart: function () {
            // Enable body scrolling when the menu disappears
            document.body.classList.remove("no-scroll");
        }
    }, 0);

// Toggle the animations on button click

menuButton.onclick = function () {
    toggle = !toggle;
    toggle == false ? menuAnimation.play(0) : menuAnimationBack.play(0);
};

gsap.set(".menu-link-outr-first a", {
    opacity: 0
});
menuAnimation
    .to(".menu-link-outr-first a", {
        opacity: 1,
        stagger: 0.3,
        duration: 0.3,
        ease: "circ.out",
        y: -30
});

// gsap.set(".dropdown .ham-menu-links a", {
//     opacity: 0
// });
// menuAnimation
//     .to(".dropdown .ham-menu-links a", {
//         opacity: 1,
//         stagger: 0.3,
//         duration: 0.3,
//         ease: "circ.out",
//         y: -30
// });




//
// END menu section


// main banner collum
//
document.addEventListener("mousemove", (event) => {
    const x = (event.clientX / window.innerWidth) * 100 + "%";
    const y = (event.clientY / window.innerHeight) * 100 + "%";

    document.documentElement.style.setProperty("--x", x);
    document.documentElement.style.setProperty("--y", y);
});
//
// END main banner

// banner moving round circle with icons
//
$(function () {
    var figure1 = document.getElementById("figure1");
    var figure2 = document.getElementById("figure2");
    var figure3 = document.getElementById("figure3");
    var figure4 = document.getElementById("figure4");

    var text1 = $(".banner-rotate-text1");
    var text2 = $(".banner-rotate-text2");
    var text3 = $(".banner-rotate-text3");

    var circle = document.getElementById("circle");
    var pathLength = Math.floor(circle.getTotalLength());

    var angle1 = 0;
    var speed1 = 0.05; // Keep the speed as requested

    function move(angle, figure) {
        var innerPercent = (angle * pathLength) / 100;

        var figureWidth = figure.getBBox().width;
        var figureHeight = figure.getBBox().height;

        var pt = circle.getPointAtLength(innerPercent);
        pt.x = pt.x - figureWidth / 2;
        pt.y = pt.y - figureHeight / 2;

        $(figure).css({
            transform: `translate3d(${pt.x}px, ${pt.y}px, 0)`,
        });

        // Show one text at a time while keeping the others at opacity 0.2
        if (angle < 30) {
            text1.css("opacity", 1);
            text2.css("opacity", 0.2);
            text3.css("opacity", 0.2);
        } else if (angle >= 40 && angle < 65) {
            text1.css("opacity", 0.2);
            text2.css("opacity", 1);
            text3.css("opacity", 0.2);
        } else if (angle >= 65) {
            text1.css("opacity", 0.2);
            text2.css("opacity", 0.2);
            text3.css("opacity", 1);
        }
    }

    // Moves the element to the top
    function bringToFront(element) {
        let parent = element.parentNode;
        parent.appendChild(element); // Moves the element to the last position inside the parent
    }
    bringToFront(document.getElementById("figure1"));

    function getFixedPosition(angle) {
        var fixedPercent = (angle * pathLength) / 100;
        var pt = circle.getPointAtLength(fixedPercent);
        return {
            x: pt.x,
            y: pt.y
        };
    }

    function setFixedFigurePosition(figure, fixedAngle) {
        var position = getFixedPosition(fixedAngle);
        var figureWidth = figure.getBBox().width;
        var figureHeight = figure.getBBox().height;

        $(figure).css({
            transform: `translate3d(${position.x - figureWidth / 2}px, ${position.y - figureHeight / 2}px, 0)`,
        });
    }

    function animate() {
        angle1 = (angle1 + speed1) % 100;
        move(angle1, figure1);
        requestAnimationFrame(animate);
    }

    // Set initial fixed positions
    setFixedFigurePosition(figure2, 0); // Fixed at angle 0
    setFixedFigurePosition(figure3, 40); // Fixed at angle 30
    setFixedFigurePosition(figure4, 65); // Fixed at angle 40

    // Start animation for figure1
    animate();
});

//
// END banner moving round circle with icons


/// about scroll section start
//
document.addEventListener('DOMContentLoaded', () => {
    const splitTypes = document.querySelectorAll('.reveal-type');
    splitTypes.forEach((char) => {
        const bg = char.dataset.bgColor;
        const fg = char.dataset.fgColor;

        const text = new SplitType(char, {
            types: 'chars'
        });

        const tlText = gsap.timeline({
            scrollTrigger: {
                trigger: char,
                start: 'center center',
                end: '+=500',
                scrub: 0.5,
                pin: true,
                pinSpacing: false,
                markers: false
            }
        });

        tlText.fromTo(
                text.chars, {
                    color: bg
                }, {
                    color: fg,
                    duration: 0.3,
                    stagger: 0.05,
                    ease: 'power2.out'
                }
            )
            .to(char, {
                opacity: 0,
                duration: 0.5,
                ease: 'power2.in'
            });
    });

    // About Zoom Section Animation
    const sections = document.querySelectorAll('.abt-f1');

    sections.forEach((section, index) => {
        const isLastSection = index === sections.length - 1;
        const nextSection = sections[index + 1];
        const heading = section.querySelector('.reveal-heading');
        const paragraph = section.querySelector('.reveal');
        const image = section.querySelector('.image img');
        const videos = section.querySelector('.video-wrapper video');

        const splitHeading = new SplitType(heading, {
            type: 'chars'
        });
        const splitParagraph = new SplitType(paragraph, {
            type: 'words'
        });

        const tlSection = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                // start: 'center center',
                start: 'center 45%',
                // start: 'top top',
                end: 'bottom top',
                scrub: 0.3,
                pin: true,
                pinSpacing: false,
                markers: false // start end
            }
        });

        tlSection
            .fromTo(splitHeading.chars, {
                opacity: 0,
                y: 50
            }, {
                opacity: 1,
                y: 0,
                stagger: 0.1,
                duration: 1.5,
                ease: 'power2.out'
            })
            .fromTo(videos, {
                opacity: 0,
                scale: 0.8
            }, {
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: 'power3.out'
            }, '-=0.5')
            .fromTo(splitParagraph.words, {
                opacity: 0,
                y: 30
            }, {
                opacity: 1,
                y: 0,
                stagger: 0.05,
                duration: 1,
                ease: 'power2.out'
            }, '-=0.5');

        if (!isLastSection) {
            tlSection.to(section, {
                opacity: 0,
                duration: 0.8,
                ease: 'power2.inOut'
            });
        }
    });
});
//
/// END about scroll section 


/// home software
//
gsap.from(".hm-software-in", {
    duration: 1,
    x: 300,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".hm-software-in",
        start: "top 80%",
        end: "top 20%",
        scrub: true,
        markers: false,
        toggleActions: "play none none reverse",
    },
});

// Function to play the animations
function playAnimations() {

    //software sec 01
    const linedotid01 = document.getElementById('linedotid01');
    gsap.to(linedotid01, {
        duration: 1,
        opacity: 0,
        ease: "power2.out",
        onComplete: function () {
            gsap.to(linedotid01, {
                duration: 0.02,
                opacity: 1,
                delay: 0.02,
                ease: "power2.in"
            });
        }
    });

    const linedotid021 = document.getElementById('linedotid021');
    gsap.to(linedotid021, {
        duration: 1,
        opacity: 0,
        ease: "power2.out",
        onComplete: function () {
            gsap.to(linedotid021, {
                duration: 0.02,
                opacity: 1,
                delay: 0.02,
                ease: "power2.in"
            });
        }
    });

    const linedot01 = document.getElementById('linedot01');
    gsap.to(linedot01, {
        duration: 0.5,
        opacity: 0,
        ease: "power2.out",
        onComplete: function () {
            gsap.to(linedot01, {
                duration: 0.02,
                delay: 0.02,
                opacity: 1,
                ease: "power2.in"
            });
        }
    });

    const lineoutline01 = document.getElementById('linedotoutline01');
    gsap.to(lineoutline01, {
        duration: 1,
        opacity: 0,
        ease: "power2.out",
        onComplete: function () {
            gsap.to(lineoutline01, {
                duration: 0.02,
                delay: 0.02,
                opacity: 1,
                ease: "power2.in"
            });
        }
    });

    //software sec 02
    const linedotid02 = document.getElementById('linedotid02');
    gsap.to(linedotid02, {
        duration: 1,
        opacity: 0,
        ease: "power2.out",
        onComplete: function () {
            gsap.to(linedotid02, {
                duration: 0.5,
                opacity: 1,
                delay: 0.5,
                ease: "power2.in"
            });
        }
    });

    const linedot02 = document.getElementById('linedot02');
    gsap.to(linedot02, {
        duration: 0.5,
        opacity: 0,
        ease: "power2.out",
        onComplete: function () {
            gsap.to(linedot02, {
                duration: 0.5,
                delay: 0.5,
                opacity: 1,
                ease: "power2.in"
            });
        }
    });

    const lineoutline02 = document.getElementById('linedotoutline02');
    gsap.to(lineoutline02, {
        duration: 1,
        opacity: 0,
        ease: "power2.out",
        onComplete: function () {
            gsap.to(lineoutline02, {
                duration: 0.5,
                delay: 0.5,
                opacity: 1,
                ease: "power2.in"
            });
        }
    });

    //software sec 03
    const linedotid03 = document.getElementById('linedotid03');
    gsap.to(linedotid03, {
        duration: 1,
        opacity: 0,
        ease: "power2.out",
        onComplete: function () {
            gsap.to(linedotid03, {
                duration: 0.5,
                opacity: 1,
                delay: 0.5,
                ease: "power2.in"
            });
        }
    });

    const linedot03 = document.getElementById('linedot03');
    gsap.to(linedot03, {
        duration: 0.5,
        opacity: 0,
        ease: "power2.out",
        onComplete: function () {
            gsap.to(linedot03, {
                duration: 0.5,
                delay: 0.5,
                opacity: 1,
                ease: "power2.in"
            });
        }
    });

    const lineoutline03 = document.getElementById('linedotoutline03');
    gsap.to(lineoutline03, {
        duration: 1,
        opacity: 0,
        ease: "power2.out",
        onComplete: function () {
            gsap.to(lineoutline03, {
                duration: 0.5,
                delay: 0.5,
                opacity: 1,
                ease: "power2.in"
            });
        }
    });

    //software sec 04
    const linedotid04 = document.getElementById('linedotid04');
    gsap.to(linedotid04, {
        duration: 1,
        opacity: 0,
        ease: "power2.out",
        onComplete: function () {
            gsap.to(linedotid04, {
                duration: 0.5,
                opacity: 1,
                delay: 0.5,
                ease: "power2.in"
            });
        }
    });

    const linedot04 = document.getElementById('linedot04');
    gsap.to(linedot04, {
        duration: 0.5,
        opacity: 0,
        ease: "power2.out",
        onComplete: function () {
            gsap.to(linedot04, {
                duration: 0.5,
                delay: 0.5,
                opacity: 1,
                ease: "power2.in"
            });
        }
    });

    const lineoutline04 = document.getElementById('linedotoutline04');
    gsap.to(lineoutline04, {
        duration: 1,
        opacity: 0,
        ease: "power2.out",
        onComplete: function () {
            gsap.to(lineoutline04, {
                duration: 0.5,
                delay: 0.5,
                opacity: 1,
                ease: "power2.in"
            });
        }
    });

    //software sec 05
    const linedotid05 = document.getElementById('linedotid05');
    gsap.to(linedotid05, {
        duration: 1,
        opacity: 0,
        ease: "power2.out",
        onComplete: function () {
            gsap.to(linedotid05, {
                duration: 0.5,
                opacity: 1,
                delay: 0.5,
                ease: "power2.in"
            });
        }
    });

    const linedot05 = document.getElementById('linedot05');
    gsap.to(linedot05, {
        duration: 0.5,
        opacity: 0,
        ease: "power2.out",
        onComplete: function () {
            gsap.to(linedot05, {
                duration: 0.5,
                delay: 0.5,
                opacity: 1,
                ease: "power2.in"
            });
        }
    });

    const lineoutline05 = document.getElementById('linedotoutline05');
    gsap.to(lineoutline05, {
        duration: 1,
        opacity: 0,
        ease: "power2.out",
        onComplete: function () {
            gsap.to(lineoutline05, {
                duration: 0.5,
                delay: 0.5,
                opacity: 1,
                ease: "power2.in"
            });
        }
    });

    //software sec 06
    const linedotid06 = document.getElementById('linedotid06');
    gsap.to(linedotid06, {
        duration: 1,
        opacity: 0,
        ease: "power2.out",
        onComplete: function () {
            gsap.to(linedotid06, {
                duration: 0.5,
                opacity: 1,
                delay: 0.5,
                ease: "power2.in"
            });
        }
    });

    const linedot06 = document.getElementById('linedot06');
    gsap.to(linedot06, {
        duration: 0.5,
        opacity: 0,
        ease: "power2.out",
        onComplete: function () {
            gsap.to(linedot06, {
                duration: 1.5,
                delay: 0.5,
                opacity: 1,
                ease: "power2.in"
            });
        }
    });

    const lineoutline06 = document.getElementById('linedotoutline06');
    gsap.to(lineoutline06, {
        duration: 1,
        opacity: 0,
        ease: "power2.out",
        onComplete: function () {
            gsap.to(lineoutline06, {
                duration: 0.5,
                delay: 0.5,
                opacity: 1,
                ease: "power2.in"
            });
        }
    });

    //software sec 07
    const linedotid07 = document.getElementById('linedotid07');
    gsap.to(linedotid07, {
        duration: 1,
        opacity: 0,
        ease: "power2.out",
        onComplete: function () {
            gsap.to(linedotid07, {
                duration: 0.5,
                opacity: 1,
                delay: 0.5,
                ease: "power2.in"
            });
        }
    });

    const linedot07 = document.getElementById('linedot07');
    gsap.to(linedot07, {
        duration: 0.5,
        opacity: 0,
        ease: "power2.out",
        onComplete: function () {
            gsap.to(linedot07, {
                duration: 0.5,
                delay: 0.5,
                opacity: 1,
                ease: "power2.in"
            });
        }
    });

    const lineoutline07 = document.getElementById('linedotoutline07');
    gsap.to(lineoutline07, {
        duration: 1,
        opacity: 0,
        ease: "power2.out",
        onComplete: function () {
            gsap.to(lineoutline07, {
                duration: 0.5,
                delay: 0.5,
                opacity: 1,
                ease: "power2.in"
            });
        }
    });

    //services sec
    const linedotid011 = document.getElementById('linedotid011');
    gsap.to(linedotid011, {
        duration: 1,
        opacity: 0,
        ease: "power2.out",
        onComplete: function () {
            gsap.to(linedotid011, {
                duration: 0.02,
                opacity: 1,
                delay: 0.02,
                ease: "power2.in"
            });
        }
    });

    const linedot011 = document.getElementById('linedot011');
    gsap.to(linedot011, {
        duration: 0.5,
        opacity: 0,
        ease: "power2.out",
        onComplete: function () {
            gsap.to(linedot011, {
                duration: 0.02,
                delay: 0.02,
                opacity: 1,
                ease: "power2.in"
            });
        }
    });

    const lineoutline011 = document.getElementById('linedotoutline011');
    gsap.to(lineoutline011, {
        duration: 1,
        opacity: 0,
        ease: "power2.out",
        onComplete: function () {
            gsap.to(lineoutline011, {
                duration: 0.02,
                delay: 0.02,
                opacity: 1,
                ease: "power2.in"
            });
        }
    });

}

// Play the animations when the page loads
playAnimations();

// Event listener for scroll event
window.addEventListener('scroll', function () {
    playAnimations(); // Replays animations on scroll
});

//
/// END home software


// home why choose
//
gsap.from(".hc-section", {
    duration: 1,
    x: -300,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".hc-section",
        start: "top 80%",
        end: "top 20%",
        scrub: true,
        markers: false,
        toggleActions: "play none none reverse",
    },
});
//
/// END home why choose


/// counter
//
gsap.from(".counter-outr", {
    duration: 1,
    y: -300,
    opacity: 0,
    stagger: 3,
    scrollTrigger: {
        trigger: ".counter-outr",
        start: "top 50%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
        toggleActions: "play reverse play reverse",
        onEnter: () => startCounting(),
    }
});
//
/// END counter


// tech animation
//
// gsap.from(".tech-owl1 .owl-carousel .item", {
//     duration: 200,
//     x: 100,
//     opacity: 0,
//     stagger: 50,
//     scrollTrigger: {
//         trigger: ".tech-owl1 .owl-carousel .item",
//         start: "top 130%",
//         end: "center 50%",
//         scrub: true,
//         markers: false,
//         toggleActions: "play reverse play reverse",
//     },
// });

// gsap.from(".tech-owl2 .owl-carousel .item", {
//     duration: 200,
//     x: -100,
//     opacity: 0,
//     stagger: 50,
//     scrollTrigger: {
//         trigger: ".tech-owl2 .owl-carousel .item",
//         start: "top 130%",
//         end: "center 50%",
//         scrub: true,
//         markers: false,
//         toggleActions: "play none none reverse",
//     },
// });
//
// END tech animation




document.addEventListener("DOMContentLoaded", function () {
    // Split text into spans (sentence-wise)
    const paragraph = document.getElementById("splitText");
    const words = paragraph.innerHTML.split(" "); // Split by words
    paragraph.innerHTML = words.map(word => `<span class="word">${word}</span>`).join(" ");

    // GSAP Animation
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".word", {
        opacity: 0.05,
        y: 20,
        stagger: 0.1, // Adds delay between each word
        duration: 0.5,
        scrollTrigger: {
            trigger: "#textSection",
            start: "center center",
            end: "+=150%",
            scrub: true,
            pin: true
        }
    });
});

///////// about page start ////////// 
// aboutus page reveal text
//

// console.clear();

// gsap.registerPlugin(SplitText, ScrollTrigger);

// let split, tl;

// const createSplit = () => {
//   split && split.revert();
//   tl && tl.revert();
//   split = new SplitText(".about-veuz-content p", {
//     type: "chars"
//   });

//   tl = gsap
//     .timeline({
//       scrollTrigger: {
//         trigger: "#textSection",
//         start: "center center",
//         end: "+=150%",
//         pin: true,
//         scrub: 0.75,
//         markers: false,
//       }
//     })
//     .set(
//       split.chars,
//       {
//         color: "rgb(255, 255, 255)",
//         stagger: 0.1
//       },
//       0.1
//     );
// };
// createSplit();
// const debouncer = gsap.delayedCall(0.2, createSplit).pause();

// window.addEventListener("resize", () => debouncer.restart(true));
//
// END aboutus page reveal text

// veuz about tech
//
gsap.from(".veuz-about-tech-inner", {
    duration: 1,
    x: 300,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".veuz-about-tech-inner",
        start: "top 80%",
        end: "top 50%",
        scrub: true,
        markers: false,
        toggleActions: "play pause resume reverse",
    },
});
//
// END veuz about tech

// last aboutus page reveal text
//
document.addEventListener("DOMContentLoaded", function () {
    // Split text into spans (sentence-wise)
    const paragraph2 = document.getElementById("splitText2");
    const words2 = paragraph2.innerHTML.split(" "); // Split by words
    paragraph2.innerHTML = words2.map(word => `<span class="word2">${word}</span>`).join(" ");

    // GSAP Animation
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".word2", {
        opacity: 0.3,
        y: 20,
        stagger: 0.1, // Adds delay between each word
        duration: 0.5,
        scrollTrigger: {
            trigger: "#textSection2",
            start: "center center",
            end: "+=150%",
            scrub: true,
            pin: true
        }
    });
});




// console.clear();
// let split2, tl2;
// const createSplit2 = () => {
//   split2 && split2.revert();
//   tl2 && tl2.revert();
//   split2 = new SplitText(".last-about-veuz p", {
//     type: "chars"
//   });

//   tl2 = gsap
//     .timeline({
//       scrollTrigger: {
//         trigger: "#textSection2",
//         start: "center center",
//         end: "+=150%",
//         pin: true,
//         scrub: 0.75,
//         markers: false,
//       }
//     })
//     .set(
//       split2.chars,
//       {
//         color: "rgb(255, 255, 255)",
//         stagger: 0.1
//       },
//       0.1
//     );
// };
// createSplit2();
// const debouncer2 = gsap.delayedCall(0.2, createSplit2).pause();

// window.addEventListener("resize", () => debouncer2.restart(true));
//
// END aboutus page reveal text


/// start about counter
//

// // about counter line anim
// const path2 = document.querySelector("#spiral-path");
// const length2 = path2.getTotalLength();
// path2.style.strokeDasharray = length2;
// path2.style.strokeDashoffset = length2;

// function startPathAnimation() {
//     gsap.fromTo(path2, 
//         { strokeDashoffset: length2 }, 
//         { strokeDashoffset: 0, duration: 5, ease: "linear" } 
//     );
// }
// gsap.to(path2, {
//     scrollTrigger: {
//         trigger: ".veuz_about_counter",
//         start: "top 50%", 
//         end: "bottom 20%",
//         toggleActions: "play none none reset", 
//         onEnter: () => startPathAnimation(),
//         onLeaveBack: () => startPathAnimation(), 
//     }
// });

// // about full counter fade
// gsap.from(".veuz_about_counter", {
//     duration: 1,
//     y: -300,
//     opacity: 0,
//     stagger: 3,
//     scrollTrigger: {
//         trigger: ".veuz_about_counter",
//         start: "top 50%",
//         end: "bottom 20%",
//         scrub: true,
//         markers: false,
//         toggleActions: "play reverse play reverse",
//         onEnter: () => startCounting(), // Start counter animation
//     }
// });

// // about start counter animation
// function startCounting() {
//     let counters = document.querySelectorAll(".counter");
//     counters.forEach((counter) => {
//         let count = 0;
//         let target = parseInt(counter.dataset.number);
//         let speed = parseInt(counter.dataset.speed);

//         function updateCounter() {
//             count++;
//             counter.innerHTML = count;
//             if (count === target) {
//                 clearInterval(stop);
//             }
//         }

//         let stop = setInterval(updateCounter, 1000 / speed);
//     });
// }

// gsap.from(".about_counter_item", {
//     y: 100,
//     opacity: 0,
//     duration: 1,
//     ease: "power2.out",
//     stagger: 0.3,  // Each item animates one after the other
//     scrollTrigger: {
//         trigger: ".about_counter_item",
//         start: "top 80%",
//         toggleActions: "play none none reset",
//         scrub: true,
//     }
// });
// // about counter circle fade
// gsap.from(".circle_about", {
//     y: 150,
//     opacity: 0,
//     duration: 1,
//     ease: "power2.out",
//     stagger: 0.3,  
//     scrollTrigger: {
//         trigger: ".circle_about",
//         start: "top 80%",
//         toggleActions: "play none none reset",
//         scrub: true,
//     }
// });
// // about counter line fade
// gsap.from(".line_before_circle", {
//     y: 150,
//     opacity: 0,
//     duration: 1,
//     ease: "power2.out",
//     stagger: 0.3,  
//     scrollTrigger: {
//         trigger: ".line_before_circle",
//         start: "top 80%",
//         toggleActions: "play none none reset",
//         scrub: true,
//     }
// });


document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    // Path Animation for Spiral
    const path2 = document.querySelector("#spiral-path");
    const length2 = path2.getTotalLength();
    path2.style.strokeDasharray = length2;
    path2.style.strokeDashoffset = length2;

    gsap.fromTo(
        path2, {
            strokeDashoffset: length2
        }, {
            strokeDashoffset: 0,
            duration: 5,
            ease: "linear",
            scrollTrigger: {
                trigger: ".veuz_about_counter",
                start: "top 50%",
                end: "bottom 20%",
                scrub: false,
                toggleActions: "play none none reset",
            },
        }
    );

    // Fade-in Animation for Section
    gsap.from(".veuz_about_counter", {
        duration: 1,
        y: -300,
        opacity: 0,
        scrollTrigger: {
            trigger: ".veuz_about_counter",
            start: "top 50%",
            end: "bottom 20%",
            toggleActions: "play none none reset",
        },
    });

    // Counter Animation (Fixed)
    function startCounting() {
        let counters = document.querySelectorAll(".counter");

        counters.forEach((counter) => {
            let count = 0;
            let target = parseInt(counter.dataset.number);
            let speed = parseInt(counter.dataset.speed);

            if (!counter.dataset.animated) {
                counter.dataset.animated = "true"; // Prevent multiple triggers
                let interval = setInterval(() => {
                    count++;
                    counter.innerHTML = count;
                    if (count >= target) clearInterval(interval);
                }, 1000 / speed);
            }
        });
    }

    ScrollTrigger.create({
        trigger: ".veuz_about_counter",
        start: "top 60%",
        onEnter: startCounting,
    });

    // Staggered Fade-in for Counter Items
    gsap.from(".about_counter_item", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.3,
        scrollTrigger: {
            trigger: ".about_counter_wrapper",
            start: "top 80%",
            toggleActions: "play none none reset",
        },
    });

    // Fade-in for Circles
    gsap.from(".circle_about", {
        y: 150,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.3,
        scrollTrigger: {
            trigger: ".veuz_about_counter",
            start: "top 30%",
            toggleActions: "play reverse play reverse",
        },
    });

    // Fade-in for Lines
    gsap.from(".line_before_circle", {
        y: 150,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.3,
        scrollTrigger: {
            trigger: ".veuz_about_counter",
            start: "top 40%",
            toggleActions: "play reverse play reverse",
        },
    });
});

// veuz contact us page
//
gsap.from(".contact-page", {
    y: 300,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".contact-page",
        start: "top 80%",
        toggleActions: "play none none reset",
    },
});
//
// END veuz contact us page

// veuz contact us page address
//
// gsap.from(".contact-address-left-items", {
//     duration: 300,
//     x: 100,
//     opacity:0,
//     stagger: 50,
//     scrollTrigger: {
//       trigger: ".contact-address-left-items",
//       start: "top 130%",
//       end:"center 50%",
//       scrub: true, 
//       markers: false,
//       toggleActions: "play reverse play reverse",
//     },
// });
//
// END veuz contact us page address


// veuz career openings
//
gsap.from(".career_openings_items", {
    duration: 300,
    x: 100,
    opacity: 0,
    stagger: 50,
    scrollTrigger: {
        trigger: ".career_openings_items",
        start: "top 80%",
        end: "center 30%",
        scrub: true,
        markers: false,
        toggleActions: "play reverse play reverse",
    },
});
//
// END veuz career openings

// veuz career openings
//
// gsap.from(".left-timeline", {
//     duration: 1,
//     x: 300,
//     opacity: 0,
//     stagger: 0.3,
//     scrollTrigger: {
//       trigger: ".left-timeline",
//       start: "top 80%",
//       end: "top 20%",
//       scrub: true, 
//       markers: false,
//       toggleActions: "play none none reverse",
//     },
//   });

// gsap.from(".contact-address-left-items", {
//     duration: 1,
//     y: 50,
//     opacity: 0,
//     stagger: 0.3, 
//     ease: "power2.out",
//     scrollTrigger: {
//       trigger: ".contact-address-items",
//       start: "top 60%",
//       toggleActions: "play reverse play reverse",
//     }
// });

//
// END veuz career openings


// services
//
gsap.from(".main-service-center", {
    duration: 1,
    opacity: 0,
    scale: 0.8,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".main-services",
        start: "top 70%",
        toggleActions: "play reverse play reverse",
    }
});

gsap.from(".service_icon_item", {
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.3,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".main-services",
        start: "top 60%",
        toggleActions: "play none none reset",
    }
});

gsap.from(".service_listing_items", {
    duration: 300,
    x: 100,
    opacity: 0,
    stagger: 50,
    scrollTrigger: {
        trigger: ".service_listing_items",
        start: "top 80%",
        end: "center 30%",
        scrub: true,
        markers: false,
        toggleActions: "play reverse play reverse",
    },
});

gsap.from(".service_footer_item", {
    duration: 1,
    y: -300,
    opacity: 0,
    stagger: 3,
    scrollTrigger: {
        trigger: ".service_footer_item",
        start: "top 50%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
        toggleActions: "play reverse play reverse",
        onEnter: () => startCounting(),
    }
});

// image
// document.addEventListener("DOMContentLoaded", function () {
//     gsap.from(".service_banner_image", {
//     x: 300,  
//     opacity: 0, 
//     duration: 1.5, 
//     ease: "power3.out" 
//     });
// });

gsap.from(".service_banner_image", {
    x: 300,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".service_banner_image",
        start: "top 80%",
        toggleActions: "play none none reset",
    },
});

// 
// END services


// service details
//
gsap.from(".service-dtls-single-banner", {
    duration: 1,
    y: -300,
    opacity: 0,
    stagger: 3,
    scrollTrigger: {
        trigger: ".service-dtls-single-banner",
        start: "top 50%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
        toggleActions: "play reverse play reverse",
        onEnter: () => startCounting(),
    }
});

gsap.from(".service-dtls-first-dtls-out", {
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.3,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".service-dtls-first-dtls-out",
        start: "top 60%",
        toggleActions: "play none none reverse",
    }
});

gsap.from(".service-dtls-second-dtls-out", {
    duration: 1,
    y: -200,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".service-dtls-second-dtls-out",
        start: "top 50%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
        toggleActions: "play reverse play reverse",
    }
});

// accordion first
gsap.from(".service-dtls-third-img", {
    duration: 1,
    x: -100,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".service-dtls-third-img",
        start: "top 90%",
        end: "bottom 50%",
        scrub: true,
        markers: false,
        toggleActions: "play reverse play reverse",
    }
});
gsap.from(".right-service-dtls-third", {
    duration: 1,
    x: 100,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".right-service-dtls-third",
        start: "top 90%",
        end: "bottom 50%",
        scrub: true,
        markers: false,
        toggleActions: "play reverse play reverse",
    }
});

// service dtls tech item
gsap.from(".service-dtls-tech1 .service-dtls-tech-item", {
    duration: 1,
    x: 100,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".service-dtls-tech1 .service-dtls-tech-item",
        start: "top 80%",
        end: "top 20%",
        scrub: true,
        markers: false,
        toggleActions: "play none none reverse",
    },
});
gsap.from(".service-dtls-tech2 .service-dtls-tech-item", {
    duration: 1,
    x: 100,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".service-dtls-tech2 .service-dtls-tech-item",
        start: "top 80%",
        end: "top 20%",
        scrub: true,
        markers: false,
        toggleActions: "play none none reverse",
    },
});
gsap.from(".service-dtls-tech3 .service-dtls-tech-item", {
    duration: 1,
    x: 100,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".service-dtls-tech3 .service-dtls-tech-item",
        start: "top 80%",
        end: "top 20%",
        scrub: true,
        markers: false,
        toggleActions: "play none none reverse",
    },
});
gsap.from(".service-dtls-tech4 .service-dtls-tech-item", {
    duration: 1,
    x: 100,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".service-dtls-tech4 .service-dtls-tech-item",
        start: "top 80%",
        end: "top 20%",
        scrub: true,
        markers: false,
        toggleActions: "play none none reverse",
    },
});

// accordion second
gsap.from(".service-dtls-four-top", {
    duration: 1,
    x: -100,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".service-dtls-four-top",
        start: "top 90%",
        end: "bottom 50%",
        scrub: true,
        markers: false,
        toggleActions: "play reverse play reverse",
    }
});
gsap.from(".right-service-dtls-four-cont", {
    duration: 1,
    x: 100,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".right-service-dtls-four-cont",
        start: "top 90%",
        end: "bottom 50%",
        scrub: true,
        markers: false,
        toggleActions: "play reverse play reverse",
    }
});

gsap.from(".service_dtls_footer_item", {
    duration: 1,
    y: -300,
    opacity: 0,
    stagger: 3,
    scrollTrigger: {
        trigger: ".service_dtls_footer_item",
        start: "top 50%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
        toggleActions: "play reverse play reverse",
        onEnter: () => startCounting(),
    }
});

//
// END service details

//tech page
//
gsap.from(".tech-page-page .tech-page-page-one", {
    duration: 1, 
    x: 300,
    opacity: 0,
    stagger: 0.3, 
    ease: "power2.out", 
    scrollTrigger: {
        trigger: ".tech-page-page .tech-page-page-one",
        start: "top 60%", 
        end: "bottom 40%", 
        scrub: 1, 
        markers: false,
        toggleActions: "play reverse play reverse",
        onEnter: () => startCounting(),
    }
});

gsap.from(".tech-page-page .tech-page-page-two", {
    duration: 1, 
    x: -300,
    opacity: 0,
    stagger: 0.3, 
    ease: "power2.out", 
    scrollTrigger: {
        trigger: ".tech-page-page .tech-page-page-two",
        start: "top 60%", 
        end: "bottom 40%", 
        scrub: 1, 
        markers: false,
        toggleActions: "play reverse play reverse",
        onEnter: () => startCounting(),
    }
});

gsap.from(".tech-page-page .tech-page-page-three", {
    duration: 1, 
    x: 300,
    opacity: 0,
    stagger: 0.3, 
    ease: "power2.out", 
    scrollTrigger: {
        trigger: ".tech-page-page .tech-page-page-three",
        start: "top 60%", 
        end: "bottom 20%", 
        scrub: 1, 
        markers: false,
        toggleActions: "play reverse play reverse",
        onEnter: () => startCounting(),
    }
});
//
// END tech page

// blog
//
gsap.from(".blog-category-item", {
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.3,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".blog-category-cont",
        start: "top 60%",
        toggleActions: "play none none reverse",
    }
});

gsap.from(".blog-listing-items", {
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.3,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".blog-listing-items-out",
        start: "top 60%",
        toggleActions: "play reverse play reverse",
    }
});

gsap.from(".related-blogs", {
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.3,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".right-blog-in",
        start: "top 60%",
        toggleActions: "play reverse play reverse",
    }
});

gsap.from(".ft-list-blog", {
    duration: 300,
    x: 100,
    opacity: 0,
    stagger: 50,
    scrollTrigger: {
        trigger: ".ft-list-blog",
        start: "top 80%",
        end: "center 30%",
        scrub: true,
        markers: false,
        toggleActions: "play reverse play reverse",
    },
});
//
// END blog


// blog details
//
gsap.from(".blog-detail-left-cont-out", {
    duration: 1,
    x: -300,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".blog-detail-left-cont-out",
        start: "top 80%",
        end: "top 10%",
        scrub: true,
        markers: false,
        toggleActions: "play none none reverse",
    },
});

gsap.from(".blog-form-top", {
    duration: 1,
    x: 300,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".blog-form-top",
        start: "top 90%",
        end: "top 10%",
        scrub: true,
        markers: false,
        toggleActions: "play none none reverse",
    },
});

//
// END blog details






//   // scroller-smooth
//     const lenis = new Lenis()
//     lenis.on('scroll', (e) => {
//     console.log(e)
//     })

//     lenis.on('scroll', ScrollTrigger.update)

//     gsap.ticker.add((time)=>{
//     lenis.raf(time * 300)
//     })
//     gsap.ticker.lagSmoothing(0)
// // close