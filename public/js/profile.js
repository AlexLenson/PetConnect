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
  alert("it worked");
} else {
  alert("it didnt work");
}
})
};