document.getElementById('select-ambapa').addEventListener('click', function(){
    const isSelection = isSelectionFunction();
    if(isSelection === true){
        playerSelection('ambapa');   
        disableButton('select-ambapa');
    }  
    else{
        alert("You already selected five players!");
    }
})

document.getElementById('select-ronaldo').addEventListener('click', function(){
    const isSelection = isSelectionFunction();
    if(isSelection === true){
        playerSelection('ronaldo');
        disableButton('select-ronaldo');
    }   
    else{
        alert("You already selected five players!");
    }
})

document.getElementById('select-ibramovic').addEventListener('click', function(){
    const isSelection = isSelectionFunction();
    if(isSelection === true){
        playerSelection('ibrahimovic');
        disableButton('select-ibramovic');
    }   
    else{
        alert("You already selected five players!");
    }
})

document.getElementById('select-benzema').addEventListener('click', function(){
    const isSelection = isSelectionFunction();
    if(isSelection === true){
        playerSelection('benzema');
        disableButton('select-benzema');
    }    
    else{
        alert("You already selected five players!");
    }
})

document.getElementById('select-messi').addEventListener('click', function(){
    const isSelection = isSelectionFunction();
    if(isSelection === true){
        playerSelection('messi');
        disableButton('select-messi');
    }    
    else{
        alert("You already selected five players!");
    }
})

document.getElementById('select-ozil').addEventListener('click', function(){
    const isSelection = isSelectionFunction();
    if(isSelection === true){
        playerSelection('ozil');
        disableButton('select-ozil');
    }   
    else{
        alert("You already selected five players!");
    }
})

document.getElementById('select-salah').addEventListener('click', function(){
    const isSelection = isSelectionFunction();
    if(isSelection === true){
        playerSelection('salah');
        disableButton('select-salah');
    }   
    else{
        alert("You already selected five players!");
    }
})

document.getElementById('select-neymar').addEventListener('click', function(){
    const isSelection = isSelectionFunction();
    if(isSelection === true){
        playerSelection('neymar');
        disableButton('select-neymar');
    } 
    else{
        alert("You already selected five players!");
    }
})

document.getElementById('select-suarez').addEventListener('click', function(){
    const isSelection = isSelectionFunction();
    if(isSelection === true){
        playerSelection('suarez');
        disableButton('select-suarez');
    }   
    else{
        alert("You already selected five players!");
    }
})
