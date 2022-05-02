import { selectAll } from "./_functions";

export default () => {
    try {
        let updateButtons = selectAll("#freelancer-status-update");

        updateButtons.forEach(button => {
            const id = button.getAttribute("data-freelancer-id");
            const status = button.getAttribute("data-now-status");

            console.log(id, status);
            button.addEventListener("click", async () => {
                let req = await fetch("/freelancers", {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    method: "PATCH",
                    body: JSON.stringify({ id: id, status: status })
                })

                let res = await req.json();

                if(res.ok) {
                    window.location.reload();
                } else {
                    alert(res.message);
                }
            });
        });
    } catch (err) {}
}