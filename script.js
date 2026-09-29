/* =========================================================
   MARTEX REAL ESTATE
   MAIN JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       MOBILE NAVIGATION
    ===================================================== */

    const menuToggle =
        document.getElementById("menuToggle");

    const mainNav =
        document.getElementById("mainNav");


    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", function () {

            const isOpen =
                mainNav.classList.toggle("show");

            menuToggle.innerHTML =
                isOpen ? "✕" : "☰";

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

        });


        /* Close menu when a navigation link is clicked */

        const navLinks =
            mainNav.querySelectorAll("a");


        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                mainNav.classList.remove("show");

                menuToggle.innerHTML = "☰";

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });


        /* Close menu when clicking outside */

        document.addEventListener("click", function (event) {

            if (
                !mainNav.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {

                mainNav.classList.remove("show");

                menuToggle.innerHTML = "☰";

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        });

    }



    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    const currentYear =
        document.getElementById("currentYear");


    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }



    /* =====================================================
       INSPECTION DATE
       PREVENT PAST DATES
    ===================================================== */

    const inspectionDate =
        document.getElementById("inspectionDate");


    if (inspectionDate) {

        const today =
            new Date();

        const year =
            today.getFullYear();

        const month =
            String(
                today.getMonth() + 1
            ).padStart(2, "0");

        const day =
            String(
                today.getDate()
            ).padStart(2, "0");

        inspectionDate.min =
            `${year}-${month}-${day}`;

    }



    /* =====================================================
       CONTACT FORM
       SEND ENQUIRY TO WHATSAPP
    ===================================================== */

    const contactForm =
        document.getElementById("contactForm");


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const name =
                    document
                    .getElementById("name")
                    ?.value
                    .trim() || "";


                const phone =
                    document
                    .getElementById("phone")
                    ?.value
                    .trim() || "";


                const email =
                    document
                    .getElementById("email")
                    ?.value
                    .trim() || "";


                const property =
                    document
                    .getElementById("property")
                    ?.value || "Not specified";


                const message =
                    document
                    .getElementById("message")
                    ?.value
                    .trim() || "";


                /* Validate important fields */

                if (!name || !phone || !message) {

                    showFormMessage(
                        "formMessage",
                        "Please complete all required fields.",
                        "error"
                    );

                    return;

                }


                /* Build WhatsApp message */

                const whatsappText =

                    "Hello Martex Real Estate." +

                    "\n\n" +

                    "*PROPERTY ENQUIRY*" +

                    "\n\n" +

                    "*Full Name:* " +
                    name +

                    "\n" +

                    "*Phone:* " +
                    phone +

                    "\n" +

                    "*Email:* " +
                    (email || "Not provided") +

                    "\n" +

                    "*Property:* " +
                    property +

                    "\n\n" +

                    "*Message:* " +

                    message;


                const whatsappURL =
                    "https://wa.me/2347039236599?text=" +
                    encodeURIComponent(
                        whatsappText
                    );


                showFormMessage(
                    "formMessage",
                    "Opening WhatsApp...",
                    "success"
                );


                setTimeout(function () {

                    window.open(
                        whatsappURL,
                        "_blank"
                    );

                }, 500);

            }
        );

    }



    /* =====================================================
       INSPECTION FORM
       SEND INSPECTION REQUEST TO WHATSAPP
    ===================================================== */

    const inspectionForm =
        document.getElementById("inspectionForm");


    if (inspectionForm) {

        inspectionForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const name =
                    document
                    .getElementById("inspectionName")
                    ?.value
                    .trim() || "";


                const phone =
                    document
                    .getElementById("inspectionPhone")
                    ?.value
                    .trim() || "";


                const email =
                    document
                    .getElementById("inspectionEmail")
                    ?.value
                    .trim() || "";


                const property =
                    document
                    .getElementById("inspectionProperty")
                    ?.value || "";


                const date =
                    document
                    .getElementById("inspectionDate")
                    ?.value || "";


                const time =
                    document
                    .getElementById("inspectionTime")
                    ?.value || "";


                const message =
                    document
                    .getElementById("inspectionMessage")
                    ?.value
                    .trim() || "";


                /* Validate required fields */

                if (
                    !name ||
                    !phone ||
                    !property ||
                    !date ||
                    !time
                ) {

                    showFormMessage(
                        "inspectionMessageStatus",
                        "Please complete all required inspection details.",
                        "error"
                    );

                    return;

                }


                /* Format inspection date */

                let formattedDate =
                    date;


                if (date) {

                    const dateObject =
                        new Date(
                            date + "T00:00:00"
                        );


                    formattedDate =
                        dateObject.toLocaleDateString(
                            "en-NG",
                            {
                                weekday: "long",
                                year: "numeric",
                                month: "long",
                                day: "numeric"
                            }
                        );

                }


                /* Build WhatsApp message */

                const whatsappText =

                    "Hello Martex Real Estate." +

                    "\n\n" +

                    "*PROPERTY INSPECTION REQUEST*" +

                    "\n\n" +

                    "*Full Name:* " +
                    name +

                    "\n" +

                    "*Phone:* " +
                    phone +

                    "\n" +

                    "*Email:* " +
                    (email || "Not provided") +

                    "\n" +

                    "*Property:* " +
                    property +

                    "\n" +

                    "*Preferred Date:* " +
                    formattedDate +

                    "\n" +

                    "*Preferred Time:* " +
                    time +

                    "\n\n" +

                    "*Additional Message:* " +

                    (
                        message ||
                        "No additional message."
                    );


                const whatsappURL =
                    "https://wa.me/2347039236599?text=" +
                    encodeURIComponent(
                        whatsappText
                    );


                showFormMessage(
                    "inspectionMessageStatus",
                    "Opening WhatsApp with your inspection request...",
                    "success"
                );


                setTimeout(function () {

                    window.open(
                        whatsappURL,
                        "_blank"
                    );

                }, 500);

            }
        );

    }



    /* =====================================================
       FORM MESSAGE HELPER
    ===================================================== */

    function showFormMessage(
        elementId,
        message,
        type
    ) {

        const element =
            document.getElementById(
                elementId
            );


        if (!element) {
            return;
        }


        element.textContent =
            message;


        element.classList.remove(
            "success",
            "error"
        );


        if (type) {

            element.classList.add(
                type
            );

        }

    }



    /* =====================================================
       PROPERTY VIDEOS
       PAUSE VIDEOS WHEN OUT OF VIEW
    ===================================================== */

    const propertyVideos =
        document.querySelectorAll(
            ".property-video video"
        );


    if (
        propertyVideos.length &&
        "IntersectionObserver" in window
    ) {

        const videoObserver =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                !entry.isIntersecting
                            ) {

                                entry.target.pause();

                            }

                        }
                    );

                },
                {
                    threshold: 0.15
                }
            );


        propertyVideos.forEach(
            function (video) {

                videoObserver.observe(
                    video
                );

            }
        );

    }



    /* =====================================================
       PROPERTY VIDEO ERROR HANDLING
    ===================================================== */

    propertyVideos.forEach(
        function (video) {

            video.addEventListener(
                "error",
                function () {

                    const videoContainer =
                        video.closest(
                            ".property-video"
                        );


                    if (
                        videoContainer &&
                        !videoContainer.querySelector(
                            ".video-error"
                        )
                    ) {

                        const message =
                            document.createElement(
                                "div"
                            );

                        message.className =
                            "video-error";

                        message.textContent =
                            "Property video is currently unavailable.";


                        videoContainer.appendChild(
                            message
                        );

                    }

                }
            );

        }
    );



    /* =====================================================
       SMOOTH SCROLL
       FOR INTERNAL PAGE LINKS
    ===================================================== */

    const internalLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    internalLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    const targetId =
                        link.getAttribute(
                            "href"
                        );


                    if (
                        !targetId ||
                        targetId === "#"
                    ) {

                        return;

                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (target) {

                        event.preventDefault();


                        target.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }

                }
            );

        }
    );



    /* =====================================================
       ADD SCROLLED CLASS TO HEADER
    ===================================================== */

    const siteHeader =
        document.querySelector(
            ".site-header"
        );


    if (siteHeader) {

        function updateHeader() {

            if (
                window.scrollY > 20
            ) {

                siteHeader.classList.add(
                    "scrolled"
                );

            } else {

                siteHeader.classList.remove(
                    "scrolled"
                );

            }

        }


        updateHeader();


        window.addEventListener(
            "scroll",
            updateHeader,
            {
                passive: true
            }
        );

    }



    /* =====================================================
       PROPERTY CARD REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".property-card, .benefit-card, .contact-card, .inspection-feature"
        );


    if (
        revealElements.length &&
        "IntersectionObserver" in window
    ) {

        const revealObserver =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "visible"
                                );

                                revealObserver.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.08
                }
            );


        revealElements.forEach(
            function (element) {

                element.classList.add(
                    "reveal"
                );

                revealObserver.observe(
                    element
                );

            }
        );

    }



    /* =====================================================
       PREVENT DOUBLE FORM SUBMISSION
    ===================================================== */

    const allForms =
        document.querySelectorAll(
            "form"
        );


    allForms.forEach(
        function (form) {

            form.addEventListener(
                "submit",
                function () {

                    const submitButton =
                        form.querySelector(
                            'button[type="submit"]'
                        );


                    if (
                        submitButton &&
                        !submitButton.dataset.processing
                    ) {

                        submitButton.dataset.processing =
                            "true";

                        setTimeout(
                            function () {

                                submitButton.dataset.processing =
                                    "";

                            },
                            3000
                        );

                    }

                }
            );

        }
    );


});
