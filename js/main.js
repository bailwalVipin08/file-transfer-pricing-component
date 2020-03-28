const toggleSwitchUI = document.querySelector('.switch')
const toggleSwitch = document.querySelector('.checkbox')

const pricesUI = document.querySelectorAll('.plan-price h1')

toggleSwitch.checked = 'false'
const pricesAnnual = ['199.99', '249.99', '399.99']
const pricesMonthly = ['19.99', '24.99', '39.99']
toggleSwitch.addEventListener('change', e => {
  toggleSwitchUI.style.backgroundColor = 'blue'
  if (toggleSwitch.checked) {
    for (let i = 0; i < pricesUI.length; i++) {
      pricesUI[i].textContent = pricesAnnual[i]
    }
  } else {
    for (let i = 0; i < pricesUI.length; i++) {
      pricesUI[i].textContent = pricesMonthly[i]
    }
  }
})
