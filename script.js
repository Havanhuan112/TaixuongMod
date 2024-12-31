// script.js
const container = document.getElementById("particle-container");

// Tạo hiệu ứng particles
function createParticles() {
    for (let i = 0; i < 100; i++) {
        const particle = document.createElement("div");
        particle.classList.add("particle");
        particle.style.left = Math.random() * 100 + "vw";
        particle.style.top = Math.random() * 100 + "vh";
        particle.style.animationDuration = Math.random() * 5 + 2 + "s";
        container.appendChild(particle);

        // Xóa particle khi hoàn tất animation
        particle.addEventListener("animationend", () => {
            particle.remove();
        });
    }
}

// Tạo particles lặp lại
setInterval(createParticles, 1000);

// Button event
const downloadButton = document.getElementById("downloadButton");
downloadButton.addEventListener("click", () => {
    window.location.href = "https://www.mediafire.com/file/rwepv7ci50r0cut/cache_res.OdVY88vqa9NcdHWx8dKH1EWvhoo%257E3D/file"; // Đường link tải về
});