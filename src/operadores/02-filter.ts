import { filter, map } from 'rxjs/operators';
import {from, fromEvent, range} from 'rxjs';

range(1,10).pipe(
    filter((val, i) =>  {
        console.log('index', i);
        return val % 2 === 1;
    })
)//.subscribe(console.log);

interface Personaje{
    tipo: string;
    nombre: string;
}
const personajes: Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'villano',
        nombre: 'Joker'
    }
]

from( personajes).pipe(
    filter( p => p.tipo === 'heroe')
).subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map(event => event.code), //keyboarEvent, string
    filter(key => key === 'Enter')
);

keyup$.subscribe(console.log);