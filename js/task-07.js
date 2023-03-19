const refs = {
  input: document.querySelector("#font-size-control"),
  span: document.querySelector("#text"),
};

refs.input.addEventListener("input", onInputMove);

function onInputMove(event) {
  let magic = Number(event.currentTarget.value) + "px";
  console.log(magic);
  return (refs.span.style.fontSize = magic);
}
