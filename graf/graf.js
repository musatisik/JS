let graf = [
    [0,1,0,0,1,0],
    [0,0,0,0,1,0],
    [0,1,0,0,0,1],
    [0,0,0,0,0,0],
    [0,0,1,1,0,0],

       
];

let next = [0];
let visited =[];

while(next.length > 0){
    let act = next.pop();
    if(!visited.includes(act)){
        console.log(act);
        visited.push(act);
        for(let i = 0; i < graf[act].length; i++){
            if(graf[act][i] == 1){
                next.push(i);
            }   
        }
    }
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   