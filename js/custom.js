gsap.registerPlugin(ScrollTrigger);

// Animation for circle1
gsap.to("#circle1", {
    x: -10,
    duration: 1,
    scrollTrigger: {
        trigger: "#circle1",
        start: "top center",
        end: "bottom center",
        scrub: true,
        animation: gsap.fromTo("#circle1", { x: -10 }, { x: 10, duration: 2, ease: "none", repeat: -1, yoyo: true })
    }
});

// Animation for circle2
gsap.to("#circle2", {
    x: -15,
    duration: 1.5,
    scrollTrigger: {
        trigger: "#circle2",
        start: "top center",
        end: "bottom center",
        scrub: true,
        animation: gsap.fromTo("#circle2", { x: -15 }, { x: 15, duration: 2.5, ease: "none", repeat: -1, yoyo: true })
    }
});

// Animation for circle3
gsap.to("#circle3", {
    x: -20,
    duration: 2,
    scrollTrigger: {
        trigger: "#circle3",
        start: "top center",
        end: "bottom center",
        scrub: true,
        animation: gsap.fromTo("#circle3", { x: -20 }, { x: 20, duration: 3, ease: "none", repeat: -1, yoyo: true })
    }
});

// Animation for circle4
gsap.to("#circle4", {
    x: 10,
    duration: 2.5,
    scrollTrigger: {
        trigger: "#circle4",
        start: "top center",
        end: "bottom center",
        scrub: true,
        animation: gsap.fromTo("#circle4", { x: 10 }, { x: -10, duration: 3.5, ease: "none", repeat: -1, yoyo: true })
    }
});
// round2
gsap.to("#d-circle1", {
    x: -10,
    duration: 1,
    scrollTrigger: {
        trigger: "#d-circle1",
        start: "top center",
        end: "bottom center",
        scrub: true,
        animation: gsap.fromTo("#d-circle1", { x: -10 }, { x: 10, duration: 2, ease: "none", repeat: -1, yoyo: true })
    }
});

// Animation for circle2
gsap.to("#d-circle2", {
    x: -15,
    duration: 1.5,
    scrollTrigger: {
        trigger: "#d-circle2",
        start: "top center",
        end: "bottom center",
        scrub: true,
        animation: gsap.fromTo("#d-circle2", { x: -15 }, { x: 15, duration: 2.5, ease: "none", repeat: -1, yoyo: true })
    }
});
// Animation for circle3


// logo svg
gsap.fromTo("#maintag_path", {
    y: -100,           // Start position above the view
    opacity: 0         // Start as invisible
}, {
    duration: 1.5,      // Duration of each cycle (1.5 seconds)
    y: 0,               // Final position (actual position)
    opacity: 1,         // Fade in as it moves down
    ease: "power2.out", // Easing for smooth animation
});

gsap.fromTo("#maintag_path2", {
    y: 100,             // Start position below the view
    opacity: 0          // Start as invisible
}, {
    duration: 1.5,      // Duration of each cycle (1.5 seconds)
    y: 0,               // Final position (actual position)
    opacity: 1,         // Fade in as it moves up
    ease: "power2.out", // Easing for smooth animation
});
// closw


