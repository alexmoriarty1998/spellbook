
const form = document.querySelector('form')

const changeHeading = function(ev) {
  ev.preventDefault()

  const form = ev.target
  const spellName = form.spellName.value
  const spellLevel = form.level.value
  const spellsDiv = document.querySelector('#spells')
  //const item = document.createElement("li");
  //const content = document.createTextNode(`${spellName}, level ${spellLevel} required.`);
  if(spellName.length > 0 && spellLevel.length > 0){
    spellsDiv.innerHTML += `<li>${spellName}, level ${spellLevel} required.</li>`
  } else{
    alert("you've left one of the fields empty. Please fill out both to submit.")
  }
  
  f.reset()
}

form.addEventListener('submit', changeHeading)





