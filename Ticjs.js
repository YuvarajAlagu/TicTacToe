let button = document.querySelectorAll('.btn');
let conditions = [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]];
let result = document.getElementById('result');
let currentplayer = 'X';
let cells = ['','','','','','','','',''];
let reset = document.querySelector('.reset');
for(let i=0;i<button.length;i++){
    let btn = button[i];
    btn.addEventListener('click',()=>{
        button[i].innerText = currentplayer;
        cells[i]=currentplayer;
    currentplayer = currentplayer == 'X'? 'O':'X';
    btn.disabled=true;
    result.innerHTML = `Player ${currentplayer} Turn`;
    cond(cells);
    });
}

function cond(cells){
    for(let j=0;j<conditions.length;j++){
        let condition = conditions[j];
        let a = cells[condition[0]];
        let b = cells[condition[1]];
        let c = cells[condition[2]];
        if(a==''||b==''||c==''){
            continue;
        }
        if((a==b) && (b==c)){
            result.innerHTML = `Congratulations! Player ${a} Won`;
            button.forEach(element => {
                element.disabled = true;
            });
        }
    }
}
reset.addEventListener('click',()=>{
    cells = ['','','','','','','','',''];
    currentplayer = 'X';
    result.innerHTML = `Player ${currentplayer} Turn`;
    button.forEach(element => {
        element.innerHTML = '';
        element.disabled = false;
    });
})