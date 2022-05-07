import fetchPatch from "./_fetch-patch";
import { selectOne, selectAll } from "./_functions";

const testModal = () => {
    let modals = selectAll(".modal");
    let editBtns = selectAll("#edit-btn");
    let modalClose = selectAll("[data-modal-close]");
    let modalUpdate = selectAll("[data-modal-update]");
    let modalCloseIcon = selectAll("[data-modal-close-icon]");
    let removeSkillBtns = selectAll("#skill-remove-btn");
    let portfolioUpdate = selectAll("")

    editBtns.forEach((button, id) => {
        button.addEventListener("click", async () => {
            modals[id].classList.remove("d-none");
        })
    })

    modalClose.forEach((closeButton, idx) => {
        closeButton.addEventListener("click", async () => {
            modals[idx].classList.add("d-none");
        })
    })

    modalCloseIcon.forEach((closeButton, idx) => {
        closeButton.addEventListener("click", async () => {
            modals[idx].classList.add("d-none");
        })
    })

    modalUpdate.forEach((updateButton, index) => {
        updateButton.addEventListener("click", async () => {
            const path = updateButton.getAttribute("data-path");
            const userId = updateButton.getAttribute("data-user-id");

            if(index == 0) {
                let first_name = selectOne("#input-update-fname").value;
                let last_name = selectOne("#input-update-lname").value;

                let jsonBody = JSON.stringify({
                    first_name,
                    last_name,
                });

                await fetchPatch(jsonBody, path, userId);
            } else if (index > 0 && index < 4) {
                let value = selectOne(`[data-${path}-input]`).value;

                const json = JSON.stringify({ newValue: value });

                await fetchPatch(json, path, userId);

            } else if(index == 4) {
                let text = selectOne("[data-about-input]").value;
                if(!text) {
                    alert("Ma'lumot kiritilishi majburiy!");
                } else {
                    let jsonBody = JSON.stringify({
                        text
                    })
                    await fetchPatch(jsonBody, path, userId);
                }
            } else if(index == 5) {
                let image = selectOne("[data-portfolio-image-input]").files[0];
                let portfolioName = selectOne("[data-input-project-name]").value;
                let portfolioURL = selectOne("[data-input-project-link]").value;

                if(image, portfolioName, portfolioURL) {
                    let formData = new FormData();
                    formData.append("image", image);
                    formData.append("project_name", portfolioName);
                    formData.append("project_url", portfolioURL);

                    let req = await fetch(`/profile/${path}/${userId}`, {
                        method: "POST",
                        body: formData
                    })

                    let res = await req.json();

                    if(res.ok) {
                        window.location.reload();
                    } else {
                        alert(res.message);
                    }
                }

            } else if(index == 6) {
                let name = selectOne("[data-input-company-name]").value;
                let position = selectOne("[data-input-position]").value;
                let start_year = selectOne("[data-input-work-start-year]").textContent;
                let start_month = selectOne("[data-input-work-start-month]").textContent;
                let end_year = selectOne("[data-input-work-end-year]").textContent;
                let end_month = selectOne("[data-input-work-end-month]").textContent;
                let about = selectOne("[data-textarea-work-about]").value;


                const jsonBody = JSON.stringify({
                    name,
                    position,
                    start_year,
                    start_month,
                    end_year,
                    end_month,
                    about
                })


                await fetchPatch(jsonBody, path, userId, "POST");
            } else if(index == 7) {
                let name = selectOne("[data-input-edu-name]").value;
                let direction = selectOne("[data-input-edu-direction]").value;
                let start_year = selectOne("[data-input-edu-start-year]").textContent;
                let start_month = selectOne("[data-input-edu-start-month]").textContent;
                let end_year = selectOne("[data-input-edu-end-year]").textContent;
                let end_month = selectOne("[data-input-edu-end-month]").textContent;
                let about = selectOne("[data-textarea-edu-about]").value;


                const jsonBody = JSON.stringify({
                    name,
                    direction,
                    start_year,
                    start_month,
                    end_year,
                    end_month,
                    about
                })


                await fetchPatch(jsonBody, path, userId, "POST");
            } else if(index == 8) {
                let name = selectOne("[data-input-lang-name]").textContent;
                let level = selectOne("[data-input-lang-level]").textContent;

                const jsonBody = JSON.stringify({
                    name,
                    level
                })


                await fetchPatch(jsonBody, path, userId, "POST");
            } else if(index == 9) {
                const skillItems = selectAll(".skills__item");
                let skills = Array.from(skillItems).map(el => el.querySelector("span").textContent);

                let jsonBody = JSON.stringify({
                    skills
                });

                await fetchPatch(jsonBody, path, userId);

            } else if(index == 10) {
                const youtube = selectOne("[data-input-youtube]").value;
                const github = selectOne("[data-input-github]").value;
                const website = selectOne("[data-input-website]").value;

                let jsonBody = JSON.stringify({
                    youtube,
                    github,
                    website
                });

                await fetchPatch(jsonBody, path, userId);
            }
        });
    });

    removeSkillBtns.forEach(button => {
        let path = button.getAttribute("data-path");
        let userId = button.getAttribute("data-user-id");
        let skill = button.getAttribute("data-skill");

        button.addEventListener("click", async () => {
            let jsonBody = JSON.stringify({
                skill
            });
            await fetchPatch(jsonBody, path, userId, "DELETE");
        })
    })
}

export default () => {
    try {
        testModal();
    } catch (err) {}
}