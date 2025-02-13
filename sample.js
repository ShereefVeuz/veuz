

<!-- id="header-zoom" -->
        <section id="header-zoom" class="about-zoom-sec">
            <div class="container">

                <div class="abt-f1" id="zoom-1">
                    <div class="abt-f1-cont">
                        <h2 class="reveal-heading">Designs</h2>
                    </div>
                    <div class="col-md-12 abt-f1-cont-out">
                        <div class="row justify-content-center align-items-center">
                            <div class="col-md-7 left-abt-f1">
                                <!-- <div class="image image-1">
                                    <img src="images/about/011.png" alt="veuz-concepts">
                                </div> -->
                                <div class="video-wrapper">
                                    <video class="video-element" autoplay muted loop>
                                        <source src="images/about/Desktop 3.webm" type="video/mp4">
                                      Your browser does not support the video tag.
                                    </video>
                                </div> 
                            </div>
                            <div class="col-md-5 right-abt-f1">
                                <div class="content">
                                    <p class="reveal">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="abt-f1" id="zoom-2">
                    <div class="abt-f1-cont">
                        <h2 class="reveal-heading">Words</h2>
                    </div>
                    <div class="col-md-12 abt-f1-cont-out">
                        <div class="row justify-content-center align-items-center">
                            <div class="col-md-7 left-abt-f1">
                                <!-- <div class="image image-1">
                                    <img src="images/about/022.png" alt="veuz-concepts">
                                </div> -->
                                <div class="video-wrapper">
                                    <video class="video-element" autoplay muted loop>
                                        <source src="images/about/Desktop 3.webm" type="video/mp4">
                                      Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                            <div class="col-md-5 right-abt-f1">
                                <div class="content">
                                    <p class="reveal">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="abt-f1" id="zoom-3">
                    <div class="abt-f1-cont">
                        <h2 class="reveal-heading">Codes</h2>
                    </div>
                    <div class="col-md-12 abt-f1-cont-out">
                        <div class="row justify-content-center align-items-center">
                            <div class="col-md-7 left-abt-f1">
                                <!-- <div class="image image-1">
                                    <img src="images/about/033.png" alt="veuz-concepts">
                                </div> -->
                                <div class="video-wrapper">
                                    <video class="video-element" autoplay muted loop>
                                        <source src="images/about/Desktop 3.webm" type="video/mp4">
                                      Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                            <div class="col-md-5 right-abt-f1">
                                <div class="content">
                                    <p class="reveal">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>


document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);
  
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
  
      // Timeline for the animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: index === 0 ? 'top 70%' : 'top 50%', // First section starts at 70%, others at 50%
          end: 'bottom top',
          scrub: 0,
          markers: true,
          pin: true,
          pinSpacing: true, // Add space while pinning
        },
      });
  
      // Animate heading first, scroll it to the top
      tl.fromTo(
        splitHeading.chars,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 1,
          ease: 'power2.out',
        }
      )
        .to(
          heading,
          {
            y: -window.innerHeight / 2, // Scroll heading to the top of the viewport
            duration: 1,
            ease: 'power2.out',
          },
          '+=0.5'
        );
  
      // Animate image and video
      tl.fromTo(
        [image, videos],
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
        },
        '+=0.5'
      );
  
      // Animate paragraph
      tl.fromTo(
        splitParagraph.chars,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          duration: 1,
          ease: 'power2.out',
        },
        '+=0.5'
      );
  
      // Add exit animations for non-last sections
      if (!isLastSection) {
        tl.to(
          splitParagraph.chars,
          {
            opacity: 0,
            y: -50,
            stagger: 0.05,
            duration: 1,
            ease: 'power2.in',
          },
          '+=1'
        )
          .to(
            [image, videos],
            {
              opacity: 0,
              scale: 0.8,
              duration: 1,
              ease: 'power3.in',
            },
            '-=0.5' // Slight overlap with paragraph exit
          )
          .to(
            splitHeading.chars,
            {
              opacity: 0,
              y: -50,
              stagger: 0.05,
              duration: 1,
              ease: 'power2.in',
            },
            '-=0.5'
          );
  
        // Ensure the next section starts smoothly
        if (nextSection) {
          tl.to(nextSection, { opacity: 1, duration: 0.5 }, '+=0.5');
        }
      } else {
        tl.set(section, { opacity: 1 });
      }
    });
  });





document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    const sections = document.querySelectorAll('.abt-f1');

    sections.forEach((section, index) => {
        const isLastSection = index === sections.length - 1;
        const nextSection = sections[index + 1];

        const heading = section.querySelector('.reveal-heading');
        const paragraph = section.querySelector('.reveal');
        const image = section.querySelector('.image img');
        const videos = section.querySelector('.video-wrapper video');

        const splitHeading = new SplitType(heading, { type: 'chars' });
        const splitParagraph = new SplitType(paragraph, { type: 'chars' });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: index === 0 ? 'top 70%' : 'top 50%',
                end: 'bottom top',
                scrub: 0.3, // ⬅️ Slight scrub for smoothness
                markers: true,
                pin: true,
                pinSpacing: true,
            },
        });

        // === Entrance Animations ===
        tl.fromTo(splitHeading.chars, 
            { opacity: 0, y: 50 }, 
            { opacity: 1, y: 0, stagger: 0.1, duration: 1, ease: 'power2.out' }
        )
        .to(heading, 
            { y: -window.innerHeight / 2, duration: 1, ease: 'power2.out' }, 
            '+=0.5'
        )
        .fromTo([image, videos], 
            { opacity: 0, scale: 0.8 }, 
            { opacity: 1, scale: 1, duration: 1, ease: 'power3.out' }, 
            '-=0.5' // Overlap with heading movement
        )
        .fromTo(splitParagraph.chars, 
            { opacity: 0, y: 50 }, 
            { opacity: 1, y: 0, stagger: 0.05, duration: 1, ease: 'power2.out' }, 
            '-=0.5'
        );

        // === Exit Animations for Non-Last Sections ===
        if (!isLastSection) {
            tl.to(splitParagraph.chars, 
                { opacity: 0, y: -50, stagger: 0.05, duration: 0.8, ease: 'power2.in' }, 
                '+=1'
            )
            .to([image, videos], 
                { opacity: 0, scale: 0.8, duration: 0.8, ease: 'power3.in' }, 
                '-=0.5'
            )
            .to(splitHeading.chars, 
                { opacity: 0, y: -50, stagger: 0.05, duration: 0.8, ease: 'power2.in' }, 
                '-=0.5'
            );

            // Smooth transition to the next section
            if (nextSection) {
                tl.to(nextSection, { opacity: 1, duration: 0.5 }, '+=0.3');
            }
        } else {
            tl.set(section, { opacity: 1 });
        }
    });
});








