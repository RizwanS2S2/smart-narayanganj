let allData = [];

document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const categoryTitle = urlParams.get('name0');
    const categoryKey = urlParams.get('name'); // used to filter if needed

    if (categoryTitle) {
        document.getElementById("toolbar_title").innerText = categoryTitle;
    }

    fetchData();
});

async function fetchData() {
    const shimmer = document.getElementById("shimmerLayout");
    const listContainer = document.getElementById("listview1");

    try {
        // Using the API from your Java code
        const response = await fetch("https://sheetdb.io/api/v1/8qtkh2mg1ruri");
        const data = await response.json();
        
        allData = data;
        shimmer.style.display = "none";
        renderList(allData);
    } catch (error) {
        shimmer.innerHTML = "<p style='text-align:center'>ইন্টারনেট সেটিং চেক করুন।</p>";
        console.error("Error fetching data:", error);
    }
}

function renderList(dataItems) {
    const listContainer = document.getElementById("listview1");
    listContainer.innerHTML = "";

    dataItems.forEach((item, index) => {
        const imgSrc = item.image === "NO" ? "photos/smartnarayanganj.png" : item.image;
        
        const card = document.createElement("div");
        card.className = "data-card";
        card.innerHTML = `
            <img src="${imgSrc}" class="item-image" onerror="this.src='photos/smartnarayanganj.png'">
            <div class="item-details">
                <div class="content-text">${item.content}</div>
                <div class="action-buttons">
                    <button class="btn" onclick="openMap('${item.maplink}')">
                        <i class="fa-solid fa-location-dot"></i> গুগল ম্যাপ
                    </button>
                    <button class="btn" onclick="makeCall('${item.number}')">
                        <i class="fa-solid fa-phone"></i> কল করুন
                    </button>
                </div>
            </div>
        `;
        listContainer.appendChild(card);
    });
}

function openMap(link) {
    if (!link || link === "") {
        alert("কোন তথ্য দেওয়া নেই");
    } else {
        window.open(`https://www.google.com/maps/search/?api=1&query=${link}`, "_blank");
    }
}

function makeCall(number) {
    if (!number || number === "") {
        alert("কোন তথ্য দেওয়া নেই");
    } else {
        window.location.href = `tel:${number}`;
    }
}

function filterData() {
    const query = document.getElementById("searchBox").value.toLowerCase();
    const filtered = allData.filter(item => 
        item.content.toLowerCase().includes(query)
    );
    renderList(filtered);
}