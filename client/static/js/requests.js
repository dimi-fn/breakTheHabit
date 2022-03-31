// get all users or habits
// change category to "users" or "habits"
async function getAll(category){
    try {
        const response = await fetch(`http://localhost:3000/${category}`);
        const data = await response.json()
        return data;
    } catch (err) {
        console.warn(err);
    }
}

// get all habits per unique user id
async function getHabitsOfUser(id) {
    try {
      const response = await fetch(`http://localhost:3000/habits/user/${id}`);
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  }

// get user or habit by id
async function getItem(category, id) {
    try {
        const response = await fetch(`http://localhost:3000/${category}/${id}`);
        const data = await response.json();
        return data;
    } catch (err) {
        console.warn(err);
    }
}

async function postHabit(e){
    e.preventDefault();
    try {
        const options = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
        }
        
        const response = await fetch('http://localhost:3000/habits', options);
        const { id, err } = await response.json();
        if(err) { 
            throw Error(err) 
        } else {
            window.location.hash = `#habits/${id}`
        }
    } catch (err) {
        console.warn(err);
    }
}

async function deleteHabit(id){
    try {
        const options = { method: 'DELETE' }
        await fetch(`http://localhost:3000/habits/${id}`, options);
        window.location.hash = `#books`
    } catch (err) {
        console.warn(err);
    }
}
