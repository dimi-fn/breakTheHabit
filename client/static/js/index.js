function renderProfile(){
    let greeting = document.createElement('h3')
    greeting.textContext = `You are now logged in as ${localStorage.getItem('username')}`
}
