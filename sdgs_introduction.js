const sdgData = [
    {
        id: 1,
        title: "No Poverty",
        description: "End poverty in all its forms everywhere. Ensure equal rights to economic resources, basic services, and social protection.",
        iconFile: "image/goal1_0.png",
        color: "#E5243B"
    },
    {
        id: 2,
        title: "Zero Hunger",
        description: "End hunger, achieve food security and improved nutrition, and promote sustainable agriculture for all.",
        iconFile: "image/goal2_0.png",
        color: "#DDA63A"
    },
    {
        id: 3,
        title: "Good Health and Well-Being",
        description: "Ensure healthy lives and promote well-being for all at all ages, reducing mortality and ending epidemics.",
        iconFile: "image/goal3_0.png",
        color: "#4C9F38"
    },
    {
        id: 4,
        title: "Quality Education",
        description: "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.",
        iconFile: "image/goal4_0.png",
        color: "#C5192D"
    },
    {
        id: 5,
        title: "Gender Equality",
        description: "Achieve gender equality and empower all women and girls by eliminating discrimination and violence.",
        iconFile: "image/goal5_0.png",
        color: "#FF3A21"
    },
    {
        id: 6,
        title: "Clean Water and Sanitation",
        description: "Ensure availability and sustainable management of water and sanitation for all people worldwide.",
        iconFile: "image/goal6_0.png",
        color: "#26BDE2"
    },
    {
        id: 7,
        title: "Affordable and Clean Energy",
        description: "Ensure access to affordable, reliable, sustainable, and modern energy for all globally.",
        iconFile: "image/goal7_0.png",
        color: "#FCC30B"
    },
    {
        id: 8,
        title: "Decent Work and Economic Growth",
        description: "Promote sustained, inclusive, and sustainable economic growth, full employment, and decent work for all.",
        iconFile: "image/goal8_0.png",
        color: "#A21942"
    },
    {
        id: 9,
        title: "Industry, Innovation and Infrastructure",
        description: "Build resilient infrastructure, promote inclusive and sustainable industrialization, and foster innovation.",
        iconFile: "image/goal9_0.png",
        color: "#9CBAE0"
    },
    {
        id: 10,
        title: "Reduced Inequalities",
        description: "Reduce inequality within and among countries by promoting social, economic, and political inclusion.",
        iconFile: "image/goal10_0.png",
        color: "#DD1367"
    },
    {
        id: 11,
        title: "Sustainable Cities and Communities",
        description: "Make cities and human settlements inclusive, safe, resilient, and sustainable for all inhabitants.",
        iconFile: "image/goal11_0.png",
        color: "#FD6925"
    },
    {
        id: 12,
        title: "Responsible Consumption and Production",
        description: "Ensure sustainable consumption and production patterns through efficient resource use and waste reduction.",
        iconFile: "image/goal12_0.png",
        color: "#BF8B2E"
    },
    {
        id: 13,
        title: "Climate Action",
        description: "Take urgent action to combat climate change and its impacts by strengthening resilience and awareness.",
        iconFile: "image/goal13_0.png",
        color: "#3F7E44"
    },
    {
        id: 14,
        title: "Life Below Water",
        description: "Conserve and sustainably use the oceans, seas, and marine resources for sustainable development.",
        iconFile: "image/goal14_0.png",
        color: "#0A97D9"
    },
    {
        id: 15,
        title: "Life on Land",
        description: "Protect, restore, and promote sustainable use of terrestrial ecosystems and halt biodiversity loss.",
        iconFile: "image/goal15_0.png",
        color: "#56C02B"
    },
    {
        id: 16,
        title: "Peace, Justice and Strong Institutions",
        description: "Promote peaceful and inclusive societies, provide access to justice, and build effective institutions.",
        iconFile: "image/goal16_0.png",
        color: "#00689D"
    },
    {
        id: 17,
        title: "Partnerships for the Goals",
        description: "Strengthen the means of implementation and revitalize the global partnership for sustainable development.",
        iconFile: "image/goal17_0.png",
        color: "#19486A"
    }
];

const gridContainer = document.getElementById("sdgGrid");
const popup = document.getElementById("sdgPopup");
const popupImg = document.getElementById("popupImg");
const popupTitleElem = document.getElementById("popupTitle");
const popupSubElem = document.getElementById("popupSub");
const popupDescElem = document.getElementById("popupDesc");
const closeBtn = document.getElementById("closePopupBtn");
const exploreBtn = document.getElementById("exploreBtn");
const nextBtn = document.getElementById("nextBtn");

