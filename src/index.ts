import { fromEvent } from "rxjs";

const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris cursus, purus ac volutpat elementum, libero orci vulputate ligula, vel pulvinar massa lectus vel purus. Vestibulum massa leo, maximus et mi euismod, lacinia elementum magna. Cras sagittis lacus id augue molestie aliquet et vitae nibh. Pellentesque aliquam pellentesque elementum. Sed luctus ipsum quis augue condimentum hendrerit. Suspendisse varius ornare tellus nec fringilla. In ac sem sit amet erat euismod consectetur sit amet eget est. Fusce sodales elementum dui. Proin ipsum nibh, pretium a pharetra a, accumsan id elit. Phasellus ac pellentesque tortor, eu hendrerit sapien. Nulla nec metus justo. Morbi non purus vel lorem interdum condimentum non ac nunc. Integer fringilla ex sit amet malesuada dapibus. Duis eu lectus vel enim tincidunt malesuada a ac nisl. Aliquam condimentum, sapien non sollicitudin auctor, sem neque tempor dolor, volutpat scelerisque sapien augue non ante.
<br/><br/>
Ut lobortis libero quam, ac malesuada tellus aliquam sit amet. Curabitur sed massa eget arcu placerat tristique. Donec a luctus orci. Cras consequat suscipit arcu sit amet sollicitudin. Fusce in faucibus sem. Suspendisse non massa aliquet, efficitur urna nec, lobortis tellus. Pellentesque feugiat, arcu a vulputate tristique, arcu ipsum lacinia nunc, eget porttitor nibh lorem nec mauris. Maecenas non condimentum tortor. Fusce tempor malesuada ultrices. Pellentesque ex elit, porta sed porta quis, convallis in nisl.
<br/><br/>
Pellentesque vitae magna ligula. Curabitur euismod pulvinar magna non volutpat. Nulla enim odio, condimentum nec urna id, varius auctor nunc. Suspendisse accumsan commodo mattis. Donec ullamcorper magna at arcu hendrerit varius. Suspendisse dapibus metus ipsum, ut venenatis lectus ultrices in. Curabitur ut feugiat diam, a viverra arcu. Donec hendrerit velit ut elit aliquet, at pulvinar elit facilisis. Donec non purus ante. Sed tristique leo a mauris vulputate cursus. Sed dapibus mi at libero posuere, sit amet tempor ipsum dignissim. Morbi auctor vitae sem non efficitur. Vestibulum sollicitudin scelerisque pellentesque. In finibus fringilla aliquet.
<br/><br/>
Fusce dapibus ultricies feugiat. Quisque eu augue commodo, rhoncus purus sed, semper risus. Fusce consequat leo risus, ut consequat dolor tincidunt vel. Sed sit amet convallis odio. Vivamus tempus diam mauris, vitae posuere justo sagittis a. In venenatis id elit vel eleifend. Curabitur ac odio egestas mauris tempor rhoncus molestie commodo nulla. Aliquam erat volutpat. Sed a velit semper, malesuada eros venenatis, luctus nunc. Cras at eros mollis, cursus tellus et, bibendum ligula. Aenean volutpat consectetur nibh nec imperdiet. Nunc euismod sapien vitae nibh blandit, condimentum posuere ante tristique. Aenean dapibus malesuada augue, id pulvinar est scelerisque in. In lacinia feugiat tristique.
<br/><br/>
Nulla tortor odio, sagittis eget interdum in, blandit sit amet ligula. Duis sagittis lobortis commodo. Sed lacinia ac dolor sed eleifend. Integer quis porttitor dui. Quisque et ipsum nec dui porttitor consectetur ut a felis. Sed at velit consequat, interdum nunc sed, vulputate tortor. Nunc pharetra interdum nulla eget iaculis. Fusce id risus sagittis, ultrices erat a, laoreet dui. Cras vulputate, tortor nec laoreet accumsan, augue nunc lobortis dolor, eu aliquam lacus dolor in purus. Pellentesque euismod tortor pretium lectus tincidunt, eget dapibus nulla condimentum. Nulla ut libero nec metus posuere venenatis. Sed lobortis, leo et porttitor bibendum, eros justo molestie risus, a maximus quam orci vitae sapien. Aenean interdum consectetur justo eu faucibus. Pellentesque suscipit quis nunc vel pulvinar.

`;

const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

// funcion que haga el calculo

// Streams
const scroll$ = fromEvent(document, 'scroll');
//scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(
    
);

progress$.subscribe( porcentaje => {
    progressBar.style.width = `${porcentaje}%`;
});