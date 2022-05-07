import { selectOne, selectAll } from "./_functions";

export default () => {
    try {
        const skillList = selectOne(".skills__list");
        let skillItems = selectAll(".skills__item");
        const skillHintItems = selectAll(".skills__hints__item");
        let items = Array.from(skillItems).map(el => el.querySelector("span").textContent);
        
        skillHintItems.forEach((skill) => {
            skill.addEventListener("click", () => {
                if (!items.includes(skill.textContent.trim())) {
                    let li = document.createElement("li");
                    let span1 = document.createElement("span");
                    let span2 = document.createElement("span");
                    let img = document.createElement("img");

                    li.className = "skills__item";
                    span1.textContent = skill.textContent.trim();
                    span2.className = "skills__remove";
                    img.src = "/img/icons/times.svg";
                    img.alt = "remove icon";
                    span2.appendChild(img);
                    li.appendChild(span1);
                    li.appendChild(span2);
                    skillList.appendChild(li);

                    items.push(skill.textContent.trim());
                }
            })
        });
        
        skillItems.forEach(item => {
            let removeButton = item.querySelector(".skills__remove");
            
            removeButton.addEventListener("click", () => {
                skillList.removeChild(item);
            })
        })
    } catch (e) { }
}