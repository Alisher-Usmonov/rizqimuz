import { selectAll, selectOne } from "./_functions";

export default () => {
    try {
        const founderSubmit = selectOne("#founder-submit"),
            fileField = selectOne("#image-input"),
            fileName = selectOne("#image-name"),
            nameField = selectOne("#founder-name"),
            deleteButtons = selectAll("#delete-founder");

        fileField.addEventListener("change", (evt) => {
            console.log(evt.target.files);
            let filename = evt.target.files[0].name;
            fileName.textContent = filename
        });

        founderSubmit.addEventListener("click", async (evt) => {
            let img = fileField.files[0];
            let founderName = nameField.value;
            if(img && founderName) {
                let formdata = new FormData();
                formdata.append("image", img);
                formdata.append("name", founderName);

                let request = await fetch("/founder", {
                    method: "POST",
                    body: formdata
                })
                let response = await request.json();
                if(response.ok) {
                    window.location.reload();
                }
            } else {
                alert("Ism yoki rasm kiritilmadi")
            }
        })

        deleteButtons.forEach(btn => {
            let id = btn.getAttribute("data-founder-id");
            btn.addEventListener("click", async () => {
                let req = await fetch(`/founder/${id}`, {
                    method: "DELETE"
                });
                let res = await req.json();
                
                if(res.ok) {
                    window.location.reload();
                }
            })
        })
    } catch (err) {
    }
}