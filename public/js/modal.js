document.addEventListener("DOMContentLoaded", function () {
    const tableRows = document.querySelectorAll(".table tbody tr");
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
    const modalPetId = modal.querySelector('#pet-id');
    const cancelButton = modal.querySelector("#cancelButton");
    const closeButton = modal.querySelector(".delete");
    const likeButton = document.querySelector("#likeButton");

    // Add a click event listener to each table row
    tableRows.forEach((row) => {
        row.addEventListener("click", function () {
            // Get the data from the clicked row
            const rowData = {
                petName: row.cells[2].textContent,
                photo: row.cells[9].querySelector('img').src, // Update with appropriate image URL
                petBreed: row.cells[6].textContent,
                petAge: row.cells[3].textContent,
                petSex: row.cells[7].textContent,
                petColor: row.cells[5].textContent,
                petSize: row.cells[4].textContent,
                intakeDate: row.cells[1].textContent,
                petID: row.cells[10].textContent,
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
            modalPetId.textContent = rowData.petID

            
            // Display the modal when a row is clicked
            modal.classList.add("is-active");

        });
    });
       
    // Close the modal when the background is clicked
    modalBackground.addEventListener("click", function () {
        modal.classList.remove("is-active");
    });

    // Close the modal when the "cancel" button is clicked
    cancelButton.addEventListener("click", function () {
        modal.classList.remove("is-active");
    });

    // Close the modal when the close button is clicked
    closeButton.addEventListener("click", function () {
        modal.classList.remove("is-active");
    });
    likeButton.addEventListener("click", function () {
        // modal.classList.remove("is-active");
        likeButton.innerHTML = "Like";
        likeButton.innerHTML = "Like ❤️";

        const petId = document.querySelector('#pet-id').textContent;

        console.log(petId);

});
    });

