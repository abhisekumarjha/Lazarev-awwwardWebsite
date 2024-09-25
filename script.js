function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#wrapper"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#wrapper" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#wrapper", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#wrapper").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}

locomotiveAnimation();


// to display fallback-image

function fallback() {
    const video = document.getElementById('video');
    const fallbackImage = document.getElementById('fallback-image');

    video.addEventListener('error', () => {
        fallbackImage.style.display = 'block';
        video.style.display = 'none';
    });

    video.addEventListener('loadeddata', () => {
        if (video.readyState < 3) {
            fallbackImage.style.display = 'block';
            video.style.display = 'none';
        } else {
            fallbackImage.style.display = 'none';
        }
    });
};

fallback();

//page-4-circleAnimation

function circleAnimation() {
    const rightElems = document.querySelectorAll('.right-elem');

    rightElems.forEach(function (elem) {
        elem.addEventListener('mouseenter', function () {
            gsap.to(elem.childNodes[3], {
                opacity: 1,
                scale: 1
            });
        });
        elem.addEventListener('mouseleave', function () {
            gsap.to(elem.childNodes[3], {
                opacity: 0,
                scale: 0
            })
        })

        elem.addEventListener('mousemove', function (dets) {
            gsap.to(elem.childNodes[3], {
                x: dets.x - elem.getBoundingClientRect().x,
                y: dets.y - elem.getBoundingClientRect().y - 100
            })
        })
    });
};

circleAnimation();


//page-5-video-playAnimation

function videoPlayAnimation() {
    const videos = document.querySelectorAll('.sec1-right video');

    videos.forEach(video => {
        video.addEventListener('mouseenter', function () {
            video.style.opacity = 1;
            video.play();
        });
        video.addEventListener('mouseleave', function () {
            video.style.opacity = 0;
            video.load();
        });
    });
};

videoPlayAnimation();


// page-1-video-circlePopUp

function page1VideoCirclePopUp() {
    const page1CirclePopUp = document.querySelectorAll('#page-1');

    page1CirclePopUp.forEach(function (elem) {
        elem.addEventListener('mouseenter', function () {
            gsap.to(elem.childNodes[3], {
                opacity: 1,
                scale: 1.25
            });

        });
        elem.addEventListener('mouseleave', function () {
            gsap.to(elem.childNodes[3], {
                opacity: 0,
                scale: 0
            })
        });
        elem.addEventListener('mousemove', function (dets) {
            gsap.to(elem.childNodes[3], {
                x: dets.x - elem.getBoundingClientRect().x - 1300,
                y: dets.y - elem.getBoundingClientRect().y - 40
            })
        });
    });
};

page1VideoCirclePopUp();


// page-3-video-circlePopUp

function page3VideoCirclePopUp() {
    const page3CirclePopUp = document.querySelectorAll('#page-3-content');

    page3CirclePopUp.forEach(function (elem) {
        elem.addEventListener('mouseenter', function () {
            gsap.to(elem.childNodes[7], {
                opacity: 1,
                scale: 1
            });
        });
        elem.addEventListener('mouseleave', function () {
            gsap.to(elem.childNodes[7], {
                opacity: 0,
                scale: 0
            })
        });
        elem.addEventListener('mousemove', function (dets) {
            gsap.to(elem.childNodes[7], {
                x: dets.x - elem.getBoundingClientRect().x - 1250,
                y: dets.y - elem.getBoundingClientRect().y - 70
            })
        });
    });
}

page3VideoCirclePopUp();

// page-5-video-circlePopUp

function page5VideoCirclePopUp() {
    const circlePopUp = document.querySelectorAll('.sec1-right');

    circlePopUp.forEach(function (elem) {
        elem.addEventListener('mouseenter', function () {
            gsap.to(elem.childNodes[5], {
                opacity: .75,
                scale: 1
            })
        });
        elem.addEventListener('mouseleave', function () {
            gsap.to(elem.childNodes[5], {
                opacity: 0,
                scale: 0
            })
        });

        elem.addEventListener('mousemove', function (dets) {
            gsap.to(elem.childNodes[5], {
                x: dets.x - elem.getBoundingClientRect().x - 650,
                y: dets.y - elem.getBoundingClientRect().y - 50
            })
        })
    });
};

page5VideoCirclePopUp();


// page-6-product-details-display-effect

function page6productDetails() {
    document.getElementById('product-details').addEventListener('mouseover', function () {
        this.open = true;
    });

    document.getElementById('product-details').addEventListener('mouseout', function () {
        this.open = false;
    });
};

page6productDetails();


// capsule-scroll-effect

function capsuleScrollEffect() {
    gsap.to('.capsule-design h5', {
        x: 120,
        duration: 1.25,
        stagger: {
            amount: -0.5
        },
        scrollTrigger: {
            trigger: '.capsule-design',
            scroller: '#wrapper',
            start: "top 80%",
            end: 'top 10%',
            scrub: true
        }
    });
};

capsuleScrollEffect();


// loading-animation

function loadingAnimation() {
    const tl = gsap.timeline();
    tl.from('#hero-section', {
        opacity: 0,
    });

    tl.from('#hero-section', {
        transform: 'scaleX(1) scaleY(0)',
        duration: 1,
    });
};

loadingAnimation();


