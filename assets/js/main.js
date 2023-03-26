const reaction = document.querySelector('#reaction');
const memory = document.querySelector('#memory');
const verbal = document.querySelector('#verbal');
const visual = document.querySelector('#visual');

fetch('../../data.json')
    .then(response=>response.json())
    .then(data=>{
        allReactionData(data);
        allMemoryData(data);
        allVerbalData(data);
        allVisualData(data)
    })

const reactionIcon = (data) => reaction.children[0].setAttribute('src', data[0].icon)

const reactionCategory = (data) => reaction.children[1].textContent = data[0].category

const reactionScore = (data) => reaction.children[2].children[0].textContent = data[0].score

const allReactionData = (data) => {
    reactionIcon(data)
    reactionScore(data)
    reactionCategory(data)
}

const memoryIcon = (data) => memory.children[0].setAttribute('src', data[1].icon)

const memoryCategory = (data) => memory.children[1].textContent = data[1].category

const memoryScore = (data) => memory.children[2].children[0].textContent = data[1].score

const allMemoryData = (data) => {
    memoryIcon(data)
    memoryScore(data)
    memoryCategory(data)
}

const verbalIcon = (data) => verbal.children[0].setAttribute('src', data[2].icon)

const verbalCategory = (data) => verbal.children[1].textContent = data[2].category

const verbalScore = (data) => verbal.children[2].children[0].textContent = data[2].score

const allVerbalData = (data) => {
    verbalIcon(data)
    verbalScore(data)
    verbalCategory(data)
}

const visualIcon = (data) => visual.children[0].setAttribute('src', data[3].icon)

const visualCategory = (data) => visual.children[1].textContent = data[3].category

const visualScore = (data) => visual.children[2].children[0].textContent = data[3].score

const allVisualData = (data) => {
    visualIcon(data)
    visualScore(data)
    visualCategory(data)
}