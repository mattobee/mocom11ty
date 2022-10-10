window.addEventListener('DOMContentLoaded', () => {

    const btn_copy = document.getElementById('copy')
    const bio = document.getElementById('bio')

    copy.onclick = () => {
        const value = bio.textContent
        navigator.clipboard.writeText(value)
        console.log("clicking copy")
    }
	
});
