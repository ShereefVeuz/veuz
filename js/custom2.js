// start loader
// const svg = document.getElementById('svg');
// const tl = gsap.timeline({
//   onComplete: () => {
//     document.body.style.overflow = 'visible';
//   },
// });

// const curve = 'M0 502S175 272 500 272s500 230 500 230V0H0Z';
// const flat = 'M0 2S175 1 500 1s500 1 500 1V0H0Z';

// tl.from('.loader-wrap-heading h1', {
//   delay: 0.5,
//   y: 200,
//   skewY: 20,
// }).to('.loader-wrap-heading h1', {
//   delay: 0.5,
//   y: -200,
//   skewY: 20,
// });
// tl.to(svg, {
//   duration: 0.8,
//   attr: { d: curve },
//   ease: 'power2.easeIn',
// }).to(svg, {
//   duration: 0.8,
//   attr: { d: flat },
//   ease: 'power2.easeOut',
// });
// tl.to('.loader-wrap', {
//   y: -1500,
// });
// tl.to('.loader-wrap', {
//   zIndex: -1,
//   display: 'none',
// });
// tl.from(
//   '.container',
//   {
//     y: 100,
//     opacity: 0,
//   },
//   '-=1.5'
// );

// tl.from(
//   'nav',
//   {
//     duration: 1,
//     opacity: 0,
//   },
//   '-=1.2'
// );






window.scrollTo(0, 0); // Ensure loader is visible at top

const presvg = document.getElementById('presvg');
const tl = gsap.timeline({
  defaults: {
    ease: 'power2.out',
    duration: 1.5,
  },
  onComplete: () => {
    document.body.style.overflow = 'visible';
  },
});

const curve = 'M0 502S175 272 500 272s500 230 500 230V0H0Z';
const flat = 'M0 2S175 1 500 1s500 1 500 1V0H0Z';

// Loader title animation - smoother ease & timing
tl.from('.loader-wrap-heading svg', {
  y: 300,
  skewY: 15,
  opacity: 0,
  duration: 1.2,
  ease: 'power3.out',
})
.to('.loader-wrap-heading svg', {
  y: -600,
  skewY: 0,
  opacity: 0,
  duration: 1,
  ease: 'power2.inOut',
}, '+=0.3') // small delay between entry and exit

// Morph SVG to curve
.to(presvg, {
  attr: { d: curve },
  duration: 1,
  ease: 'power3.inOut',
}, '-=0.6') // overlap with previous for fluid transition

// Morph SVG to flat
.to(presvg, {
  attr: { d: flat },
  duration: 1,
  ease: 'power3.inOut',
})

// Slide loader up and out smoothly
.to('.loader-wrap', {
  y: '-100vh',
  duration: 1.2,
  ease: 'expo.inOut',
}, '+=0.3')

// Hide loader after animation
.to('.loader-wrap', {
  zIndex: -1,
  display: 'none',
  duration: 0,
});




// END loader



/// client carousel
//
        // client 1
$('.clients .owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 3
      },
      500: {
        items: 4
      },
      900: {
        items: 4
      },
      1000: {
        items: 4
      },
      1300: {
        items: 5
      }
    }
})
// close


/// Animated line shadow
//
document.addEventListener('DOMContentLoaded', () => {
    const zoom3 = document.querySelector('#zoom-3');
    const animShadow = document.querySelector('.anim-shadow');
  
    const spacing = 100; 
    animShadow.style.marginTop = `${zoom3.offsetHeight + spacing}px`;
});
//
/// END Animated line shadow

/// END home software
//
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
  
//
/// END home software


// Function to start counting
//

// function startCounting() {
//     let counter = document.querySelectorAll(".counter");
//     let arr = Array.from(counter);
  
//     arr.map((item) => {
//       let count = 0;
//       function CounterUp() {
//         count++;
//         item.innerHTML = count;
//         if (count == item.dataset.number) {
//           clearInterval(stop);
//         }
//       }
//       let stop = setInterval(function () {
//         CounterUp();
//       }, 1000 / item.dataset.speed);
//     });
// }

