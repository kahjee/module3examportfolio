var heart=document.getElementById('heart');
var cross=document.getElementById('cross');
var pImg = document.getElementById('pImg');

var petList=[];
var petImg= ["assets/bailey.png","assets/leo.png","assets/ming.png","assets/oscar.png","assets/rex.png","assets/ruby.png","assets/spot.png","assets/whiskers.png", "assets/willow.png","assets/zoe.png"];


var count=0;
function randomPet(){
    let randNum= Math.floor((Math.random() * petImg.length));
    pImg.src = petImg[randNum];
    currNum=randNum;
}

window.onload = randomPet;
cross.onclick= randomPet;

let counter=0;

heart.onclick= function(){
    if (counter<10){
        petList.push(petImg[currNum]);

        addPetInList(petImg[currNum]);
        petImg.splice(currNum, 1);
        randomPet();
        counter+=1;
        
    }
}


//adds element in the list
function addPetInList(animalLink){
    var animalLink=animalLink;

    //adds div inside the parent div of list container
    const parentDiv=document.getElementById('parent-div');
    const newDiv=document.createElement('div');
    parentDiv.appendChild(newDiv);
    newDiv.classList.add('matches');

    //adds image inside div and its animal image link
    const newPetImage=document.createElement('img');
    newPetImage.classList.add('list-img');
    newPetImage.src=animalLink;
    newDiv.appendChild(newPetImage);


}
