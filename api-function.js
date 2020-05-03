//API

function getAPI() {
    let api = document.getElementById('api');
    let html;
    fetch('https://jsonplaceholder.typicode.com/posts/?_limit=10')
    .then(response => response.json())
    .then(response =>  {
        console.log('fetch', response)
        response.map(item => {
            html += `<tr>
                        <td>${item.id}</td>
                        <td>${item.userId}</td>
                        <td>${item.title}</td>
                        <td>${item.body}</td>
                    </tr>`;
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