function startCounting() {
  let counters = document.querySelectorAll(".counter");

  if (counters.length === 0) return; // Stop if no counters are found

  counters.forEach((counter) => {
      let count = 0;
      let target = parseInt(counter.dataset.number);
      let speed = parseInt(counter.dataset.speed);

      function CounterUp() {
          count++;
          counter.innerHTML = count;
          if (count >= target) {
              clearInterval(stop);
          }
      }

      let stop = setInterval(CounterUp, 1000 / speed);
  });
}
// Run the function when the page loads
document.addEventListener("DOMContentLoaded", startCounting);
//
// END Function to counting


/// service start here
//

// document.addEventListener("DOMContentLoaded", function () {
//     let owlCarouselserve = $(".serv-carousel .owl-carousel");
//     let isScrolling = false;
//     let totalImages = 21;

//     const sliderserve = document.getElementById("customSlider");
//     const output = document.getElementById("sliderValue");
//     const logo = document.getElementById("logo");

//     sliderserve.max = totalImages - 1;

//     // Function to update image and slider
//     function updateImageAndSlider(value) {
//         let index = Math.floor(value);
//         let newSrc = `images/services/logo-${index}.png`;

//         if (logo.getAttribute("src") !== newSrc) {
//             $(logo).fadeOut(50, function () {
//                 $(this).attr("src", newSrc).fadeIn(50);
//             });
//         }

//         let percent = (value / sliderserve.max) * 100;
//         sliderserve.style.background = `linear-gradient(to right, #00bcd4 ${percent}%, #9b9b9bad ${percent}%)`;
//     }

//     // Function to move the carousel based on slider value
//     function moveCarousel(value, prevValue) {
//         if (isScrolling) return;
//         isScrolling = true;

//         if (value > prevValue) {
//           owlCarouselserve.trigger("next.owl.carousel"); 
//         } else if (value < prevValue) {
//           owlCarouselserve.trigger("prev.owl.carousel"); 
//         }

//         setTimeout(() => {
//             isScrolling = false;
//         }, 300);
//     }

//     let prevSliderValue = 0;

//     sliderserve.addEventListener("input", function () {
//         let value = this.value;
//         output.innerText = value;
//         updateImageAndSlider(value);
//         moveCarousel(value, prevSliderValue);
//         prevSliderValue = value; 
//     });

//     // Handle window scroll to change images and carousel
//     window.addEventListener("wheel", function (event) {
//         let step = 1; 
//         let value = Number(sliderserve.value);

//         if (event.deltaY > 0) {
//           sliderserve.value = Math.min(value + step, sliderserve.max);
//         } else {
//           sliderserve.value = Math.max(value - step, 0);
//         }

//         output.innerText = sliderserve.value;
//         updateImageAndSlider(sliderserve.value);
//         moveCarousel(sliderserve.value, value);
//         prevSliderValue = sliderserve.value;
//     });

//     // Reset slider on page load
//     document.addEventListener("DOMContentLoaded", function () {
//       sliderserve.value = 0;
//         output.innerText = 0;
//         updateImageAndSlider(0);
//     });

//     $('.serv-carousel .owl-carousel').owlCarousel({
//       stagePadding: 100,
//       loop: true,
//       margin: 10,
//       nav: false,
//       dots: false,
//       items: 1,
//       lazyLoad: true,
//       center: true,
//       autoplay: true,
//       autoplayTimeout: 2000,
//       autoplayHoverPause: true,
//       responsive: {
//           0: { items: 1, stagePadding: 60 },
//           600: { items: 2, stagePadding: 100 },
//           1000: { items: 2, stagePadding: 200 },
//           1200: { items: 3, stagePadding: 200 },
//           1400: { items: 3, stagePadding: 200 },
//           1600: { items: 3, stagePadding: 200 },
//           1800: { items: 3, stagePadding: 200 }
//       },
//       onInitialized: updateClasses,
//       onTranslated: updateClasses
//     });

//     function updateClasses(event) {
//       let items = $('.serv-carousel .owl-item');
//       let centerItem = $('.serv-carousel .owl-item.active.center'); // Get the center item

//       // Remove all previous active and cloned classes
//       items.removeClass('active cloned');

//       if (centerItem.length) {
//           let centerIndex = centerItem.parent().children().index(centerItem);

//           // Assign active to center, left of center, and right of center
//           centerItem.addClass('active');
//           centerItem.prev().addClass('active');
//           centerItem.next().addClass('active');

//           // Assign cloned to all other items
//           items.not('.active').addClass('cloned');
//       }
//     }
// });


