let randomEl = document.querySelector('.js-random-letters'),
    textInput = document.querySelector('.js-text'),
    answerEl = document.querySelector('.js-answer'),
    btnRefresh = document.querySelector('.js-btn-refresh'),
    btnCheck = document.querySelector('.js-btn-check');


let words = ['ВИД','КОЛЬЦО', 'БИЛЕТ', 'ИЗДАНИЕ', 'ДВИГАТЕЛЬ'];
let current = [...words];

let refreshWord =  ()  =>  {
    current = words[Math.floor(Math.random() * words.length)]
    let wordSplit = current.split('')
    // console.log('word', wordSplit)
    // randomEl.innerHTML = `${current}`
    const shufArray = (array) => {
        for(let i = array.length - 1; i > 0; i-- ){
            console.log(i)
            let j = Math.floor(Math.random() * (i + 1))
            console.log(j)

            let k = array[i]

            array[i] = array[j]
            console.log(i)
            array[j] = k
            console.log(k)
        }
        return array.join()
    }
    console.log(shufArray(wordSplit))

    const showRandom = () => {
        randomEl.textContent = shufArray(wordSplit)
    }
    showRandom()
}

let checkWord = () => {
    let userWord = textInput.value;
    if(userWord === current &&  words.length !== 1) {
        words = words.filter((item) => {
            return item != current
        })
        answerEl.textContent = 'vse verno!';
        textInput.value = '';
        refreshWord()
    }
    else if(userWord === current &&  words.length === 1) { 
        words = [...current]
        answerEl.textContent = 'vse zakonceno!';
        textInput.value = '';
        randomEl.textContent = ''
    }
    else{
        textInput.value = '';
        answerEl.textContent = 'neverno!';
    }

    setTimeout( ()=> {
        answerEl.textContent = ''
    },  2000)
}
btnRefresh.addEventListener('click', () => {
   refreshWord()
})

btnCheck.addEventListener('click', () => {
    checkWord()
})

window.addEventListener('load', refreshWord())