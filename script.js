// fetch('https://randomuser.me/api/?results=10')
// .then((resp) => resp.json()) 
// .then (function (data){
//     console.log(data);
// })
// .catch(function(error){
//     console.log(error)
// })


// fetch('https://randomuser.me/api/?results=10')
// .then((resp) => resp.json())
// .then(function (data){
//     const li = document.createComment('li');
// });

const uiii = document.getElementById('users')

fetch('https://randomuser.me/api/?results=10')
.then((resp) => resp.json()) 
.then (function (data){
let users = data.result;
return users.map(user)=> {
    const li = document.createElement('li')
    const img = document.createElement('ímg')
    const p = document.createElement('p')

    uiii.appendChild(li);
    let paragraph = li.appendChild(p);
    let image = li.appendChild(img);
    let firstName = user.name.first;
    let lastName = user.name.last;
    console.log(user.picture.large);
    paragraph.innerHTML = `${firstName} ${lastName}`;
    img.src = user.picture.large;

}




})
.catch(function(error){
    console.log(error)
})