document.addEventListener("DOMContentLoaded", function () {
  const video = document.querySelector(".video-background");
  const slider = document.getElementById("customSlider");
  const output = document.getElementById("sliderValue");
  const servowl = $(".serv-carousel .owl-carousel");

  const maxFrames = 8;
  let previousValue = 0;
  let lastSliderUpdate = -1;

  slider.max = maxFrames - 1;

  // OwlCarousel setup
  servowl.owlCarousel({
    stagePadding: 100,
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    items: 1,
    center: true,
    lazyLoad: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1, stagePadding: 30 },
      500: { items: 1, stagePadding: 100 },
      600: { items: 2, stagePadding: 0 },
      800: { items: 2, stagePadding: 30 },
      1000: { items: 2, stagePadding: 200 },
      1200: { items: 3, stagePadding: 200 },
      1400: { items: 3, stagePadding: 200 },
      1600: { items: 3, stagePadding: 200 },
      1800: { items: 3, stagePadding: 200 },
      2000: { items: 5, stagePadding: 200 }
    },
    onInitialized: updateClasses,
    onTranslated: updateClasses
  });

  // Update center/side/clone class logic
  function updateClasses() {
    const items = $('.serv-carousel .owl-item');
    const centerItem = $('.serv-carousel .owl-item.active.center');

    // Remove all previous custom classes
    items.removeClass('active cloned');

    if (centerItem.length) {
      centerItem.addClass('active');
      centerItem.prev('.owl-item').addClass('active');
      centerItem.next('.owl-item').addClass('active');
      items.not('.active').addClass('cloned');
    }
  }

  // Update slider background style
  function updateSliderStyle(value) {
    let percent = (value / slider.max) * 100;
    slider.style.background = `linear-gradient(to right, #00bcd4 ${percent}%, #9b9b9bad ${percent}%)`;
  }

  // Move carousel based on slider value
  function updateCarousel(value, prev) {
    if (value > prev) {
      servowl.trigger("next.owl.carousel");
    } else if (value < prev) {
      servowl.trigger("prev.owl.carousel");
    }
  }

  // Manual slider input
  slider.addEventListener("input", function () {
    const value = parseInt(this.value);
    output.innerText = value;
    updateSliderStyle(value);
    updateCarousel(value, previousValue);
    previousValue = value;

    if (video.duration) {
      video.currentTime = (value / (maxFrames - 1)) * video.duration;
    }
  });

  // GSAP ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.create({
    trigger: ".service-banner",
    start: "top top",
    end: "+=3000",
    pin: true,
    scrub: true,
    onUpdate: (self) => {
      const progress = self.progress;
      const value = Math.floor(progress * (maxFrames - 1));

      if (value !== lastSliderUpdate) {
        slider.value = value;
        output.innerText = value;
        updateSliderStyle(value);
        updateCarousel(value, previousValue);
        previousValue = value;
        lastSliderUpdate = value;

        if (video.duration) {
          video.currentTime = progress * video.duration;
        }
      }
    }
  });

  // Refresh ScrollTrigger when video metadata is ready
  video.addEventListener("loadedmetadata", () => {
    ScrollTrigger.refresh();
  });

  // Initial setup
  slider.value = 0;
  output.innerText = 0;
  updateSliderStyle(0);
});



// 
/// END service here


// technology slider start here
$('.tech-owl1 .owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    autoplay: true,
    autoplaySpeed: 1000,
    autoplayTimeout: 1500,
    infinite: true,
    responsive: {
      0: {
        items: 3.6
      },
      450: {
        items: 4.5
      },
      650: {
        items: 4
      },
      768: {
        items: 3
      },
      900: {
        items: 3
      },
      1000: {
        items: 3
      },
      1300: {
        items: 3
      }
    }
  })
 
  $('.tech-owl2 .owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    rtl:true,
    autoplay: true,
    autoplaySpeed: 1000,
    infinite: true,
    autoplayTimeout: 1500,
    responsive: {
      0: {
        items: 3.6
      },
      450: {
        items: 4.5
      },
      650: {
        items: 4
      },
      768: {
        items: 3
      },
      900: {
        items: 3
      },
      1000: {
        items: 3
      },
      1300: {
        items: 3
      }
    }
  })

// END technology slider



