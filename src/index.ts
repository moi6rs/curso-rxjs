import{Observable, Observer} from 'rxjs';

const observer: Observer<any> ={
    next: value => console.log('siguiente [next]:', value),
    error: error => console.log('error [obs]:' ,error),
    complete: () => console.info('completado')
}

//const obs$ = Observable.create();
const obs$ = new Observable<string>( subs =>{
    subs.next('Hola');
    subs.next('Mundo');

    subs.next('Hola');
    subs.next('Mundo');

    // forzar un error
/*     const a = undefined;
    a.nombre = 'Moises'; */

    subs.complete();

});
obs$.subscribe(observer);

/* 
obs$.subscribe(
    valor => console.log('next: ', valor),
    error => console.log('error: ', error),
    () => console.log('completo')  
);

 */





