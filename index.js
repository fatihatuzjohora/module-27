
/*

// section-1
function play(){
const homeSection=document.getElementById('homeScreen');

homeSection.classList.add('hidden')

// section-2
const playGroundSection=document.getElementById('playGround')
playGroundSection.classList.remove('hidden')
}
*/
// others vbe 

function hideElementById(elementId) {
    const element=document.getElementById(elementId);
    element.classList.add('hidden');
}

function play() {
    hideElementById('homeScreen');
    showElementById('playGround');
    continueGame('')
}

function showElementById(elementId) {
    const element=document.getElementById(elementId);
    element.classList.remove('hidden');
}

function continueGame () {
    const alphabet=getARandomAlphabet();
  //  console.log('rendom',alphabet);

  const currentAlphabetElement=document.getElementById('currentAlphabet')
  currentAlphabetElement.innerText=alphabet;

    // set bgcolor 
     setBgColorById(alphabet);

}

function getARandomAlphabet() {
    const alphabatesString='abcdefghijklmnopqrstuvwxyz';
    const alphabets=alphabatesString.split('');
 //  console.log(alphabets);
    //math alphabets
    const randomNumber= Math.random()*25;
    const index=Math.round(randomNumber);
  //  console.log(index);

const alphabet=alphabets[index];
 //console.log(index,alphabet);
return alphabet
}

// color add keybord click
function setBgColorById(elementId) {
    const element=document.getElementById(elementId);
    element.classList.add('bg-orange-400');}

