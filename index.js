const btn = document.getElementById('btn');
const message = document.getElementById('greeting');
const name = document.getElementById('name');
const instruction = document.getElementById('instruction');
const form = document.getElementById('form');
btn.addEventListener('click', function(){
    if(name.value.length < 1 || food.value.length < 1)
    {
        alert('I think you forgot to fill out some of the form, complete it before submitting');
    }
    else
    {
        instruction.textContent = "Thanks for completing that";
        instruction.classList.add('pressed');
        message.textContent = "Have a good day " + name.value + ". I hope you get to eat some " +
        food.value + ".";
        form.classList.add('hide-form');
    }
});