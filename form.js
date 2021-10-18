
const contactForm = document.querySelector("#contact-form")
const fname = document.querySelector("#name")        //vscode doesnt like "name" is deprecated
const surname = document.querySelector("#surname") 
const phone = document.querySelector("#phone")
const email = document.querySelector("#email")
const message = document.querySelector("#message")

const modal = document.querySelector(".modal")
const body = document.querySelector("body")
const modalOverlay = document.querySelector(".modal-overlay")
const closeModalButton = document.querySelector("#close-modal")

//Regex
const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ \-'\.]+$/
const emailRegex = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/
//const phoneRegex = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/
const messageRegex = /^[^<>]+$/


//contactForm.setAttribute("novalidate", true)              //WHY?
contactForm.addEventListener("submit", validateForm)
closeModalButton.addEventListener("click", closeModal)


function validateForm(e){
    e.preventDefault()
   //since phone is not required for form deal with phoneRegex differently and regex is no good atm?
   if (isValid(fname, nameRegex)&& isValid(surname, nameRegex)/*&& isValid(phone, phoneRegex)*/ && isValid(email, emailRegex) && isValid(message, messageRegex)){
       console.log("Form is good, submitting")
       openModal()
   } else {
       console.log("Wrong input ")
   }
}
function isValid(element, regex) {
    return regex.test(element.value)
  }


function openModal() {
    modal.classList.add("active")
    body.classList.add("modal-open")
    modalOverlay.classList.add("active")
  }

function closeModal() {
    modal.classList.remove("active")
    body.classList.remove("modal-open")
    modalOverlay.classList.remove("active")
  }


