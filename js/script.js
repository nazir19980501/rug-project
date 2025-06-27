const text1 = document.getElementById('text');
const sticky = document.getElementById('sticky')

const open = document.getElementById('open')
const close = document.getElementById('close')
const mobNav = document.querySelector('.mob-nav')
const heroImage = document.getElementById('heroImage')



// strings for the type writer
const strings = ['Beauty', 'Decor', 'Awesomeness'];

let turn = 0;


//type writer function
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const change = async function(str) {
  let s1 = '';
  for (let i = 0; i < str.length; i++) {
    s1 += str[i];
    text1.innerHTML = s1;
  
    await delay(150);
  }

  await delay(1000);
  await changeRev();
};

const changeRev = async function() {
  let currentText = text1.innerHTML;

  for (let i = currentText.length; i >= 0; i--) {
    text1.innerHTML = currentText.slice(0, i);
    await delay(100);
  }

  turn = (turn + 1) % strings.length; // cycle back to start
  await delay(500);
  change(strings[turn]);
};

change(strings[turn]);


open.addEventListener('click', function() {
  open.classList.toggle('hidden')
  close.classList.toggle('hidden')
  mobNav.classList.remove('hidden')
  mobNav.classList.add('flex')
  
})


close.addEventListener('click', function() {
  open.classList.toggle('hidden')
  close.classList.toggle('hidden')
   mobNav.classList.add('hidden')
  mobNav.classList.remove('flex')
  

})

// let image = 1
// setInterval(() => {
  
//   heroImage.setAttribute('src', `images/decors/decor${image}.jpeg`)
//   console.log(image)
//     image += 1
//   if (image==11) image = 1
// }, 3000);

