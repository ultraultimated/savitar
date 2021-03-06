const jsdom = require('jsdom')
const dom = new jsdom.JSDOM()
dom.window.document.createElement('div')
dom.window.document.createElement('div')
dom.window.document.createElement('div')
dom.window.document.createElement('div')
dom.window.document.createElement('div')
dom.window.document.createElement('div')
dom.window.document.createElement('div')
const div8 = dom.window.document.createElement('div')
div8.appendChild(dom.window.document.createElement('div'))
div8.appendChild(dom.window.document.createElement('div'))
const div3 = div8.appendChild(dom.window.document.createElement('div'))
// eslint-disable-next-line camelcase
const divOneThree = div3.appendChild(dom.window.document.createElement('div'))
// eslint-disable-next-line camelcase
const divOneOneThree = divOneThree.appendChild(dom.window.document.createElement('div'))
divOneThree.appendChild(dom.window.document.createElement('div'))
// eslint-disable-next-line camelcase
const divOneOneOneThree = divOneOneThree.appendChild(dom.window.document.createElement('div'))
divOneOneThree.appendChild(dom.window.document.createElement('div'))
// eslint-disable-next-line camelcase
const divOneOneOneOneThree = divOneOneOneThree.appendChild(dom.window.document.createElement('div'))
// eslint-disable-next-line camelcase
const divOneFiveThree = divOneOneOneOneThree.appendChild(dom.window.document.createElement('div'))
divOneOneOneOneThree.appendChild(dom.window.document.createElement('div'))
// eslint-disable-next-line camelcase
const divOneOneOneOneOneThree = divOneFiveThree.appendChild(dom.window.document.createElement('div'))
const section = divOneOneOneOneOneThree.appendChild(dom.window.document.createElement('section'))
section.appendChild(dom.window.document.createElement('div'))
const divOneTwoTwo = section.appendChild(dom.window.document.createElement('div'))
const finalDiv = divOneTwoTwo.appendChild(dom.window.document.createElement('div'))

divOneTwoTwo.appendChild(dom.window.document.createElement('div'))
const articleDiv = finalDiv.appendChild(dom.window.document.createElement('article'))

// eslint-disable-next-line no-undef
beforeEach(() => {
  articleDiv.textContent = 'Location : Chicago, IL  2+ years of work experience with Java Experience working with Spring and cloud technologies (AWS)' +
        ' Knowledge of react would be beneficial BSc/MSc in Computer Science or technical discipline from top universities' +
      'Java Python programming knowledge'
  dom.window.document.body.appendChild(articleDiv)
})

// global.window = dom.window
// global.document = dom.window.document

require('../code/js/content')
// eslint-disable-next-line no-undef
test('experience should return 2', () => {
  // eslint-disable-next-line no-undef
  expect(getExperience(document.getElementsByTagName('article')[0].textContent)).toBe(2)
  dom.window.document.body.removeChild(articleDiv)
  articleDiv.textContent = 'Experience is not required'
  dom.window.document.body.appendChild(articleDiv)
  // eslint-disable-next-line no-undef
  expect(getExperience(document.getElementsByTagName('article')[0].textContent)).toBe(undefined)
})

// eslint-disable-next-line no-undef
test('getLocation should return Chicago', () => {
  // eslint-disable-next-line no-undef
  expect(getLocation(document.getElementsByTagName('article')[0].textContent)).toBe('Chicago')
  dom.window.document.body.removeChild(articleDiv)
  articleDiv.textContent = 'Experience is not required'
  dom.window.document.body.appendChild(articleDiv)
  // eslint-disable-next-line no-undef
  expect(getLocation(document.getElementsByTagName('article')[0].textContent)).toBe('')
})

// eslint-disable-next-line no-undef
test('getSkills should return Java Python', () => {
  // eslint-disable-next-line no-undef
  expect(getNer(document.getElementsByTagName('article')[0].textContent)).toBe('java python')
  dom.window.document.body.removeChild(articleDiv)
  articleDiv.textContent = 'Position for Software Development. Experience is not required'
  dom.window.document.body.appendChild(articleDiv)
  // eslint-disable-next-line no-undef
  expect(getNer(document.getElementsByTagName('article')[0].textContent)).toBe('')
  dom.window.document.body.removeChild(articleDiv)
  articleDiv.textContent = 'Position for Software Development using Golang and knowledge of machine learning. Experience is not required'
  dom.window.document.body.appendChild(articleDiv)
  // eslint-disable-next-line no-undef
  expect(getNer(document.getElementsByTagName('article')[0].textContent)).toBe('go ml')
})
