console.log("Hello, World!")
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form")
    form.addEventListener("submit", (event) => {
        event.preventDefault()
        alert("Pressed button!")
    })
    
})