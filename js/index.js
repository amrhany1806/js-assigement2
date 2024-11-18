
var Qoutes = [
    {'author': '― Friedrich Nietzsche', 
        'quote': 'Without music, life would be a mistake.'
       },
       {'author': '-- Epictetus', 
        'quote': 'It\'s not what happens to you, but how you react to it that matters.'
       },
       {'author': '― Mark Twain', 
        'quote': "If you tell the truth, you don't have to remember anything."
       },
       {'author': '― Stephen Chbosky', 
        'quote': 'We accept the love we think we deserve.'
       },
       {'author': '-- Nelson Mandela', 
        'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
       },
       {'author': '-- Elbert Hubbard', 
        'quote': 'Do not take life too seriously. You will not get out alive.'
       },
]

    




function generateQoute(){
    for(var i = 0 ; i < 10 ; i++){
        var RandomNumbers = Math.floor(Math.random()* Qoutes.length);
        var RandomText = Qoutes[RandomNumbers];
        document.getElementById("quoteOutput").innerHTML = RandomText.quote;
        document.getElementById("authorOutput").innerHTML = RandomText.author;
    }
}