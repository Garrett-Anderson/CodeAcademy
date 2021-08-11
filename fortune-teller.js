// create randomizer variable
function generateRandomNumber(num) {
  // Gets # from 0 -> num - 1
  return Math.floor(Math.random() * num)
}

// create object with list of fortunes
let collectFortune = {
  luckyNumber: ['3', '11', '17', '34', '77'],
  spiritAnimal: ['cat', 'walrus', 'fox', 'squirrel', 'panda'],
  fortune: ['A beautiful, smart, and loving person will be coming into your life', 'A fresh start will put you on your way', 'A lifetime of happiness lies ahead of you', 'A pleasant surprise is waiting for you', 'Be careful or you could fall for some tricks today']
}

// Store in an array
let fortuneTeller = [];

//create a loop that iterates over the object
//  use the object's properties to customize the message 
for(let prop in collectFortune) {
  let optionIdx = generateRandomNumber(collectFortune[prop].length)

  switch (prop) {
    case 'luckyNumber':
      fortuneTeller.push(`Your lucky number is ${collectFortune[prop][optionIdx]}.`)
      break
    case 'spiritAnimal':
      fortuneTeller.push(`Your spirit animal is a ${collectFortune[prop][optionIdx]}.`)
      break
    case 'fortune': 
      fortuneTeller.push(`Your fortune today is: ${collectFortune[prop][optionIdx]}.`)
      break
    default:
      fortuneTeller.push('There is not enough info')
  }
}

function formatFortune(fortune) {
  // Add some ASCII here?
  // Add in more symbols to the array? like emojies or what not?
  const formatted = fortuneTeller.join('\n')
  console.log(formatted)
}

formatFortune(fortuneTeller);


// call the randomizer variable 
