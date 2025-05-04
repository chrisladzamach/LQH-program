export interface PoomsaeStep {
  step: number;
  description: string;
}

export interface Poomsae {
  name: string;
  type: "JoongDo" | "Won" | "KiHap";
  steps: PoomsaeStep[];
}

export const poomsaesData: Poomsae[] = [
  {
    name: "Joong Do Il Dan",
    type: "JoongDo",
    steps: [
      { step: 1, description: "Chumbi, Inicio de Joong-do." },
      { step: 2, description: "A la izquierda en Ap Kubi, Montong Bakkat Pal Makki, Montong Chumok Chirigui, Ap Chagui, cae adelante en Ap Kubi y Montong Chumok Chirigui." },
      { step: 3, description: "Realiza el paso 2 al otro lado." },
      { step: 4, description: "Por el callejón: Mueve el pie izquierdo para meterse al callejón, Orum Are Pal Makki, Montong Chumok Chigui, avanza en Ap Kubi dejando el puño extendido al frente, hace Montong An Makki, Olgul Makki (transición en Bom Sogui), al pasar al Ap Kubi golpea Montong Chumok, repite este paso 3 veces. (Grito)." },
      { step: 5, description: "Gira por la espalda en Ohja Sogui Kun Gam Iop Chumok, la mano que bloque punza con Pion Son Kup palma hacia arriba por debajo del brazo que golpea. Luego la mano que estaba golpeando (izquierda) hace Son Nal Bakkat Chirigui en Dip Kubi." },
      { step: 6, description: "Recoge la pierna de adelante y realiza el paso 5 al otro lado." },
      { step: 7, description: "Por el callejón de regreso: En Moap Sogui bloquea Dul Pal Montong An Makki, Are Jecho Makki. En Koap Sogui bloquea Are Sonal Dung Makki y Chumok con la palma hacia arriba (la mano y el brazo forman un ángulo de 90°), mano derecha. Repite luego con la mano izquierda. Avanza en Koap Sogui con pierna derecha por delante a la vez que agarra y trae al enemigo. Patea Wen Iop Chagui. Cae y da un giro completo para bloquear Montong Son Nal Bakkat Makki en Andari Sogui (pierna derecha mano izquierda), cae atrás en Agun Son Chirigui (pierna izquierda adelante). (Grito)." },
      { step: 8, description: "Gira al lado derecho por el frente moviendo el pie izquierdo en Ap Sogui a la vez que realiza Montong An Son Nal Makki y Bakkat Son Nal Chigui con la misma mano, avanza pierna derecha adelante y golpea en Agun Son." },
      { step: 9, description: "Gira por delante, realiza el paso 8 al otro lado." },
      { step: 10, description: "Recoge la pierna izquierda para terminar en Chumbi." }
    ]
  },
  {
    name: "Joong Do I Dan",
    type: "JoongDo",
    steps: [
      { step: 1, description: "Chumbi, Inicio de Joong-Do." },
      { step: 2, description: "Gira a la izquierda en Bom Sogui con ambos puños a la cintura, desplaza el pie izquierdo en Dip Kubi, bloquea Okkoru Olgul Makki (puño derecho arriba), abre y gira las manos, golpea Bakkat Son Nal con la mano izquierda, punza la ingle con Pyon-Son-kup, bloquea Batang Makko, gira por la espalda y avanza en Ap Kubi, Montong Bakkat Son Nal Makki, Montong Chumok." },
      { step: 3, description: "Realiza el paso 2 al otro lado." },
      { step: 4, description: "Por el callejón recoge el pie derecho, golpea codazo en Bom Sogui y otro codazo en Moap Sogui, desplaza el pie izquierdo al frente en Ap Kubi y Yevipon Mok Chigui con Agun Son, patea Ap Chagui y Tio Tora An Dari Chagui pateando la palma de la mano izquierda, cae arrodillado (pie derecho adelante con la planta apollada) golpea Neryop Batang Son y Dung Chumok con la mano derecha. (Grito)" },
      { step: 5, description: "Gira por la espalda para quedar en Ap Kubi, con el pie izquierdo adelante a la vez que bloquea Montong Son Nal Bakkat Makki, Montong Chumok Chirigui, Ap Chago, Dul Uon Montong Chumok Chirigui." },
      { step: 6, description: "Girando por la espalda realiza el paso 5 al otro lado." },
      { step: 7, description: "Por el callejón de regreso: Recoge el pie izquierdo para quedar en Bom Sogui, pega codazo, levanta la pierna derecha en Andari Sogui y codazo atrás con la mano derecha, patea Orum Iop Chagui, cae atrás en Dip Kubi a la vez que bloquea Montong Koduro Son Nal Makki, avanza con el pie derecho en Ap Kubi a la vez que pega Orum Pal Mok, (o Dung Chumok, o Sonal Dung, o Son Mok) sobre la palma izquierda y girando sobre el pie derecho cae de nuevo en Ap Kubi con pie derecho adelante a la vez que pega An Son Nal mano derecha y Bakkat Son Nal con la izquierda. Avanza en Ap Kubi y Chumok Chirigui Mano derecha. (Grito)." },
      { step: 8, description: "Hace círculo con el brazo izquierdo de abajo a arriba a la vez que gira el cuerpo por el lado izquierdo para quedar en posición Ap Kubi golpeando Neryop Son Nal con la mano derecha. Sin mover los pies bloquea Olgul Son Nal Makki mano derecha y Olgul Batang Makki con la mano izquierda, golpea An Son Nal Chigui Bakkat Son Nal Chigui (mano izquierda). Avanza en Ohja Sogui Kun Gam Iop Chumok golpea mano derecha. Avanza en Koap Sogui llevando el pie por detrás a la vez que golpea Bakkat Son Nal, despacio, respirando y con el brazo extendido, gira para pasar de Koap Sogui a Ap Kubi hace Montong Sonal Makki, Montong Chumok Chirigui." },
      { step: 9, description: "Realiza el paso 8 al otro lado." },
      { step: 10, description: "Recoge la pierna izquierda para terminar. Chumbi." }
    ]    
  },
  {
    name: "Joong Do Sam Dan",
    type: "JoongDo",
    steps: [
      { step: 1, description: "Chumbi. Inicio de la forma Joong-Do." },
      {
        step: 2,
        description: "Avanza con la pierna izquierda en Ap Kubi. Bloquea con Okkoru Son Nal Makki. Agarra y recoge en Moap Sogui mientras ejecuta talonazo hacia atrás con la pierna derecha y Dul Uon Dip Son Karak Chigui de forma simultánea. Eleva ambas manos juntas hasta extenderlas a la altura del pecho y el rostro mientras inhala. Luego, abre los brazos hacia los lados y exhala. Desplaza al lado izquierdo en Chuchum Sogui con las manos juntas a la altura del pecho. Cambia a Dip Kubi y bloquea con Montong Bakkat Makki. Patea con la pierna trasera: Montong An Dari Chagui. Sigue el flujo circular, cae en Ap Kubi y realiza Montong Bakkat Son Nal Makki seguido de Montong Chumok Chirigui. Termina en Chuchum Sogui con las manos juntas al pecho."
      },
      {
        step: 3,
        description: "Repite el paso 2 al lado derecho."
      },
      {
        step: 4,
        description: "Gira el Chumok extendido hacia el callejón. Avanza en Ap Kubi en diagonal con los brazos extendidos en diagonal, palmas hacia abajo (brazo izquierdo arriba, derecho abajo). Con la mano derecha bloquea Pal Makki y ejecuta Montong Chumok Chirigui. Patea con la pierna trasera: Ap Chagui. Golpea nuevamente Montong Chumok Chirigui en Ap Kubi. Pasa a Koap Sogui y bloquea con Montong Pal Makki. Repite esta secuencia dos veces más. Ejecuta una media luna con una mano empuñada. Gira y cae en Koap Sogui, bloquea con Neryo Batang Makki. Realiza An Dari Chanoki, seguido de Montong Bakkat Makki. Cae en Chuchum Sogui y golpea con Batang Son Chigui. (Grito)."
      },
      {
        step: 5,
        description: "Gira a la derecha en Ap Sogui y bloquea con Olgul Son Nal Makki. Retrocede, se arrodilla y golpea el suelo con Batang Son. Se levanta avanzando en Ap Kubi y ejecuta Son Mok seguido de Agun Son Chigui."
      },
      {
        step: 6,
        description: "Gira por el frente y repite el paso 5 al lado contrario."
      },
      {
        step: 7,
        description: "Desde adelante recoge hacia Moap Sogui y bloquea con Olgul Makki. Gira por la espalda, avanza en Ap Kubi, ejecuta Orum An Son Nal Chigui, luego Wen Son Nal Are Makki y Montong Chumok. Patea con la pierna trasera: Ap Chagui. Sin apoyar la pierna de la patada, realiza un rollo lateral. Finaliza arrodillado y golpea con Batang Son Dung Chumok Chirigui. (Grito)."
      },
      {
        step: 8,
        description: "Se levanta y gira por la espalda en Ap Kubi. Realiza movimiento por encima de la cabeza para cargar Batang Makki, seguido de Montong Chumok. Con la pierna trasera realiza Ap Chagui, Tora Iop Chagui. Cae en Ap Kubi y ejecuta Montong Bakkat Son Nal Makki y Montong Chumok Chirigui."
      },
      {
        step: 9,
        description: "Gira por el frente y repite el paso 8 al lado contrario."
      },
      {
        step: 10,
        description: "Recoge la pierna izquierda para regresar a la posición inicial. Chumbi."
      }
    ],
  },
  {
    name: "Joong Do Sa Dan",
    type: "JoongDo",
    steps: [
      { step: 1, description: "Chumbi, inicio de Joong-Do." },
      { step: 2, description: "En Andari Sogui levantando la pierna izquierda, golpea Iop Dul Me Chumok Chigui, sin descargar la pierna gira al lado izquierdo y bloquea Olgul Makki. Cae en Chuchum Sogui y sin bajar la mano que bloquea, golpea Iop Chumok, abre la pierna al lado para quedar en Ap Kubi y golpear Montong Chumok Cirigui. Desplaza a un lado pero dejando la misma pierna adelante a la vez que golpea Me Chumok Oligui y con la otra mano en Agun Son en Ap Kubi." },
      { step: 3, description: "Recoge y levanta la pierna derecha. realiza el paso 2 al otro lado." },
      { step: 4, description: "Por el Callejón: Gira hacia el callejón y recoge la pierna derecha, la levanta en Andari Sogui a la vez que golpea Son Mok Oligui y Neryop Batang Son Makki simultáneo (golpea el dorso de la mano derecha con la palma de la izquierda). Gira la rodilla levantada (derecha) y sin dejarla caer golpea Batang Son con la mano derecha con los dedos hacia abajo. Se deja caer atrás en Dip Kubi Sogui, a la vez que golpea Olgul Dung Chumok (mano izquierda). Abre la mano que golpea Dung Chumok y hace Orum Andari Chagui, Tio Orum Andari sogui, hace un giro en el sentido del flujo, cae en Ap Kubi izquierdo adelante y golpea Orum Me Chumok Chirigui mientras el brazo izquierdo acompaña sobre el codo. (Grito). Avanza en Ap Kubi y golpea Dul Uon Batang Son Chirigui." },
      { step: 5, description: "Desplaza la pierna de atrás (izquierda) al lado izquierdo en Dip Kubi a la vez que de forma simultánea golpea Agun Son arriba y abajo (Pulgares al mismo lado) desplaza la pierna delantera al lado para quedar en Ap Kubi, extiende los brazos, al frente y arriba el izquierdo, atrás y abajo el derecho (palmas abajo) lento y respirando hace Kawi Makki derecha arriba. Avanza en Koap Sogui (derecha por delante) Patea Wen Iop Chagui. Cae en Ap Kubi hacia la espalda de donde patea, golpea Are Batang Son Chigui (dedos hacia abajo), Retrocede a Ap Sogui mientras mientras hace Are Son Nal Makki, Avanza en Ap Sogui con Neryop Batang Makki. repite el movimiento por el otro lado." },
      { step: 6, description: "Realiza el paso 5 al otro lado mas un tercer paso en Ap Sogui con Neryop Batang Makki." },
      { step: 7, description: "Por el callejón de regreso: Recoge el pie que da el ultimo paso, eleva las manos juntas alineadas con el pecho y la cara y respira llevando los brazos a los lados (despacio). Lleva las manos a la cintura como doble pedazo atrás, avanza pierna derecha a la vez que hace Montong Jecho Makki." },
      { step: 8, description: "Gira por la espalda a Dip Kubi y Montong Pal Makki. Avanza en Chuchum Sogui a la vez que golpea Iop Dul Uon Me Chumok Chigui, desplaza la pierna delantera al lado para quedar en Ap Kubi y golpear Agun Son." },
      { step: 9, description: "Realiza el paso 8 por el otro lado." },
      { step: 10, description: "De nuevo al callejón de regreso: Recoge la pierna izquierda para retroceder en Dip Kubi y Montong Koduro Son Nal Makki, avanza en Bon Sogui (izquierdo adelante) para golpear atrás y de forma simultánea Son Nal Dung. Avanza en Ap Kubi (izquierdo adelante) y hace Are Pion Son Kup Chirigui, con otro brazo sobre el codo. Eleva la pierna derecha mientras después de hacer una finta por detrás de la cabeza bloquea Orum Are Son Nal Makki con la otra mano acompañando en el codo. Baja la pierna gira al frente del comienzo de la figura y avanza la pierna izquierda para caer arrodillado, a la vez que hace Orum An Son Nal Chirigui. Roza la palma de la mano derecha con el filo de la mano izquierda como si rompiera algo que se agarra. Se levanta en Andari Sogui (pierna izquierda arriba) y hace Are wesanteul makki. (Grito). Se para firme. Chumbi." }
    ]
  },
  {
    name: "Joong Do O' Dan",
    type: "JoongDo",
    steps: [
      { step: 1, description: "Chumbi, inicio de Joong-Do." },
      { step: 2, description: "Se gira al lado izquierdo con Are Makki, Montong Chumok Chigui en Ap Kubi. Se recoge el pie izquierdo, en ‘L’ se golpea en Neryop Me Chumok, desplaza el pie derecho detrás del izquierdo en Koap Sogui, para caer en Ap Chuchum Sogui y Are Wesanteul Makki. Gira de nuevo a Ap Kubi, Montong Son Nal Makki, golpea la palma de la mano que bloquea con Son Nal Dung, esa misma mano hace un giro para pegar Olgul An Son Nal Chigui. Bakkat Son Nal Chigui y Montong Chumok Chirigui." },
      { step: 3, description: "Recoge la pierna izquierda y retrocede en Koap Sogui con la pierna izquierda atrás. Gira y realiza el paso 2 al otro lado." },
      { step: 4, description: "Desde Koap Sogui con la pierna atrás y habiendo pegado codazo izquierdo extiende el brazo derecho hacia atrás, luego, en el mismo eje retrocede en Koap Sogui con la izquierda atrás, bloquea Montong Son Nal Bakkat Makki, repite el movimiento por el otro lado, repite el movimiento del pie pero golpea Iop Chumok." },
      { step: 5, description: "A la diagonal bloquea Montong Jecho Makki, guardia vertical, patea Ap Chagui, cae adelante en Ap Kubi, bloquea Oligui Batang Makki y Chumok Oligui." },
      { step: 6, description: "Realiza el paso 5 al otro lado." },
      { step: 7, description: "Al callejón: En Ap Sogui Montong Batang Makki, extiende la mano que bloquea, a la vez que la mano libre golpea Son Nal Dung en la mano que bloquea, gira 360° cae en Ap Kubi, hace Orum An Son Nal Chigi, Wen Bakkat Son Nal Chigui, Chumok Chigui. Se pone en guardia, empezando con la pierna de atrás hace Ap Chagui, Ap Chago, Tio Tora Ap Chagi, Tio Tora An Dari. Cae arrodillado y de lado, para golpear Orum Neryop Chumok. Grito. Wen Olgul Son Nal Makki y Orum Oligui Batang Makki, golpea Wen An Son Nal Chigi, Orum Bakat Son Nal Chigui, Wen Chumok." },
      { step: 8, description: "Gira por la espalda y se levanta hacia la derecha en Ap Kubi, Olgul Son Nal Makki Montong Chumok Chirigui. Gira por la espalda en Ap Sogui bloquea Wen Olgul Son Nal Makki, Retrocede para pegar al suelo con la pierna izquierda extendida y la derecha flexionada. Se levanta y avanza en Ohja Sogui Kun Gam Iop Chumok. Desplaza el pie trasero por detrás para quedar en Koap Sogui a la vez que hace Orum Bakat Son Nal Chigui, sigue el sentido del giro para terminar el Ap Kubi, Wen Olgul Son Nal Makki Orum Chumok." },
      { step: 9, description: "Realiza el movimiento 8 por el otro lado. agregando un giro más desde el Koap Sogui, Bloquea Batang Makki codo extendido, dedos abajo derecho, izquierdo, Iop Chumok Derecho, Izquierdo, realiza Montong Bakat Makki en tres tiempos, con Iop Chumok con la otra mano (repite el movimiento hasta completar 4 golpes y termina bloqueando)." },
      { step: 10, description: "Gira al lado en Ap Kubi, extiende los brazos como para cargar Kawi Makki, Bloquea solo con la mano de abajo, y la otra golpea Chumok, guardia horizontal, con la pierna de atrás patea Are, y Montong Iop Chagui, cae en Ap Kubi, hace Bakat Son Nal Chigui, Montong Chumok." },
      { step: 11, description: "Realiza el paso 10 por el otro lado." },
      { step: 12, description: "Al callejón en Ap Kubi, cargar para Kawi Makki, pero solo bloquea la de abajo, con esa misma mano Montong Chumok Chirigui, guardia vertical, patea Ap Chagui, hace media luna en una mano empuñada, cae en Ap Sogui hace un grito con las manos arriba de la cabeza como moviéndolas de atrás adelante, hace rollo lateral y Anya Iop Chagui. Grito. Se levanta y retrocede en Dip Kubi Montong Koduro Son Nal Makki. Recoge la pierna de atrás en Moap Sogui. Chumbi." }
    ]    
  },
  {
    name: "Won Il Dan",
    type: "Won",
    steps: [
      { step: 1, description: "Chumbe. Saludo de Won." },
      { step: 2, description: "Al lado izquierdo Uen Ap Kubi, Uen Montong Nullo Bakkat SonNal Makki, Bande Montong Chumok Chirigi, realiza un círculo hacia afuera con ambas manos abiertas a la vez que se ejecuta Orum Mureup Chagi, cae Orum Ap Kubi Uen Agum-Son Chigi." },
      { step: 3, description: "Repite el paso anterior al otro lado." },
      { step: 4, description: "Recoge la pierna izquierda, con las manos empuñadas en la cintura, hacia el callejón del medio abre en Uen Ap Kubi Are Gecho SonNal Makki, Olgul Gecho Pal Makki, hace Uen Koap Sogi mientras con la mano derecha hace agarre de agila, hal con la mano que tiene extendida (lleva a la cintura) a la vez que golpea Orum An-Dari Chanoki, cae en Orum Ap Kubi, Bande Montong Chumok Chirigi. (Repite este movimiento 2 veces más cambiando de lado) Terminando en Montong Chumok Chirigi (Grito)." },
      { step: 5, description: "Gira por detrás a quedar en Handari KunGam Are Pal Makki, ejecuta Bakuoro Dung Pal-Kub Mientras va cayendo y Dung Pal-Kub al otro lado al caer en Uen ChuChum Sogi, Cambia la posición a Uen Ap Kubi, Orum Agum-Son, recoge la pierna izquierda y levanta la derecha en Orum Handari Sogi, y repite los mismos movimientos al otro lado." },
      { step: 6, description: "Recoge la pierna derecha en Moap Sogi, abre al frente en Uen Ap Kubi, Are Okoru Pal Makki, lleva los brazos a la cintura, Montong Okoru Pal Makki, desenvuelve y gejectura Uen Bakkat Jecho SonNal Chigi con la mano izquierda, gira la mano coo si sujetara una cabeza, ejecuta Orum AnDari, Tyo Tora AnDari ambas pateando la palma izquierda, Uen Hwea Jon Chagi, sin apoyar el pie en el suelo, hace rollo lateral por el lado izquierdo, cae arrodillado (pie derecho adelante con la planta apollada) y ejecuta Uen Neryop Batang-Son y Dung Chumok con la misma mano. (Grito)." },
      { step: 7, description: "Se pone de pie girando por detrás a quedar en Uen Ap Kubi Dul Batang-Son Chigi a las costillas falsas, avanza (dejando la palma izquierda extendida) en Orum Ap Kubi, Orum Olgul Pal-Kub a la mano extendida, gira por detrás y repite el proceso por el otro lado." },
      { step: 8, description: "Recoge el pie izquierdo, y repite el paso 1 para terminar, Chumbe." }
    ]    
  },
  {
    name: "Won I Dan",
    type: "Won",
    steps: [
      { step: 1, description: "Chumbe. Saludo de Won." },
      { step: 2, description: "Inicia al lado izquierdo en Uen Ap Dip Kubi KunGam Yop Chumok, cambia a Uen Ap Kubi Montong Kawi Batang Makki. Dul Chapki, Orum Yop Chagi Con Orum Yop Chumok, Tora Uen Yop Chagi, Uen Yop Chumok, cae en Uen Ap Dip Kubi Are Gecho Pal Makki, cambia a Uen Ap Kubi Orum Agum-Son." },
      { step: 3, description: "Recoge el pie izquierdo y abre en Orum Ap Dip Kubi KunGam Yop Chumok, repitiendo el paso anterior por este lado." },
      { step: 4, description: "Recoge el pie derecho, en Moap Sogi, abre al frente, en Uen Ap Kubi Olgul Gecho Sona Makki, Are Gecho Pal Makki, avanza en Orum Ap Dip Kubi con Orum Bakkat Pal Makki acompañado con la otra mano cerrada al lado del codo, bloquea Are Nullo Bakkat SonNal Makki, ejecuta Uen Chokto Dolly-gi, Orum Hwea Jon Chagi. (Grito)." },
      { step: 5, description: "Barrido por la espalda con la pierna derecha, quedando o cayendo hacia el lado izquierdo del tercer callejón en Orum Ap Kubi Dul Montong Btang-Son a las costillas, ejecuta Uen Ap Chaoligi, cayendo en Uen Ap Kubi con la mano izquierda al frente con agarre de águila, avanza Orum Ap Kubi con Orum Agum-Son. Hacia atrás por el lado izquierdo Uen Ap Kubi Y repite el proceso por este lado." },
      { step: 6, description: "Recoge y junta las piernas en Moap Sogi, y pasa al callejón del medio en Uen Ap Dip Kubi Are Kororu SonNal Makki, Montong Kororu SonNal Makki, avanza en Orum koap Sogui Montong Bakkat Dung SonNal Makki (acompañada de la otra mano empuñada al lado del codo), gira mientras desenvuelve a caer en Uen Ap Kubi Uen Montong Jecho Bakkat SonNal Makki, posteriormente hace un rollo lateral por el lado izquierdo cae arrodillado (pie derecho adelante con la planta apoyada) y ejecuta Uen Neryop Batang-Son y Neryop Dung Chumok con la misma mano. (Grito)." },
      { step: 7, description: "Se gira y se levanta por detrás quedando en Uen Handary Sogi KunGam Yop Chumok, mientras cae hace un circulo hacia afuera con la mano derecha por encima de la cabeza, cae apoya la pierna izquierda en Kwang sogi al ancho del Ap Kubi, a la vez que ejecuta Uen Me Chumok Oligi y Orum Olgul Batang-Son Chigi, recoge la pierna izquierda y hace Orum Handary Sogi, y repite el proceso por el lado derecho." },
      { step: 8, description: "Recoge la pierna derecha, y repite el paso 1 para terminar, Chumbe." }
    ]    
  },
  {
    name: "Won Sam Dan",
    type: "Won",
    steps: [
      { step: 1, description: "Chombe. Saludo de Won." },
      { step: 2, description: "Al lado izquierdo en Uen Dip Kubi Montong Koruro SonNal Makki, recoge la guardia y patea con la pierna de atrás Ap Chagi Tora Yop Chagi cayendo adelante a un paso, gira dando 2 pasos cayendo en Orum Dip Kubi Montong Koruro SonNal Makki, abre en Orum Ap Kubi, Orum Montong Bakkat SonNal Makki y Uen Dung An SonNal Chigi, continuando el giro da un paso y cae en Orum Ap Kubi Orum Opoc Bakkat sonNal Chigi, Uen Montong Chumok Chirigi." },
      { step: 3, description: "Repite el paso anterior por el lado derecho con la pierna derecha." },
      { step: 4, description: "Gira por la espalda cae en Ap Kubi Orum Montong Nulo Bakkat Makki Uen Montong Chumok Chirigi, recoge la guardia patea Uen Ap Chagi, doble Ap Chagi iniciando con derecha, cayendo con la pierna izquierda adelante ejecuta Orum Hwea Jon Chagi, cae continuando el giro con un barrido por detrás, hacia el frente hace un rollo cae arrodillado (pie derecho adelante con la planta apoyada) golpea Uen Neryop Batang Son y Dung Chumok (Grito)." },
      { step: 5, description: "Se pone de pie por detrás en Uen Ap Kubi Dul Montong Battang Son a las costillas, avanza en Orum Ap Kubi Montong Kawi sonNal Makki, cierra las manos y ejecuta Uen Chokto Doligi, Hwea Jon Chagi continua el giro dando dos pasos girando hacia atrás cayendo en Orum Dip Kubi Montong Koruro SonNal Makki." },
      { step: 6, description: "Giro por la espalda pasando la pierna derecha a quedar en Orum Ap Kui al otro lado y realiza el paso anterior por este lado. Al final después de la Hwea Jon Chagi cae hacia atrás da dos pasos terminando en Uen Dip Kubi Montog Koruro SonNal Makki." },
      { step: 7, description: "Cambia a Uen Ap Kubi Orum Chumok Chirigi, ejecuta Orum Ap Chagi, doble Ap Chagi iniciando con izquierda cayendo con la pierna derecha adelante en Ap Sogui con las manos hace un giro por encima arriba de la cabeza como moviéndolas de atrás adelante, hace rollo lateral y Anja Yop Chagi tora Anja Yop Chagi, pone el pie izquierdo apoyado cerca a la rodilla izquierda y se pone de pie, gira sobre el pie izquierdo y cae con la pierna derecha atrás en Dip Kubi Monong Koruro SonNal Makki (Grito)." },
      { step: 8, description: "Recoge la pierna izquierda hacia atrás para terminar en Chumbi." }
    ]    
  },  
  {
    name: "Won Sa Dan",
    type: "Won",
    steps: [
      { step: 1, description: "Chumbe, Saludo de Won." },
      { step: 2, description: "Al lado izquierdo mueve el pie derecho pasándolo por detrás del izquierdo para quedar en Koap Sogi SonNal KunGam Yop Chumok, pasa el pie izquierdo hacia el lado izquierdo y queda en Koap Sogi Bakuoro Montong Bakkat Pal Makki mirando hacia la derecha, luego pasa la pierna derecha por el frente de la izquierda a caer al lado izquierdo en Orum Ap Kubi Orum Son Mok Oligi Are Batang Makki, Con las manos empuñadas a los lados del cinturón gira dando tres pasos por el lado izquierdo terminando en Orum Handari Sogi Uen Bakuoro Montong An Pal Makki con la mano derecha empuñada encima de la rodilla levantada." },
      { step: 3, description: "Cae el pie derecho y ejecuta el paso anterior por el lado derecho." },
      { step: 4, description: "Desde el Uen Handari sogi, apoya la pierna izquierda y pasa la derecha hacia atrás al callejón del medio a caer en Ap Kubi Orum Montong Nulo Bakkat Makki, pasa a Koap Sogi con agarre de águila con la mano izquierda al medio, Uen Dollyo Chagi Continua el giro y pasa a Orum Ap Kubi Dual Batang Son Chigi a las costillas (Grito)." },
      { step: 5, description: "Ejecuta un barrido por el frente hacia la derecha con la pierna de atrás, continua el giro del barrido deteniéndose juntando las plantas para ponerse de pie por detrás hacia la derecha en Orum Ap Kubi Orum Montong Batang Son Chigi, Uen Dip Son Mok Chigi. Con la mano del Batang Son gira y agarra hacia arriba mientras la de atrás simula levantar a alguien pasando por el frente la pierna izquierda y terminando en Orum Dip Chum Chum Sogi con la palma izquierda apoyada en el suelo." },
      { step: 6, description: "Recoge la pierna derecha y junta con la izquierda, abre la izquierda en Ap Kubi hacia el lado izquierdo y repite el proceso del paso anterior por este lado." },
      { step: 7, description: "Con la pierna izquierda ejecuta un barrido por el frente da un paso con un giro hacia atrás y termina en Uen Handari Sogi Uen Are Batang son An Makki (Grito)." },
      { step: 8, description: "Apoya la pierna izquierda al frente y ejecuta Jenyari por la izquierda en el mismo lugar cayendo con la pierna izquierda atrás y arrodillado, ejecuta Uen Dollyo Chagi, Tora Orum Anya Hwea Jon Chagi termina la patada al frente continuando con un rollo lateral cayendo arrodillado (pie derecho adelante con la planta apoyada) golpea Uen Neryop Batang Son y Dung Chumok (Grito)." },
      { step: 9, description: "Se levanta por detrás en Uen Ap Kubi DuL Montong Bakkat SonNal Dung Chigi, junta las palmas arriba ejecuta un rodillazo con la pierna de atrás y cae con esa misma pierna al frente en Dip Kubi Olkoro Are Makki con la mano izquierda por encima, recoge la pierna izquierda para hacer Uen Handari Sogi KunGam Yop Chumok al lado izquierdo." },
      { step: 10, description: "Apoya la pierna izquierda, gira por detrás cayendo en Orum Ap Kubi y ejecuta el paso anterior a este lado." },
      { step: 11, description: "Desde el Orum Handari Sogi KunGam yop Chumok baja y apoya la pierna derecha y recoge la pierna izquierda para terminar en Chumbe." }
    ]    
  },  
  {
    name: "Won O' Dan",
    type: "Won",
    steps: [
      { step: 1, description: "Cheombe, saludo de won." },
      { step: 2, description: "Al frente, Uen Ap Dip Kubi SonNal KunGam Yop Chumok, cambia a Uen Ap Kubi, Bande Agum Son Chigi, gira la mano como si sujetara una cabeza hacia adentro, Pyojeok BakkataDari Chagui, cae en Chu Chum Sogi Orum Bakkat Jecho SonNal Makki, ejecuta Jinyari por el lado derecho, cae da dos giros retrocediendo quedando en Orum Ap Dip Kubi SonNal KunGam Yop Chumok." },
      { step: 3, description: "Repite el paso 2 por este lado, terminando después del giro de la Jinyari en Orum Ap Dip Kubi Montong Koruro SonNal Makki, realiza Uen Montong Bituro Chagi, Uen BalDung Chago, ejecuta un barrido por la espalda con la pierna derecha deteniéndose juntando los pies para levantarse por detrás hacia la derecha." },
      { step: 4, description: "En Orum Ap Kubi Orum Montong Batang Son Chigi, Uen Dip Batang Makki, avanza Uen Beom Sogi con Orum Jevipon Batang Son Chigi, Orum AnDari Makki Bakuoro Orum An Pal Makki, cae en Orum Ap Chu Chum Sogi, Orum Me Chumok Oligi, ejecuta Orum Tio Tora BakkatDari Chagi, cae y continuando el giro realiza un barrido por la espalda con la misma pierna que ejecuto la patada anterior, se pone de pie Batang Makki." },
      { step: 5, description: "Realiza el paso 4 por el otro lado." },
      { step: 6, description: "Al finalizar el barrido por izquierda, continuando el giro hacia atrás se levanta y termina girando hasta quedar en Orum Koap Sogi Orum Wesanteul SonNal Makki, Montong Oppok An SonNal Chigi, desenrosca y pasa a Orum Ap Dip Kubi KunGam Yop Chumok, ejecuta Tio Ap Chagi (el pie izquierdo debe caer donde estaba el derecho)." },
      { step: 7, description: "Al caer de la patada del paso anterior, ejecuta Ap Dip Kubi Wesanteul SonNal Makki, cambia la posición a Kwang Sogi al ancho del Ap Kubi, hace un circulo hacia afuera con la mano izquierda por encima de la cabeza a la vez que ejecuta Orum Me Chumok Oligi continuando el movimiento termina en Orum Koap Sogi con agarre de águila con la mano derecha hacia afuera, ejecuta Uen Dollyo Chagi, y Orum Hwea Jon Chagi, sin bajar la pierna, termina mirando hacia el frente en Orum HanDary Sogi con ambos brazos extendidos a los lados y con las palmas hacia abajo (brazo izquierdo arriba y brazo derecho abajo) con la mirada en el brazo derecho, apoya el pie derecho y pasa por la espalda hacia el otro lado." },
      { step: 8, description: "Repite el paso 7 por el otro lado." },
      { step: 9, description: "Con la mano que esta hacia abajo gira y agarra hacia arriba mientras la mano de atrás simula levantar a alguien pasando por el frente la pierna derecha y terminando con la pierna derecha extendida y la izquierda flexionada con la palma derecha golpeando el suelo." },
      { step: 10, description: "Se pone de pie y recoge la pierna izquierda para terminar con el movimiento del paso 1 y en Moap Sogi. Chumbi." }
    ]    
  },
  {
    name: "Ki Hap",
    type: "KiHap",
    steps: [
      { step: 1, description: "Saludo, inicio de Joong-Do." },
      { step: 2, description: "Desde Are Kyopson Chumbi Sogui en Dwichuk Moap Sogui: Inhala elevando los talones y exhala bajando los talones. Eleva los brazos haciendo un circulo largo y amplio mientras eleva el pie izquierdo en Andari Sogui, para caer en Chuchum Sogui a la vez que termina el circulo con bloqueo Montong Jecho Makki." },
      { step: 3, description: "Avanza el pie izquierdo al frente para quedar en Dip Kubi, bloqueando Wesanteul Makki, con el pie de atrás patea Anya Dolyo Chagui. (Grito). Y regresa a Dip Kubi y Okkoru Olgul Makki (brazo izquierdo por debajo)." },
      { step: 4, description: "Avanza pie derecho a Ap Kubi, con Batang Son Montong Nullo Bakat Makki, y Sewo Pion Son Kup, Wiro Pegui. Gira por la espalda avanzando en Dip Kubi y Dung Chumok Chigui. Orum Anya Fenio Chagui. Grito. Completando el giro al frente al lado derecho a la vez que cae en Chuchum Sogui y Montong An Son Nal Makki." },
      { step: 5, description: "Recoge el pie derecho en Andari Sogui y tomar impulso para Yenyari Fenio Chagui, Grito. Cae en Dip Kubi pie izquierdo adelante y Khun Dolt Sogui. Avanza en Ap Kubi con Yevipon Tok Chigui (Batang Son)." },
      { step: 6, description: "Gira sobre el pie derecho por la espalda en Ap Kubi y Yevipon Mok Chigui (Son Nal). Desde esta posición, Ap Chagui, Ap Chago, Tio Ap Chagui. Grito. Y sin apoyar la última patada gira por la espalda sobre el pie de apoyo para caer en Ap Kubi, Montong Jecho Bakkat Makki. Avanza en Ap Kubi pie izquierdo adelante y golpea Dul Pal Batang Son Chigui a las costillas, avanza y hace movimiento de lanzamiento terminando con el pie derecho adelante." },
      { step: 7, description: "Recoge el pie derecho en Andari Sogui y ejecuta Yenyari Fenio Chagui, Grito. Terminando en Dip Kubi Son Nal Wesanteul Makki. Avanza en Ap Kubi con pie derecho adelante y Batang Son Chigui acompañado." },
      { step: 8, description: "Mueve el pie izquierdo en ‘’L’’ al lado izquierdo. Bloqueo Okkoru Are Makki, con la pierna de atrás y repitiendo pierna patea Orum Choki Chirigui Chagui, Anya Fenio Chagui. Grito. Cae de nuevo en el punto de partida de las patadas en Dip Kubi, Okkoru Olgul Makki, avanza en Ap Kubi (derecho adelante) y Montong Batang Son Chigui acompañado." },
      { step: 9, description: "Gira por la espalda en Dip Kubi, Son Nal Kun Gam Makki, desplaza la pierna al lado para quedar en Ap Kubi y Kawi Makki. Eleva la mano que está abajo. Patea Ap Chagui y Dul Uon Chumok Chigui. Empezando con mano igual a la pierna que patea." },
      { step: 10, description: "Gira por la espalda, realiza el paso 9 al otro lado." },
      { step: 11, description: "Mueve el pie izquierdo en ‘’L’’ para quedar en Ap Kubi, Okkoru Are Makki, Okkoru Olgul Makki, Batang Son Montong Nullo Bakkat Makki, avanza en Ap Kubi (pie derecho) y golpea Agun Son. (Grito)." },
      { step: 12, description: "Recoge el pie que queda atrás para quedar en Dwichuk Moap Sogui y Kyop Son Chumbi Sogui. Chumbi." }
    ]    
  },
];
