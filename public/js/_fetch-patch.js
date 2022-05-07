export default async function(jsonBody, path, userId, method) {
    try {
        let request = await fetch(`/profile/${path}/${userId}`, {
            method: method ? method : "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: jsonBody 
        });

        let response = await request.json();

        if(response.ok) {
            window.location.reload();
        } else {
            alert(response.message);
        }
    } catch(e) {}
}