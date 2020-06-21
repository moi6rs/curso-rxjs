import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("next [next]:", value),
  error: (error) => console.log("error [obs]:", error),
  complete: () => console.info("completado"),
};

const intervalo$ = new Observable<number>((subscriber) => {
  // crea un contador 1,2,3 ....
  let count = 0;

  const interval = setInterval(() => {
    //cada segundo
    count++;
    subscriber.next(count);
    console.log(count);
  }, 1000);

  setTimeout(() => {
      subscriber.complete();
  }, 2500);

  return () => {
    //destruir la subcripcion
    clearInterval(interval);
    console.log("Intérvalo destruido");
  };
});

//const subs = intervalo$.subscribe((num) => console.log("Num", num));
const subs1 = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);

subs1.add(subs2).add(subs3);
setTimeout(() => {
    subs1.unsubscribe();  
  /*subs2.unsubscribe();
  subs3.unsubscribe(); */
  console.log("Completado timeout");
}, 6000);
