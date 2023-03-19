console.log("Hello, World!")
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form")
    form.addEventListener("submit", (event) => {
        event.preventDefault()
        const username = document.querySelector("input").value
        
        const response = fetch(`https://api.github.com/users/${username}`)
        const data = await response.json()
        console.log(data)
    })
    
})