document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.getElementById("_nav_view");
    const overlay = document.getElementById("overlay");
    const menuBtn = document.getElementById("menu_btn");

    // Drawer Toggle Logic
    menuBtn.addEventListener("click", () => {
        sidebar.classList.add("open");
        overlay.classList.add("active");
    });

    overlay.addEventListener("click", () => {
        sidebar.classList.remove("open");
        overlay.classList.remove("active");
    });

    // Drawer Menu Click Listeners
    document.getElementById("exit").addEventListener("click", () => {
        if(confirm("আপনি কি অ্যাপ থেকে বের হতে চান?")) window.close();
    });

    // Grid Item Click Logic (Equivalent to item1.setOnClickListener)
    const cardMap = {
        "item1": "doctor", "item2": "hospital", "item3": "diagnostic",
        "item4": "teacher", "item5": "blood", "item6": "tourist",
        "item7": "car", "item8": "hospital_2", "item9": "news",
        "item10": "fire", "item11": "job", "item12": "restaurant",
        "item13": "courier", "item14": "office", "item15": "electricity",
        "item16": "worker", "item17": "org", "item18": "police",
        "item19": "lawyer", "item20": "rent", "item21": "shop",
        "item22": "bank", "item23": "education", "item24": "video"
    };

    Object.keys(cardMap).forEach(id => {
        const el = document.getElementById(id);
        if(el) {
            el.addEventListener("click", function() {
                const name0 = this.querySelector("p").innerText;
                const name = cardMap[id];
                // Equivalent to in.putExtra and startActivity
                window.location.href = `data.html?name=${name}&name0=${encodeURIComponent(name0)}`;
            });
        }
    });
});