/*

This is just a trial bit of code to get a sense of what the project will involve. It generates horoscopes with four sentences.

*/

//sentence 1

function retrogradeDecision () {
    let opener = 'Mercury is ';
    let retrograde = 'in ';
    let notRetrograde = 'no longer in ';
    let mid = 'retrograde, so ';
    let option1 = "you'll need to wait three months until ";
    let option2 = '';
    let closer = 'you can start blaming all your problems on retrograde Mercury';
    let closerAddendum1 = ' again';
    let closerAddendum2 = '';
    let i = Math.floor(Math.random() * 2);
    //console.log(i);
    if (i === 0){
        return `${opener}${retrograde}${mid}${option2}${closer}${closerAddendum2}.`;
    } else if (i === 1){
        return `${opener}${notRetrograde}${mid}${option1}${closer}${closerAddendum1}.`;
    }


};

console.log(retrogradeDecision());

//databank used by sentences 2 to 4

const data = {
    day: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],    
    starsign: ['Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius'],
    planet: ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'],
    emotion: ['anger', 'joy', 'anxiety', 'indecision', 'misery', 'bliss', 'sadness', 'a feeling of bittersweet victory'],
    problemLocation: ['work', 'home', 'a social group', 'church', 'temple'],
    habitToStop: ['holding back', 'making excuses', 'fighting yourself', 'worrying', 'putting yourself down'],
    luckyEvent: ['ask for a raise', 'reveal your feelings to an old friend', 'declare war on a neighbouring country and force your ideology on its people', "ask out the barista you've been flirting with", 'watch your team playing this week']
}

//sentence 2
//format On [day] the moon in [STARSIGN] connects with [PLANET] in [different STARSIGN], which could stir up [EMOTION]


function stirredUp () {
    let dayNumber = Math.floor(Math.random() * 7);
    let starsignNumber = Math.floor(Math.random() * 12);
    let planetNumber = Math.floor(Math.random() * 9);
    let emotionNumber = Math.floor(Math.random() * 8);
    let starsignNumber2 = 11 - starsignNumber;
    return `On ${data['day'][dayNumber]} the moon in ${data['starsign'][starsignNumber]} connects with ${data['planet'][planetNumber]} in ${data['starsign'][starsignNumber2]}, which could stir up ${data['emotion'][emotionNumber]}.`;
}


console.log(stirredUp());

//sentence 3

function habitStop() {
    let locationNumber = Math.floor(Math.random() * 5);
    let habitNumber = Math.floor(Math.random() * 5);
    return `A problem at ${data['problemLocation'][locationNumber]} could mean it's time to stop ${data['habitToStop'][habitNumber]}.`
}

console.log(habitStop());

//sentence 4

function luckyTip() {
    let dayNumber2 = Math.floor(Math.random() * 7);
    let luckyEventNumber = Math.floor(Math.random() * 5);
    return `Staring directly into the sun on ${data['day'][dayNumber2]} will bring good luck when you ${data['luckyEvent'][luckyEventNumber]}.`

}

console.log(luckyTip());