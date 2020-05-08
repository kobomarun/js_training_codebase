function handlePost() {
    event.preventDefault();
    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;
    let btn = document.getElementById('btn')
    let btnDiv = document.getElementById('btn-div')
    btn.style ="display:none";
    btnDiv.innerHTML = `<button class="btn btn-primary"  id="btn">Submiting.......</button>`
    let data = {
        userId:101,
        id:101,
        title: title,
        body: body
    }


    fetch('https://jsonplaceholder.typicode.com/posts/', {
       method: 'POST',
       body: data
          }) .then(response => response.json())
    .then(response => {
        console.log(response);
        
        // btn.style ="display:block";
        btnDiv.innerHTML = `<button class="btn btn-primary"  id="btn">Submit</button>`

    })

}



// function handlePost() {
//     event.preventDefault();
//     let title = document.getElementById('title').value;
//     let body = document.getElementById('body').value;

//     $.ajax({
//         url: 'https://jsonplaceholder.typicode.com/posts/',
//         type: 'POST',
//         data: {
//             userId:101,
//             id:101,
//             title: title,
//             body: body
//         },
//         success:function(response) {
//             console.log(response)
//             alert('Post Successfully Inserted')
//         },
//         error: function(error) {
//             console.log(error)
//             alert('Error in inserting')
//         }
//     })

// }