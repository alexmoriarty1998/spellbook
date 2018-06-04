const btn = document.getElementById('btn');
const message = document.getElementById('greeting');
const name = document.getElementById('name');
const instruction = document.getElementById('instruction');
const form = document.getElementById('form');
btn.addEventListener('click', submitted);
name.addEventListener('keypress',function(e){
    const key = e.keyCode;
    if(key === 13){
        e.preventDefault();
        submitted();
    }
});


function submitted()
{
    if(name.value.length < 1)
    {
        alert('I think you forgot to fill out some of the form, complete it before submitting.');
    }
    else
    {
        instruction.textContent = "Thanks for completing that";
        instruction.classList.add('pressed');
        message.textContent = "Have a good day " + name.value + "!";
        form.classList.add('hide-form');
    }
}



