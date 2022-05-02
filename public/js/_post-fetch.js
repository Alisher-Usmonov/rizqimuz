import { selectAll } from "./_functions";

export default () => {
    try {
        let deleteBtns = selectAll("#delete-board");
        let publicBtns = selectAll("#public-board");
        deleteBtns.forEach(button => {
            let boardSlug = button.getAttribute("data-slug");

            button.onclick = async () => {
                let request = await fetch(`/boards/${boardSlug}`, {
                    method: "DELETE"
                });
                let response = await request.json();
                if (response.ok) {
                    window.location.reload();
                }
            }
        })

        publicBtns.forEach(button => {
            let boardSlug = button.getAttribute("data-slug");

            button.onclick = async () => {
                let request = await fetch(`/boards/public/${boardSlug}`, {
                    method: "PATCH"
                });
                let response = await request.json();
                if (response.ok) {
                    window.location.reload();
                }
            }
        })

    } catch (err) {}
}