document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // === Reveal-Type Animation ===
    const splitTypes = document.querySelectorAll('.reveal-type');

    splitTypes.forEach((char) => {
        const bg = char.dataset.bgColor;
        const fg = char.dataset.fgColor;

        const text = new SplitType(char, { types: 'chars' });

        const tlText = gsap.timeline({
            scrollTrigger: {
                trigger: char,
                start: 'center center',
                end: '+=150', // ⬅️ Reduced from 300 to 150
                scrub: 0.5,   // ⬅️ Faster scrub effect
                pin: true,
                pinSpacing: false,
                markers: true,
                onLeave: () => ScrollTrigger.refresh() // Ensures smooth transition
            }
        });

        tlText.fromTo(
            text.chars,
            { color: bg },
            {
                color: fg,
                duration: 0.2, // ⬅️ Faster text transition
                stagger: 0.03, // ⬅️ Reduced stagger for quicker animation
                ease: 'power2.out'
            }
        ).to(char, { opacity: 0, duration: 0.3, ease: 'power2.in' });
    });

    // === About Zoom Section Animation ===
    const sections = document.querySelectorAll('.abt-f1');

    sections.forEach((section, index) => {
        const isLastSection = index === sections.length - 1;
        const heading = section.querySelector('.reveal-heading');
        const paragraph = section.querySelector('.reveal');
        const videos = section.querySelector('.video-wrapper video');

        const splitHeading = new SplitType(heading, { type: 'chars' });
        const splitParagraph = new SplitType(paragraph, { type: 'words' });

        const tlSection = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',    // ⬅️ Starts animation earlier during scroll
                end: 'bottom top',
                scrub: 0.5,          // ⬅️ Faster scrub for snappier scroll
                pin: true,
                pinSpacing: false,
                markers: true
            }
        });

        tlSection
            .fromTo(splitHeading.chars, { opacity: 0, y: 30 }, { // ⬇️ Reduced Y distance
                opacity: 1,
                y: 0,
                stagger: 0.07,       // ⬅️ Faster stagger
                duration: 1,
                ease: 'power2.out'
            })
            .fromTo(videos, { opacity: 0, scale: 0.9 }, { // ⬇️ Less scaling for quicker effect
                opacity: 1,
                scale: 1,
                duration: 0.8,
                ease: 'power3.out'
            }, '-=0.4')             // ⬅️ Overlapping animations slightly
            .fromTo(splitParagraph.words, { opacity: 0, y: 20 }, { // ⬇️ Reduced Y movement
                opacity: 1,
                y: 0,
                stagger: 0.04,       // ⬅️ Faster stagger
                duration: 0.8,
                ease: 'power2.out'
            }, '-=0.4');

        if (!isLastSection) {
            tlSection.to(section, {
                opacity: 0,
                duration: 0.5,        // ⬅️ Faster fade-out
                ease: 'power2.inOut'
            });
        }
    });
});




gsap.registerPlugin(ScrollTrigger);

let wheel = document.querySelector(".wheel"),
  images = gsap.utils.toArray(".wheel__card"),
  bannerImage = document.querySelector(".banner-glass-ab img"); // Select the image inside banner-abstract

function setup() {
  let radius = wheel.offsetWidth / 2,
    center = radius,
    slice = 360 / images.length,
    DEG2RAD = Math.PI / 180;

  gsap.set(images, {
    x: i => center + radius * Math.sin(i * slice * DEG2RAD),
    y: i => center - radius * Math.cos(i * slice * DEG2RAD),
    rotation: i * slice, // Initial rotation positioning
    xPercent: -50,
    yPercent: -50
  });
}

setup();
window.addEventListener("resize", setup);

// Scroll animation
ScrollTrigger.create({
  trigger: ".wheel",
  start: "top bottom",
  end: "bottom top",
  scrub: 2,
  onUpdate: self => {
    let rotationValue = -360 * self.progress;

    gsap.to(wheel, {
      rotation: rotationValue, // Rotate the wheel
      ease: "none",
      overwrite: true,
    });

    // Keep cards in the same position by counter-rotating them
    images.forEach((card, i) => {
      gsap.to(card, {
        rotation: -rotationValue + (i * (360 / images.length)),
        ease: "none",
        overwrite: true,
      });
    });

    // Rotate the banner image while scrolling
    gsap.to(bannerImage, {
      rotation: rotationValue, // Rotate in the same direction as the wheel
      ease: "none",
      overwrite: true,
    });
  },
});




