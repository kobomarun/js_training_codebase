const btn = document.getElementById("button");

btn.addEventListener('click', function() {
    alert('You clicked me')
})

btn.addEventListener('mouseover',function() {
    alert('you hover the button')
})

const checkKey = document.getElementById('checkKey');

document.addEventListener('keydown', logKey);

function logKey(e) {
  log.textContent += `${e.code}`;
}