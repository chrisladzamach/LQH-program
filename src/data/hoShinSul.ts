export interface Technique {
  number: number;
  description: string;
}

export interface Subgroup {
  subgroup: string;
  techniques: Technique[];
}

export interface MainGroup {
  group: string;
  subgroups?: Subgroup[];
  techniques?: Technique[];
}

export interface GradeHoShinSul {
  grade: string;
  groups: MainGroup[];
}

export const hoShinSulData: GradeHoShinSul[] = [
  {
    grade: "Blanco",
    groups: [
      {
        group: "46 llaves básicas",
        subgroups: [
          {
            subgroup: "Contra agarre de muñeca",
            techniques: [
              {
                number: 1,
                description:
                  "Chuzón a los ojos con la palma hacia arriba, y puño con el nudillo medio a los metacarpos.",
              },
              {
                number: 2,
                description:
                  "Batang son al plexo y saliendo por el lado de la mano.",
              },
              {
                number: 3,
                description:
                  "Pan chumok al plexo y saliendo por el lado de la mano.",
              },
              {
                number: 4,
                description:
                  "Pie por dentro de las piernas del otro, chu chum sogui y codazo a las costillas.",
              },
              {
                number: 5,
                description: "Gira la mano hacia adentro y mantequilla.",
              },
              {
                number: 6,
                description:
                  "Chuzón hacia atrás en diagonal en ChumChum Sogi y devuelve con codazo.",
              },
              {
                number: 7,
                description:
                  "Expone la muñeca, batang son y con la mano liberada golpe al cuello con el filo de la mano.",
              },
              {
                number: 8,
                description: "Igual que la 7 pero gira con un codazo al plexo.",
              },
              {
                number: 9,
                description:
                  "Levanta el brazo y se mete en chu chum sogui y codazo.",
              },
              {
                number: 10,
                description:
                  "Igual que la 6 pero con un golpe a la cara con la mano abierta.",
              },
              {
                number: 11,
                description: "Con la pierna del mismo lado, chokto dologuí.",
              },
              {
                number: 12,
                description: "Con la pierna contraria, rodillazo.",
              },
              {
                number: 13,
                description:
                  "Con la pierna del mismo lado, bal dung a la axila.",
              },
              {
                number: 14,
                description:
                  "Agarra del cabello y golpea con un rodillazo a la cara.",
              },
              {
                number: 15,
                description: "Agarra por la nuca y rodillazo en el plexo.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    grade: "Amarillo",
    groups: [
      {
        group: "46 llaves básicas",
        subgroups: [
          {
            subgroup: "Contra agarre de muñeca",
            techniques: [
              {
                number: 16,
                description:
                  "Agarra la mano por los metacarpos, y la tuerce hacia afuera.",
              },
              {
                number: 17,
                description:
                  "Agarra la mano por la muñeca y la tuerce hacia adentro y hace presión en el codo extendido.",
              },
              {
                number: 18,
                description:
                  "Agarra la muñeca y gira por dentro hacia afuera ejecutando 16.",
              },
              {
                number: 19,
                description:
                  "Misma 5 pero atrayendo al plexo y asestando un codazo descendente en el codo.",
              },
              {
                number: 20,
                description:
                  "Hace presión en el musculo lateral del codo y gira por dentro, agarra del cinturón y el cabello y ejecuta chokto doligi en la parte anterior de la rodilla.",
              },
            ],
          },
          {
            subgroup: "Contra agarre de muñeca/manga de la casaca",
            techniques: [
              {
                number: 21,
                description:
                  "Agarra los metacarpos, torsión hacia adentro y pam chumok a la axila.",
              },
              {
                number: 22,
                description: "Péndulo a la par con batang son el plexo.",
              },
            ],
          },
          {
            subgroup: "Contra agarre de codo",
            techniques: [
              {
                number: 23,
                description:
                  "Sujeta los metacarpos para asegurar la mano, y ejecuta pion son por dentro y hacia abajo.",
              },
              {
                number: 24,
                description:
                  "Misma 23 pero continua el movimiento pasando por debajo del brazo y hace presión en el codo con el antebrazo.",
              },
            ],
          },
          {
            subgroup: "Contra agarre de hombro",
            techniques: [
              { number: 25, description: "Igual que 21." },
              { number: 26, description: "Igual que 17." },
            ],
          },
          {
            subgroup: "Contra agarre de nuca",
            techniques: [
              {
                number: 27,
                description:
                  "Con las dos manos rodeando el codo ejecuta presión hacia abajo. (partir el codo)",
              },
              { number: 28, description: "Tango." },
            ],
          },
        ],
      },
    ],
  },
  {
    grade: "Naranja",
    groups: [
      {
        group: "46 llaves básicas",
        subgroups: [
          {
            subgroup: "Contra agarre de muñeca",
            techniques: [
              { number: 29, description: "Saludo chino." },
              { number: 30, description: "Igual que 17." },
            ],
          },
          {
            subgroup: "Contra agarre elevando de solapas (centro pecho)",
            techniques: [
              { number: 31, description: "(subiendo) dedo" },
              {
                number: 32,
                description:
                  "Gira la cabeza hacia el lado de la mano que está agarrando, para desnucar.",
              },
            ],
          },
          {
            subgroup: "Contra agarre invertido de solapas (centro pecho)",
            techniques: [
              { number: 33, description: "(invertida) cocodrilo." },
              { number: 34, description: "Golpe con el antebrazo al codo." },
            ],
          },
          {
            subgroup: "Contra agarre de cinturón mano mirando hacia abajo",
            techniques: [
              { number: 35, description: "Pam chumok a los metacarpos." },
              { number: 36, description: "Aplauso al codo." },
            ],
          },
          {
            subgroup: "Contra agarre de cinturón mano mirando hacia arriba",
            techniques: [
              { number: 37, description: "Presión en dedo pulgar." },
              {
                number: 38,
                description:
                  "Asegura y presión hacia arriba agarrado de la casaca.",
              },
            ],
          },
          {
            subgroup: "Contra agarre de cinturón mano mirando hacia el lado",
            techniques: [
              {
                number: 39,
                description: "(de lado) asegura y ejecuta iop chagui.",
              },
              {
                number: 40,
                description:
                  "(de lado) asegura con el antebrazo por debajo, con el otro brazo lo baja y sube haciendo presión en el cuello con los dos brazos.",
              },
            ],
          },
          {
            subgroup: "Contra agarre de pecho (lado)",
            techniques: [
              { number: 41, description: "29" },
              {
                number: 42,
                description:
                  "Codazo al codo, devuelve con otro codazo por dentro y ejecuta un último codazo a la cara.",
              },
            ],
          },
          {
            subgroup: "Contra agarre de cabello/cabeza",
            techniques: [
              { number: 43, description: "Toalla." },
              { number: 44, description: "Saludo chino." },
              { number: 45, description: "Cocodrilo." },
              {
                number: 46,
                description: "Bloqueo hacia abajo y puño al mentón.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    grade: "Verde",
    groups: [
      {
        group: "Puño contra puño",
        techniques: [
          {
            number: 1,
            description: "Montong bakkat makki y batang son al plexo.",
          },
          {
            number: 2,
            description: "Montong bakkat makki y pyon son al plexo.",
          },
          {
            number: 3,
            description: "Montong bakkat makki y agum son al cuello",
          },
          {
            number: 4,
            description:
              "Montong bakkat makki y golpe con el filo de la mano al cuello.",
          },
          { number: 5, description: "Montong ant makki y codazo de fuera." },
          {
            number: 6,
            description: "Montong ant makki y codazo desde afuera.",
          },
          {
            number: 7,
            description:
              "Montong ant makki y golpe con el filo de la mano al cuello.",
          },
          { number: 8, description: "Giro con bloqueo y 8 (de las básicas)." },
          {
            number: 9,
            description:
              "Olgoro olgul makki y golpe al plexo con los nudillos.",
          },
          { number: 10, description: "Esquiva y puño a las costillas." },
        ],
      },
      {
        group: "Contra agarres por la espalda",
        subgroups: [
          {
            subgroup: "Contra agarre de la nuca",
            techniques: [
              {
                number: 1,
                description:
                  "Chu chum sogui y golpe con una mano al torso y luego golpe con la otra a la cara.",
              },
              { number: 2, description: "Tango." },
            ],
          },
          {
            subgroup: "Contra agarre de los hombros",
            techniques: [
              { number: 3, description: "16" },
              { number: 4, description: "medio 16 y golpe a la mandibula." },
            ],
          },
          {
            subgroup: "Contra agarre de los codos",
            techniques: [
              {
                number: 5,
                description: "chu chum sogui y empujon con el codo.",
              },
              { number: 6, description: "aikido, llave de codo." },
            ],
          },
          {
            subgroup: "Contra agarre de las mangas",
            techniques: [
              { number: 7, description: "arriba y torsión." },
              { number: 8, description: "arriba y lanzamiento." },
            ],
          },
          {
            subgroup: "Contra agarre de las muñecas",
            techniques: [
              { number: 9, description: "agarre de muñecas y dip" },
              { number: 10, description: "giro y 18" },
            ],
          },
          {
            subgroup: "Contra agarre del cinturón por detrás",
            techniques: [
              {
                number: 11,
                description:
                  "montong nulo bakatt makki y batang son a las costillas.",
              },
              { number: 12, description: "codazo a la cara." },
            ],
          },
        ],
      },
    ],
  },
  {
    grade: "Azul",
    groups: [
      {
        group: "Patada contra puño",
        techniques: [
          { number: 1, description: "Antari." },
          { number: 2, description: "Bakkatari." },
          { number: 3, description: "Ap chuk ap chagui." },
          { number: 4, description: "Iop." },
          { number: 5, description: "Antari chanoki (a la rodilla)." },
          { number: 6, description: "Coje el brazo y de la nuca y murup." },
          { number: 7, description: "Agarra la muñeca y Dolio." },
          {
            number: 8,
            description: "Agarra la muñeca y Tuit Dolio desde fuera.",
          },
          { number: 9, description: "Tora Iop." },
          { number: 10, description: "Fenio." },
        ],
      },
      {
        group: "Contra abrazos",
        subgroups: [
          {
            subgroup: "Contra Urracarrana",
            techniques: [
              {
                number: 1,
                description:
                  "bajo con fuerza, chu chum sogui, y codazo a la cara.",
              },
              {
                number: 2,
                description: "bajo con fuerza, chu chum sogui, y 16.",
              },
            ],
          },
          {
            subgroup: "Urracarrana mano sobre mano",
            techniques: [
              {
                number: 3,
                description:
                  "bajo con fuerza, chu chum sogui, y pion son a la mano.",
              },
              {
                number: 4,
                description:
                  "bajo con fuerza, chu chum sogui, y codazo infeior por un lado y superior por el otro.",
              },
            ],
          },
          {
            subgroup: "Urracarrana completa",
            techniques: [
              { number: 5, description: "cojo un dedo medio y bajo." },
              {
                number: 6,
                description:
                  "bajo con fuerza, chu chum sogui, y cojo la cabeza del otro y lo lanzo por el frente.",
              },
            ],
          },
          {
            subgroup: "Abrazo bajo: mano muñeca",
            techniques: [
              { number: 7, description: "pion son a los metacarpos." },
              {
                number: 8,
                description: "torsión y pesion muñeca contra mano.",
              },
            ],
          },
          {
            subgroup: "Abrazo bajo: dedos entre lazados",
            techniques: [
              { number: 9, description: "cojo un dedo medio y bajo." },
              {
                number: 10,
                description:
                  "coje la mano por los metacarpos y tuerce hacia adentro, y luego patada.",
              },
            ],
          },
          {
            subgroup: "Abrazo de frente",
            techniques: [
              {
                number: 11,
                description: "presión en la ingle y dual batang son.",
              },
              {
                number: 12,
                description: "Presión en la ingle y cabeza hacia atrás.",
              },
            ],
          },
          {
            subgroup: "Abrazo de espalda",
            techniques: [
              {
                number: 13,
                description: "presión en la ingle y codazo a la cara.",
              },
              {
                number: 14,
                description:
                  "presión en la ingle y codazo infeior por un lado y superior por el otro.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    grade: "Purpura",
    groups: [
      {
        group: "Sentados",
        subgroups: [
          {
            subgroup: "Contra agarre de muñeca",
            techniques: [
              { number: 1, description: "Como 16 de básicas." },
              { number: 2, description: "Como 17 de básicas." },
            ],
          },
          {
            subgroup: "Contra agarre Muñeca y Hala",
            techniques: [
              { number: 3, description: "Como 9 de básicas." },
              { number: 4, description: "Como 18 de básica." },
            ],
          },
          {
            subgroup: "Contra agarre Cabello/Cabeza",
            techniques: [{ number: 5, description: "Toalla." }],
          },
          {
            subgroup: "Contra agarre de la Nuca",
            techniques: [
              { number: 6, description: "Sacrificio." },
              { number: 7, description: "Como 27 de básicas." },
            ],
          },
          {
            subgroup: "Contra agarre del Pecho/Casaca",
            techniques: [{ number: 8, description: "Como 29 de básicas." }],
          },
          {
            subgroup: "De pie de frente",
            techniques: [
              {
                number: 9,
                description:
                  "Coge la rodilla por dentro y pyon-son Kup a la ingle.",
              },
              { number: 10, description: "Dual Pyon-son Gi a los metatarsos." },
              {
                number: 11,
                description:
                  "Engancho por dentro un pie, y con el otro ejecuto Yop Chanoki.",
              },
              {
                number: 12,
                description:
                  "Engancha con los pies por dentro hacia fuera, empujo con las dos canillas.",
              },
            ],
          },
          {
            subgroup: "De pie de lado",
            techniques: [
              {
                number: 13,
                description:
                  "agarro por dentro(invertido) y ejecuta An Palkup a la corba de la rodilla.",
              },
              { number: 14, description: "trenza con los dos pies." },
            ],
          },
        ],
      },
    ],
  },
  {
    grade: "Rojo",
    groups: [
      {
        group: "Contra agarre a dos brazos",
        techniques: [
          {
            number: 1,
            description: "Patada a los genitales, como 17 de las básicas.",
          },
          {
            number: 2,
            description: "Patada a los genitales, como 18 de las básicas.",
          },
          {
            number: 3,
            description:
              "Patada a los genitales, lanzamiento como de judo por fuera.",
          },
          {
            number: 4,
            description:
              "Choca muñecas hacia adentro y arriba, tuerce y cruza hacia abajo y lanzamiento de aikido con los brazos cruzados.",
          },
          {
            number: 5,
            description:
              "Agarra con la mano contraria la muñeca del atacante, levanta sobre el hombro a partir el codo y luego lanzamiento de de judo por dentro.",
          },
          { number: 6, description: "Como 20 de las básicas pero lanzando." },
          {
            number: 7,
            description:
              "Como 20 de las básicas pero hala el brazo doblado hacia atrás.",
          },
          {
            number: 8,
            description: "Como 4 pero juntan espaldas y deja caer.",
          },
          { number: 9, description: "Abanico con las dos manos." },
          {
            number: 10,
            description: "Conducción hacia atras con lanzamiento al final.",
          },
        ],
      },
    ],
  },
  {
    grade: "Rojo Marrón",
    groups: [
      {
        group: "Contra agarre a dos brazos",
        subgroups: [
          {
            subgroup: "Contra agarre de los codos",
            techniques: [
              {
                number: 1,
                description:
                  "Dual montong bakkat son nal makki/batang son hacia afuera",
              },
              { number: 2, description: "Como 23 de las básicas." },
            ],
          },
          {
            subgroup: "Contra agarre de los hombros",
            techniques: [
              {
                number: 3,
                description:
                  "Agacho y por un lado agarro la cadera y giro al oponente.",
              },
              { number: 4, description: "Agacho y por un lado desnuca." },
            ],
          },
        ],
      },
      {
        group: "Lave contra puño",
        techniques: [
          {
            number: 1,
            description:
              "Con la mano derecha agarra la mano atacante hacia afuera y ejecuta como 17 de básicas devolviendola.",
          },
          {
            number: 2,
            description:
              "Con la mano izquierda agarra hacia adentro y devuelve como 16 de básicas.",
          },
          {
            number: 3,
            description:
              "Uen Montong Bakkat SonNal Makki, Chapki, ejecuta como 18 de básicas.",
          },
          {
            number: 4,
            description:
              "Orum Montong Bakkat SonNal Makki, Chapki, y golpea Uen Batang-Son a la cara, pasa la mano izquierda por debajo del codo del brazo atacante y ejerce presion hacia afuera mientras la mano derecha hace presión hacia atrás.",
          },
          {
            number: 5,
            description:
              "Orum Montong Bakkat SonNal Makki, agarra con las dos manos y continua el giro hacia atrás ejerciendo presión con el hombro en el brazo del atacante.",
          },
          {
            number: 6,
            description:
              "Uen Montong Bakkat SonNal Makki, Chapki, Con la mano derecha sujeto el hombro del atacante con mi codo por debajo, junto las manos y ejerce presión hacia afuera mientras la mano izquierda hace presión hacia atrás del hombro.",
          },
          {
            number: 7,
            description:
              "Uen Montong Bakkat SonNal Makki, con la mano derecha por debajo del codo del atacante, le giro el codo hacia el frente y lo dejo sostenido con la mano izquierda, y Orum Batang-Son al plexo.",
          },
          {
            number: 8,
            description:
              "Uen Montong Bakkat SonNal Makki, con la mano derecha por debajo del codo del atacante, le giro el codo hacia el frente y lo dejo sostenido con la mano izquierda, y Orum Pyon-Son Gi al Cuello mientras lo barro con la pierna iderecha.",
          },
          {
            number: 9,
            description:
              "Orum Chapki y devuelve como 21 de básicas, mientras golpea BalDung Bandal Ap Chagi.",
          },
          {
            number: 10,
            description:
              "Orum Chapki y devuelve como 21 de básicas, mientras golpea BalDung Bandal Ap Chagi y Ap Chagi en la cadera.",
          },
        ],
      },
      {
        group: "Saludo y conducción",
        techniques: [
          {
            number: 1,
            description: "Presión en el aductor del dedo pulgar del oponente.",
          },
          {
            number: 2,
            description:
              "Fractura del dedo pulgar del oponente, con el dedo pulgar hacia un lado.",
          },
          {
            number: 3,
            description:
              "Con el indice rodeando el dedo pulgar, fractura hacia abajo.",
          },
          {
            number: 4,
            description:
              "Con el indice rodeando el dedo pulgar, fractura hacia un lado.",
          },
          {
            number: 5,
            description:
              "Como las 5 de las básicas, pero el primer golpe al dedo pulgar.",
          },
          {
            number: 6,
            description: "Presión al pronador del codo y Gasum Pal Kub Chigi.",
          },
          {
            number: 7,
            description:
              "Gira hacia atrás del oponente, agarrando el hombro opuesto del brazo agarrado y hala hacia atrás.",
          },
          {
            number: 8,
            description:
              "Anaconda rodeando el brazo del agresor y presión hacia afuera con su codo.",
          },
          {
            number: 9,
            description:
              "Hala con ambas manos y codazo al codo del oponente, igual que 5 de llave contra puño.",
          },
          { number: 10, description: "Igual que 5 de agarres a ambos brazos." },
          {
            number: 11,
            description:
              "Con la palma libre, presiona el codo del atacante hacia abajo y hala para tumbar.",
          },
          {
            number: 12,
            description:
              "Con el filo de la mano libre presiona la base de la muñeca del atacante hacia abajo y hala para tumbar.",
          },
          { number: 13, description: "Igual que 18 de básicas." },
          {
            number: 14,
            description:
              "Gira por el frente y avanza con la mano en la espalda.",
          },
          { number: 15, description: "Lanza con 9 de básicas." },
          {
            number: 16,
            description: "Patea a los genitales, la mano libre flexiona.",
          },
        ],
      },
    ],
  },
  {
    grade: "Marrón",
    groups: [
      {
        group: "Contra agarre de Judo",
        subgroups: [
          {
            subgroup: "Defensa con bloqueo",
            techniques: [
              {
                number: 1,
                description:
                  "Bloqueo de águila hacia afuera (la mano izquierda bloquea la mano izquierda).",
              },
              {
                number: 2,
                description:
                  "Bloqueo de águila hacia dentro (la mano izquierda bloquea la mano derecha).",
              },
              {
                number: 3,
                description: "Montong Son-Nal Dung Pal Makki (por fuera)",
              },
              {
                number: 4,
                description: "Montong Gecho Son-Nal Dung Pal Makki.",
              },
              { number: 5, description: "Montong Gecho Son-Nal Makki." },
              {
                number: 6,
                description:
                  "Doble bloqueo como Agum-Son hacia arriba en los codos.",
              },
            ],
          },
          {
            subgroup: "Defensa con golpe",
            techniques: [
              {
                number: 7,
                description:
                  "Montong Gecho Son-Nal Makki, Dul Uon Galbi Gecho Chumok Chigi",
              },
              {
                number: 8,
                description:
                  "Montong Gecho Pal Makki, Dul Uon Neryo Batang-Son Gasum Chigi.",
              },
              {
                number: 9,
                description:
                  "Montong Gecho Son-Nal Makki, Dul Uon An Son-Nal Mok Chigi.",
              },
              {
                number: 10,
                description:
                  "Montong Gecho Son-Nal Makki, Dul Uon An Batang-Son kui Chigi.",
              },
              {
                number: 11,
                description:
                  "Montong Gecho Son-Nal Makki, Chapki Pachigi Mouri Chigi.",
              },
            ],
          },
          {
            subgroup: "Defensa con patadas",
            techniques: [
              {
                number: 12,
                description:
                  "Sale en diagonal hacia adelante, bloqueo de águia por fuera (mano derecha bloquea mano derecha) La mano libre agarra el codo del oponente. Con la pierna de atrás en AnDari Chanoki a la rodilla.",
              },
              {
                number: 13,
                description:
                  "Sale en diagonal hacia adelante, bloqueo de águia por fuera (mano derecha bloquea mano derecha) La mano libre agarra el codo del oponente. Con la pierna de atrás BalDung Chagi al abdomen.",
              },
              {
                number: 14,
                description:
                  "Sale en diagonal hacia adelante, bloqueo de águia por fuera (mano derecha bloquea mano derecha) La mano libre agarra el codo del oponente. Con la pierna de atrás Mureup Chagi al costado.",
              },
              {
                number: 15,
                description:
                  "Montong Gecho Son-Nal Makki, Chapki, Myung Chi Mureup Chagi.",
              },
            ],
          },
          {
            subgroup: "Defensa con lanzamiento",
            techniques: [
              {
                number: 16,
                description:
                  "Montong Gecho Son-Nal Makki, Chapki y con ambas manos agarran como 18 de básicas.",
              },
              {
                number: 17,
                description:
                  "Mongong Gecho Son-Nal Makki, Chapki, con una de las manos agarra la nuca y lanza.",
              },
              {
                number: 18,
                description:
                  "Mongong Gecho Son-Nal Makki, Chapki, extiende uno de los brazos del atacante con la palma hacia arriba giraandolo hacia abajo y adentro, el brazol libre  palanquea el codo del atancante, apoya en el hombro el brazo del oponente, haciendo presion hacia abao para lanzar.",
              },
              {
                number: 19,
                description:
                  "Mongong Gecho Son-Nal Makki, Chapki, extiende uno de los brazos del atacante con la palma hacia arriba giraandolo hacia abajo y adentro, agarra el tobillo delantero del atacante para ayudar a lanzarlo por encima de los hombros.",
              },
              {
                number: 20,
                description:
                  "Mongong Gecho Son-Nal Makki, Chapki, extiende uno de los brazos del atacante con la palma hacia arriba giraandolo hacia abajo y adentro, agarra la cintura del atancante para lanzarlo de a cadera.",
              },
            ],
          },
          {
            subgroup:
              "Defensa contra agarre de las solapas e impide ser lanzado",
            techniques: [
              { number: 21, description: "ChuChum Sogi." },
              { number: 22, description: "Okoru Are Makki" },
              {
                number: 23,
                description: "Pal Kup Chigi a la cadera evitando que gire.",
              },
              {
                number: 24,
                description:
                  "Neryo An Batang Makki a la cadera haciendo que se sobregire.",
              },
              {
                number: 25,
                description:
                  "Empuja el hombro trasero del oponente para desontrolar su giro.",
              },
              {
                number: 26,
                description:
                  "Hace sobre girar la cabeza del oponente en el sentido del giro empujandolo del menton para hacerlo caer.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    grade: "Marrón Negro",
    groups: [
      {
        group: "Defensa de acostado",
        subgroups: [
          {
            subgroup: "A una sola mano",
            techniques: [
              {
                number: 1,
                description:
                  "Agarra mano igual (izquierda izquierda) y saludo chino.",
              },
              {
                number: 2,
                description:
                  "Saludo Chino y la mano libre, palanquea el codo con la palma, para hacer caer al oponente al costado. Remata haciéndole mariposa al oponente, empujándolo con la pierna libre. Mas #17 de técnicas básicas.",
              },
              { number: 3, description: "Toalla." },
              {
                number: 4,
                description:
                  'Como 16 de técnicas básicas, terminando con la mano en "U" mas flexión por encima del codo con la mano libre.',
              },
              {
                number: 5,
                description:
                  "Como 16 de técnicas básicas mas flexión del codo con la mano libre por debajo (parecida a #7 de llave contra puño)",
              },
              {
                number: 6,
                description:
                  "Meto la mano y agarro manga. Con la otra mano, Opok Pyon Son Kup a la garganta.",
              },
              {
                number: 7,
                description:
                  "Meto la mano y agarro manga. Con la otra mano, Opok Pyon Son Kup a la garganta.",
              },
            ],
          },
          {
            subgroup: "A dos manos",
            techniques: [
              {
                number: 8,
                description:
                  "Cruza manos, agarra codos iguales (izquierda izquierda) gira los brazos como para romper los codos, levanta la cadera para hacer caer al oponente al costad.",
              },
              {
                number: 9,
                description:
                  "Agarra la casaca, con los codos hace presión hacia fuera y golpea cabeza con cara.",
              },
              {
                number: 10,
                description:
                  "Abraza las manos del oponente contra su cuerpo y las junta sin dejar que se suelte, levanta fuertemente la cadera haciéndolo ir de cara.",
              },
              {
                number: 11,
                description:
                  "Gira ambas manos haciendo #16 de técnicas básicas, hace ir al oponente hacia atrás, a la vez que pone sus piernas sobre los hombros del adversario provocando un fuerte golpe en la cabeza y lastimando la columna. Remata con Tikumchi Nop Chok Dary Chagi.",
              },
              {
                number: 12,
                description:
                  "Gira las manos contrario a #16 de técnicas básicas y empija con la cadera para hacerlo golpear la cara en el suelo (cabalgata)",
              },
              {
                number: 13,
                description:
                  "Metiendo un brazo por dentro, envuelve el brazo contrario del oponente hacia afuera. La mano libre extiende la mano libre del oponente para evitar, que al caer, se apoye en ella.",
              },
              {
                number: 14,
                description:
                  "Lleva los brazos de adentro hacia afuera (como Montong Hecho Makki) para abrirlos. Con una mano agarra el hombro y con la otra gira la cabeza para lastimar el cuello y hacer caer al oponente al costado. Remata con rodillazo a los genitales.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    grade: "Negro 1 Dan",
    groups: [
      {
        group: "Defensa contra cuchillo",
        subgroups: [
          {
            subgroup: "Defensa de ataque frontal medio con bloqueo.",
            techniques: [
              {
                number: 1,
                description: "Are Son Nal Makki por fuera o por dentro.",
              },
              {
                number: 2,
                description: "Neryeo Batang Makki por fuera o por dentro.",
              },
              { number: 3, description: "Dul Pal Neryeo Batang Makki." },
              { number: 4, description: "Okgoru Are Nakki." },
            ],
          },
          {
            subgroup: "Defensa de ataque frontal medio con golpe",
            techniques: [
              {
                number: 5,
                description: "Por fuera o por dentro Son Nal Chigi a Son Mok.",
              },
              {
                number: 6,
                description:
                  "Por fuera, Neryio Son Nal Chigi apronador y codazo en la cara (Manos diferentes), simultaneo.",
              },
              {
                number: 7,
                description:
                  "Por fuera, Neryio Son Nal Chigi a Son Mok  y Oligi Son Nal Dun al Tricep. Simueltaneo.",
              },
              {
                number: 8,
                description:
                  "POr dentro, Are Son Nal Mako Batan Son Tok Chigi.",
              },
              {
                number: 9,
                description:
                  "De afuera hacia adentro, Son Nal Dun con la mano contraria a la del cuchillo, sigiendo el flujo con el otro brazo golpea codazo a la nuca.",
              },
            ],
          },
          {
            subgroup: "Defensa de ataque frontal medio con llave",
            techniques: [
              {
                number: 10,
                description:
                  "POr fuera, Neryo Batang Maki y #16 de tecnicas basicas.",
              },
              {
                number: 11,
                description:
                  "Son Nal Okkoru Are Maki gira la  muñeca en 'U' y patea al abdomen.",
              },
              {
                number: 12,
                description:
                  "Son Nal Okkoru Are Maki y #18 de tecnicas basicas.",
              },
              {
                number: 13,
                description:
                  "Son Nal Okkoru Are Maki y #9 de tecicas basicas (enterrando el cuchillo y/o lanzando).",
              },
              {
                number: 14,
                description:
                  "Dul Pal Neryo Batang Maki, Chapki y hala un un poco y luego empuja la mano atacante hacia sus piernas (o diagonal hacia adentro) para hacerlo caer.",
              },
              {
                number: 15,
                description:
                  "Mano igual Neryo Na Batang Maki, la mano libre hace flexcionar el codo y lo gira como 18 para lanzar como #7 puño con llave.",
              },
            ],
          },
          {
            subgroup:
              "Defensa de apache vertical decendente con bloqueo: Los bloqueos deben realizarse antes que el brazo empiece a decender o extenderse.",
            techniques: [
              { number: 16, description: "Ogul  Son Nal Maki." },
              { number: 17, description: "Okkoru Olgul Maki." },
              { number: 18, description: "Batang Son Olgul Chukhyo Maki." },
              {
                number: 19,
                description: "Olgul An Batang Maki. (Mano conatraria).",
              },
              {
                number: 20,
                description: "Por fuera, bloqueo de agila al brazo.",
              },
            ],
          },
          {
            subgroup: "Defensa de apache vertical decendente con golpe.",
            techniques: [
              {
                number: 21,
                description:
                  "Ogul Son Nal Mako, Chumok Galbi Chigi. (Simultaneo).",
              },
              {
                number: 22,
                description:
                  "la mano contraria Batang Son Olgul Chukhyo Mako. Mano igual Pal Cup Chigi (Simultaneo).",
              },
              {
                number: 23,
                description:
                  "Batang Son Olgul Chukhyo Mako Son Nal Dun Chigi a la nuca.",
              },
            ],
          },
          {
            subgroup: "Defensa de apache vertical decendente con llave.",
            techniques: [
              {
                number: 24,
                description:
                  "Mano contraria, Olgul Batang Maki. La otra preciona el pronador para desequilibrar y tumbar llevando el mango del cuchillo a la mandibula del enemigo.",
              },
              {
                number: 25,
                description:
                  "Por fuera, mano contraria Batang Son Olgul Chukhyo Maki, usa la mano libre para hacer como # 7 de puño con llave.",
              },
              {
                number: 26,
                description:
                  "Bloquea con ambas manos como tenaza (una por fuera otra por dentro) sigue el flujo en forma circular y le va bajando. Pone la rrodilla sobre el codo hasta tumbar el oponente y para rematarlo en el piso",
              },
              {
                number: 27,
                description:
                  "Montong Bakat Maki y # 9 de tecnicas basicas lanzando.",
              },
              {
                number: 28,
                description:
                  "Se mete hacia el atacante y lanza de cadera por dentro.",
              },
              {
                number: 29,
                description:
                  "Se mete hacia el atacante y lanza de cadera por fuera.",
              },
              {
                number: 30,
                description:
                  "Por fuera con mano igual, Olgul Bakat Maki y agarra, gira por la espalda cambia de mano y lanza hacia el costado.",
              },
            ],
          },
          {
            subgroup: "Defenza de ataque horizontal hacia adentro con bloqueo.",
            techniques: [
              { number: 31, description: "¨Por dentro An Batang Maki." },
              {
                number: 32,
                description: "Por dentro Olgul Son Nal Bakat Maki.",
              },
              { number: 33, description: "Por dentro Dul Pal An Batang Maki." },
              { number: 34, description: "Agila por dentro." },
              { number: 35, description: "Sale a 45° por dentro y tenaza." },
            ],
          },
          {
            subgroup: "Defenza de ataque horizontal hacia adentro con golpe.",
            techniques: [
              {
                number: 36,
                description:
                  "Por dentro Batang Maki a la muñeca y el otro brazo Son Nal Dun Oligi al triceps",
              },
              {
                number: 37,
                description:
                  "Por dentro Montong Son Nal Bakat Maki, y con esa misma mano Batang Son Ko Chigi",
              },
              {
                number: 38,
                description:
                  "Por fuera sale a 45°, esquiva el ataque. Mano igual con aguila, agarra la muñeca del cuchillo y el antebrazo libre, rompe el codo del oponente.",
              },
              {
                number: 39,
                description:
                  "De forma simultanea, bloque de aguila por dentro (mano contraria), y la otra mano (mano igual) Agun Son Mok Chigi.",
              },
              {
                number: 40,
                description:
                  "Por fuera sale a 45°, esquiva el ataque, y Bandal Chigi",
              },
            ],
          },
          {
            subgroup: "defensa de ataque horizontal hacia adentro con llave.",
            techniques: [
              {
                number: 41,
                description:
                  "Por fuera sale a 45° esquiva el ataque y hace tenaza.",
              },
              {
                number: 42,
                description:
                  "Por dentro sale a 45° esuqviva el ataque y hace tenaza para hacer como # 7 de puño con llave.",
              },
              {
                number: 43,
                description:
                  "Por dentro hace tenaza (con las palmas), y lanza de cadera.",
              },
              {
                number: 44,
                description:
                  "De forma simultanea, bloquea Aguila por dentro (mano contraria), y la otra mano (mano igual) Agun Son Mok Chigi. Ambas manos agarran la del cuchillo y hace como # 9 de tecnicas basicas lanzando.",
              },
              {
                number: 45,
                description:
                  "De forma simultanea, por dentro de Montog Batang Maki, y la otra mano Batang Son Chigi a la cara, mete un pie por detras del oponente y lanza la cadera.",
              },
            ],
          },
          {
            subgroup:"",
            techniques: []
          }
        ],
      },
    ],
  },
];
