import { selectOne } from "./_functions";

export default () => {
    try {
        let fileInput = selectOne("#profile-pic");
        let image = selectOne("#profile-avatar");

        fileInput.addEventListener("change", async (evt) => {
            let imgFile = evt.target.files[0];
            let reader = new FileReader();
            reader.addEventListener("load", () => {
                let upload_image = reader.result;
                console.log(upload_image)
                image.src = upload_image;
            })
            reader.readAsDataURL(imgFile);

            let formData = new FormData();
            formData.append("image", imgFile);
            console.log(formData);
            let request = await fetch("http://localhost:5000/profile/edit-image", {
                method: "POST",
                body: formData,
            })
            let response = await request.json();
            console.log(response);
        })
    } catch (err) {}
}