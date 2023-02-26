const form = document.querySelector('.add');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = {
    "title": form.title.value,
    "author": form.author.value,
    "date":form.date.value
  };
  console.log(data)

  await createData(data);
  window.location.replace("http://127.0.0.1:5500/pages/page.html");
});

const createData = async (data) => {
  return fetch('http://localhost:3000/blog', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
};
const lists=async()=>{
    const url='http://localhost:3000/blog';
    const res=await fetch(url);
    const result=await res.json();

    console.log(result);
    let content=``;
    result.forEach((post)=>{
        content += `
        <div>
        <h1>${post.title}</h1>
        <p>${post.author}</p>
        <a href="/update.html?id=${post.id}">Edit</a>
        <button onClick="deletepost(${post.id})">Delete</button>
        <div>
        `;
       
    });

    document.getElementById('paragraph').innerHTML=content;

};
const deletepost=async(id)=>{
    const url=`http://localhost:3000/blog/${id}`;
    await fetch(url,{
        method:'DELETE'
    })
}

window.addEventListener('DOMContentLoaded',()=>{
    return lists();
})













// const blogs=async()=>{
//     const url='http://localhost:3000/blog';
//     const res=await fetch(url);
//     const result=await res.json();

//     console.log(result);
//     let content=``;
//     result.forEach((blog)=>{
//         content += `
//         <div>
//         <h1>${blog.title}</h1>
//         <p>${blog.author}</p>
//         <p>${blog.time}</p>
     
//         <a href="#" data-id="${blog.id}" class="edit-link">Edit</a>
//         <div>
//         `;
       
//     });

//     document.getElementById('paragraph').innerHTML=content;

// };

// window.addEventListener('DOMContentLoaded',()=>{
//     return blogs();
// })


// const form = document.querySelector('.update');
// const updateButton = document.querySelector('button');

// const params = new URLSearchParams(window.location.search);
// const id = params.get('id');

// updateButton.addEventListener('click', async (e) => {
//   e.preventDefault();

//   const data = {
//     "title": form.title.value,
//     "author": form.author.value,
//     "date":fprm.date.value
//   };

//   await updateData(id, data);
//   window.location.replace("http://127.0.0.1:5500/page.html");
// });

// const updateData = async (id, data) => {
//   return fetch(`http://localhost:3000/blog/${id}`, {
//     method: 'PUT',
//     body: JSON.stringify(data),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   });
// };

// // populate the form with existing post data
// const populateForm = async () => {
//   const res = await fetch(`http://localhost:3000/blog/${id}`);
//   const post = await res.json();
//   form.title.value = post.title;
//   form.author.value = post.author;
//   form.date.value=post.date
// };

// populateForm();






