
const form = document.querySelector('form')

const changeHeading = function(ev) {
  ev.preventDefault()

  const form = ev.target
  const spellName = form.spellName.value
  const spellLevel = form.level.value
  



  if(spellName.length > 0 && spellLevel.length > 0){
    //spellsDiv.innerHTML += `<li>${spellName}, level ${spellLevel} required.</li>`
    const newItem = document.createElement("LI");
    const textNode = document.createTextNode(`${spellName}, level ${spellLevel} required.`);
    newItem.appendChild(textNode);
    const spellsList = document.querySelector('#spells');
    spellsList.insertBefore(newItem, spellsList.childNodes[0]);
  } else{
    alert("you've left one of the fields empty. Please fill out both to submit.")
  }
  
  form.reset()
}

form.addEventListener('submit', changeHeading)





