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

  return () => {
    //destruir la subcripcion
    clearInterval(interval);
    console.log("Intérvalo destruido");
  };
});

//const subs = intervalo$.subscribe((num) => console.log("Num", num));
const subs1 = intervalo$.subscribe();
const subs2 = intervalo$.subscribe();
const subs3 = intervalo$.subscribe();

setTimeout(() => {
  subs1.unsubscribe();
  subs2.unsubscribe();
  subs3.unsubscribe();
  console.log("Completado timeout");
}, 3000);