const path2 = document.querySelector("#banner-centerline");
const length2 = path2.getTotalLength();
path2.style.strokeDasharray = length2;
path2.style.strokeDashoffset = length2;
gsap.to(path2, {
    strokeDashoffset: 0,
    duration: 5,
    ease: "linear",
    onComplete: function () {
        gsap.to(path2, {
            x: 10,
            y: 10,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }
});

const path3 = document.querySelector("#lineleft_draw");
const length3 = path3.getTotalLength();
path3.style.strokeDasharray = length3;
path3.style.strokeDashoffset = length3;
gsap.to(path3, {
    strokeDashoffset: 0,
    duration: 5,
    ease: "linear",
    onComplete: function () {
        gsap.to(path3, {
            x: 10,
            y: 10,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }
});

// Function to play the animations
function playAnimations() {
    const line = document.getElementById('dot02');
    gsap.to(line, {
        duration: 0.5,
        opacity: 0,
        delay: 1,
        ease: "power2.out",
        onComplete: function () {
            gsap.to(line, {
                duration: 1.5,
                opacity: 1,
                ease: "power2.in"
            });
        }
    });

    const line2 = document.getElementById('dotoutline02');
    gsap.to(line2, {
        duration: 1,
        delay: 1,
        opacity: 0,
        ease: "power2.out",
        onComplete: function () {
            gsap.to(line2, {
                duration: 1,
                opacity: 1,
                ease: "power2.in"
            });
        }
    });

    const line3 = document.getElementById('lineid2');
    gsap.to(line3, {
        duration: 1,
        opacity: 0,
        ease: "power2.out",
        onComplete: function () {
            gsap.to(line3, {
                duration: 0.5,
                opacity: 1,
                delay: 2,
                ease: "power2.in"
            });
        }
    });

    const line4 = document.getElementById('text02');
    gsap.to(line4, {
        duration: 1,
        ease: "power2.out",
        onComplete: function () {
            gsap.to(line4, {
                delay: 3,
                duration: 0.5,
                opacity: 2,
                ease: "none"
            });
        }
    });

    const line5 = document.getElementById('text01');
    gsap.to(line5, {
        duration: 1,
        ease: "power2.out",
        onComplete: function () {
            gsap.to(line5, {
                delay: 1.5,
                duration: 0.5,
                opacity: 2,
                ease: "none"
            });
        }
    });

    const line6 = document.getElementById('lineid1');
    gsap.to(line6, {
        duration: 1,
        opacity: 0,
        ease: "power2.out",
        onComplete: function () {
            gsap.to(line6, {
                duration: 0.5,
                opacity: 1,
                delay: 0.5,
                ease: "power2.in"
            });
        }
    });

    const line7 = document.getElementById('dot01');
    gsap.to(line7, {
        duration: 0.5,
        opacity: 0,
        ease: "power2.out",
        onComplete: function () {
            gsap.to(line7, {
                duration: 1.5,
                opacity: 1,
                ease: "power2.in"
            });
        }
    });

    const line8 = document.getElementById('dotoutline01');
    gsap.to(line8, {
        duration: 1,
        opacity: 0,
        ease: "power2.out",
        onComplete: function () {
            gsap.to(line8, {
                duration: 1,
                opacity: 1,
                ease: "power2.in"
            });
        }
    });

    // text3

    const line9 = document.getElementById('text03');
    gsap.to(line9, {
        duration: 1,
        ease: "power2.out",
        onComplete: function () {
            gsap.to(line9, {
                delay: 4,
                duration: 0.5,
                opacity: 2,
                ease: "none"
            });
        }
    });

    const line10 = document.getElementById('lineid3');
    gsap.to(line10, {
        duration: 1,
        opacity: 0,
        ease: "power2.out",
        onComplete: function () {
            gsap.to(line10, {
                duration: 0.5,
                opacity: 1,
                delay: 3,
                ease: "power2.in"
            });
        }
    });

    const line11 = document.getElementById('dot03');
    gsap.to(line11, {
        duration: 0.5,
        opacity: 0,
        ease: "power2.out",
        onComplete: function () {
            gsap.to(line11, {
                duration: 1.5,
                delay: 2,
                opacity: 1,
                ease: "power2.in"
            });
        }
    });

    const line12 = document.getElementById('dotoutline03');
    gsap.to(line12, {
        duration: 1,
        opacity: 0,
        ease: "power2.out",
        onComplete: function () {
            gsap.to(line12, {
                duration: 1,
                delay: 2,
                opacity: 1,
                ease: "power2.in"
            });
        }
    });

    

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
                duration: 0.5,
                delay: 0.5,
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
                duration: 0.5,
                delay: 0.5,
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


// text-slider-anim

const headlines = [
    "Ultimate Digital <br> Experience1",
    "Ultimate Digital <br> Experience11",
    "Ultimate Digital <br> Experience111"
];

const descriptions = [
    "Comprehensive range of tech services and solutions that helps you get ahead in the digital age.",
    "Comprehensive range of tech services and solutions that helps you get ahead in the digital age.",
    "Comprehensive range of tech services and solutions that helps you get ahead in the digital age."
];

const headlines2 = [
    "Ultimate Digital <br> Experience2",
    "Ultimate Digital <br> Experience22",
    "Ultimate Digital <br> Experience222"
];

const descriptions2 = [
    "Comprehensive range of tech services and solutions that helps you get ahead in the digital age.",
    "Comprehensive range of tech services and solutions that helps you get ahead in the digital age.",
    "Comprehensive range of tech services and solutions that helps you get ahead in the digital age."
];

const headlines3 = [
    "Ultimate Digital <br> Experience3",
    "Ultimate Digital <br> Experience33",
    "Ultimate Digital <br> Experience333"
];

const descriptions3 = [
    "Comprehensive range of tech services and solutions that helps you get ahead in the digital age.",
    "Comprehensive range of tech services and solutions that helps you get ahead in the digital age.",
    "Comprehensive range of tech services and solutions that helps you get ahead in the digital age."
];

const headline = document.getElementById('headline');
const description = document.getElementById('description');
const headline2 = document.getElementById('headline2');
const description2 = document.getElementById('description2');
const headline3 = document.getElementById('headline3');
const description3 = document.getElementById('description3');

let currentIndex = 0;

function changeText() {
    gsap.to([headline, description], {
        duration: 1, opacity: 0, onComplete: () => {
            headline.innerHTML = headlines[currentIndex];
            description.textContent = descriptions[currentIndex];
            gsap.to([headline, description], { duration: 1, opacity: 1 });
        }
    });

    gsap.to([headline2, description2], {
        duration: 2, opacity: 0, onComplete: () => {
            headline2.innerHTML = headlines2[currentIndex];
            description2.textContent = descriptions2[currentIndex];
            gsap.to([headline2, description2], { duration: 1, opacity: 1 });
        }
    });

    gsap.to([headline3, description3], {
        duration: 3, opacity: 0, onComplete: () => {
            headline3.innerHTML = headlines3[currentIndex];
            description3.textContent = descriptions3[currentIndex];
            gsap.to([headline3, description3], { duration: 1, opacity: 1 });
        }
    });

    if (currentIndex === 0) {
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % headlines.length;
            changeText();
        }, 10000); // Show each headline for 20 seconds
    } else {
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % headlines.length;
            changeText();
        }, 7000); // Show each headline after 7 seconds
    }
}

changeText(); // Initial call


// close


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
                    .to(bar1, 0.35, { x: 12, ease: Power1.easeOut }, "one")
                    .to(bar3, 0.35, { x: -16, ease: Power1.easeOut }, "one");
            }
        }
    }
    function menuOut() {
        if (!isChangingState) {
            menuTL.clear();
            if (!isOpen) {
                menuTL
                    .to(bar1, 0.35, { x: 0, ease: Power1.easeOut }, "one")
                    .to(bar3, 0.35, { x: 0, ease: Power1.easeOut }, "one");
            }
        }
    }
    function showCloseMenu() {
        menuTL.clear();
        menuTL
            .to(bar1, 0.2, { opacity: 0 }, "close")
            .to(bar2, 0.2, { opacity: 0 }, "close")
            .to(bar3, 0.2, {
                opacity: 0, onComplete: function () {
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
            .to(bar2, 0.2, { opacity: 1 })
            .to(bar3, 0.2, {
                opacity: 1, onComplete: function () {
                    isChangingState = false;
                    isOpen = false;
                }
            }, "open")
            .to(bar1, 0.2, { opacity: 1, delay: -0.2 });
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
var menuAnimation = new TimelineMax({ paused: true });
var menuAnimationBack = new TimelineMax({ paused: true });
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


gsap.set(".ham-menu-links a", { opacity: 0 });

menuAnimation
    .to(".ham-menu-links a", {
        opacity: 1,
        stagger: 0.3,
        duration: 0.3,
        ease: "circ.out",
        y: -20
    });





// about start here

/// about scroll section
document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);
    const splitTypes = document.querySelectorAll('.reveal-type');
    splitTypes.forEach((char) => {
        const bg = char.dataset.bgColor;
        const fg = char.dataset.fgColor;

        const text = new SplitType(char, { types: 'chars' });

        const tlText = gsap.timeline({
            scrollTrigger: {
                trigger: char,
                start: 'center center',
                end: '+=500', 
                scrub: 0.5,
                pin: true,
                pinSpacing: false,
                markers: false // start end
            }
        });

        tlText.fromTo(
            text.chars,
            { color: bg },
            {
                color: fg, 
                duration: 0.3,
                stagger: 0.05,
                ease: 'power2.out'
            }
        )
        .to(char, { opacity: 0, 
            duration: 0.5,
            ease: 'power2.in' });
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

        const splitHeading = new SplitType(heading, { type: 'chars' });
        const splitParagraph = new SplitType(paragraph, { type: 'words' });

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
            .fromTo(splitHeading.chars, { opacity: 0, y: 50 }, {
                opacity: 1,
                y: 0,
                stagger: 0.1,
                duration: 1.5,
                ease: 'power2.out'
            })
            .fromTo(videos, { opacity: 0, scale: 0.8 }, {
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: 'power3.out'
            }, '-=0.5')
            .fromTo(splitParagraph.words, { opacity: 0, y: 30 }, {
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



document.addEventListener('DOMContentLoaded', () => {
    const zoom3 = document.querySelector('#zoom-3');
    const animShadow = document.querySelector('.anim-shadow');
  
    const spacing = 100; 
    animShadow.style.marginTop = `${zoom3.offsetHeight + spacing}px`;
});


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


// home software
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


// counting
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

// Function to start counting
function startCounting() {
    let counter = document.querySelectorAll(".counter");
    let arr = Array.from(counter);
  
    arr.map((item) => {
      let count = 0;
      function CounterUp() {
        count++;
        item.innerHTML = count;
        if (count == item.dataset.number) {
          clearInterval(stop);
        }
      }
      let stop = setInterval(function () {
        CounterUp();
      }, 5000 / item.dataset.speed);
    });
  }


// home software icon click
function showContent(sectionId) {
    const sections = document.querySelectorAll('.left-hm-software.content');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    const selectedSection = document.getElementById(sectionId);
    const extraSection = document.getElementById(`extra-${sectionId.split('-')[1]}`);
    if (selectedSection) selectedSection.classList.add('active');
    if (extraSection) extraSection.classList.add('active');
}


// scroller-smooth/* <!-- ==================== Wheel ==================== --> */

// gsap.registerPlugin(ScrollTrigger);

// let wheel = document.querySelector(".wheel"),
//     images = gsap.utils.toArray(".wheel__card");
// bannerImage = document.querySelector(".banner-glass-ab img");

// function setup() {
//   let radius = wheel.offsetWidth / 2,
//     center = radius,
//     slice = 360 / images.length,
//     DEG2RAD = Math.PI / 180;
//   gsap.set(images, {
//     x: i => center + radius * Math.sin(i * slice * DEG2RAD),
//     y: i => center - radius * Math.cos(i * slice * DEG2RAD),
//     rotation: i => i * slice,
//     xPercent: -50,
//     yPercent: -50
//   });
// }

// setup();

// window.addEventListener("resize", setup);

// // Rotate wheel on scroll
// ScrollTrigger.create({
//   trigger: ".wheel",
//   start: "top bottom",
//   end: "bottom top",
//   scrub: 2,
//   onUpdate: self => {

//     gsap.to(wheel, {
//       rotation: -360 * self.progress,
//       ease: "none",
//       overwrite: true,
//     });
//   },
// });









// // rotation
// $(window).scroll(function() {
//     var theta = $(window).scrollTop() / 600 % Math.PI;
//     $('#logo').css({ transform: 'rotate(' + theta + 'rad)' });
// });

// // left to right rotation
// $(window).scroll(function() {
//     var theta = ($(window).scrollTop() / 5) % 360; // Adjust speed by changing divisor
//     $('#logo').css({ transform: 'rotateY(' + theta + 'deg)' });
// });

// // correct rotation
// $(window).scroll(function() {
//     var scrollPos = $(window).scrollTop();
//     var totalImages = 21; // Number of images
//     var index = Math.floor((scrollPos / 100) % totalImages); // Change image every 100px scroll
//     $('#logo').attr('src', 'images/services/logo-' + index + '.png'); // Assuming your images are named logo-0.png, logo-1.png, etc.
// });

// // service banner image rotation when the window scroll
// $(window).scroll(function() {
//     var scrollPos = $(window).scrollTop();
//     var totalImages = 21; // Total images
//     var index = Math.floor((scrollPos / 50) % totalImages); // Change image every 100px scroll

//     var newSrc = 'images/services/logo-' + index + '.png';

//     if ($('#logo').attr('src') !== newSrc) {  
//         $('#logo').fadeOut(50, function() { // Adjust 100ms for smooth effect
//             $(this).attr('src', newSrc).fadeIn(50);
//         });
//     }
// });

// // custom input slider
// const slider = document.getElementById("customSlider");
// const output = document.getElementById("sliderValue");

// slider.addEventListener("input", function() {
//     output.innerText = this.value;
//     let percent = (this.value / this.max) * 100;
//     this.style.background = `linear-gradient(to right, #00bcd4 ${percent}%, #666 ${percent}%)`;
// });







// last head and scrolltrigger rotate when page refresh change value
// document.addEventListener("DOMContentLoaded", function () {
//     const slider = document.getElementById("customSlider");
//     const output = document.getElementById("sliderValue");
//     const logo = document.getElementById("logo");

//     let totalImages = 21; // Total images

//     // Reset slider value on refresh
//     localStorage.removeItem("sliderValue");
//     slider.value = 0;
//     output.innerText = 0;

//     // Set initial image to the first one
//     logo.src = `images/services/logo-0.png`;

//     slider.addEventListener("input", function () {
//         let value = this.value;
//         output.innerText = value;

//         // Store the value in localStorage
//         localStorage.setItem("sliderValue", value);

//         // Calculate the corresponding image index
//         let index = Math.floor((value / this.max) * (totalImages - 1)); 
//         let newSrc = `images/services/logo-${index}.png`; 

//         // Change the logo image only if it's different
//         if (logo.getAttribute("src") !== newSrc) {
//             $(logo).fadeOut(50, function () {
//                 $(this).attr("src", newSrc).fadeIn(50);
//             });
//         }

//         // Update slider background dynamically
//         let percent = (value / this.max) * 100;
//         this.style.background = `linear-gradient(to right, #00bcd4 ${percent}%, #666 ${percent}%)`;
//     });
// });



/* <!-- ==================== END Wheel ==================== --> */



gsap.registerPlugin(ScrollTrigger);

let wheel = document.querySelector(".wheel"),
    images = gsap.utils.toArray(".wheel__card"),
    bannerImage = document.querySelector(".banner-glass-ab img"),
    slider = document.getElementById("customSlider"),
    output = document.getElementById("sliderValue"),
    logo = document.getElementById("logo");

let totalImages = 21; // Total images

// Function to set up the circular wheel layout
function setupWheel() {
  let radius = wheel.offsetWidth / 2,
      center = radius,
      slice = 360 / images.length,
      DEG2RAD = Math.PI / 180;
  
  gsap.set(images, {
    x: i => center + radius * Math.sin(i * slice * DEG2RAD),
    y: i => center - radius * Math.cos(i * slice * DEG2RAD),
    rotation: i => i * slice,
    xPercent: -50,
    yPercent: -50
  });
}

setupWheel();
window.addEventListener("resize", setupWheel);

// GSAP ScrollTrigger to rotate wheel and update slider
ScrollTrigger.create({
  trigger: ".wheel",
  start: "top bottom",
  end: "bottom top",
  scrub: 2,
  onUpdate: self => {
    let rotationValue = -360 * self.progress;
    
    // Rotate the wheel
    gsap.to(wheel, {
      rotation: rotationValue,
      ease: "none",
      overwrite: true,
    });

    // Update slider value dynamically
    let sliderValue = Math.floor(self.progress * slider.max);
    slider.value = sliderValue;
    output.innerText = sliderValue;

    // Update image based on scroll position
    let index = Math.floor((sliderValue / slider.max) * (totalImages - 1));
    let newSrc = `images/services/logo-${index}.png`;

    if (logo.getAttribute("src") !== newSrc) {
      gsap.to(logo, { opacity: 1, duration: 0.1, onComplete: function () {
        logo.src = newSrc;
        gsap.to(logo, { opacity: 1, duration: 0.1 });
      }});
    }

    // Update slider track color dynamically
    let percent = (sliderValue / slider.max) * 100;
    slider.style.background = `linear-gradient(to right, #00bcd4 ${percent}%, #666 ${percent}%)`;
  }
});

// Custom Slider Event (Works independently)
slider.addEventListener("input", function () {
    let value = this.value;
    output.innerText = value;

    // Calculate the corresponding image index
    let index = Math.floor((value / this.max) * (totalImages - 1)); 
    let newSrc = `images/services/logo-${index}.png`; 

    // Change the logo image only if it's different
    if (logo.getAttribute("src") !== newSrc) {
        gsap.to(logo, { opacity: 0, duration: 0.1, onComplete: function () {
            logo.src = newSrc;
            gsap.to(logo, { opacity: 1, duration: 0.1 });
        }});
    }

    // Update wheel rotation based on slider input
    let newRotation = -(value / this.max) * 360;
    gsap.to(wheel, { rotation: newRotation, duration: 0.5, ease: "power1.out" });

    // Update slider track color dynamically
    let percent = (value / this.max) * 100;
    this.style.background = `linear-gradient(to right, #00bcd4 ${percent}%, #9b9b9bad ${percent}%)`;
});


        // $(document).ready(function(){
        //     $(".owl-carousel").owlCarousel({
        //         loop:true,
        //         margin:10,
        //         nav:true,
        //         autoplay: false,
        //         center:true,
        //         responsive:{
        //             0:{
        //                 items:1
        //             },
        //             600:{
        //                 items:2
        //             },
        //             1000:{
        //                 items:3
        //             }
        //         },

        //         // onTranslated: function(event) {
        //         //     $('.item').removeClass('centered');
        //         //     var currentIndex = event.item.index + Math.ceil(event.item.count / 3) - 1;
        //         //     $('.owl-item').eq(currentIndex).find('.item').addClass('centered');
        //         // }

        //         onTranslated: function(event) {
        //             $('.item').removeClass('centered');
        //             var currentIndex = event.item.index + Math.ceil(event.item.count / 3) - 1;
        //             $('.owl-item').each(function(index) {
        //                 if (index === currentIndex) {
        //                     $(this).find('.item').addClass('centered');
        //                     $(this).find('.item').css('margin-top', '0px');
        //                 } else {
        //                     $(this).find('.item').addClass('other-centered');
        //                     $(this).find('.item').css('margin-top', '50px');
        //                 }
        //             });
        //         }

        //     });
        // });



    





// tech animation
gsap.from(".tech-owl1 .owl-carousel .item", {
    duration: 200,
    x: 100,
    opacity:0,
    stagger: 50,
    scrollTrigger: {
      trigger: ".tech-owl1 .owl-carousel .item",
      start: "top 130%",
      end:"center 50%",
      scrub: true, 
      markers: false,
      toggleActions: "play reverse play reverse",
    },
  });

  gsap.from(".tech-owl2 .owl-carousel .item", {
    duration: 200,
    x: -100,
    opacity:0,
    stagger: 50,
    scrollTrigger: {
      trigger: ".tech-owl2 .owl-carousel .item",
      start: "top 130%",
      end:"center 50%",
      scrub: true, 
      markers: false,
      toggleActions: "play none none reverse",
    },
  });

  // product-slider
  $('.tech-owl1 .owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    autoplay: true,
    // autoplayHoverPause: true,
    autoplaySpeed: 2000,
    infinite: true,
    responsive: {
      0: {
        items: 1
      },
      780: {
        items: 2
      },
      900: {
        items: 2
      },
      1000: {
        items: 3
      },
      1300: {
        items: 3
      }
    }
  })
  // close


  $('.tech-owl2 .owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    rtl:true,
    autoplay: true,
    // autoplayHoverPause: true,
    autoplaySpeed: 2000,
    infinite: true,
    responsive: {
      0: {
        items: 1
      },
      780: {
        items: 2
      },
      900: {
        items: 2
      },
      1000: {
        items: 3
      },
      1300: {
        items: 3
      }
    }
  })
  
  // close



  $('.client-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    rtl:true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      780: {
        items: 2
      },
      900: {
        items: 2
      },
      1000: {
        items: 3
      },
      1300: {
        items: 5.5
      }
    }
  })











