const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const addressInput = document.getElementById("address");
const summaryInput = document.getElementById("summary");

const previewName = document.getElementById("previewName");
const previewContact = document.getElementById("previewContact");
const previewSummary = document.getElementById("previewSummary");

const educationContainer =
    document.getElementById("educationContainer");

const experienceContainer =
    document.getElementById("experienceContainer");

const previewEducation =
    document.getElementById("previewEducation");

const previewExperience =
    document.getElementById("previewExperience");

const addEducationBtn =
    document.getElementById("addEducationBtn");

const addExperienceBtn =
    document.getElementById("addExperienceBtn");

const printBtn =
    document.getElementById("printBtn");
const personalInputs = [
    nameInput,
    emailInput,
    phoneInput,
    addressInput,
    summaryInput
];

personalInputs.forEach(function (input) {

    input.addEventListener("input", updatePreview);

});


function updatePreview() {

    previewName.textContent =
        nameInput.value || "Your Name";

    const contactDetails = [
        emailInput.value,
        phoneInput.value,
        addressInput.value
    ].filter(Boolean);

    previewContact.textContent =
        contactDetails.length > 0
            ? contactDetails.join(" | ")
            : "Email | Phone | Address";

    previewSummary.textContent =
        summaryInput.value ||
        "Your professional summary will appear here.";

    updateEducationPreview();
    updateExperiencePreview();
}
addEducationBtn.addEventListener(
    "click",
    function () {

        const item =
            document.createElement("div");

        item.className = "dynamic-item";

        item.innerHTML = `
            <h4>Education Entry</h4>

            <label>Degree / Course</label>
            <input
                type="text"
                class="education-degree"
                placeholder="e.g. B.Sc. Biotechnology"
            >

            <label>Institution</label>
            <input
                type="text"
                class="education-institution"
                placeholder="e.g. Maharishi University"
            >

            <label>Year</label>
            <input
                type="text"
                class="education-year"
                placeholder="e.g. 2027"
            >

            <button
                type="button"
                class="remove-btn"
            >
                Remove
            </button>
        `;

        educationContainer.appendChild(item);

        addInputListeners(item);

        updateEducationPreview();

    }
);


addExperienceBtn.addEventListener(
    "click",
    function () {

        const item =
            document.createElement("div");

        item.className = "dynamic-item";

        item.innerHTML = `
            <h4>Experience Entry</h4>

            <label>Job Title / Role</label>
            <input
                type="text"
                class="experience-role"
                placeholder="e.g. Web Development Intern"
            >

            <label>Company</label>
            <input
                type="text"
                class="experience-company"
                placeholder="Company name"
            >

            <label>Duration</label>
            <input
                type="text"
                class="experience-duration"
                placeholder="e.g. June 2026 - August 2026"
            >

            <label>Description</label>
            <textarea
                class="experience-description"
                placeholder="Describe your responsibilities..."
            ></textarea>

            <button
                type="button"
                class="remove-btn"
            >
                Remove
            </button>
        `;

        experienceContainer.appendChild(item);

        addInputListeners(item);

        updateExperiencePreview();

    }
);

function addInputListeners(item) {

    const inputs =
        item.querySelectorAll("input, textarea");

    inputs.forEach(function (input) {

        input.addEventListener(
            "input",
            function () {

                updateEducationPreview();
                updateExperiencePreview();

            }
        );

    });


    const removeButton =
        item.querySelector(".remove-btn");

    removeButton.addEventListener(
        "click",
        function () {

            item.remove();

            updateEducationPreview();
            updateExperiencePreview();

        }
    );
}

function updateEducationPreview() {

    const items =
        educationContainer.querySelectorAll(
            ".dynamic-item"
        );

    previewEducation.innerHTML = "";

    if (items.length === 0) {

        previewEducation.innerHTML =
            "<p>Your education details will appear here.</p>";

        return;
    }


    items.forEach(function (item) {

        const degree =
            item.querySelector(
                ".education-degree"
            ).value;

        const institution =
            item.querySelector(
                ".education-institution"
            ).value;

        const year =
            item.querySelector(
                ".education-year"
            ).value;


        const previewItem =
            document.createElement("div");

        previewItem.className =
            "preview-item";


        const heading =
            document.createElement("h3");

        heading.textContent =
            degree || "Degree / Course";

        previewItem.appendChild(heading);


        const details =
            document.createElement("p");

        details.textContent =
            [institution, year]
                .filter(Boolean)
                .join(" | ");

        previewItem.appendChild(details);


        previewEducation.appendChild(
            previewItem
        );

    });
}

function updateExperiencePreview() {

    const items =
        experienceContainer.querySelectorAll(
            ".dynamic-item"
        );

    previewExperience.innerHTML = "";

    if (items.length === 0) {

        previewExperience.innerHTML =
            "<p>Your experience details will appear here.</p>";

        return;
    }


    items.forEach(function (item) {

        const role =
            item.querySelector(
                ".experience-role"
            ).value;

        const company =
            item.querySelector(
                ".experience-company"
            ).value;

        const duration =
            item.querySelector(
                ".experience-duration"
            ).value;

        const description =
            item.querySelector(
                ".experience-description"
            ).value;


        const previewItem =
            document.createElement("div");

        previewItem.className =
            "preview-item";


        const heading =
            document.createElement("h3");

        heading.textContent =
            role || "Job Title / Role";

        previewItem.appendChild(heading);


        const details =
            document.createElement("p");

        details.textContent =
            [company, duration]
                .filter(Boolean)
                .join(" | ");

        previewItem.appendChild(details);


        if (description) {

            const descriptionText =
                document.createElement("p");

            descriptionText.textContent =
                description;

            previewItem.appendChild(
                descriptionText
            );

        }


        previewExperience.appendChild(
            previewItem
        );

    });
}

printBtn.addEventListener(
    "click",
    function () {

        window.print();

    }
);

updatePreview();