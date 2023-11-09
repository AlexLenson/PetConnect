// JavaScript
document.addEventListener('DOMContentLoaded', function () {
    // Get the table element
    const table = document.getElementById('#myTable');
    const rows = table.getElementsByTagName('tr');
  
    Array.from(rows).forEach((row, index) => {
        row.addEventListener('click', () => {
          const cells = row.getElementsByTagName('td');
          console.log(cells[0]);
          console.log(cells[1]);
      
          const content1 = cells[0].innerHTML;
          console.log(content1);
      
          const content2 = cells[1].innerHTML;
          console.log(content2);
        });
      });
    // Attach click event listener to table rows
    // table.addEventListener('click', function (event) {
    //   // Check if a row was clicked
    //   if (event.target.tagName === 'td') {
    //     // Retrieve the data from the clicked row's columns
    //     const row = event.target.parentNode;
    //     const column1Data = row.cells[0].textContent;
    //     const column2Data = row.cells[1].textContent;
  
    //     // Populate the modal with the retrieved data
    //     const modalDataElement = document.getElementById('modalData');
    //     modalDataElement.innerHTML = `
    //       <p>Pet Name: ${column1Data}</p>
    //       <p>Pet Breed: ${column2Data}</p>
    //     `;
  
        const modal = document.getElementById('modal');
        modal.style.display = 'block';
  
        // Handle close button click to hide the modal
        const closeButton = document.getElementsByClassName('delete')[0];
        closeButton.addEventListener('click', function () {
          modal.style.display = 'none';
        });
      });
