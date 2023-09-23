window.addEventListener('DOMContentLoaded', () => {
    const btn_copy = document.getElementById('copy');
    const bio = document.getElementById('bio');

    btn_copy.addEventListener('click', () => {
        const value = bio.textContent;
        navigator.clipboard.writeText(value)
            .then(() => console.log("Copied to clipboard"))
            .catch((error) => console.error("Failed to copy to clipboard: ", error));
    });
});