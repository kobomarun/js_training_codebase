// localStorage.setItem('name', 'Femi')

// localStorage.getItem('name');

// localStorage.removeItem('name')
// localStorage.clear()

if(localStorage.getItem('name')==null) {
    let name = prompt('Thank you for visiting. What is your name');
    localStorage.setItem('name', name)
    alert('Welcome '+ name + " to our website")
} else {
    alert('Welcome back '+ localStorage.getItem('name'))
}

const obj = {
    name: 'OLifemi',
    age: 33
}

localStorage.setItem('obj',JSON.stringify(obj))

console.log(JSON.parse(localStorage.getItem('obj')))
