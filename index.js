const form = document.querySelector('form')

const renderProperty =  function(name, value)
{
  const el = document.createElement('span')
  el.textContent = value
  el.classList.add('name')
  return el
}

const handleSubmit = function(ev) {
  ev.preventDefault()
  // the source of the event we are listening for
  const f = ev.target
  // the value submitted into the field asking for the name of the spell 
  const spellName = f.spellName.value
  // the value submitted into the field asking for the level of the spell
  const level = f.level.value

  /** the container of the the spells and levels that will be displayed on the page,
      values come from form submissions
   **/
  const list = document.querySelector('#spells')

  /**
   creates two separate containers within the list container, allows for easier differentiation,
   of styling between the name and level fields
   */
  const nameSpan = document.createElement('span')
  nameSpan.textContent = spellName
  nameSpan.classList.add('spellName')
  const levelSpan = document.createElement('span')
  levelSpan.textContent = level
  levelSpan.classList.add('level')
  
  

  // creates a list which holds the values of both spans above, placed within the original ul 
  const item = document.createElement('li')
  item.classList.add('spell')
  item.appendChild(nameSpan)
  item.appendChild(levelSpan)
  list.appendChild(item)

  f.reset()
}

form.addEventListener('submit', handleSubmit)










