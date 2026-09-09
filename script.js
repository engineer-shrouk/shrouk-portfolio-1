// =========================================
// PROJECT CASE STUDIES
// =========================================

const projects = {

    superstore: {

        category: "EXCEL · POWER QUERY",

        title: "Superstore Sales Dashboard",

        subtitle: "Superstore Sales Dashboard using Microsoft Excel.",

    image: "superstore-dashboard.png",

        description:
            "The goal was not just to visualize the data, but to explore it and turn raw numbers into meaningful business insights.",

        workTitle: "WHAT I WORKED ON",

        work: [
            "Cleaned and prepared 9,994 rows of raw data using Power Query.",
            "Created calculated metrics such as Profit Margin.",
            "Built Pivot Tables and Pivot Charts to analyze the data.",
            "Designed an interactive dashboard using Slicers.",
            "Analyzed sales and profit performance across different business dimensions."
        ],

        insightsTitle: "KEY INSIGHTS",

        insights: [
            "Total Sales: $2.29M+",
            "Total Profit: $286K+",
            "Profit Margin: ~12.5%",
            "Top Region by Sales: West",
            "Top 10 products and sub-category performance",
            "Monthly sales trends",
            "Sales distribution across customer segments"
        ],

        takeaway:
            "Through this project, I practiced how to move from raw data → analysis → insights → better business understanding.",

        skills:
            "Excel · Power Query · Data Visualization · Dashboard Design"
    },


    "town-team": {

        category: "POWER BI",

        title: "Town Team Sales Dashboard",

        subtitle: "Sales Dashboard using Microsoft Power BI.",

     image: "town-team-dashboard.png",
        description:
            "An interactive Power BI dashboard designed to transform sales data into a clear and accessible business view.",

        workTitle: "WHAT I WORKED ON",

        work: [
            "Data preparation and transformation.",
            "Created analytical measures and KPIs.",
            "Built interactive Power BI visualizations.",
            "Designed an easy-to-navigate dashboard.",
            "Analyzed sales performance and business trends."
        ],

        insightsTitle: "KEY INSIGHTS",

        insights: [
            "Sales performance overview",
            "Performance across different business dimensions",
            "Key KPI monitoring",
            "Trend analysis",
            "Interactive filtering and exploration"
        ],

        takeaway:
            "This project strengthened my ability to turn business data into an interactive Power BI experience that makes analysis easier and more actionable.",

        skills:
            "Power BI · Data Analysis · Data Visualization · Dashboard Design"
    }

};


// =========================================
// OPEN PROJECT
// =========================================

function openProject(projectId) {

    const project = projects[projectId];

    if (!project) return;


    document.getElementById("modalCategory").textContent =
        project.category;

    document.getElementById("modalTitle").textContent =
        project.title;


    // Project image
    const modalImage = document.getElementById("modalImage");

    if (modalImage && project.image) {

        modalImage.src = project.image;
        modalImage.alt = project.title;

    }


    // Subtitle
    const modalSubtitle =
        document.getElementById("modalSubtitle");

    if (modalSubtitle) {
        modalSubtitle.textContent =
            project.subtitle;
    }


    // Description
    document.getElementById("modalDescription").textContent =
        project.description;


    // Work
    const modalWorkTitle =
        document.getElementById("modalWorkTitle");

    const modalWork =
        document.getElementById("modalWork");

    if (modalWorkTitle && modalWork) {

        modalWorkTitle.textContent =
            project.workTitle;

        modalWork.innerHTML = "";

        project.work.forEach(item => {

            const li = document.createElement("li");

            li.textContent = item;

            modalWork.appendChild(li);

        });

    }


    // Insights
    const modalInsightsTitle =
        document.getElementById("modalInsightsTitle");

    const modalInsights =
        document.getElementById("modalInsights");

    if (modalInsightsTitle && modalInsights) {

        modalInsightsTitle.textContent =
            project.insightsTitle;

        modalInsights.innerHTML = "";

        project.insights.forEach(item => {

            const li = document.createElement("li");

            li.textContent = item;

            modalInsights.appendChild(li);

        });

    }


    // Takeaway
    document.getElementById("modalTakeaway").textContent =
        project.takeaway;


    // Skills
    const modalSkills =
        document.getElementById("modalSkills");

    if (modalSkills) {
        modalSkills.textContent =
            project.skills;
    }


    // Open modal
    document.getElementById("projectModal")
        .classList.add("active");

    document.body.style.overflow = "hidden";
}


// =========================================
// CLOSE PROJECT
// =========================================

function closeProject() {

    document.getElementById("projectModal")
        .classList.remove("active");

    document.body.style.overflow = "";
}


// =========================================
// CLOSE WHEN CLICKING OUTSIDE
// =========================================

const projectModal =
    document.getElementById("projectModal");

if (projectModal) {

    projectModal.addEventListener(
        "click",
        function (event) {

            if (event.target === this) {
                closeProject();
            }

        }
    );

}


// =========================================
// ESC KEY
// =========================================

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {
            closeProject();
        }

    }
);
// =========================================
// CERTIFICATE MODAL
// =========================================

function openCertificate() {

    const modal =
        document.getElementById("certificateModal");

    if (!modal) return;

    modal.classList.add("active");

    document.body.style.overflow = "hidden";
}


// =========================================
// CLOSE CERTIFICATE
// =========================================

function closeCertificate() {

    const modal =
        document.getElementById("certificateModal");

    if (!modal) return;

    modal.classList.remove("active");

    document.body.style.overflow = "";
}


// =========================================
// CLOSE WHEN CLICKING OUTSIDE
// =========================================

const certificateModal =
    document.getElementById("certificateModal");

if (certificateModal) {

    certificateModal.addEventListener(
        "click",
        function (event) {

            if (event.target === this) {
                closeCertificate();
            }

        }
    );

}


// =========================================
// ESC KEY
// =========================================

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {
            closeCertificate();
        }

    }
);
// =========================================
// ACTIVE NAVIGATION
// =========================================

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 180;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        const target =
            link.getAttribute("href");

        if (target === `#${currentSection}`) {

            link.classList.add("active");

        }

    });

});
// =========================================
// SCROLL REVEAL ANIMATION
// =========================================

const revealElements =
    document.querySelectorAll(
        ".section-title, .skill-card, .project-card, .certificate-card, .usp-card, .about-stats div"
    );


revealElements.forEach(element => {

    element.classList.add("reveal");

});


const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});
console.log("SCRIPT IS WORKING");
