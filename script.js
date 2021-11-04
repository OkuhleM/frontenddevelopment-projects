var quotes = [
    '"Live as if you were to die tomorrow. Learn as if you were to live forever." – Mahatma Gandhi',
    '"Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind. " – Bernard M. Baruch' ,
    ' "That which does not kill us makes us stronger. " – Friedrich Nietzsche.',
    '"We must not allow other people’s limited perceptions to define us." – Virginia Satir',
    '"Do what you can, with what you have, where you are." – Theodore Roosevelt',
    '"Be yourself everyone else is already taken." – Oscar Wilde',
    '"This above all: to thine own self be true." – William Shakespeare',
    '"I’m looking right at the other half of me." — Justin Timberlake',
    '"Your heart is all I own. And in your eyes you’re holding mine."  — Ed Sheeran',
    '"I want to meet someone who doesn’t already think they know me." – Chris Brown',
    '"Take me as I am, not who I was." – Chris Brown',
    '"Even when my world’s falling down, I still wear a smile." – Chris Brown',
    '"Like slavery and apartheid, poverty is not natural. It is man-made and it can be overcome and eradicated by the actions of human beings." -Nelson Mandela',
    '"A man who stands for nothing will fall for anything." — Malcolm X',
    '"Faith is taking the first step even when you don’t see the whole staircase. " -Martin Luther King',
    '"Yet again my heart has lost it\'s kinetic rhythm it used to adore" -OkuhleM',
    '"I refuse to burn the bridges to my own dreams just to score a net of talent I don\'t have" -OkuhleM'

];

var colorCodes = [
    '#123456',
    '#2B3856',
    '#368BC1',
    '#3090C7',
    '#00BFFF',
    '#87CEEB',
    '#20B2AA',
    '#00CED1',
    '#033E3E',
    '#F67280',
    '#F75D59',
    '#A52A2A',
    '#3F000F',
    '#550A35',
    '#C48189',
    '#FC6C85',
    '#1D8A95',
    '#A92E73',
    '#d14d4d',
    '#003153'
]
const newQuote = () => {

    const randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('text').innerHTML = quotes[randomNumber];
    const randomColor = Math.floor(Math.random() * 20);
    document.body.style.backgroundColor = colorCodes[randomColor]
   
}
