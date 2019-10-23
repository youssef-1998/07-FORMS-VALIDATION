const firstName = document.querySelector('.firstname');
const lastName = document.querySelector('.lastname');
const Addresse = document.querySelector('.Addresse');
const email = document.querySelector('.email');
const password = document.querySelector('.password');


const rules = {
  firstName: /^[a-zA-Z]{4,25}$/,
  lastName: /^[a-zA-Z]{4,25}$/,
  addresse: /[a-z]{2,8}$/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,

}


firstName.addEventListener('keyup', function (e) {
  let text = e.target
  let InputName = e.target.name
  validate(text, InputName)
})

lastName.addEventListener('keyup', function (e) {
  let text = e.target
  let InputName = e.target.name
  validate(text, InputName)
})
Addresse.addEventListener('keyup', function (e) {
  let text = e.target
  let InputName = e.target.name
  validate(text, InputName)
})
email.addEventListener('keyup', function (e) {
  let text = e.target
  let InputName = e.target.name
  validate(text, InputName)
})
password.addEventListener('keyup', function (e) {
  let text = e.target
  let InputName = e.target.name
  validate(text, InputName)
})



function validate(x, y) {
  let condition = rules[y]
  let isvalid = condition.test(x.value)
  if (isvalid) {
    return x.classList.replace('invalid', 'valid')
  }
  else {
    return x.classList.add('invalid')    
  }
}