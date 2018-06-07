const spells = []
let spellCount = 0
let buttonCount = 0
const app = 
{
  init: function() {
    const form = document.querySelector('form')
    form.addEventListener('submit', ev => {
      this.handleSubmit(ev)
    })
  },

  renderProperty: function(name, value) {
    const el = document.createElement('span')
    el.textContent = value
    el.classList.add(name)
    el.setAttribute("id", 'spell${buttonCount}')
  
  
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
    button.setAttribute("id", buttonCount)
    buttonCount++
    let sendItem = true
    button.addEventListener('click', function(ev){
      const child = ev.target.parentNode
      child.parentNode.removeChild(child)
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

    spells.push(spell)

    const item = this.renderItem(spell)

    const list = document.querySelector('#spells')
    list.appendChild(item)
    
    

    f.reset()
  },

  

  

  



  
}

app.init()