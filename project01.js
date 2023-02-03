let btn = document.querySelector('#new-quote');
let quote = document.querySelector('#quote');
let person = document.querySelector('#person');

const quotes = [{
    quote: `When the world needed hausa people way the carry sawwing machine they just vanished`,
    person: `By By Irechukwu Ekene`
}, {
    quote: `Since Arsenal went top of EPL table. Queen Elizabeth died pope died pele died fuel price high. God save us from Arsenal`,
    person: `By mmesoma` 
}, {
    quote: `TEACHER :: Exam will be easy everyone will pass
    EXAMDAY :: which one is red ::::: 1( red, green) but the color of the red nah green and green own nah red`,
    person: `By Amadi sixtus`
},{
    quote: `No tech person has all 1. a love life
    2. no back pain or hand pain 3. good mental health
    4. a social life 5. good eyesight`,

    person: `By sir ugo`
},{
    quote: `WHAT IS MARRIAGE:: marriage happens when the parent of a girl say to her "you are big woman now we cant feed you again better go and find a man who will start feeding you and the girl meet with a man whose parents shout at him please you are now a big man both of them test themselves and become happy then agree to live together and start doing nonsense to have children."`,

    person: `By Stella Chisom Nwachukwu`
},{
    quote:`After escorting her home he started runing because the road is empty`,
    person: `By Lady G`
},{
    quote: `i'm a thinker and a doer evident here in lagos this is a refuse dump`,

    person: `By jagaban`
},{
    quote:`the reason wey i no buy car this because i no say fuel go cost`,
    person:`By ozzmeter`
},{
    quote:`if u say you are tired of this life go to number 6 ime-ala street`,
    person:`youngman`
}
];

btn.addEventListener('click', function (){

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})