// menu dropdown
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".ham-menu-links a").forEach(link => {
      let arrow = link.querySelector(".arrow");

      // Check if the link has an associated dropdown
      let dropdown = document.getElementById(link.getAttribute("data-dropdown"));
      if (!dropdown) return; // Skip if no matching dropdown exists

      link.addEventListener("click", function (event) {
          event.preventDefault();

          // Remove "active" class from all links
          document.querySelectorAll(".ham-menu-links a").forEach(a => {
              a.classList.remove("active");
          });

          // Close all other dropdowns
          document.querySelectorAll(".dropdown").forEach((drop) => {
              if (drop !== dropdown) {
                  drop.style.display = "none";
              }
          });

          // Reset all arrows except the clicked one
          document.querySelectorAll(".arrow").forEach((arr) => {
              if (arr !== arrow) {
                  arr.style.transform = "rotate(0deg)";
              }
          });

          // Toggle the clicked dropdown
          if (dropdown.style.display === "block") {
              dropdown.style.display = "none";
              arrow.style.transform = "rotate(0deg)";
              link.classList.remove("active"); // Remove active class when closing
          } else {
              dropdown.style.display = "block";
              arrow.style.transform = "rotate(25deg)";
              link.classList.add("active"); // Add active class when opened
          }
      });
  });
});




// about start
//



//
// END about

// about count circle and line 
//
window.addEventListener("resize", positionLines);
window.addEventListener("load", positionLines); 

function positionLines() {
    let circles = document.querySelectorAll(".circle_about");
    let lines = document.querySelectorAll(".line_before_circle");

    circles.forEach((circle, index) => {
        let cx = circle.getAttribute("cx");
        let cy = circle.getAttribute("cy");

        let line = lines[index]; 

        if (line) {
            line.setAttribute("x1", cx);
            line.setAttribute("x2", cx);
            line.setAttribute("y1", parseFloat(cy) + 300); // Make the line extend above the circle
            line.setAttribute("y2", cy);
        }
    });
}
//
// END about count circle and line 


// // main services active class
// document.querySelectorAll('.service_icon_item').forEach(item => {
//   item.addEventListener('click', () => {
//       document.querySelectorAll('.service_icon_item').forEach(el => el.classList.remove('active'));
//       item.classList.add('active');
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  let items = document.querySelectorAll('.service_icon_item');
  let lastActiveItem = items[0]; // Set first item as default active

  // Ensure the first item is active on page load
  lastActiveItem.classList.add('active');

  items.forEach(item => {
      // Remove active class on hover and set new active item
      item.addEventListener('mouseenter', () => {
          document.querySelectorAll('.service_icon_item').forEach(el => el.classList.remove('active'));
          item.classList.add('active');
      });

      // Store the last hovered item as the active item
      item.addEventListener('mouseleave', () => {
          lastActiveItem = item;
      });
  });
});


// // END main services active class


// technologies page



// $(document).ready(function(){
//   let owl = $(".frontend-slider");

//   owl.owlCarousel({
//       loop: true,
//       margin: 20,
//       nav: false,
//       autoplay: true,
//       autoplayTimeout: 3000,
//       autoplayHoverPause: true,
//       stagePadding: 150,
//       center: true, 
//       responsive: {
//           0: { items: 1, stagePadding: 50 },  
//           600: { items: 2, stagePadding: 80 },
//           1000: { items: 3, stagePadding: 150 },
//           1200: { items: 3, stagePadding: 250 }
//       }
//   });

//   // Detect the change and assign classes
//   // owl.on('changed.owl.carousel', function(event) {
//       $(".frontend-slider .owl-item").removeClass("center-item left-item right-item");

//       let centerItem = $(".frontend-slider .owl-item.center"); // Select the current center item
//       centerItem.addClass("center-item");

//       let leftItem = centerItem.prev(); // Select left item
//       let rightItem = centerItem.next(); // Select right item

//       leftItem.addClass("left-item");
//       rightItem.addClass("right-item");
//   // });
// });


// $(document).ready(function(){
//   let owl = $(".frontend-slider");

//   owl.owlCarousel({
//       loop: true,
//       margin: 20,
//       nav: false,
//       autoplay: false,
//       autoplayTimeout: 3000,
//       autoplayHoverPause: true,
//       stagePadding: 150,
//       center: true, 
//       responsive: {
//           0: { items: 1, stagePadding: 50 },  
//           600: { items: 2, stagePadding: 80 },
//           1000: { items: 3, stagePadding: 150 },
//           1200: { items: 3, stagePadding: 250 }
//       }
//   });

