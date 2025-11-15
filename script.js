let model = null;

document.addEventListener("DOMContentLoaded", () => {
    model = document.getElementById("brahmaModel");

    const marker = document.getElementById("markerBrahma");

    marker.addEventListener("markerFound", () => {
        document.getElementById("openMateriBtn").style.display = "block";
        document.getElementById("controls").style.display = "flex";
    });

    marker.addEventListener("markerLost", () => {
        document.getElementById("controls").style.display = "none";
        // tombol materi tetap
    });
});

// ROTATE
function rotate() {
    let r = model.getAttribute("rotation");
    model.setAttribute("rotation", {
        x: r.x,
        y: r.y + 15,
        z: r.z
    });
}

// ZOOM
function zoomIn() {
    let s = model.getAttribute("scale");
    model.setAttribute("scale", {
        x: s.x + 0.1,
        y: s.y + 0.1,
        z: s.z + 0.1
    });
}

function zoomOut() {
    let s = model.getAttribute("scale");
    model.setAttribute("scale", {
        x: Math.max(0.3, s.x - 0.1),
        y: Math.max(0.3, s.y - 0.1),
        z: Math.max(0.3, s.z - 0.1)
    });
}

// RESET
function resetModel() {
    model.setAttribute("scale", { x: 1, y: 1, z: 1 });
    model.setAttribute("rotation", { x: 0, y: 0, z: 0 });
}

// PANEL MATERI
function closeMateri() {
    document.getElementById("materiPanel").style.display = "none";
}

document.getElementById("openMateriBtn").onclick = () => {
    document.getElementById("materiPanel").style.display = "block";
};
