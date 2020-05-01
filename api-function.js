//API

function getAPI() {
    let api = document.getElementById('api');
    let html;
    console.log('fetch')
    fetch('https://jsonplaceholder.typicode.com/posts/')
    .then(response => response.json())
    .then(response =>  {
        response.map(item => {
            html += `<td>${item.userId}</td>
                        <td>${item.title}</td>`;
            return(
                api.innerHTML = html
            )
        })
    })
    .catch(error => console.log(error))
}



getAPI();



















// function Person(name, age, ...arg) {
//     this.name = name;
//     this.age = age;
//     this.arg =  arg;
// }

// /// another to add stuff

// var John = new Person('John', 170, "50feet");

// const { name, age, arg } = John;

// // alert(John.name + " " + John.age)

// alert(name + "  " + age + "  " + arg)

