//Challege 1: Your aga in days
function getAge(){
    let birthYear = prompt("What year were you born ... good friend");
    let day = (2020 - birthYear)*365;

    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode("You are " + day + "days");
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);

}

function resetAge(){
    document.getElementById('ageInDays').remove();
}

//Challege 2: Cat generator
function generateCat(){
    let image = document.createElement('img');
    image.setAttribute('src','https://picsum.photos/200/300');
    image.setAttribute('height','100px');
    document.getElementsByClassName('flex-box-2')[0].appendChild(image);
}


//Challege 3: Rock, paper, scissors
function rpsGame(yourChoise){
    //Step 1: Random BotChoise
    let bot = Math.floor(Math.random()*3);

    //Step 2: Find your Choise
    let you = findChoise(yourChoise);
    //Step 3: return winner -1 --> bot 0 --> tired 1  --> you
    let win = findWin(bot, you);
    //Step 4: 
    let flex = document.getElementsByClassName('flex-box-3');
    flex[0].getElementsByTagName('img')[0].remove();
    flex[0].getElementsByTagName('img')[0].remove();
    flex[0].getElementsByTagName('img')[0].remove();


    let botChoise = createImage(bot, win);
    let p = createParagraph(win);
    let youChoise = createImage(you, win);

    document.getElementsByClassName('flex-box-3')[0].appendChild(youChoise);
    document.getElementsByClassName('flex-box-3')[0].appendChild(p);
    document.getElementsByClassName('flex-box-3')[0].appendChild(botChoise);
}

function createImage(num,win){
    let image = document.createElement('img');
    if(num==0){
        image.setAttribute('src','./image/rock.jpg');
        image.setAttribute('alt','Rock');
    }
    if(num==1){
        image.setAttribute('src','./image/paper.jpg');
        image.setAttribute('alt','Paper');

    }
    if(num==2){
        image.setAttribute('src','./image/scissors.jpg');
        image.setAttribute('alt','Scissors');

    }
    if(win == 1){
        image.setAttribute('class','img-win');
    }else if(win!=-2){
        image.setAttribute('class','img-lose');
    }
    return image;
}
function createParagraph(win){
    let  p = document.createElement('p');
    let textAnswer ;
    if(win==1){
        textAnswer = document.createTextNode('You Win');
        p.setAttribute('class','win');
    }
    else if(win==0){
        textAnswer = document.createTextNode('You Tired');
        p.setAttribute('class','tired');
    }
    else{
        textAnswer = document.createTextNode('You lose');
        p.setAttribute('class','lose');
    }
    console.log(win, textAnswer);
    p.appendChild(textAnswer);
    return p;
}

function findChoise(yourChoise){
    let alt = yourChoise.alt;
    if(alt =="Rock") return 0;
    if(alt =="Paper") return 1;
    return 2;
}

function findWin(bot, you){
   if(bot==you) return 0;
   if(bot==0 && you ==1){
    return 1;
   }
   if(bot==1 && you ==2){
    return 1;
   }
   if(bot==2 && you ==0){
    return 1;
   }
   return -1;
}

function playAgain(){
    var node = document.getElementsByClassName('flex-box-3')[0];

    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }

    let img1 = createImage(0,-2);
    img1.setAttribute('onclick','rpsGame(this)');


    node.appendChild(img1);
    let img2 = createImage(1,-2);
    img2.setAttribute('onclick','rpsGame(this)');

    node.appendChild(img2);
    let img3 = createImage(2,-2);
    img3.setAttribute('onclick','rpsGame(this)');

    node.appendChild(img3);
}
