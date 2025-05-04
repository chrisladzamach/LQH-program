export interface GibeomStep {
  step: number;
  description: string;
}
  
export interface Gibeom {
  name: string;
  type: "Sajoe" | "GeumGang" | "TangJong" | "HakDary";
  steps: GibeomStep[];
}
  
export const gibeomsData: Gibeom[] = [
  {
    name: "Il Chase Sajoe Chuchum Sogui",
    type: "Sajoe",
    steps: [
      { step: 1, description: "ChumChum Sogi, Montong An SonNal Chirugui, Batang-Son Chirugui." }
    ]
  },
  {
    name: "I Chase Sajoe Chuchum Sogui",
    type: "Sajoe",
    steps: [
      { step: 1, description: "ChumChum Sogi, Montong An SonNal Chirugui, Agum-Son Chirugui." }
    ]
  },
  {
    name: "Sam Chase Sajoe Chuchum Sogui",
    type: "Sajoe",
    steps: [
      { step: 1, description: "ChumChum Sogi, Are SonNal Makko, Pyon-Son Kub Chirugui." }
    ]
  },
  {
    name: "Sa Chase Sajoe Ap Kubi Son Mok",
    type: "Sajoe",
    steps: [
        { step: 1, description: "Ap Kubi Are Son Mok, Pyojeok Bakkata Dari Chagui." },
        { step: 2, description: "Ap Kubi Pyojeok Pal Kup Chigui, Dung Chumok Gigui. (16 movimientos)." }
    ]
  },
  {
    name: "O' Chase Ap Kubi Me Chumok Oligui",
    type: "Sajoe",
    steps: [
      { step: 1, description: "Desplaza al lado, desde Mo Chuchum Sogui, Me Chumok Oligui, en el mismo puesto cambia a Ap Kubi." },
      { step: 2, description: "Montong Pan Chumok Chirigui." },
      { step: 3, description: "Chaba, Ap Chagui Neryo Batang Makki, Dip Kubi, Pyojok Neryo Me Chumok Bom Sogui Bende Olgul Makki. (24 movimientos)." },
    ]
  },
  {
    name: "Il Chase HakDary Chuchum Sogui",
    type: "HakDary",
    steps: [
      { step: 1, description: "Chuchum Sogui Montong Chumok Chirugui." },
      { step: 2, description: "Iop Andari Sogui, Wesanteul Makki, Ap Kubi, Baro Montong Chumok Chirugui, Pal Kup Chiruigui. Grito." },
    ]
  },
  {
    name: "Il Chase GeumGang Jeumeok",
    type: "GeumGang",
    steps: [
        { step: 1, description: "Ap Dwip Kubi GeumGang Iop Jeumeok Chirugui, Ap Kubi Bande Montong Jeumeok Chirugui" },
        { step: 2, description: "Ap Chagui (Grito). Dip Dip Kubi Sogui, Montong Son Nal Makki." }
    ]
  },
  {
    name: "I Chase GeumGang Jeumeok",
    type: "GeumGang",
    steps: [
        { step: 1, description: "Ap Dip Kubi, KunGam Iop Chumok Chirugui, An Son Nal Chigo, Bakkat Son Nal Chigui" },
        { step: 2, description: "Ap Kubi Bande Montong Chumok Chigui, Ap Chagui (Grito). Dip Dip Kubi Sogui, Montong Son Nal Koduro Makki." }
    ]
  },
  {
    name: "Sam Chase GeumGang Jeumeok",
    type: "GeumGang",
    steps: [
        { step: 1, description: "Ap Dip Kubi, Kun Gam Son Nal Makki, Are Son Nal Koduro Makki" },
        { step: 2, description: "Huryo Chagui, (Grito) Ap Ap Kubi Olgul Makki, Montong Chumok Chigui" },
        { step: 3, description: "Sin Avanzar Dip Kubi Montong Son Nal Koduro Makki." }
    ]
  },
  {
    name: "Sa Chase GeumGang Jeumeok",
    type: "GeumGang",
    steps: [
      { step: 1, description: "Ap Dip Kubi, Kun Gam Son Nal Makki, Are Son Nal Koduro Makki, " },
      { step: 2, description: "al frente patea Ap Chagi y regresa a Dip Kubi. Anya Huryo Chagui. (Grito)" },
      { step: 3, description: "Terminando el giro en Dip Kubi, Kun Gam Son Nal Makki. " },
      { step: 4, description: "con el pie de atrás Anya Dolyo Chagi y regresa a Dip Kubi Montong Koduro Son Nal Makki girando sobre el pie atrasado." }
    ]
  },
  {
    name: "Il Chase Ojub Tang Jong",
    type: "TangJong",
    steps: [
        { step: 1, description: "JeomBe. Inhala desde Moa Sogi, eleva los brazos en Kyop Son JeomBe Sogi, baja los brazos por los costados a la vez que exhala. Inhala de nuevo, separa la pierna izquierda para quedar en Chuchum Sogi, Montong Tang Jong Dul Batang Son, Montong Okkoro Makki, vuelve las manos a la cintura en DoJeumokeori Sogi y de nuevo, Montong Dul Batang Son Chigi." },
        { step: 2, description: "Al lado izquierdo las dos manos: la de abajo empuñada y la de arriba abierta con los dedos juntos, golpea Uen Montong Batang Son Chigi, recoge al otro lado, la mano izquierda queda por encima y abierta y la de abajo empuñada, golpea Orum Montong Batang Son Chigi." },
        { step: 3, description: "Hace Uen Bakkat SonNal Makki, con la derecha hace un giro y Deung Jeumok en la palma de la mano izquierda, y repite el movimiento por el lado derecho. (Repite 2 veces por cada lado)." },
        { step: 4, description: "Después del Deung Jeumok, desliza la mano derecha por el antebrazo izquierdo hasta llegar al codo, realiza un giro hacia afuera y golpea Uen Montong Deung Jeumok. Abre la mano hacia la derecha y golpea Pal Kub Chigi a la mano abierta, realiza un giro y golpea de nuevo Montong Deung Jeumok. (Repite este movimiento 2 veces por cada lado)." },
        { step: 5, description: "Hace una 'X' con los antebrazos y realiza Dul Yop Son Mok Chigi simultáneamente a cada lado, lentamente con la respiración. (Repite este movimiento 4 veces)." },
        { step: 6, description: "Sube el brazo izquierdo y baja el derecho, quedando en Uen Olgul Son Mok Chigi, Orum Are Batang Makki. Invierte con respiración lenta: sube derecha y baja izquierda con los mismos dos movimientos. (Repite este movimiento 4 veces sin contar los anteriores)." },
        { step: 7, description: "Recoge en Koap Sogi al lado derecho y realiza Uen Montong Bakkat SonNal Makki Tang Jong. Pasa a Chuchum Sogi, Orum Montong Jeumok Chigi. (Repite este movimiento 3 veces más cambiando de lado), terminando con Orum Montong Bakkat Makki Tang Jong." },
        { step: 8, description: "Pasa a Chuchum Sogi, golpea Orum Montong Pyon Son Gi a la vez que la palma izquierda cubre el codo derecho por encima. Repite lo mismo por el otro lado. (Repite este movimiento una vez más por cada lado)." },
        { step: 9, description: "Inhala desde Moa Sogi, eleva los brazos en Kyop Son Chumbi Sogi, baja los brazos por los costados a la vez que exhala. Inhala de nuevo, avanza un paso largo al frente y cae en Koap Sogi Dul Montong Pyon-Son Gi Chigi. (Grito)." },
        { step: 10, description: "Abre al lado izquierdo en Ap Kubi. Con la mano izquierda marca la zona genital al frente y ejecuta Are Ap Son-Mok Chigi a la mano abierta. Realiza un círculo hacia atrás con ambas manos abiertas a la vez que se ejecuta Orum Mureup Chagi. (Repite el mismo movimiento al lado derecho y una vez más por cada lado). Termina al lado derecho en Uen Handari Sogi con las manos por encima de la rodilla apuntando hacia afuera." },
        { step: 11, description: "Gira al frente, cae en ChuChum Sogi y realiza Orum Chumok Chirigui a la zona genital, Uen Montong Chumok Chirigui en la zona del ombligo, Montong Chumok Chirigui en la zona del plexo y Uen Olgul Chumok Chirigui a la cara." },
        { step: 12, description: "Recoge a Moap Sogi, respira como al principio. Chumbe." }
      ]
    },
    {
        name: "I Chase Ojub Tang Jong",
        type: "TangJong",
        steps: [
            { step: 1, description: "Chumbe. Inhala desde Moap Sogi, eleva los brazos en Kyopson Chumbi Sogi, baja los brazos por los costados a la vez que exhala. Inhala de nuevo, separa la pierna izquierda para quedar en Chuchum Sogi, Are Tang Jong, Olgul Tang Jong (arriba-abajo, abajo-arriba) cuatro veces." },
            { step: 2, description: "En Ap Kubi, Neryo Son Nal Chigi, Pyojeok Son Nal Neeryo Son Nal Chigi con la mano izquierda." },
            { step: 3, description: "En Ap Kubi, Kawi Batang Makki (empieza mano derecha arriba), An Taryo Chagi, cae atrás en Dip Kubi y Montong Son Nal Bakkat Makki (patea primero la pierna derecha). (4 movimientos)." },
            { step: 4, description: "Recoge la pierna izquierda y en Chuchum Sogi, Son Nal Are Jecho Makki, Iop Chagi (empieza izquierda), cae en Ap Chuchum Sogi y Son Nal Weasanteul Makki, recoge de nuevo a Chuchum Sogi, Son Nal Are Jecho Makki y repite por el otro lado. (4 movimientos)." },
            { step: 5, description: "4 Montong Batang Son Chigi (empieza con la mano izquierda)." },
            { step: 6, description: "Mon Dolyo Dip Kubi, Son Nal Are Koduro Makki (bloqueo primero con la mano izquierda). (4 movimientos)." },
            { step: 7, description: "Recoge la pierna izquierda a Dwichuk Moap Sogui, respira como al inicio en Kyopson Chumbi Sogui a la vez que bloquea con Montong Okkoro Makki. Realiza Chun Ban Nak Bop, y desde ahí hace un rollo lateral, golpea con Wen Batang Son Chigi seguido de Dung Chumok Chigi. Grito. (mano contraria al pie adelantado)." },
            { step: 8, description: "Desde la posición anterior, hace rollo lateral al lado izquierdo (pierna izquierda adelante) y golpea con Orum Batang Son Chigi seguido de Dung Chumok Chigi (mano contraria al pie adelantado). Sin levantarse, da media vuelta en la misma posición con las manos en Montong Koduro Son Nal Makki como guardia (mano acompañante empuñada). Repite el mismo movimiento por el otro lado. (4 movimientos)." },
            { step: 9, description: "Se levanta por la espalda y queda en Ap Kubi, a la vez que inhala elevando las manos a la altura del pecho con las palmas hacia arriba, luego exhala al frente estirando completamente los brazos en Dul Pal Batang Son Chigi. Después, realiza rápidamente Dul Pal An Son Nal Chigi, cargándolo desde atrás y con un leve zapateo. Recoge al otro lado. (4 movimientos)." },
            { step: 10, description: "Gira por la espalda un ¼ de vuelta en Ap Kubi, ejecuta Batang Son Montong Bakkat Nullo Makki, luego realiza Dul Uon Chumok Chigi y Agum-Son Chigi (golpes a abdomen, plexo y garganta). Avanza en Koap Sogui (pierna derecha por delante) con la mano acompañante cerrada. Grito. Se desenrosca el Koap Sogui para quedar en Chuchum Sogui con Are Tang Jong. Recoge a Moap Sogui, respira como al principio. Chumbe." }
          ]    
    },
]
