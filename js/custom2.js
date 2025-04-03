
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

document.addEventListener("DOMContentLoaded", function () {
    let owlCarouselserve = $(".serv-carousel .owl-carousel");
    let isScrolling = false;
    let totalImages = 21;

    const sliderserve = document.getElementById("customSlider");
    const output = document.getElementById("sliderValue");
    const logo = document.getElementById("logo");

    sliderserve.max = totalImages - 1;

    // Function to update image and slider
    function updateImageAndSlider(value) {
        let index = Math.floor(value);
        let newSrc = `images/services/logo-${index}.png`;

        if (logo.getAttribute("src") !== newSrc) {
            $(logo).fadeOut(50, function () {
                $(this).attr("src", newSrc).fadeIn(50);
            });
        }

        let percent = (value / sliderserve.max) * 100;
        sliderserve.style.background = `linear-gradient(to right, #00bcd4 ${percent}%, #9b9b9bad ${percent}%)`;
    }

    // Function to move the carousel based on slider value
    function moveCarousel(value, prevValue) {
        if (isScrolling) return;
        isScrolling = true;

        if (value > prevValue) {
          owlCarouselserve.trigger("next.owl.carousel"); 
        } else if (value < prevValue) {
          owlCarouselserve.trigger("prev.owl.carousel"); 
        }

        setTimeout(() => {
            isScrolling = false;
        }, 300);
    }

    let prevSliderValue = 0;

    sliderserve.addEventListener("input", function () {
        let value = this.value;
        output.innerText = value;
        updateImageAndSlider(value);
        moveCarousel(value, prevSliderValue);
        prevSliderValue = value; 
    });

    // Handle window scroll to change images and carousel
    window.addEventListener("wheel", function (event) {
        let step = 1; 
        let value = Number(sliderserve.value);

        if (event.deltaY > 0) {
          sliderserve.value = Math.min(value + step, sliderserve.max);
        } else {
          sliderserve.value = Math.max(value - step, 0);
        }

        output.innerText = sliderserve.value;
        updateImageAndSlider(sliderserve.value);
        moveCarousel(sliderserve.value, value);
        prevSliderValue = sliderserve.value;
    });

    // Reset slider on page load
    document.addEventListener("DOMContentLoaded", function () {
      sliderserve.value = 0;
        output.innerText = 0;
        updateImageAndSlider(0);
    });

    $('.serv-carousel .owl-carousel').owlCarousel({
      stagePadding: 100,
      loop: true,
      margin: 10,
      nav: false,
      dots: false,
      items: 1,
      lazyLoad: true,
      center: true,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      responsive: {
          0: { items: 1, stagePadding: 60 },
          600: { items: 2, stagePadding: 100 },
          1000: { items: 2, stagePadding: 200 },
          1200: { items: 3, stagePadding: 200 },
          1400: { items: 3, stagePadding: 200 },
          1600: { items: 3, stagePadding: 200 },
          1800: { items: 3, stagePadding: 200 }
      },
      onInitialized: updateClasses,
      onTranslated: updateClasses
    });

    function updateClasses(event) {
      let items = $('.serv-carousel .owl-item');
      let centerItem = $('.serv-carousel .owl-item.active.center'); // Get the center item

      // Remove all previous active and cloned classes
      items.removeClass('active cloned');

      if (centerItem.length) {
          let centerIndex = centerItem.parent().children().index(centerItem);

          // Assign active to center, left of center, and right of center
          centerItem.addClass('active');
          centerItem.prev().addClass('active');
          centerItem.next().addClass('active');

          // Assign cloned to all other items
          items.not('.active').addClass('cloned');
      }
    }
});

// 
/// END service here


// technology slider start here
$('.tech-owl1 .owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    autoplay: true,
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
 
  $('.tech-owl2 .owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    rtl:true,
    autoplay: true,
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










