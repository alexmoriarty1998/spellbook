/*
this commit was just because I did not want the message to just be a period that was a mistake
*/

const app = 
{
  init: function() {
    const form = document.querySelector('form')
    form.addEventListener('submit', ev => {
      this.handleSubmit(ev)
      this.spells = []
    })
  },

  renderProperty: function(name, value) {
    const el = document.createElement('span')
    el.textContent = value
    el.classList.add(name)
    return el
  },

  renderItem: function(spell) {
    // ['name', 'level']
    properties = Object.keys(spell)

    // collect an array of renderProperty's return values
    // (an array of <span> elements)
    const childElements = properties.map(property => {
      return this.renderProperty(property, spell[property])
    })

    const item = document.createElement('li')
    const button = document.createElement('button')
    button.innerText = 'x'
    button.classList.add('button')
    let sendItem = true
    button.addEventListener('click', function(ev)
    {
      const child = ev.target.parentNode
      child.parentNode.removeChild(child)
      this.spells.splice(spells.indexOf(child) - 1,1)
    })
    item.appendChild(button)
    item.classList.add('spell')

    // append each <span> to the <li>
    childElements.forEach(el => {
      item.appendChild(el)
    })
    
    return item
  },

  handleSubmit: function(ev) {
    ev.preventDefault()

    const f = ev.target

    const spell = {
      name: f.spellName.value,
      level: f.level.value,
    }

    this.spells.push(spell)

    const item = this.renderItem(spell)

    const list = document.querySelector('#spells')
    list.appendChild(item)
    
    

    f.reset()
  },

  

  

  



  
}

app.init()