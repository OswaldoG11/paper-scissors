

function getComputerChoice(){
    let numb = Math.random() * 15
    numb =  Math.round(numb)

    if(numb <= 5){
        return 'paper'
    }
    else if(numb > 5 && numb <=10){
        return 'scissors'
    }
    else{
        return 'rock'
    }
    
}






function selections(){
    let playerSelection =  prompt('select : paper,  scissors or  rock').toLowerCase()
    let CPUselection = getComputerChoice()

    return {playerSelection : playerSelection, CPUselection : CPUselection}
}



function winner(fnSelections){

    let selections = fnSelections()


    if(selections.playerSelection === selections.CPUselection) return 'tied'
    if(selections.playerSelection ==='paper' && selections.CPUselection === 'rock') return 'player'
    if(selections.playerSelection ==='rock' && selections.CPUselection === 'scissors') return 'player'
    if(selections.playerSelection ==='scissors' && selections.CPUselection === 'paper') return 'player'
    else return 'cpu'
}

function game(){
    let score = {
        player : 0,
        CPU : 0
    }
    let round = 0
    let chosen = ''

    while(round < 5){
        chosen = winner(selections)
        if(chosen === 'player'){
            score.player++
            round++
        }else if(chosen === 'cpu'){
            score.CPU++
            round++
        }else{
            round++
        }
    }

    if(score.player > score.CPU) return `Player wins! ${score.player} - ${score.CPU}`
    if(score.player < score.CPU) return `CPU wins! ${score.CPU} - ${score.player}`
    else return `Tied game! ${score.CPU} - ${score.player}`
    

   

}

console.log(game())

