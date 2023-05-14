const tooltips = document.querySelectorAll(".my-tool-tip");
tooltips.forEach(t => {
    new bootstrap.Tooltip(t);
})