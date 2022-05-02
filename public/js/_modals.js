import { selectOne } from "./_functions";

export default () => {
    try {
        let modal = selectOne(".m-name");
        console.log(modal);
        
        let closeBtn = selectOne(".m-name-close");
        let openBtn = selectOne("#edit-btn-name");

        openBtn.addEventListener("click", () => {
            modal.classList.remove("d-none");
        })

        closeBtn.addEventListener("click", () => {
            modal.classList.add("d-none");
        })
    } catch (err) {}
}