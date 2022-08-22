

const player1 = {
    buffer: [],
    stack: [],
    name: 'Player 1'
}
const player2 = {
    buffer: [],
    stack: [],
    name: 'Player 2'

}


const values = ['2', '3', '4', '5', '6', "7", '8', '9', '10', 'J', 'Q', 'K', 'A']
const colors = ['D', 'H', 'C', 'S'];

const testInformation = {
    testCaseID : null,
    loop : undefined,
    total : undefined,
    pat : false
};


const cards = [
    '2D', '2H', '2C', '2S',
    '3D', '3H', '3C', '3S',
    '4D', '4H', '4C', '4S',
    '5D', '5H', '5C', '5S',
    '6D', '6H', '6C', '6S',
    '7D', '7H', '7C', '7S',
    '8D', '8H', '8C', '8S',
    '9D', '9H', '9C', '9S',
    '10D', '10H', '10C', '10S',
    'JD', 'JH', 'JC', 'JS',
    'QD', 'QH', 'QC', 'QS',
    'KD', 'KH', 'KC', 'KS',
    'AD', 'AH', 'AC', 'AS',
];

let timer = 0;

function getUserMessage(){

    return   `Test cases number ${testInformation.testCaseID}\<br> ${testInformation.loop}  / ${testInformation.total != undefined ? testInformation.total : 'Unknown'} plays`;


}
function initGame(idMode) {



    const buffer = [...cards];

    if(idMode==0)
    {
        while (buffer.length != 0) {
            let index = Math.floor(Math.random() * buffer.length);
            player1.buffer.push(buffer[index]);
            buffer.splice(index, 1);
    
            index = Math.floor(Math.random() * buffer.length);
            player2.buffer.push(buffer[index])
            buffer.splice(index, 1);
        }
        testInformation.total = 'Long game !!';
    }else if(idMode==1){
        player1.buffer = ['AD','KC','QC'];
        player2.buffer = ['KH','QS','JC'];

        testInformation.total = 3;
    }else if(idMode==2)
    {
        player1.buffer = ['5C','3D','2C','7D','8C','7S','5D','5H','6D','5S','4D','6H','6S','3C','3S','7C','4S','4H','7H','4C','2H','6C','8D','3H','2D','2S'];
        player2.buffer = ['AC','9H','KH','KC','KD','KS','10S','10D','9S','QD','JS','10H','8S','QH','JD','AD','JC','AS','QS','AH','JH','10C','9C','8H','QC','9D'];
        testInformation.total = 26;
    }else if(idMode==3)
    {
        player1.buffer = ['6H','7H','6C','QS','7S','8D','6D','5S','6S','QH','4D','3S','7C','3C','4S','5H','QD','5C','3H','3D','8C','4H','4C','QC','5D','7D'];
        player2.buffer = ['JH','AH','KD','AD','9C','2D','2H','JC','10C','KC','10D','JS','JD','9D','9S','KS','AS','KH','10S','8S','2S','10H','8H','AC','2C','9H'];
        
        testInformation.total = 56;
    }else if(idMode==4)
    {
        player1.buffer = ['8C','KD','AH','QH','2S'];
        player2.buffer = ['8D','2D','3H','4D','3S'];
        
        testInformation.total = 1;

    }else if(idMode==5)
    {
        player1.buffer = ['10H','KD','6C','10S','8S','AD','QS','3D','7H','KH','9D','2D','JC','KS','3S','2S','QC','AC','JH','7D','KC','10D','4C','AS','5D','5S'];
        player2.buffer = ['2H','9C','8C','4S','5C','AH','JD','QH','7C','5H','4H','6H','6S','QD','9H','10C','4D','JS','6D','3H','8H','3C','7S','9S','8D','2C'];

        testInformation.total = 2;
        
    }
    else if(idMode==6)
    {
        player1.buffer = ['8C','KD','AH','QH','3D','KD','AH','QH','6D'];
        player2.buffer = ['8D','2D','3H','4D','3S','2D','3H','4D','7H'];

        testInformation.total = 2;
        
    }
    else if(idMode==7)
    {
        player1.buffer = ['AH', '4H', '5D', '6D', 'QC', 'JS', '8S', '2D', '7D', 'JD', 'JC', '6C', 'KS', 'QS', '9D', '2C', '5S', '9S', '6S', '8H', 'AD', '4D', '2H', '2S', '7S', '8C'];
        player2.buffer = ['10H','4C','6H','3C','KC','JH','10C','AS','5H','KH','10S','9H','9C','8D','5C','AC','3H','4S','KD','7C','3S','QH','10D','3D','7H','QD'];

        
        testInformation.total = 1262;

    }
    else if(idMode==8)
    {
        
        player1.buffer = ['5S','8D','10H','9S','4S','6H','QC','6C','6D','9H','2C','7S','AC','5C','7D','9D','QS','4D','3C','JS','2D','KD','10S','QD','3H','8H']
        player2.buffer = ['4C','JC','8S','10C','5H','7H','3D','AH','KS','10D','JH','6S','2S','KC','8C','9C','KH','3S','AD','JD','4H','7C','2H','QH','5D','AS']


        testInformation.total = "Unknown";

    }
    else if(idMode==9)
    {
        player1.buffer = ['4C','4S','QS','7D','QD','AS','6H','5D','2S','10S','3S','2C','JS','10C','2D','5H','KC','AD','KD','JD','JH','9H','7S','6S','3D','8S']
        player2.buffer = ['3H','7C','KS','9D','4D','6D','8D','JC','9S','10H','5C','8H','AC','2H','6C','7H','10D','3C','KH','AH','9C','QC','4H','8C','QH','5S'];

        testInformation.total = "Unknown";

    }

    testInformation.testCaseID = idMode;
}