async function fetchGoalTargets(goalId) {
    const url = `https://unstats.un.org/SDGAPI/v1/sdg/Goal/${goalId}/Target/List`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Failed to fetch SDG targets");
    }

    return await response.json();
}

async function updatePopupContent(goal) {
    popupImg.src = goal.iconFile;
    popupImg.alt = goal.title;

    popupTitleElem.innerText = `Goal ${goal.id}`;
    popupSubElem.innerText = goal.title;
    popupDescElem.innerHTML = "Loading official SDG data...";

    try {
        const targets = await fetchGoalTargets(goal.id);

        popupDescElem.innerHTML = targets
            .slice(0, 4)
            .map(target => `
                <p>
                    <strong>${target.code}</strong><br>
                    ${target.title}
                </p>
            `)
            .join("");

    } catch (error) {
        popupDescElem.innerText = goal.description;
    }
}

async function showPopupNearElement(element, goalData) {
    await updatePopupContent(goalData);

    popup.classList.add("active");

    const rect = element.getBoundingClientRect();
    const popupWidth = popup.offsetWidth;
    const popupHeight = popup.offsetHeight;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    let leftPos;
    let topPos;

    if (windowWidth <= 700) {
        leftPos = (windowWidth - popupWidth) / 2;
        topPos = (windowHeight - popupHeight) / 2;
    } else {
        leftPos = rect.right + 20;
        topPos = rect.top + rect.height / 2 - popupHeight / 2;

        if (leftPos + popupWidth > windowWidth - 10) {
            leftPos = rect.left - popupWidth - 20;
        }

        if (leftPos < 10) {
            leftPos = (windowWidth - popupWidth) / 2;
        }

        if (topPos < 10) {
            topPos = 10;
        }

        if (topPos + popupHeight > windowHeight - 10) {
            topPos = windowHeight - popupHeight - 10;
        }
    }

    popup.style.left = leftPos + "px";
    popup.style.top = topPos + "px";
}

function buildIconGrid() {
    gridContainer.innerHTML = "";

    sdgData.forEach(goal => {
        const iconWrapper = document.createElement("div");
        iconWrapper.className = "sdg-icon";

        const img = document.createElement("img");
        img.src = goal.iconFile;
        img.alt = goal.title;

        const titleDiv = document.createElement("div");
        titleDiv.className = "icon-title";
        titleDiv.innerText = goal.title;

        const labelDiv = document.createElement("div");
        labelDiv.className = "icon-label";
        labelDiv.innerText = `Goal ${goal.id}`;

        iconWrapper.appendChild(img);
        iconWrapper.appendChild(titleDiv);
        iconWrapper.appendChild(labelDiv);

        iconWrapper.addEventListener("click", function (e) {
            e.stopPropagation();
            updateShowcase(goal);
        });

        gridContainer.appendChild(iconWrapper);
    });
}

/* Explore button */
exploreBtn.addEventListener("click", function () {
    gridContainer.scrollIntoView({
        behavior: "smooth"
    });
});

/* Click outside popup to close */
document.addEventListener("click", function (e) {
    if (!e.target.closest(".sdg-popup") && !e.target.closest(".sdg-icon")) {
        popup.classList.remove("active");
    }
});

/* Close popup button */
closeBtn.addEventListener("click", function () {
    popup.classList.remove("active");
});

/* Hide popup when screen size changes */
window.addEventListener("resize", function () {
    popup.classList.remove("active");
});

/* Show BACK when info-tip is visible */
function observeInfoTip() {
    const infoTip = document.querySelector(".info-tip");

    if (!infoTip || !nextBtn) return;

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                nextBtn.style.display = "block";
            } else {
                nextBtn.style.display = "none";
            }
        });
    }, {
        threshold: 0.3
    });

    observer.observe(infoTip);
}

function updateShowcase(goal) {

  document.getElementById("showGoalNumber").innerText = goal.id;

  document.getElementById("showGoalTitle").innerText =
    `Goal ${goal.id}`;

  document.getElementById("showGoalDesc").innerText =
    goal.description;

  document.getElementById("showMoreBtn").href =
    `https://sdgs.un.org/goals/goal${goal.id}`;

  document.querySelector(".sdg-card").style.background =
    goal.color;

  document.getElementById("sdgShowcase")
    .classList.add("active");
}

document.getElementById("sdgShowcase").addEventListener("click", function () {
  this.classList.remove("active");
});

document.querySelector(".sdg-card").addEventListener("click", function (e) {
  e.stopPropagation();
});


/* Back to entrance page */
nextBtn.addEventListener("click", function () {
    window.location.href = "entrance.html";
});

/* Start */
buildIconGrid();
observeInfoTip();
