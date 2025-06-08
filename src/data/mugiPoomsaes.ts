export interface PoomsaeStep {
  step: number;
  description: string;
}

export interface Poomsae {
  name: string;
  type: "ICholBong" | "JangBong" | "DanBong" | "Puche" | "Chang";
  steps: PoomsaeStep[];
}

export const mugiPoomsaesData: Poomsae[] = [
  {
    name: "I Chol Bong Il Dan",
    type: "ICholBong",
    steps: [
      {
        step: 1,
        description: "10 derecha, 10 izquierda, 19 a la izquierda, ½ 19 a la derecha. Baja 6 y al subir 4, lanza por entre las piernas y saca por detrás con medio 6, 7, 7, 7, luego 9, 5 (cambiando de mano), 20, 20, 20 y 21. Nunchakus por derecha, cambia con 4 por izquierda y ejecuta 21 terminando en Koap Sogi. (Grito). Pone los Nunchakus rectos."
      },
      {
        step: 2,
        description: "A la cintura 4 veces empezando por izquierda con el palo invertido y arriba como 4 y vuelve a ejecutar 2 movimientos más a la cintura y 4 dos veces. 8, 13, 15 en diagonal y en Ap Kubi, cambia con 4 a mano izquierda y 13, 15. Cambia al lado derecho en Ap Kubi 8, 13, 15, cambia de mano con 4 y ejecuta 13, 15. En Koap Sogi, gira 3 veces por el cuello desde la mano derecha como 19 sin golpe, luego 3 veces por el otro lado. 19, 25, 22, 25, 22, 15. Engancha en la axila, agarra por la espalda el Nunchaku enganchado, con la mano izquierda, 13, devuelve el Nunchaku pegándole con la mano derecha y pone los Nunchakus rectos. (Grito)."
      }
    ]
    
  },
  {
    name: "I Chol Bong I Dan",
    type: "ICholBong",
    steps: [
      {
        step: 1,
        description: "Avanza pierna izquierda en Ap Kubi a la vez que bloquea Orum Okkoru Olgul Makki con los Nunchacos. Mueve el pie izquierdo al lado izquierdo en Ap Kubi, a la vez que ejecuta 24, terminando el movimiento al lado derecho, con el pie derecho al frente en Ap Kubi, 15, 13."
      },
      {
        step: 2,
        description: "Gira al frente en Chuchum Sogui. 7, 7 empezando por izquierdo."
      },
      {
        step: 3,
        description: "5, 9 (misma mano). Pasa a la diagonal con el Nunchaco en el hombro izquierdo en Koap Sogui, 15, 13, pasa al frente, cambiando con 7 y 15, 13, deja en la axila y gira a la otra diagonal, 15, 13. Gira al frente, cambia con 7 y 15, 13. Da media vuelta (sin desplazamiento de pies), cambia con 7 y 15, 13."
      },
      {
        step: 4,
        description: "Con la mano derecha 5 al frente y 13 al lado, 5 al frente y 13 al lado."
      },
      {
        step: 5,
        description: "Gira a la izquierda, 19 terminando en la axila izquierda. 2 veces 10 y vuelve despacio con los Nunchacos extendidos al frente de forma horizontal, al llegar de nuevo al lado, extiende los Nunchacos de forma vertical por detrás del hombro derecho."
      },
      {
        step: 6,
        description: "Avanza en Ap Sogui con derecho adelante y hace 24 sin el último golpe en la cadera (envaina el Nunchaco). Lo agarra en la cadera. Gira su cuerpo 360° saltando con el Nunchaco en la mano derecha (desenvaina el Nunchaco más una vuelta por encima de la cabeza). Cae en Ap Kubi al frente, hace 25 y medio 21, y 5."
      },
      {
        step: 7,
        description: "Mueve el pie derecho al lado izquierdo en Ap Kubi, hace 25 terminando el movimiento al lado derecho en Ap Kubi (el golpe al lado izquierdo, el desenrosque al lado derecho). Sigo al lado derecho y hace 15, 13."
      },
      {
        step: 8,
        description: "Paso hacia atrás con el Nunchaco en la mano derecha, hace 24, 15, y termina con 13 sosteniendo con la mano los dos palos del Nunchaco. Avanza con Ap Chagi con derecha, doble Ap Chagi, hace gesto inicial de 24 seguido por un rollo lateral."
      },
      {
        step: 9,
        description: "Se pone de pie por el lado izquierdo y ejecuta 24, 15, 13, 4, 15, 13. Pasa al otro lado y repite la secuencia anterior. Después del último 13 sube los Nunchacos encima del hombro y termina en Koap Sogi con grito."
      },
      {
        step: 10,
        description: "Recoge la pierna derecha y termina en chumbe."
      }
    ]     
  },
  {
    name: "I Chol Bong Sam Dan",
    type: "ICholBong",
    steps: [
      { step: 1, description: "3 veces giros de 3, termina sobre los hombros (simultáneos)" },
      { step: 2, description: "3 veces giros de 15, termina en las axilas (simultáneos)" },
      { step: 3, description: "8 simultáneo izquierda por encima, termina en el hombro y 13 termina en la axila. 8 simultáneo derecha por encima, terminando en los hombros." },
      { step: 4, description: "6, termina en los hombros, golpe vertical hacia abajo, devuelve con 27 termina en los hombros, (todo simultáneo)." },
      { step: 5, description: "3 pares de 5 alternado, empezando con la mano derecha, termina en los hombros." },
      { step: 6, description: "3 veces equis hacia adelante, promero mano izquierda por encima, rebota en la axila (sin agarrar), 3 veces equis hacia atrás, primero mano izquierda por encima, termina en los hombros." },
      { step: 7, description: "3 pares de medio 24 aleternado, empieza mano derecha, termina en las axilas." },
      { step: 8, description: "En Ap Sogi al frente, adelanta pie izquierdo 15, 13 simultáneo, termina en la axila. A la izquierda pie izquierdo adelante, 15, 13 simultáno. Luego al frente pie derecho, adelante, 15, 13 simultáneo. A la derecha pie derecho adelante, 15, 13 simultáneo. Y al frente pie izquierdo adelante 15, 13 simultáneo, termina en la axila." },
      { step: 9, description: "Sube a los hombros, 3 pares de 5 alternado empezando con la mano derecha, termina en los hombros." },
      { step: 10, description: "Un giro de 15 simultáneo y agarra al frente los nunchakus en Beom Sogi. (Grito)" }
    ]    
  },
  {
    name: "Jang Bong Il Dan",
    type: "JangBong",
    steps: [
      { step: 1, description: "Chumbe. Chuzona hacia arriba por el lado derecho, abre al lado izquierdo en Uen Dip-ChuChum Sogui a la vez que chuzo a la izquierda y hacia abajo, paso a Ap Kubi y con el lado derecho golpe a la rodilla de lado seguido de un golpe hacia las costillas de lado, avanza en Orum Ap Kubi a la vez que golpea con el lado derecho a la cabeza descendentemente." },
      { step: 2, description: "Paso por detrás hacia el otro lado pasando la punta de arriba del Jang Bong por debajo a la altura de la rodilla, cae en Orum Ap Kubi repitiendo el paso anterior por este lado." },
      { step: 3, description: "Recoge en Moap Sogui mirando hacia la derecha con el Jang Bong chuzando arriba (hacia el callejón del frente), repite el paso 1 agregándole que avanza en Uen Ap Kubi golpeando con el lado izquierdo al medio a las costillas de lado, avanza en Orum Ap Kubi a la vez que golpea con el lado derecho a la cabeza descendentemente. (Grito)." },
      { step: 4, description: "Recoge en Moap Sogui mirando hacia la derecha con el Jang Bong chuzando arriba (hacia el callejón del frente), repite el paso 1 agregándole que avanza en Uen Ap Kubi golpeando con el lado izquierdo al medio a las costillas de lado, avanza en Orum Ap Kubi a la vez que golpea con el lado derecho a la cabeza descendentemente continuando el giro como remo girando y terminando en ChuChum Sogi con el Jang Bong horizontal arriba y los brazos extendidos. (Grito)." },
      { step: 5, description: "Al lado izquierdo en Uen Dip-ChuChum Sogui a la vez que chuzo a la izquierda y hacia abajo, paso a Ap Kubi y con el lado derecho golpe a la rodilla de lado seguido de un golpe hacia las costillas de lado, golpea con el lado derecho a la cabeza descendentemente deteniéndolo en la axila derecha, avanza en Orum Ap Kubi diagonal a la vez que hace un círculo por encima de la cabeza con la punta de arriba del Jang Bong como 24 de Nunchacos terminando con un golpe de lado a la cabeza hacia el lado izquierdo." },
      { step: 6, description: "Repite el paso anterior al otro lado." },
      { step: 7, description: "Recoge el Jang Bong por el frente hacia el lado derecho dejándolo por detrás de la axila verticalmente. Chumbe." }
    ]
  },
  {
    name: "Jang Bong I Dan",
    type: "JangBong",
    steps: [
      { step: 1, description: "Chumbe. Chuzona hacia arriba por el lado derecho, abre al lado izquierdo en Uen Dip-ChuChum Sogui a la vez que chuzo a la izquierda y hacia abajo, paso a Ap Kubi y con el lado derecho golpe a la rodilla de lado, seguido de un golpe hacia las costillas de lado, golpea con el lado derecho a la cabeza descendentemente deteniéndolo en la axila derecha, avanza en Orum Ap Kubi diagonal a la vez que hace un círculo por encima de la cabeza con la punta de arriba del Jang Bong como 24 de Nunchacos terminando con un golpe de lado a la cabeza hacia el lado izquierdo." },
      { step: 2, description: "Repite el paso anterior al otro lado." },
      { step: 3, description: "Recoge en Moap Sogui mirando hacia la derecha con el Jang Bong chuzando arriba (hacia el callejón del frente), repite el paso 1 agregándole que avanza en Uen Ap Kubi golpeando con el lado izquierdo a las costillas del lado derecho y con el lado derecho hacemos la última parte como 24 de Nunchacos. (Grito)." },
      { step: 4, description: "Recogemos en Moap Sogui, chuzamos hacia arriba con el Jang Bong y repetimos el paso 1 seguido del 2." },
      { step: 5, description: "Por el callejón de vuelta repite el paso 3 y al finalizar, en lugar del último golpe a la cabeza, ejecuta 8 hacia la izquierda dando un giro de 360°." },
      { step: 6, description: "Terminando el paso anterior al lado izquierdo en Bom Sogi con el Jang Bong terminando en el lado y con el lado derecho hacia arriba al medio, luego al medio pero el golpe hacia abajo y Orum Ap Kubi diagonal a la vez que hace un círculo por encima de la cabeza con la punta de arriba del Jang Bong como 24 de Nunchacos terminando con un golpe de lado a la cabeza hacia el lado izquierdo." },
      { step: 7, description: "Repite el paso anterior hacia el otro lado. (Derecho)." },
      { step: 8, description: "Recoge el Jang Bong por el frente hacia el lado derecho dejándolo por detrás de la axila verticalmente. Chumbe." }
    ]
  },
  {
    name: "Jang Bong Sam Dan",
    type: "JangBong",
    steps: [
      { step: 1, description: "Chumbe. Chuzon hacia arriba por el lado derecho, abre al lado izquierdo en Uen Dip-ChuChum Sogui a la vez que chuzo a la izquierda y hacia abajo, cambio a Uen Ap Kubi y con el lado derecho golpe a la rodilla de lado, seguido de un golpe hacia las costillas de lado, golpea con el lado derecho a la cabeza descendentemente deteniéndolo en la axila derecha, avanza con Mondolyo quedando en Uen Ap Kubi terminando el básico número 12 de Jang Bong golpeando con el extremo derecho a la rodilla." },
      { step: 2, description: "Cambia al otro lado con el básico número 12 de Jang Bong quedando en Orum Ap Kubi Golpeando a la rodilla con la punta izquierda, repite el paso anterior por el otro lado." },
      { step: 3, description: "Ejecuta el básico número 12 para cambiar de lado, quedando con la punta derecha golpeando hacia la rodilla, hacia el frente por el callejón del medio." },
      { step: 4, description: "Avanza ejecutando el básico número 7 finalizando con el básico número 18. (Grito)" },
      { step: 5, description: "Se levanta y avanza el pie derecho hacia el frente para quedar en ChuChum Sogi golpeando con la punta derecha hacia el frente. Gira por la espalda, queda en Uen Ap Kubi bloqueando con el Bong hacia arriba de manera horizontal y con los brazos extendidos, Orum Ap Chagi, descarga la pierna derecha y ejecuta un barrido hacia afuera, con la punta derecha del Bong, se levanta, avanza la pierna izquierda por detrás de la derecha a quedar en Orum Koap Sogi cambiando el Bong con el básico número 9 terminando con un golpe hacia el suelo con la punta derecha." },
      { step: 6, description: "Se gira hacia el lado izquierdo dando dos pasos terminando en Orum Ap Kubi y bloqueando arriba, repite el paso anterior por este lado." },
      { step: 7, description: "Mueve el pie derecho hacia el lado derecho a quedar en ChuChum Sogi a la vez que chuza al lado con la punta derecha del Bong, recoge el pie derecho y queda mirando hacia el lado derecho. Desenvaina, envaina y desenvaina con el brazo derecho, y con el último desenvaine avanza el pie izquierdo hacia el callejón del medio y dando un último paso con el pie derecho para quedar en Moap Sogi con el Bong en el lado derecho." },
      { step: 8, description: "Saca el Bong ejecutando 18 con la mano derecha. (Grito)" },
      { step: 9, description: "Se levanta, recoge el pie derecho y termina en Chumbi." }
    ]
  },
  {
    name: "Jang Bong Sa Dan",
    type: "JangBong",
    steps: [
      { step: 1, description: "En Moap Sogi, toma el Bong por delante del brazo derecho verticalmente y paralelo al cuerpo, eleva el Bong y la pierna izquierda en Hak Dary Sogi. Cae al lado en Ap Kubi Sogi y golpea arriba de forma ascendente. Pone el Bong vertical y sin moverlo cambia las manos de posición. Avanza en Koap Sogi (derecha por delante) a la vez que hace golpe al medio de forma ascendente con la mano izquierda, golpe hacia afuera con la mano izquierda (el Bong de la mano que golpea). Gira por la espalda en Ap Kubi Sogi con golpe hacia al medio (Bong Horizontal a la altura de la cintura). Enfunda el Bong a la vez que avanza en ChumChum Sogi cogiendo el Bong como un bebé. Salta cambiando de frente y golpeando horizontalmente con el extremo del Bong. Toma el Bong por el extremo de la mano derecha, hace un giro por fuera y golpea el suelo. (grito)" },
      { step: 2, description: "Se levanta con el Bong guardado de forma vertical tras el brazo derecho, Hak Dary Sogi y Uen Olgul Son Nal Makki. Avanza en Koap Sogi (izquierda por delante), remo. Ap Sogi, remo. Ap Kubi Sogi Uen Montong Batang Son Chigi con el Bong guardado de forma diagonal tras el brazo derecho. Sin desplazarse pasa a ChumChum Sogi y lleva el Bong adelante verticalmente, cambia las manos de posición. Suroh Chagi al extremo inferior del Bong, golpea arriba de forma ascendente. Gira por la espalda en Ap Kubi Sogi y punza con las manos casi juntas. Le da un giro hacia atrás al Bong a la vez que hace Ap Cha Oligi. Cae en Ap ChumChum Sogi bloqueando como Waesanteul Makki con el Bong. Avanza en Ap Kubi Sogi con golpe arriba ascendente." },
      { step: 3, description: "Recoge en Hak Dary Sogi y GeumGang Makki con el Bong. Descarga en Ap Sogi con remo, remo con giro y golpe vertical. Salto por la espalda y golpe vertical en ChumChum Sogi. Desplaza un poco el pie delantero al lado para quedar en Ap Kubi Sogi y punza con las manos casi juntas. Junta casi del todo las manos cogiendo el Bong por el extremo a la vez que haciéndolo girar, da un paso adelante, luego otro adelante dando media vuelta y uno para atrás para golpear el suelo con el Bong. (grita)" },
      { step: 4, description: "Sin mover los pies se incorpora chuzo al frente con las manos casi juntas, retrae el Bong. Avanza en Ap Kubi Sogi golpeando con la mano derecha de forma ascendente. Da un giro completo por el frente a la vez que pega golpe hacia fuera con la mano derecha (el Bong y el brazo juntos y extendidos horizontalmente, la otra mano sobre el pectoral de la mano que golpea). Avanza en Koap Sogi (izquierdo por detrás) y golpea verticalmente al piso, da un paso en Mo Sogi. (grito). Recoge el Bong y lo enfunda verticalmente a la vez que levanta la pierna izquierda en Hak Dary Sogi. Chumbi." }
    ]    
  },
  {
    name: "Chang Il Dan",
    type: "Chang",
    steps: [
      { step: 1, description: "Realiza el mismo esquema de la Jang Bong Sa Dan, pero en el paso 2 se modifica el siguiente movimiento: '... levanta con el Bong guardado de forma vertical tras el brazo, derecho, Hack Dary Sogi y Uen Olgul Sonal Makki. Avanza en Koap Sogi (izquierdo por delante), remo. Ap Sogi, remo. Ap Kubi Sogi Uen Montong Batang Son Chigi con el Bong guardado de forma diagonal tras el brazo. Sin desplazarse, pasa a ChumChum Sogi y lleva el Bong adelante verticalmente' cambia el Bong de posición (la punta de abajo, la pone arriba)." },
    ]
  },
  {
    name: "Dan Bong Il Dan",
    type: "DanBong",
    steps: [
      { step: 1, description: "Empuña el mando en la mano derecha, hace un leve giro hacia la derecha con ambas manos juntas como el saludo de básico de respiración y empieza a mover lentamente sus brazos al frente. Recoge el pie izquierdo, gira sus brazos por dentro a la altura de los genitales. Levanta los talones y deja caer su cuerpo al lado izquierdo en Ap Kubi Sogi, a la vez que con la mano derecha hace Olgul Makki. Levanta la pierna derecha en Hak Dary Sogi, GeumGang Yop Jeumok. Deja caer la pierna a Ap Kubi Sogi, Dul Kwon Jeumok Chigi (der-izq). Avanza Dwip Kubi Sogi con el pie izquierdo adelante a la vez que hace Orum Dolt Sogi. Sin cambiar de posición GeumGang Yop Jeumok (Bloquea derecha), en esa misma posición pega codazo derecho (Uen Dolt Sogi) luego izquierdo. Recoge el pie izquierdo a Moap Sogi y Orum Dolt Sogi." },
      { step: 2, description: "Suelta el Tang Bong, y lo toma por la cuerda con el pulgar, gira por debajo hacia arriba y de izquierda a derecha, se devuelve de derecha a izquierda y los hace dos veces más, hasta que en el último giro coge la cuerda con el dedo corazón. Con el Bong tomado de la cuerda hace como #24 y 5 de Nunchakus, vuelve a empuñar el Tang Bong. Cae En Orum Ap Kubi (diagonal) GeumGang Jeumok (bloquea derecha), con la pierna de atrás hace Ap Chagi cruzando con el brazo izquierdo al frente. Cae en Uen Ap Kubi Sogi, Son Nal GeumGang Jeumok (bloquea izquierda). Avanza en Orum Ap Kubi Sogi, Dul Kwon Montong Jeumok Chigi (der-izq). (grito)" },
      { step: 3, description: "Dobla codo izquierdo y pega Orum Pal Kup a la vez que recoge pie izquierdo para pegar Uen Yop Chago Tora Yop Chagi y regresa atrás pie derecho con Montong Son Nal Goduro Makki en Dwip Kubi Sogi. Avanza en Orum Ap Kubi, Montong Batang Nullo Makki y chuza con el Tang Bong (como pyon Son Kup)." },
      { step: 4, description: "Recoge el pie derecho y hace el paso 3 por el otro lado. (las patadas también son izq-der)" },
      { step: 5, description: "Levanta el pie derecho en Hak Dary Sogi punza con el Tang Bong arriba y Are Neryo Batang Makki. Hace un giro con la mano derecha y pega a las rodillas del oponente cayendo arrodillado. Gira por la espalda y levanta el pie izquierdo en Hak Dary Sogi, chuzando con el Tang Bong arriba a la vez que la otra mano acompaña al codo." },
      { step: 6, description: "Gira al lado izquierdo de frente y cae en ChumChum Sogi a la vez que pega codazos atrás derecho e izquierdo. Desplaza en Koap Sogi y Uen Dolt Sogi. Uen Yop Chagi. Cae sobre el pie izquierdo y gira por el frente para pegar con el Tang Bong agarrado por ambas manos en Ap Kubi Sogi izquierdo. (grito). Desplaza el pie derecho atrás en Dwip Kubi Sogi, Montong Son Nal Goduro Makki." },
      { step: 7, description: "Recoge el pie derecho y cambia a Uen Dwip Kubi Sogi pero de frente." }
    ]    
  },
  {
    name: "Puche Il Dan",
    type: "Puche",
    steps: [
      { step: 1, description: "Eleva el Bong para cargar el movimiento, se desplaza al lado izquierdo en Ap Chuchum Sogui, a la vez que punza abajo, abre el pie a Ap Kubi Sogui, golpe abajo, al medio, golpe descendente arriba con el Bong en la axila del brazo que pega.\n\nDa un giro completo por el frente mientras hace hélice por encima de la cabeza cambiando las manos de posición, cae en Ap Kubi Sogui con golpe al medio." },
      { step: 2, description: "Da media vuelta en el puesto a la vez que gira el Bong por encima de la cabeza cambia las manos de posición, realiza el paso 1 al otro lado." },
      { step: 3, description: "Por el callejón: Desplaza el pie izquierdo para meterse al callejón, girando el Bong por encima de la cabeza cambia las manos de posición para golpear abajo, al medio, golpe descendente arriba con el Bong en la axila del brazo que pega.\n\nHace 2 remos caminando. Agarra el Bong con la mano derecha por el extremo a la vez que haciéndolo girar, da un paso adelante, luego otro adelante, da media vuelta por el frente y uno para atrás para golpear el suelo con el Bong. (Ki Hap)." },
      { step: 4, description: "Se levanta arrastrando la punta del Bong como remando levantando polvo para quedar en Ap Kubi Sogui con golpe al medio ascendente." },
      { step: 5, description: "Gira por la espalda para quedar en Ap Kubi Sogui y bloqueo horizontal alto. Ap Chagui. Se arrodilla para barrer de adentro hacia fuera. Se levanta y avanza en Koap Sogui, para golpear de forma descendente al piso." },
      { step: 6, description: "Hacia el otro lado da un paso en Ap Sogui para quedar en Ap Kubi Sogui y realizar el paso 4 por el otro lado. Moviendo la pierna derecha, se desplaza a Chuchum Sogui y chuzá de forma horizontal hacia el costado derecho (cogiendo el Bong como un bebe)." },
      { step: 7, description: "Por el callejón de regreso: Da media vuelta, desenfunda el Bong con una vuelta de más por encima de la cabeza a la vez que se desplaza por el callejón en Ap Sogui (guarda el Bong a la espalda). Enfunda el Bong. Lo agarra en la cadera.\n\nGira el cuerpo 360° saltando con el Bong en la mano derecha (desenvaina el Bong, más una vuelta por encima de la cabeza). Termina el movimiento en Ap Sogui pie derecho adelante, mano izquierda en guardia y el Bong en la mano derecha guardándolo en la espalda." },
      { step: 8, description: "Desplaza el pie izquierdo por el frente al lado derecho. Hace 2 remos caminando. Agarra el Bong con la mano derecha por el extremo a la vez que haciéndolo girar, da un paso adelante, luego otro adelante, da media vuelta por el frente y uno para atrás para golpear el suelo con el Bong. (Ki Hap)." },
      { step: 9, description: "Recoge la pierna izquierda para levantarse. Chumbi." }
    ]
  },
  {
    name: "Puche I Dan",
    type: "Puche",
    steps: [
      { step: 1, description: "Saludo con los 2 abanicos al frente como Chumbí de Taekwondo." },
      { step: 2, description: "Avanza hacia el lado, pie izquierdo adelante, abanico abierto en diagonal y al frente, doble golpe izquierdo-derecho. Ap Chagui, descarga adelante, gira por la espalda, abre al frente recoge pie izquierdo como saludo." },
      { step: 3, description: "Repite el paso 2 hacia la derecha." },
      { step: 4, description: "Por el callejón: Vuelve al frente con pie izq, golpea abajo en diagonal, arriba doble con abanico cerrado recoge y luego al frente Ap Chago Ap Chago Tio Ap Chagui. Chong Bang Fe Yon Nak Bop al frente y desde arrodillado golpe horizontal abierto con ambas manos simultáneamente (Ki Hap)." },
      { step: 5, description: "Recoge el pie atrasado, gira por la espalda en Ap Kubi Sogui y chuza doble con abanicos cerrados a las costillas, avanza en Hak Dary sogui con golpe doble al medio en diagonal descendente, con abanicos abiertos. Cae en Ap Kubi Sogui, doble golpe vertical abriendo los abanicos." },
      { step: 6, description: "Gira por la espalda, repite el paso 5 hacia la derecha." },
      { step: 7, description: "Por el callejón de regreso: Uen Bantang Son Montong Bakat Nullo aki (abanico abierto), luego derecho con abanico cerrado, codazo con derecha. Barrido, queda al frente izquierdo, Feñon Chagui descargando pierna atrás, posición Ap Chuchum Sogui, abanico atrás y arriba izquierdo en are (Ki Hap)." }
    ]
  }
];
