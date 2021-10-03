console.log("Keberuntungan Anda hari ini adalah :")
let btn = document.getElementById('btn');
let output = document.getElementById('output');
let words = 
[
    "Hebat!", "Boleh juga...", "Mengerikan!" 
];

btn.addEventListener('click', function(){
 var randomword = words[Math.floor(Math.random() * words.length)]
 output.innerHTML = randomword;
})
