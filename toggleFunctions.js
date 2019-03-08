
function green25(){
    const doc= document;
    let boxes = doc.querySelectorAll(".boxes > div");
    for(let b=0; b < boxes.length; b++){
        boxes[b].classList.add("green25");
        boxes[b].classList.remove("green50");
        boxes[b].classList.remove("green75");
        boxes[b].classList.remove("green100");
    } 
}

    


function green50(){
    const doc= document;
    let boxes = doc.querySelectorAll(".boxes > .div");
    for(let b=0; b < boxes.length; b++){
        boxes[b].classList.add("green50");
        boxes[b].classList.remove("green25");
        boxes[b].classList.remove("green75");
        boxes[b].classList.remove("green100");
    } 
}
   


function green75(){
    const doc= document;
    let boxes = doc.querySelectorall(".boxes > .div");
    for(let b=0; b < boxes.length; b++){
        boxes[b].classList.add("green75");
        boxes[b].classList.remove("green25");
        boxes[b].classList.remove("green50");
        boxes[b].classList.remove("green100");

    }

}


function green100(){
    const doc= document
    let box = doc.querySelectorall(".box > .div");
    for(let b=0; b < box.length; b++){
        boxes[b].classList.add("green100");
        boxes[b].classList.remove("green25");
        boxes[b].classList.remove("green50");
        boxes[b].classList.remove("green75");
    }

}


function smallToggle(){
    for(let b=0; b<links.length; b++){
        links[b].classlist.toggle(green);
        links[b].classlist.toggle(red);
}

}


function mediumToggle(){

}


function largeToggle(){

}
