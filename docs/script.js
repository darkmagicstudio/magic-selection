gsap.registerPlugin(ScrollTrigger, ScrollSmoother, Observer);

// Scroll Smoother
let smoother = ScrollSmoother.create({
  effects: true,
  smooth: 2
});

// Drag Funcution
Observer.create({
  target: window,
  type: "scroll, mouse",
  onChange: (self) => {
    const lag = self.velocityY / 10000;
    const s = Math.round((self.velocityY / 100) * 2);
    const speed = Math.abs(s);
    smoother.effects(dataSpeed, {
      speed: speed
    });
  }
});

// Custom Ease
let customEase = CustomEase.create(
  "custom",
  "M0,0 C0.5,0.046 0.116,0.962 1,1 "
);

// Varriables
let dataSpeed = document.body.childNodes;
let heroH1 = document.querySelector('[data-gsap-element="heroh1"]');
let lineBreak = document.querySelector('[data-gsap-element="linebreak"]');
let s1 = document.querySelectorAll(".section.is--1-2");
let indexList = ".index-list-item";
let span = document.querySelector('[data-gsap-element="textspan1"]');
let body = document.querySelector("body");
console.log(body);

// Split Type
const text = SplitType.create(heroH1, { types: "words, chars" });
// Index Animation
$(indexList).each(function (index) {
  let triggerElement = $(this).eq(index);
  let targetElement = $(".link").eq(index);
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "top bottom",
      end: "bottom center",
      scrub: false
    }
  });
  tl.fromTo(
    targetElement,
    {
      clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
    },
    {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 1
    }
  );
});

// linebreak animation
$(lineBreak).each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: "bottom bottom",
      end: "bottom top",
      scrub: 1
    }
  });
  tl.from(targetElement, {
    width: "0%",
    duration: 1,
    ease: customEase
  });
});
// Section Animations
$(s1).each(function (index) {
  let triggerElement = $(".image-wrap").eq(index);
  let targetElement = $(".image-wrap").eq(index);
  let number = $(".numver-wrap").eq(index);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "top center",
      end: "bottom bottom",
      scrub: 1.5
    }
  });
  tl.fromTo(
    targetElement,
    {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"
    },
    {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 1,
      ease: customEase
    }
  );

  tl.from(
    number,
    {
      xPercent: -160,
      duration: 1.3,
      ease: customEase
    },
    "<"
  );
});

// Footer
$("bottom").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(".target-class");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "top center",
      end: "bottom top",
      scrub: 1
    }
  });
  tl.to(targetElement, {
    height: "100%",
    duration: 1
  });
});
// Font Change

$(span).each(function (index) {
  let targetElement = $(this);
  let dur = 1;
  // Font Var
  let f1 = "Satoshi";
  let f2 = monospace;
  let f3 = "system-ui";
  let f4 = fantasy;
  let tl = gsap.timeline();
  tl.to(targetElement, {
    fontFamily: f1,
    duration: dur
  });
  tl.to(targetElement, {
    fontFamily: f2,
    duration: dur
  });
  tl.to(targetElement, {
    fontFamily: f3,
    duration: dur
  });
  tl.to(targetElement, {
    fontFamily: f4,
    duration: dur
  });
});
// Barba Transition

let percentTop;
let percentLeft;
$(document).on("click", function (e) {
  let mouseTop = e.pageY - $(window).scrollTop();
  let mouseLeft = e.pageX;
  percentTop = (mouseTop / $(window).height()) * 100;
  percentLeft = (mouseLeft / $(window).width()) * 100;
});

function updateCurrentClass() {
  $(".w--current").removeClass("w--current");
  $(".nav a").each(function (index) {
    if ($(this).attr("href") === window.location.pathname) {
      $(this).addClass("w--current");
    }
  });
}

barba.init({
  transitions: [
    {
      enter(data) {
        gsap.defaults({
          duration: 1.2,
          ease: customEase
        });

        $(data.next.container).addClass("fixed");
        // Reveal page with clippath
        return gsap.fromTo(
          data.next.container,
          { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" },
          {
            clipPath: `polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)`,
            onComplete: () => {
              $(window).scrollTop(0);
              $(data.next.container).removeClass("fixed");
            }
          }
        );
      }
    }
  ]
});
// Body Color Change Animations
$(".github-content").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(body);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "top bottom",
      end: "top top",
      scrub: 1
    }
  });
  tl.fromTo(
    targetElement,
    {
      backgroundColor: "rgb(229 225 223)",
      duration: 1,
      ease: customEase
    },
    {
      backgroundColor: "rgb(207 217 221)"
    }
  );
});