function renderGame() {
    const node = document.querySelector('#player1').querySelector('.buffer');
    while (node.children.length > 0) node.childNodes[0].remove()


    for (let i = 0; i < player1.buffer.length; i++)node.appendChild(getItem(player1.buffer[i]))



    const node2 = document.querySelector('#player2').querySelector('.buffer');
    while (node2.children.length > 0) node2.childNodes[0].remove()


    for (let i = 0; i < player2.buffer.length; i++)node2.appendChild(getItem(player2.buffer[i]))


    document.querySelector('#loopLabel').innerHTML = getUserMessage();

}

function getItem(name) {

    const card = document.createElement("div");
    card.classList.add("card")
    const warp = document.createElement("div");
    warp.classList.add('warpper');
    const front = document.createElement("div");
    front.classList.add('front');
    const back = document.createElement("div");
    front.classList.add('back');

    const verso = document.createElement("img");
    verso.src = `assets/back.png`;
    verso.classList.add('png');

    const img = document.createElement("img");
    img.classList.add('png');
    img.src = `assets/${name}.png`;
    front.appendChild(img);
    back.appendChild(verso);

    warp.appendChild(front)
    warp.appendChild(back)

    card.appendChild(warp)

    return card;
}



function nextPlay() {


    clearInterval(timer);

    timer = setInterval(nextPlay, 1000);

    let c1 = player1.buffer.shift()
    let c2 = player2.buffer.shift();


    let v1 = values.indexOf(c1.slice(0, -1));
    let v2 = values.indexOf(c2.slice(0, -1));


    const area = document.querySelector('#area');
    while (area.children.length > 0) area.childNodes[0].remove()

    const img1 = document.createElement("img");
    img1.classList.add('png2');
    img1.src = `assets/${c1}.png`;

    const img2 = document.createElement("img");
    img2.classList.add('png2');
    img2.src = `assets/${c2}.png`;

    area.appendChild(img1);
    area.appendChild(img2);



    if (v1 > v2) {
        // P1 win
        if (player1.stack.length != 0) {
            player2.stack.push(c2);
            player1.stack.push(c1);
            player1.buffer = player1.buffer.concat(player1.stack, player2.stack);
            player1.stack = [];
            player2.stack = []
        } else {
            player1.buffer.push(c1, c2);
        }
    } else if (v1 < v2) {
        if (player2.stack.length != 0) {
            player2.stack.push(c2);
            player1.stack.push(c1);
            player2.buffer = player2.buffer.concat(player1.stack, player2.stack);
            player1.stack = [];
            player2.stack = []
        } else {
            player2.buffer.push(c1, c2);
        }

    } else {
        testInformation.loop--;
        player1.stack.push(c1);
        player2.stack.push(c2);
        testInformation.pat = player1.buffer.length - 3 < 1 || player2.buffer.length - 3 < 1
        for (let i = 0; i < 3; i++) {
            player1.stack.push(player1.buffer.shift());
            player2.stack.push(player2.buffer.shift());
        }
    }
    testInformation.loop++
        

    if (player1.buffer.length <= 0 || player2.buffer.length <= 0) {
        clearInterval(timer);
        const winner = player1.buffer.length > player2.buffer.length ? 1 : 2;

        if (testInformation.pat) alert('PAT')
        else alert(`Player ${winner} win : ${testInformation.loop} play`);
        document.querySelector('#modal').classList.remove('hideModal');
    } else {
        renderGame();
    }


}


window.addEventListener('load', (event) => {


    const buttons = document.querySelectorAll(".btnPlay");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", (event) => {
            document.querySelector('#modal').classList.add('hideModal');
            testInformation.loop = 0;
            initGame(event.target.value);
            renderGame();
             nextPlay()
        });
    }


})

