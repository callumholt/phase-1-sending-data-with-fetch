// Add your code here

// const configurationObject = {
//     method: "POST",
//     headers: {
//         "content-type": "application/json",
//         "Accept" : "application/json",
//     },
//     body: JSON.stringify({
//             dogName: "Byron",
//             dogBreed: "poodle"
//         }),
// };

// fetch('http://127.0.0.1:3000/dogs', configurationObject)
// .then(function (response) {
//     return response.json();
// })
// .then(function (Object) {
//     console.log(Object);
// })
// .catch(function (error) {
//     alert("Bad Things!!! ARGGGG!");
//     console.log(error.message);
// });





function submitData(name, email) {
    const bodyData = {
        name: name,
        email: email,
    };
    
    const postMethod = {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "Accept" : "application/json",
        },
        body: JSON.stringify(bodyData),
    };
    return fetch("http://localhost:3000/users", postMethod)
        .then((response) => response.json())
        .then((data) => {
            
            const body = document.querySelector('body');
            const h2 = document.createElement('h2');
            h2.innerHTML = data.id;
            body.appendChild(h2);
            
        })

        .catch((error) => {
            console.log('There has been a problem with your fetch operation:', error);
           
            const body = document.querySelector('body');
            const h2 = document.createElement('h2');
            h2.innerHTML = error;
            body.appendChild(h2);
    });
};

submitData();