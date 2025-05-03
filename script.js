document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.querySelector("#overlay");
    const card = document.querySelector(".card");
    
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        document.documentElement.style.setProperty("--x", `${x}px`);
        document.documentElement.style.setProperty("--y", `${y}px`);
        document.documentElement.style.setProperty("--circle-size", "100px");
        
        overlay.style.opacity = "1";
    });

    card.addEventListener("mouseleave", () => {
        if(document.documentElement.style.getPropertyValue("--circle-size") !== "150%") {
            document.documentElement.style.setProperty("--circle-size", "0%");
            overlay.style.opacity = "0";
        }
    });
});
card.addEventListener("click", () => {
    document.documentElement.style.setProperty("--circle-size", "150%");
    overlay.style.opacity = "1";
    overlay.style.pointerEvents = "auto";
});
card.addEventListener("click", () => {
	document.documentElement.style.setProperty("--circle-size", "100%");
});
