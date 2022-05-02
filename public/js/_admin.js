import { selectAll } from "./_functions";

export default () => {
    try {
        let buttons = selectAll("#delete-admin");
        buttons.forEach(btn => {
            let adminId = btn.getAttribute("data-admin-id");
            btn.addEventListener("click", async () => {
                let deleteRequest = await fetch(`/admin/admins/${adminId}`, {
                    method: "DELETE"
                });
                let response = await deleteRequest.json();

                if(response.ok) {
                    window.location.reload();
                } else {
                    alert(response.message);
                }
            });
        })
    } catch(err) {}
}