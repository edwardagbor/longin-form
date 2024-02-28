let formDisplay = document.querySelector('.overlapping');
let submitButton = document.querySelector('.submit');

// formDisplay.style.display = 'none'

// submitButton.addEventListener('click', (event)=>{
//    event.preventDefault()
//    if (formDisplay.style.display === 'none') {
//     formDisplay.style.display = 'block'
//    }else{
//     formDisplay.style.display = 'none'
//    }
// //    formDisplay.classList.toggle('form-control-display')
// })
// formDisplay.addEventListener('click', function(){
//     if (formDisplay.style.display === 'block') {
//         formDisplay.style.display = 'none'
//        }
    
// })

//   Or must use with a class

submitButton.addEventListener('click', (event)=>{
    event.preventDefault()
    formDisplay.classList.toggle('form-control-display')
 })