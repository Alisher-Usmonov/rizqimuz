import { selectOne, selectAll } from "./_functions";

export default () => {
    try {
        const submitBtn = selectOne("#submit-sponsor");
        const websiteInput = selectOne("#sponsor-website-input");
        const imageInput = selectOne("#sponsor-image-input");
        const deleteButtons = selectAll("#delete-sponsor");

        submitBtn.addEventListener("click", async () => {
            let imageFile = imageInput.files[0];
            let website_url = websiteInput.value;

            if(imageFile && website_url) {
                let form_data = new FormData();
                form_data.append("image", imageFile);
                form_data.append("website_url", website_url);

                let req = await fetch("/sponsor", {
                    method: "POST",
                    body: form_data
                });
                let data = await req.json();

                if(data.ok) {
                    window.location.reload();
                } else {
                    alert(data.message);
                }
            }
        })

    } catch (err) {}
}