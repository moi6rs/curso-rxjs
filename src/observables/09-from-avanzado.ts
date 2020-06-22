import { from, of } from "rxjs";

import { async } from "rxjs/internal/scheduler/async";

const observer ={
    next: val => console.log('next:', val),
    complete: () => console.log('complete')  
};

/** 
* of = toma argumentos y genera una secuencia
* from = array, promesa, iterable, observable
*/

// const source$ = from([1,2,3,4,5]);
// const source$ = of(... [1,2,3,4,5]);

// const source$ = from('Fernando');

const source$ = from( fetch('https://api.github.com/users/moi6rs'));

// source$.subscribe(observer);

const miGenerador = function*(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const miIterable = miGenerador();

/*
for(let id of miIterable){
    console.log(id);
    
}*/

from( miIterable).subscribe(observer);

/* source$.subscribe( async (resp) =>{
    console.log(resp.url);
    const dataResp = await resp.json();
    console.log(dataResp);
}) */