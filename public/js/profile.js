const unlikeButton = document.querySelector(".unlike-button");

//Adds liked pet to users profile page
const addLike = async (id) => {
  petid = id;
  await fetch(`/api/likes`, {
  method: "POST",
  body: JSON.stringify({
    petid,
  }),
  headers: {
    "Content-Type": "application/json",
  },
})
.then((response) => {

if (response.ok) {
  alert("You Liked This Pet!");
} else {
  alert("something went wrong");
}
})
};

// const removeFavorite = async (id) => {
//   await fetch(`/api/likes/${id}`, {
//     method: `DELETE`,
//   })
//     .then((response) => response.json())
//     .then(document.location.reload())
//     .catch((err) => console.log(err));
// };
//Removes liked pet
// const removeFavorite = async (id) => {
//   await fetch(`/api/likes/${id}`, {
//     method: `DELETE`,
//   })
//   .then((response) => response.json())
//   .then(document.location.reload())
//     .catch((err) => console.log(err));
// };

// unlikeButton.addEventListener("click", function (e) {
//   e.preventDefault();
//   const petId = e.target.dataset.id
//   console.log(petId);
//   // removeFavorite(petId);
// });

// unlikeButton.addEventListener("click", (e) => {
//   if(e.target.tagName === 'BUTTON') {
//       const petId = e.target.dataset.id
//       console.log(petId);
//       removeFavorite(petId);
//   }
// })

const removeFavorite = async (id) => {
  try {
    const response = await fetch(`/api/likes/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      // Reload the page only if the deletion was successful
      document.location.reload();
    } else {
      // Handle the case where the deletion was not successful
      console.log('Failed to unlike pet.');
    }
  } catch (error) {
    console.error('Error during unlike:', error);
  }
};

unlikeButton.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const petId = e.target.dataset.id;
    console.log(petId);
    removeFavorite(petId);
  }
});
