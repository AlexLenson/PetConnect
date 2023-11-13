document.addEventListener("DOMContentLoaded", function () {
    const tableBody = document.querySelector(".table tbody");
    const modal = document.querySelector(".modal");
    const modalBackground = document.querySelector(".modal-background");
    const modalPetName = modal.querySelector("#pet-name-modal");
    const modalPhoto = modal.querySelector("#pet-picture-modal");
    const modalPetBreed = modal.querySelector("#pet-breed-modal");
    const modalPetAge = modal.querySelector("#pet-age-modal");
    const modalPetSex = modal.querySelector("#pet-sex-modal");
    const modalPetColor = modal.querySelector("#pet-color-modal");
    const modalPetSize = modal.querySelector("#pet-size-modal");
    const modalIntakeDate = modal.querySelector("#pet-intake-date-modal");
    const modalPetId = modal.querySelector("#pet-id");
    const cancelButton = modal.querySelector("#cancelButton");
    const closeButton = modal.querySelector(".delete");
    const likeButton = document.querySelector("#likeButton");

    // Add a click event listener to the table body
    tableBody.addEventListener("click", async function (event) {
        const clickedRow = event.target.closest("tr");

        if (clickedRow) {
            // Get the data from the clicked row
            const rowData = {
                petName: clickedRow.cells[2].textContent,
                photo: clickedRow.cells[9].querySelector('img').src, // Update with appropriate image URL
                petBreed: clickedRow.cells[6].textContent,
                petAge: clickedRow.cells[3].textContent,
                petSex: clickedRow.cells[7].textContent,
                petColor: clickedRow.cells[5].textContent,
                petSize: clickedRow.cells[4].textContent,
                intakeDate: clickedRow.cells[1].textContent,
                petID: clickedRow.cells[10].textContent,
            };

            // Populate the modal with the row data
            modalPetName.textContent = rowData.petName;
            modalPhoto.src = rowData.photo;
            modalPetBreed.textContent = rowData.petBreed;
            modalPetAge.textContent = rowData.petAge;
            modalPetSex.textContent = rowData.petSex;
            modalPetColor.textContent = rowData.petColor;
            modalPetSize.textContent = rowData.petSize;
            modalIntakeDate.textContent = rowData.intakeDate;
            modalPetId.textContent = rowData.petID;


            // Check if the user has already liked the pet
            const hasLiked = await hasUserLikedPet(modalPetId.textContent);
            console.log("hasLiked: ", hasLiked);
            // Update the like button
            if (hasLiked) {
                likeButton.innerHTML = "Like ❤️";
            } else {
                likeButton.innerHTML = "Like";
            }


            // Display the modal when a row or its child is clicked
            modal.classList.add("is-active");
        }
    });


    // Close the modal when the background is clicked
    modalBackground.addEventListener("click", function () {
        modal.classList.remove("is-active");
    });

    // Close the modal when the "cancel" button is clicked
    cancelButton.addEventListener("click", function () {
        modal.classList.remove("is-active");
    });

    // Close the modal when the "close" button is clicked
    closeButton.addEventListener("click", function () {
        modal.classList.remove("is-active");
    });
});


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
//   .then((response) => {
  
//   if (response.ok) {
//     alert("it worked");
//   } else {
//     alert("it didnt work");
//   }
// })
};

// new version -------------------

// Function to check if the user has liked the pet
const hasUserLikedPet = async (petId) => {
    const response = await fetch(`/api/likes/check?petId=${petId}`);
    const data = await response.json();
    return data.hasLiked;
};


likeButton.addEventListener('click', async (e) => {
    const petId = document.querySelector("#pet-id").textContent;

    // Check if the user has already liked the pet
    const hasLiked = await hasUserLikedPet(petId);
    console.log("hasLiked: ", hasLiked);
    if (hasLiked) {
        // likeButton.innerHTML = "Like ❤️";
        alert("You've already liked this pet!");
        return;
    } else {
        // Update the like button
        likeButton.innerHTML = "Like ❤️";
    
        // Add the like
        addLike(petId);
    }

});

// new version -------------------


// likeButton.addEventListener('click', (e)=>{
//     const click=e.target
//     console.log('hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii');
//     console.log(click);
//     if(click){
//         likeButton.innerHTML = "Like ❤️";
//         const petId = document.querySelector("#pet-id").textContent;
//         console.log(petId);
//         addLike(petId);
        
//     }else{
//         likeButton.innerHTML = "Like";
//     }
   
// });

// likeButton.addEventListener("click", function () {
//   // modal.classList.remove("is-active");
//   likeButton.innerHTML = "Like";
//   likeButton.innerHTML = "Like ❤️";

//   const petId = document.querySelector("#pet-id").textContent;

//   console.log(petId);
//   addLike(petId);
// });

// petfindbykey
// if petfindkey(show unlike)
// else ('like')