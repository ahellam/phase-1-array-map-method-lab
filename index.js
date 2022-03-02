const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
console.log('original array', tutorials)

// console.log(tutorials.map(elem => {
//   return elem.toLowerCase().split(' ').map( elem => {
//     return elem[0].toUpperCase() + elem.slice(1)
//     })
// }))




const titleCased = () => {
  const words = tutorials.map(elem => {
    return elem.toLowerCase().split(' ').map( elem => {
      return elem[0].toUpperCase() + elem.slice(1)
      })
      
  })
  // console.log (words.join(' ').replaceAll(',', ' '))
  return words.join(' ').replaceAll(',', ' ')
}
console.log(titleCased())