//   // ✅ Detect the change and assign classes
//   owl.on('changed.owl.carousel', function(event) {
//       $(".frontend-slider .owl-item").removeClass("center-item left-item right-item");

//       let centerItem = $(".frontend-slider .owl-item.active.center"); // Select the center item
//       centerItem.addClass("center-item");

//       let leftItem = centerItem.prev(".owl-item.active"); // Select left item
//       let rightItem = centerItem.next(".owl-item.active"); // Select right item

//       leftItem.addClass("left-item");
//       rightItem.addClass("right-item");
//   });
// });


// $(document).ready(function(){
//   let owlfrontend = $(".frontend-slider");

//   owlfrontend.owlCarousel({
//       loop: true,
//       margin: 20,
//       nav: false,
//       autoplay: false,
//       autoplayTimeout: 3000,
//       autoplayHoverPause: true,
//       stagePadding: 150,
//       center: true, 
//       responsive: {
//           0: { items: 1, stagePadding: 50 },  
//           600: { items: 2, stagePadding: 80 },
//           1000: { items: 3, stagePadding: 150 },
//           1200: { items: 3, stagePadding: 250 }
//       }
//   });

//   // ✅ Detect the change and assign classes
//   owlfrontend.on('changed.owl.carousel', function(event) {
//       // Remove all classes first
//       $(".frontend-slider .owl-item").removeClass("center-item left-item right-item");
      
//       // Get all active items
//       let activeItems = $(".frontend-slider .owl-item.active");
      
//       // Find the center item (middle of the active items)
//       let centerIndex = Math.floor(activeItems.length / 2);
//       let centerItem = activeItems.eq(centerIndex);
      
//       // Add center class
//       centerItem.addClass("center-item");
      
//       // Add left class to previous active item
//       if (centerIndex > 0) {
//           activeItems.eq(centerIndex - 1).addClass("left-item");
//       }
      
//       // Add right class to next active item
//       if (centerIndex < activeItems.length - 1) {
//           activeItems.eq(centerIndex + 1).addClass("right-item");
//       }
//   });
  
//   // Trigger the event once on load to set initial classes
//   owlfrontend.trigger('changed.owl.carousel');
// });




// technology page carousel
//
$(document).ready(function(){ 
  let owl1 = $(".frontend-slider");

  owl1.owlCarousel({
      loop: true,
      margin: 40,
      nav: false,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      center: true, 
      stagePadding: 0, 
      responsive: {
          0: { items: 1, stagePadding: 50 },
          600: { items: 1, stagePadding: 150 },
          700: { items: 3, stagePadding: 50 },
          // 1200: { items: 2, stagePadding: 50 },
          1000: { items: 3, stagePadding: 100 }
      }
  });

  function updateClasses() {
      $(".frontend-slider .owl-item").removeClass("center-item left-item right-item");

      let activeItems = $(".frontend-slider .owl-item.active");
      let centerIndex = Math.floor(activeItems.length / 2);

      if (activeItems.length) {
          let centerItem = activeItems.eq(centerIndex);
          centerItem.addClass("center-item");

          let leftItem = activeItems.eq(centerIndex - 1); 
          let rightItem = activeItems.eq(centerIndex + 1); 
          
          if (leftItem.length) leftItem.addClass("left-item");
          if (rightItem.length) rightItem.addClass("right-item");
      }
  }

  owl1.on('initialized.owl.carousel', function() {
      setTimeout(updateClasses, 50); 
  });

  owl1.on('changed.owl.carousel', function() {
      setTimeout(updateClasses, 50);
  });

  setTimeout(updateClasses, 100);
});


/* 2nd slider */
$(document).ready(function(){ 
  let owl2 = $(".frontend-slider2");

  owl2.owlCarousel({
      loop: true,
      margin: 40,
      nav: false,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      center: true, 
      stagePadding: 0, 
      responsive: {
          0: { items: 1, stagePadding: 50 },
          600: { items: 1, stagePadding: 150 },
          700: { items: 3, stagePadding: 50 },
          // 1200: { items: 2, stagePadding: 50 },
          1000: { items: 3, stagePadding: 100 }
      }
  });

  function updateClasses() {
      $(".frontend-slider2 .owl-item").removeClass("center-item left-item right-item");

      let activeItems = $(".frontend-slider2 .owl-item.active");
      let centerIndex = Math.floor(activeItems.length / 2);

      if (activeItems.length) {
          let centerItem = activeItems.eq(centerIndex);
          centerItem.addClass("center-item");

          let leftItem = activeItems.eq(centerIndex - 1); 
          let rightItem = activeItems.eq(centerIndex + 1); 
          
          if (leftItem.length) leftItem.addClass("left-item");
          if (rightItem.length) rightItem.addClass("right-item");
      }
  }

  owl2.on('initialized.owl.carousel', function() {
      setTimeout(updateClasses, 50); 
  });

  owl2.on('changed.owl.carousel', function() {
      setTimeout(updateClasses, 50);
  });

  setTimeout(updateClasses, 100);
});


/* 2nd slider */
$(document).ready(function(){ 
  let owl3 = $(".frontend-slider3");

  owl3.owlCarousel({
      loop: true,
      margin: 40,
      nav: false,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      center: true, 
      stagePadding: 0, 
      responsive: {
          0: { items: 1, stagePadding: 50 },
          600: { items: 1, stagePadding: 150 },
          700: { items: 3, stagePadding: 50 },
          // 1200: { items: 2, stagePadding: 50 },
          1000: { items: 3, stagePadding: 100 }
      }
  });

  function updateClasses() {
      $(".frontend-slider3 .owl-item").removeClass("center-item left-item right-item");

      let activeItems = $(".frontend-slider3 .owl-item.active");
      let centerIndex = Math.floor(activeItems.length / 2);

      if (activeItems.length) {
          let centerItem = activeItems.eq(centerIndex);
          centerItem.addClass("center-item");

          let leftItem = activeItems.eq(centerIndex - 1); 
          let rightItem = activeItems.eq(centerIndex + 1); 
          
          if (leftItem.length) leftItem.addClass("left-item");
          if (rightItem.length) rightItem.addClass("right-item");
      }
  }

  owl3.on('initialized.owl.carousel', function() {
      setTimeout(updateClasses, 50); 
  });

  owl3.on('changed.owl.carousel', function() {
      setTimeout(updateClasses, 50);
  });

  setTimeout(updateClasses, 100);
});
//
// technology page carousel



// return to top
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#top-btn').fadeIn();
    } else {
      $('#top-btn').fadeOut();
    }
  });
  $('#top-btn').click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });
});






// portfolio
$(document).ready(function() {
    $('.gallery-link').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: true,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true,
            titleSrc: function(item) {
                let heading = item.el.find('.fig_heading').text();
                let description = item.el.find('.fig_para').text();
                return `<strong>${heading}</strong><br>${description}`;
            }
        },
        zoom: {
            enabled: true
        },
        gallery: {
            enabled: true,
            navigateByImgClick: true
        }
    });
});
// END portfolio


// Lenis disabled
const disableLenisSections = document.querySelectorAll('.no-lenis');
 
disableLenisSections.forEach((section) => {
  section.addEventListener('wheel', (e) => {
    // console.log("scroll");
    // alert();
    lenis.stop();
    
    section.scrollTop += e.deltaY;
    e.preventDefault();
    setTimeout(() => lenis.start(), 100);
  }, { passive: false });
});


// const disableLenisSections = document.querySelectorAll('.no-lenis');

// disableLenisSections.forEach((section) => {
//   section.addEventListener('wheel', (e) => {
//     if (typeof lenis !== "undefined") {
//       lenis.stop(); // stop smooth scroll
      
//       // manually scroll the section
//       section.scrollTop += e.deltaY;
      
//       e.preventDefault();

//       // restart lenis after next frame
//       requestAnimationFrame(() => {
//         lenis.start();
//       });
//     }
//   }, { passive: false });
// });










// start video service
// console.clear();

// const video = document.querySelector(".video-background");
// ScrollTrigger.create({
//   trigger: ".vid_service",
//   start: "top top",
//   end: "+=3000",
//   pin: true,
//   scrub: true,
//   onUpdate: self => {
//     if (video.duration) {
//       video.currentTime = self.progress * video.duration;
//     }
//   }
// });

// // Optional: handle video load
// video.addEventListener("loadedmetadata", () => {
//     ScrollTrigger.refresh();
// });

// END video service







