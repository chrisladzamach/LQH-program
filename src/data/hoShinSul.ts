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
        group: "1-15 Son Mok Sul (Agarres de mano contraria)",
        subgroups: [
          {
            subgroup: "Son Mok Sul (Agarres de mano contraria)",
            techniques: [
              {
                number: 1,
                description:
                  "Abre la mano, hace un chuzón a los ojos con la palma hacia arriba, y luego, pega un puño con el nudillo medio a los metacarpos de la mano que sujeta.",
              },
              {
                number: 2,
                description:
                  "Saliendo por el lado de la mano agarrada en Ap Kubi, ejecuta Batang Son al esternón.",
              },
              {
                number: 3,
                description:
                  "Saliendo por el lado de la mano agarrada en Ap Kubi, ejecuta Chunji Pam Chumok Chigi al plexo.",
              },
              {
                number: 4,
                description:
                  "Abre la mano, la gira hacia afuera (altura de la cabeza), bloqueo con mi rodilla la rodilla del oponente para desequilibrarlo y que no se mueva, Luego, ejecuta Pal Kup a las costillas.",
              },
              {
                number: 5,
                description: "Gira la mano hacia adentro para exponer y tensionar el pronador del codo, luego realiza Son Nal Chigi al pronador y luego otro al cuello.",
              },
              {
                number: 6,
                description:
                  "Chuzón hacia atrás en diagonal girando la mano hacia adentro para liberarse en ChumChum Sogi y luego Pal Kup al plexo.",
              },
              {
                number: 7,
                description:
                  "Expone la muñeca, Batang Son y con la mano liberada ejecuta An Son Nal Chigi al cuello.",
              },
              {
                number: 8,
                description: "Expone la muñeca, Batang Son y con la mano liberada gira por dentro y realiza Pal Kup al plexo.",
              },
              {
                number: 9,
                description:
                  "Levanta el brazo y se mete por debajo en Chu Chum Sogi y realiza Pal Kup al plexo.",
              },
              {
                number: 10,
                description:
                  "Chuzón hacia atrás en diagonal girando la mano hacia adentro para liberarse en ChumChum Sogi y luego realiza Son Karak a la cara.",
              },
              {
                number: 11,
                description: "Hala al oponente, y ejecuta An Dary Chanoki a la rodilla.",
              },
              {
                number: 12,
                description: "Hala al oponente, y ejecuta Mureup Chagi a la ingle.",
              },
              {
                number: 13,
                description:
                  "Levanta el brazo y Chong Kang I Ap Chanoki a las costillas.",
              },
              {
                number: 14,
                description:
                  "Agarra del cabello y ejecuta Mureup Chagi a la cara.",
              },
              {
                number: 15,
                description: "Agarra por la nuca al oponente (con el pulgar hacia abajo por el lado contrario al lado agarrado). Presiona el costado del cuello con el dedo del corazón, para hacerlo bajar. Luego realizaMureup Chagi al plexo.",
              },
            ],
          },
        ],
      },
      {
        group: "5 An Son Mok Chapki Sul (Agarre cruzado de muñeca)",
        subgroups: [
          {
            subgroup: "Con golpe.",
            techniques: [
              { number: 1, description: "Son Nal a la cara con la mano libre." },
              { number: 2, description: "Son Nal al pronador del codo con la mano libre." },
              { number: 3, description: "Son Nal Dung a la cara por debajo del brazo agarrado." },
              { number: 4, description: "Pal Kup similar a la técnica #4 de agarre lineal de muñeca." },
              { number: 5, description: "Contra agarra por fuera y con la mano libre, Chumok Galbi Chigi." },
            ]
          }
        ]
      }
    ],
  },
  {
    grade: "Amarillo",
    groups: [
      {
        group: "16-28 Son Mok Sul (Agarres de mano contraria)",
        subgroups: [
          {
            subgroup: "Son Mok Sul (agarres de muñeca)",
            techniques: [
              {
                number: 16,
                description:
                  "Abre la mano, gira la mano quedando el dorso mirando hacia abajo; con la otra mano agarra la mano del oponente, le gira la mano haciendo llave y con el filo de la mano libre ayuda a la palanca.",
              },
              {
                number: 17,
                description:
                  "La mano agarrada hace una 'U' con los dedos pulgar e índice, hacia arriba para sujetar la muñeca del oponente, la mano libre agarra la mano del oponente por los metacarpos, gira hacia adentro llevando a que la mano del oponente quede en 'U' (con los dedos apuntando hacia arriba) mientras hala para extender el brazo del oponente para quedar con el codo del agarre, sobre el codo del oponente a la vez que hace presión hacia al el oponente en la muñeca.",
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
            subgroup: "Some Chapki (Agarre de manga a la altura de la muñeca de la casaca)",
            techniques: [
              {
                number: 21,
                description:
                  "Agarra los metacarpos, torsión hacia adentro y pam chumok a la axila.",
              },
              {
                number: 22,
                description: "Péndulo a la par con Batang Son el plexo.",
              },
            ],
          },
          {
            subgroup: "Pal Kub Chapki (Agarre de codo)",
            techniques: [
              {
                number: 23,
                description:
                  "Sujeta los metacarpos para asegurar la mano, y ejecuta pion Son por dentro y hacia abajo.",
              },
              {
                number: 24,
                description:
                  "Misma 23 pero continua el movimiento pasando por debajo del brazo y hace presión en el codo con el antebrazo.",
              },
            ],
          },
          {
            subgroup: "Okke Chapki (Agarre de hombro)",
            techniques: [
              { number: 25, description: "Igual que 21." },
              { number: 26, description: "Igual que 17." },
            ],
          },
          {
            subgroup: "Mokdolmi Chapki (Agarre de nuca)",
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
      {
        group: "10 An Son Mok Chapki Sul (Agarre cruzado de muñeca)",
        subgroups: [
          {
            subgroup: "Con golpe.",
            techniques: [
              { number: 6, description: "Contra agarra por fuera y codazo a la cara." },
              { number: 7, description: "Presiona el pronador del codo con la mano libre y ejecuta Pal Kup a la cara con la otra mano." },
              { number: 8, description: "Presiona el pronador del codo con la mano libre y con la mano libre, agarra la insersión del pectoral." },
              { number: 9, description: "Igual a la anterior, pero ejecuta Agum Son Chigi a la garganda." },
              { number: 10, description: "Contra agarra por fuera, la mano libre baja la mano agarrada y con esa misma mano (la agarrada) Batang Son a la cara." },
            ]
          }
        ]
      }
    ],
  },
  {
    grade: "Naranja",
    groups: [
      {
        group: "29-46 Son Mok Sul (Agarres de mano contraria)",
        subgroups: [
          {
            subgroup: "Sewo Myoksal Chapki Sul (Agarre de solapas)",
            techniques: [
              { number: 29, description: "Saludo chino." },
              { number: 30, description: "Igual que 17." },
            ],
          },
          {
            subgroup: "Olyeo Sewo Myoksal Chapki Sul (Agarre elevando de solapas)",
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
            subgroup: "Bituro Sewo Myoksal Chapki Sul (Agarre invertido de solapas)",
            techniques: [
              { number: 33, description: "(invertida) cocodrilo." },
              { number: 34, description: "Golpe con el antebrazo al codo." },
            ],
          },
          {
            subgroup: "Oppok Ti Chapki Sul (Agarre de cinturón mano mirando hacia abajo)",
            techniques: [
              { number: 35, description: "Pam chumok a los metacarpos." },
              { number: 36, description: "Aplauso al codo." },
            ],
          },
          {
            subgroup: "Jecho Ti Chapki Sul (Contra agarre de cinturón mano mirando hacia arriba)",
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
            subgroup: "Sewo Yop Ti Chapki Sul (Contra agarre de cinturón mano mirando hacia el lado)",
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
            subgroup: "Gasum Chapki Sul (Contra agarre de pecho (izq/der))",
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
            subgroup: "Meory Chapki Sul (Contra agarre de cabello/cabeza)",
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
        group: "10 Kwon Dae Kwon (Puño contra puño)",
        techniques: [
          {
            number: 1,
            description: "Montong bakkat makki y Batang Son al plexo.",
          },
          {
            number: 2,
            description: "Montong bakkat makki y pyon Son al plexo.",
          },
          {
            number: 3,
            description: "Montong bakkat makki y agum Son al cuello",
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
        group: "12 Oht Sul (Contra agarres por la espalda)",
        subgroups: [
          {
            subgroup: "Contra agarre de la nuca",
            techniques: [
              {
                number: 1,
                description:
                  "Chu chum Sogi y golpe con una mano al torso y luego golpe con la otra a la cara.",
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
                description: "chu chum Sogi y empujon con el codo.",
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
                  "montong nulo Batangt makki y Batang Son a las costillas.",
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
        group: "10 Chagi Dae Kwon Sul (Patada contra puño)",
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
        group: "14 Mon Chapki Sul (Contra abrazos)",
        subgroups: [
          {
            subgroup: "Contra Urracarrana",
            techniques: [
              {
                number: 1,
                description:
                  "bajo con fuerza, chu chum Sogi, y codazo a la cara.",
              },
              {
                number: 2,
                description: "bajo con fuerza, chu chum Sogi, y 16.",
              },
            ],
          },
          {
            subgroup: "Urracarrana mano sobre mano",
            techniques: [
              {
                number: 3,
                description:
                  "bajo con fuerza, chu chum Sogi, y pion Son a la mano.",
              },
              {
                number: 4,
                description:
                  "bajo con fuerza, chu chum Sogi, y codazo infeior por un lado y superior por el otro.",
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
                  "bajo con fuerza, chu chum Sogi, y cojo la cabeza del otro y lo lanzo por el frente.",
              },
            ],
          },
          {
            subgroup: "Abrazo bajo: mano muñeca",
            techniques: [
              { number: 7, description: "pion Son a los metacarpos." },
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
                description: "presión en la ingle y dual Batang Son.",
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
        group: "14 Chioa Sul (Defensa sentado)",
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
                  "Coge la rodilla por dentro y pyon-Son Kup a la ingle.",
              },
              { number: 10, description: "Dual Pyon-Son Gi a los metatarsos." },
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
        group: "10 Dul Pal Chapki Sul (Contra agarre a dos brazos)",
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
        group: "11-14 Sul Pal Chapki Sul (Contra agarre a dos brazos)",
        subgroups: [
          {
            subgroup: "Contra agarre de los codos",
            techniques: [
              {
                number: 1,
                description:
                  "Abre una mano, y la otra, desequilibra empujando con Son Nal al cuello o mandíbula.",
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
        group: "10 Koki Sul Bang Kwon Sul (Lave contra puño)",
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
        group: "10 gyeongnye Sul (Saludo y conducción)",
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
        group: "26 Yudo Sul (Contra agarre de Judo)",
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
                  "Empuja el hombro trasero del oponente para deSontrolar su giro.",
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
        group: "14 Koncho Sul (Defensa de acostado)",
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
        group: "30 Dangom Sul (Defensa contra cuchillo)",
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
                  "POr fuera, Neryo Batang Makki y #16 de tecnicas basicas.",
              },
              {
                number: 11,
                description:
                  "Son Nal Okkoru Are Makki gira la  muñeca en 'U' y patea al abdomen.",
              },
              {
                number: 12,
                description:
                  "Son Nal Okkoru Are Makki y #18 de tecnicas basicas.",
              },
              {
                number: 13,
                description:
                  "Son Nal Okkoru Are Makki y #9 de tecicas basicas (enterrando el cuchillo y/o lanzando).",
              },
              {
                number: 14,
                description:
                  "Dul Pal Neryo Batang Makki, Chapki y hala un un poco y luego empuja la mano atacante hacia sus piernas (o diagonal hacia adentro) para hacerlo caer.",
              },
              {
                number: 15,
                description:
                  "Mano igual Neryo Na Batang Makki, la mano libre hace flexcionar el codo y lo gira como 18 para lanzar como #7 puño con llave.",
              },
            ],
          },
          {
            subgroup:
              "Defensa de apache vertical decendente con bloqueo: Los bloqueos deben realizarse antes que el brazo empiece a decender o extenderse.",
            techniques: [
              { number: 16, description: "Ogul  Son Nal Makki." },
              { number: 17, description: "Okkoru Olgul Makki." },
              { number: 18, description: "Batang Son Olgul Chukhyo Makki." },
              {
                number: 19,
                description: "Olgul An Batang Makki. (Mano conatraria).",
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
                  "Mano contraria, Olgul Batang Makki. La otra preciona el pronador para desequilibrar y tumbar llevando el mango del cuchillo a la mandibula del enemigo.",
              },
              {
                number: 25,
                description:
                  "Por fuera, mano contraria Batang Son Olgul Chukhyo Makki, usa la mano libre para hacer como # 7 de puño con llave.",
              },
              {
                number: 26,
                description:
                  "Bloquea con ambas manos como tenaza (una por fuera otra por dentro) sigue el flujo en forma circular y le va bajando. Pone la rrodilla sobre el codo hasta tumbar el oponente y para rematarlo en el piso",
              },
              {
                number: 27,
                description:
                  "Montong Batang Makki y # 9 de tecnicas basicas lanzando.",
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
                  "Por fuera con mano igual, Olgul Batang Makki y agarra, gira por la espalda cambia de mano y lanza hacia el costado.",
              },
            ],
          },
        ],
      },
      {
        group: "20 Pang Chok Sul (Llave contra patada)",
        subgroups: [

        ]
      },
    ],
  },
  {
    grade: "Negro 2 Dan",
    groups: [
      {
        group: "60 Dangom Sul (Defensa contra cuchillo)",
        subgroups: [
          {
            subgroup: "Defenza de ataque horizontal hacia adentro con bloqueo.",
            techniques: [
              { number: 31, description: "¨Por dentro An Batang Makki." },
              {
                number: 32,
                description: "Por dentro Olgul Son Nal Batang Makki.",
              },
              { number: 33, description: "Por dentro Dul Pal An Batang Makki." },
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
                  "Por dentro Batang Makki a la muñeca y el otro brazo Son Nal Dun Oligi al triceps",
              },
              {
                number: 37,
                description:
                  "Por dentro Montong Son Nal Batang Makki, y con esa misma mano Batang Son Ko Chigi",
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
                  "De forma simultanea, por dentro de Montog Batang Makki, y la otra mano Batang Son Chigi a la cara, mete un pie por detras del oponente y lanza la cadera.",
              },
            ],
          },
          {
            subgroup: "Defensa de apache horizontal hacia afuera con bloqueo.",
            techniques: [
              { number: 46, description: "An Batang Makki." },
              { number: 47, description: "Aguila por fuera. Mano igual." },
              { number: 48, description: "Olgul Son Nal Batang Makki." },
              { number: 49, description: "Dul Pal Batang Makki." },
              { number: 50, description: "Tenaza" },
            ],
          },
          {
            subgroup: "Defensa de apache horizontal hacia afuera con golpes.",
            techniques: [
              {
                number: 51,
                description:
                  "Sale por fuera a 45°, tenaza golpeando al triceps.",
              },
              {
                number: 52,
                description:
                  "Sale por fuera a 45°, mano igual bloquea y la otra Son Nal Dun, Mok o Tok Chigi.",
              },
              {
                number: 53,
                description:
                  "sale por fuera a 45°, mano igual bloquea y la otra Pion Son Ji a la axila.",
              },
              {
                number: 54,
                description:
                  "Sale por afuera a 45°, mano igual bloquea a la otra Son Nal Galbi Chigi.",
              },
              {
                number: 55,
                description: "Sale por fuera a 45°, Pal Kup Galbi Chigi.",
              },
            ],
          },
          {
            subgroup: "Defensa de apache horizontal hacia afuera con llave.",
            techniques: [
              {
                number: 56,
                description:
                  "Mano igual bloquea y la otra Son Nal Galbi Chigi, mas # 8 puño con llave.",
              },
              {
                number: 57,
                description:
                  "Mano igual bloquea y la otra va al codo para seguir el flujo rotando el codo, hacer rodar o lanzar al oponente.",
              },
              {
                number: 58,
                description:
                  "Bloquea con ambas manos como tenaza (una por fuera, otra por dentro) sigue el flujo en forma circular y lo va bajando. Pone la rodilla sobre el codo hasta tumbar al oponente y para rematarlo en el piso.",
              },
              {
                number: 59,
                description:
                  "Por fuera Montong Batang Makki, la mano que bloquea de desplaza para agarrar garganta o cuello, estrangular y lazar de cadera.",
              },
              {
                number: 60,
                description:
                  "Por fuera Montong Batak Makki, la otra mano palanquea el codo para lanzar por palanca el codo y de cadera.",
              },
            ],
          },
        ]
      },
      {
        group: "15 Tang Bong Sul (Defensa con palo corto",
        subgroups: [
          {
            subgroup: "Defensa de Ap Chagi.",
            techniques: [
              { number: 1, description: "Por fuera, Son Nal Chigi a la base del pie." },
              { number: 2, description: "Okkoru Are Makki y hala hacia atrás." },
              { number: 3, description: "Por dentro, Are Makki, a la vez que la otra mano Sewo Chumok Chigi a la parte interior del muslo." },
              { number: 4, description: "Por fuera Are Makki y Chapki, la pierna contraria a la mano que bloquea, realiza Neryeo Mureup Chigi al muslo o rodilla." },
              { number: 5, description: "Sale por fuera, engancha la pierna (como haciendo 'jarra'), Yop Chanoki a la parte interior de la rodilla de la pierna de apollo. " },
              { number: 6, description: "Batang Son Montong Chukyo Makki, hala un poco mientras la otra mano presiona, con el talón de la mano sobre la canilla." },
              { number: 7, description: "Batang Son Montong Chukyo Makki, y ayudado con la mano libre gira el tobillo para luxarlo o fracturarlo (Dedos hacia abajo)." },
              { number: 8, description: "Engancha la pierna por fuera (como haciendo 'jarra'), la mano libre hace girar la pierna al plano horizontal, flexionando la rodilla a la vez que se gira el cuerpo. Lanza." },
              { number: 9, description: "Engancha la pierna en 'V', con la otra mano, agarra la cintura y barre a la vez que gira el cuerpo." },
              { number: 10, description: "Deja pasar la patada para agarrarla de la pantorilla con ambas manos, a la vez que pone la corva en el hombro y lanza." }
            ]
          },
          {
            subgroup: "Defensa de Yop Chagi.",
            techniques: [
              { number: 11, description: "Sale hacia atrás y Pal Kub Chigi o Bal Mok." },
              { number: 12, description: "Sale por dentro, engancha la pierna en 'V' y con la otra mano, Pyon Son Gi al plexo." },
              { number: 13, description: "Retrocede y, con la pierna de adelante, Ap Chagi a la parte interior del muslo que patea." },
              { number: 14, description: "Sale por fuera, engancha la pierna en 'V', con la pierna de atrás, Oligi Mureup Chigi a la parte interior del muslo." },
              { number: 15, description: "Bloquea en 'V', Chapki. Con la pierna engancha la pierna que patea desde la corva, para caer. (Espinilla con corva)" },
              { number: 16, description: "Por fuera, hace bloqueo de águila agarrando el empeine y soportando la pierna con el brazo y ayudando con la mano libre gira el tobillo para luxarlo o fracturarlo (Dedos hacia abajo)" },
              { number: 17, description: "Bloqueo de águila por encima, agarra el tobillo, la mano libre agarra el talón y gira el tobillo (Dedos del pie hacia arriba)" },
              { number: 18, description: "Sale por dentro, engancha la pierna en 'jarra', y barre por detrás, estando en el suelo, gira al oponente para terminar en escorpión." },
              { number: 19, description: "Sale por fuera, engancha la pienra en 'V' y barre por delante. " },
              { number: 20, description: "Sale por dentro, agarra en 'V' con la mano de atrás. Gira la pierna que patea (Rodilla hacia abajo). Con Dwi Dollyeo Chagi engancha la pierna que patea (Tibia - corva, pierna de adelante.) tumba. Remata." },
            ]
          }
        ]
      },
      {
        group: "20 Kwon Chang Bang Ho Sul (Defensa de mano vacía contra armas de fuego cortas y largas)",
        subgroups: [
          {
            subgroup: "ARMA CORTA - Apunta por el frente.",
            techniques: [
              { number: 1, description: "Agarra el carro/cañón por dentro, lo baja y sale a 45°." },
              { number: 2, description: "Agarra el carro/cañón por fuera, lo baja y sale a 45°." },
              { number: 3, description: "Agarra el carro/cañón por debajo y eleva el arma y el brazo que la sostiene." },
              { number: 4, description: "Agarra el carro/cañón por dentro, gia el arma de adentro hacia afuera en el plano horizontal, engarza el pulgar con el guardamonte y rompe el pulgar." },
              { number: 5, description: "Agarra el carro/cañón por fuera con la mano contraria (ataca derecha defiende izquierda), gira el arma hacia el pecho del atacante poniendo la mano en 'U' en el plano horizontal." },
              { number: 6, description: "Agarra el carro/cañón por fuera con la mano contraria (ataca derecha defiende izquierda), la otra mano toma el cañón por debajo. Empuja el arma hacia arriba para desarmar (hacer soltar el arma). Complementa lanzando como #16 de técnicas básicas." },
              { number: 7, description: "Agarra el carro/cañón por fuera con la mano contraria y #16 de técnicas básicas." },
              { number: 8, description: "Agarra el carro/cañón por fuera con mano igual. La mano libre envuelve el brazo portador del arma para hacer como técnica de conducción haciendo apuntar el arma hacia el atacante." },
              { number: 9, description: "Agarra el carro/cañón por dentro con la mano contraria y hace como #9 de llave contra puño." },
              { number: 10, description: "Agarra el carro/cañón por dentro con mano contraria. Hace como #8 de llave contra puño haciendo golpear al oponente en la cabeza con el arma. Complemento." },
            ]
          },
          {
            subgroup: "ARMA CORTA - Apunta por la espalda.",
            techniques: [
              {number: 11, description: "Gira en sentido horario para dar el frente al arma. Sale de la línea de fuego. Con mano igual agarra la mano portadora del arma. Con el brazo libre rompe/palanquea el codo del brazo que sostiene el arma." },
              {number: 12, description: "Gira en sentido horario para dar el frente al arma. Sale en la línea de fuego. Con mano igual agarra la mano portadora del arma. Mete el brazo libre por dentro para palanquear el codo a la vez que la mano que agarra el arma gira la mano atacante palma arriba. Y conduce o fractura. Como #7 de saludo y conducción." },              
              {number: 13, description: "Girando en sentido horario, mete el brazo derecho por debajo del brazo portador del arma (derecho). Y gace candado al cuello. Tumba." },
              {number: 14, description: "Gira en sentido horario para dar el frente al arma. Sale de la línea de fuego. Con mano igual agarra la mano portadora del arma. La mano libre presiona el pronador. Gira la mano atacante para hacer apuntar al pecho del agresor." },
              {number: 15, description: "Levanta los brazos. Gira en sentido anti horario. Con el brazo izquierdo de afuera hacia adentro envuelve la mano atacante y la aprisiona en la axila, con la mano libre ejecuta Batang Son Tok Chigi." },
              {number: 16, description: "Levanta los brazos. Gira en sentido anti horario. Mete el brazo izquierdo por debajo del atacante, lo pone encima del bíceps para flexionarlo. Con la mano libre aprisiona la cabeza del atacante contra el pecho del defensor. Continúa el giro." },
            ]
          }, 
          {
            subgroup: "ARMA LARGA - Apunta por el frente.",
            techniques: [
              {number: 17, description: "Hacia adentro, la mano derecha retira el cañón hacia abajo, Uen Sewo Chumok Chigi a la cara. Levanta el arma, Mureup Chigi a los genitales. Con la mano izquierda agarra la culata y quita el arma." },
              {number: 18, description: "La mano izquierda agarra y retira el cañón hacia adentro. El borde radial del brazo derecho, Golpea/empuja la garganta (como Bakkat Son Nal Chigi) para tumbar (ayuda con Suroh Chagi)." },
            ]
          },
          {
            subgroup: "ARMA LARGA - Apunta por la espalda.",
            techniques: [
              {number: 19, description: "Gira en sentido horario, mete la mano derecha por debajo del arma (parecido al agarre de #6 de llave contra puño) la levanta y talla (la mano izquierda del oponente) con el hombro haciendo presión con los brazos." },
              {number: 20, description: "Gira en sentido anti horario. Con ambas manos controla el arma. Chokto Cha Doligi Chagi a la rodilla. De forma ascendente golpea la cara del atacante con el arma." },
            ]
          }
        ]
      },
      {
        group: "10 defensa sentado en silla.",
        subgroups: [
          {
            subgroup: "Ataque de puño.",
            techniques: [
              { number: 1, description: "Con mano igual, y por fuera, hace bloqueo de águila. Sigue el flujo para hacer como #17 de técnicas básicas. Se levanta de la silla y luego #16 de técnicas básicas." },
              { number: 2, description: "Igual a #6 de llave contra puño, haciendo estrellar la cara contra la silla. Ataque de patada." },
              { number: 3, description: "Ataca Dolyeo Chagi. Por dentro Montong Bakkat Makki. La mano libre engancha la corva de la pierna que patea, gira la rodilla hacia adentro, para tumbar al oponente y al caer boca abajo, lastimarle la columna con la pierna que pateó." },
              { number: 4, description: "Ataca Tikumchi Chanerigi Chagi. Al iniciarse el ataque, se levanta y por fuera ejecuta Son Nal Bio Makki. Simultáneamente hace Dwichuk Miro Chagi." },
              { number: 5, description: "Ataca Dolyeo Chagi. Anticipa el ataque. Agarra en 'V' la pierna que patea. An Dary Chanoki a la pierna de apoyo." },
            ]
          },
          {
            subgroup: "Agarres simples o dobles por el frente a los brazos y/o tronco.",
            techniques: [
              { number: 6, description: "(Ataque agarrando ambos hombros) Hace como #12 de sentado y sumultáneamente empuja con Dul Pal Batang Son Milop Chigi. Al caer el oponente, se le pone el extremo superior de la silla sobre la garganta." },
              { number: 7, description: "(Ataque estrangulando) Con la mano contraria agarra una de las manos del oponente. El brazo libre, se mete por entre los del oponente extendido en su totalidad, para hacer una especie de 'Are Makki'. El oponente cae de espaldas en regazo del atacado. Se remata con golpe al tronco o cara." },
              { number: 8, description: "Agarre de solapas. Toalla. Se levanta de la silla cambia de mano y hace el giro de #9 de técnicas básicas pero no hacia atrás, sino hacia adentro." }
            ]
          },
          {
            subgroup: "Agarres por dentrás.",
            techniques: [
              { number: 9, description: "(Ataque estrangulando) Acomoda los pies para darse apoyo (Koap Sogi). Gira el cuerpo (agarrando el brazo que estrangula) hacia el lado contrario del brazo que agarra para palanquear parecido a #23 de técnicas básicas." },
              { number: 10, description: "(Ataque agarrando ambos hombros) Con mano igual se agarran las manos del oponente. Se levanta de la silla y avanza para hacerlo caer de barriga y sobre la silla. Rematar en el piso con patada." }
            ]
          }
        ]
      }
    ]
  },
  {
    grade: "Negro 3 Dan",
    groups: [
      {
        group: "14 Dan Jan Sul (Defensa con bastón)",
        subgroups: [
          {
            subgroup: "Ataque de puño.",
            techniques: [
              { number: 1, description: "Bloquea por dentro con el bastón, luego con el asa golpea en la nuca hacia abajo." },
              { number: 2, description: "La mano libre bloquea por dentro, mete el bastón por la axila con la punta hacia la espalda y hace media #18 de técnicas básicas." },
              { number: 3, description: "La mano libre bloquea por dentro, mete el bastón por la axila con la punta hacia el pecho y hace #9 de técnicas básicas." },
              { number: 4, description: "Mete el bastón por entre las piernas del oponente a la altura de los muslos y lo gira hacia la pierna adelantada para lanzar." },
              { number: 5, description: "Bloquea por dentro con el extremo del bastón, apoya el extremo del bastón en la mandíbula o cuello, empuja y lanza." },
              { number: 6, description: "Bloquea/golpea por fuera con el extremo del bastón, gira por la espalda para barrer con el bastón." },
              { number: 7, description: "Bloquea por fuera con el extremo del bastón, mete el extremo para flexionar el codo y hacer la misma palanca de #7 de llave contra puño." },
              { number: 8, description: "Bloquea por fuera con el bastón, mete el extremo del bastón para apoyarlo bajo la axila y el hombo. Empuja y lanza." },
              { number: 9, description: "La mano libre bloquea por dentro, usando el brazo que golpea como puente, desde aguera apoya el bastón en la garganta. Flexiona el brazo y tumba." },
              { number: 10, description: "Bloquea como Olgul Makki con el bastón. La mano libre agarra la mano que golpea, gira la muñeca del atacante para poner la palma hacia arriba. Le baja el brazo y usa el bastón para palanquear el codo hacia arriba, luego lo palanquea hacia adentro. Loo hala hacia aguera, para luego volver a palanquearlo hacia adentro, para lanzarlo con el brazo enroscado en el bastón." },
            ]
          },
          {
            subgroup: "Ataque de patada.",
            techniques: [
              { number: 11, description: "Ataca Orum Bandal Chagi. Bloquea por dentro con el brazo libre. Y con el asa del bastón barre en contraflujo desde el tobillo." },
              { number: 12, description: "Ataca Orum Bandal Chagi. Bloquea por dentro con el brazo libre. Y con el asa del bastón lanza desde la nuca." },
              { number: 13, description: "Ataca Orum Ap Chagi. Bloquea por fuera con el bastón. Mete el bastón por entre las piernas para ponerlo por el frente del oponente y paralelo a su cadera. Levanta y tumba." },
              { number: 14, description: "Ataca Orum Ap Chagi. Por dentro Uen Are An Makki. Continúa el flujo, gira el cuerpo y barre la pierna de apoyo golpeando con el bastón hacia afuera a la altura del tobillo." },
            ]
          }
        ]
      },
      {
        group: "10 Desarmes de Tang Bong contra Chuk Kun (defensa palo corto contra sable de bambú)",
        techniques: [
          { number: 1, description: "Ataca golpe vertical descendente. Al cargar el ataque y antes que el Chuk Kun empiece a descender punza la garganta." },
          { number: 2, description: "Ataca golpe vertical descendente. Al cargar el ataque y antes que el Chuk Kun empiece a descender, con la mano libre retiene la mano que empuña el Chuk Kun, mientras la otra mano punza el pecho del oponente con el mango del Tang Bong." },
          { number: 3, description: "Ataca golpe horizontal hacia adentro. Se mete por dentro, la mano libre controla el mango del Chuk Kun. Con el extremo largo del Tan Bong se hace girar el codo parecido a #7 de puño con llave." },
          { number: 4, description: "Ataca golpe horizontal hacia adentro. Se mete por dentro, la mano libre controla el mango del Chuk Kun. Con el extremo largo del Tan Bong y la palma hacia arriba, engarza la nuca para lanzar." },
          { number: 5, description: "Ataca golpe horizontal hacia fuera. Anticipando un poco el ataque, por fuera, golpea con el mango del Tang Bong en la sien. Esa misma mano la mete por de bajo de los brazos del oponente, agarra su axila o costado, para lanzar de cadera." },
          { number: 6, description: "Ataca golpe horizontal hacia fuera. Por fuera la mano libre Batang Son Mon Tong Maki, simultáneamente, con el Tang Bong se punzan los genitales. La mano libre Domina el mango del Chuk Kun, barre con Dichuk Miro Chagui. Desarma." },
          { number: 7, description: "Ataca golpe vertical ascendente por dentro. Al tener el oponente el brazo ya extendido, pero sin empezar el ascenso, con el Tang Bong se golpea la muñeca derecha. La mano libre, agarra la mano derecha del atacante para hacer como #15 de mano igual." },
          { number: 8, description: "Ataca golpe vertical ascendente. Hace como tenaza. El Tang Bong se mete por debajo de la mano derecha. La mano izquierda va al codo del atacante. Tumba. Remata." },
          { number: 9, description: "Ataca punzón al tronco. Anticipando un poco el ataque, por fuera, (ayudado un poco por la mano izquierda) golpea con el mango del Tang Bong la muñeca derecha. Luego, entierra el mango del Tang Bong en la garganta a la vez que hace Dichuk Miro Chagui. Remata." },
          { number: 10, description: "Ataca punzión alta. Se mete por dentro, la mano libre controla el mango del" }
        ]
      }
    ]
  },
  {
    grade: "Negro 4 Dan",
    groups: [
      {
        group: "10 TI SUL - Técnicas de cinturón",
        techniques: [
          {
            number: 1,
            description: "Ataca puño derecho. Bloquea por dentro (con el cinturón extendido de forma vertical). Gira el cuerpo y golpea con el cinturón."
          },
          {
            number: 2,
            description: "Ataca puño derecho. Bloquea por dentro (con el cinturón extendido de forma vertical) mano derecha arriba. Con la mano de arriba amarra la mano del atacante y #18. En el suelo ahorca al atacante con el extremo libre del cinturón."
          },
          {
            number: 3,
            description: "Ataca puño derecho. Frena con patada al abdomen. Con la mano izquierda lanza el cinturón por la espalda del atacante para envolver nuca y garganta. Con la mano izquierda y por debajo de la derecha agarra la punta lanzada y hace el mismo giro de la #18 de técnicas básicas."
          },
          {
            number: 4,
            description: "Ataca puño derecho. Bloquea por fuera (con el cinturón extendido de forma vertical) mano izquierda arriba. Con la mano izquierda amarra la mano del atacante y hace el mismo giro de la #9 de técnicas básicas. Remata en el suelo."
          },
          {
            number: 5,
            description: "Ataca puño derecho. Bloquea por fuera (con el cinturón extendido de forma vertical) mano izquierda arriba. Con la mano izquierda amarra la mano del atacante. Y se mete como 20 de técnicas básicas. Con el extremo libre enlaza la garganta, y espalda con espalda lanza de cadera al oponente. Remata en el suelo."
          },
          {
            number: 6,
            description: "Ataca puño derecho. Frena con patada a genitales. Bloquea por dentro (con el cinturón extendido de forma vertical) mano derecha arriba. Envuelve la mano del atacante a la vez que con el extremo libre envuelve la garganta y hala para tumbar y estrangular."
          },
          {
            number: 7,
            description: "Ataca puño derecho. Bloquea por dentro (con el cinturón extendido de forma vertical) mano derecha arriba. Con la mano de arriba amarra la mano del atacante y #18 por encima del hombro y del cuerpo, pero no palanquea el hombro."
          },
          {
            number: 8,
            description: "Ataca puño derecho. Patea el abdomen. Bloquea por debajo (con el cinturón extendido de forma horizontal). Amarra la mano y hace #16 de técnicas básicas."
          },
          {
            number: 9,
            description: "Ataca puño derecho. Patea el abdomen. Bloquea por debajo (con el cinturón extendido de forma horizontal). Amarra la mano y hace como la media #18 de técnicas básicas."
          },
          {
            number: 10,
            description: "Ataca puño derecho. Patea el abdomen. Bloquea por debajo (con el cinturón extendido de forma horizontal). Amarra la mano. Mete la mano agarrante entre las piernas del agresor y lanza. Al caer lo voltea y le amarra la pierna."
          }
        ]
      },
      {
        group: "10 Defensa de Chuk Kun contra mano vacía.",
        techniques: [
          {
            number: 1,
            description: "Ataca golpe vertical descendente. Al cargar el ataque y antes que el Chuk Kun empiece a descender, Ap Chagui a los genitales. Con ambas manos agarra el Chuk Kun. Lanza de cadera por el costado."
          },
          {
            number: 2,
            description: "Ataca golpe vertical descendente. Al cargar el ataque y antes que el Chuk Kun empiece a descender, Ap Chagui a los genitales. Con ambas manos agarra el Chuk Kun. Barre por la espalda."
          },
          {
            number: 3,
            description: "Ataca golpe horizontal hacia adentro. Sigue el flujo y hace como media #16 de mano contraria, lanza."
          },
          {
            number: 4,
            description: "Ataca golpe horizontal hacia adentro. Sigue el flujo. La mano de atrás controla el Chuk Kun, la otra se apoya en la axila izquierda (palma hacia arriba). Lanza."
          },
          {
            number: 5,
            description: "Ataca golpe horizontal hacia fuera. Hace como #26 de cuchillo."
          },
          {
            number: 6,
            description: "Ataca golpe horizontal hacia fuera, con giro. Agarra el brazo derecho y lanza por el hombro, de cadera."
          },
          {
            number: 7,
            description: "Ataca golpe vertical ascendente. Esquiva y deja pasar el ataque para hacer como #1 de técnicas contra agarre a ambos brazos."
          },
          {
            number: 8,
            description: "Ataca golpe vertical ascendente. Antes que el ataque empiece a ascender, pone una mano sobre la muñeca y la otra sobre el codo, agarra. Palanquea el codo arrastrando hacia el piso."
          },
          {
            number: 9,
            description: "Ataca punción al tronco. Sale por fuera mientras hace como #5 de puño con llave, pero sin soltar. Remata lanzando con #16 de de mano contraria."
          },
          {
            number: 10,
            description: "Ataca punción alta. Se defiende haciendo #19 de Judo."
          }
        ]
      },
      {
        group: "10 Tang Kun Sul - Tang Bong Sul (Defensa contra cuchillo con palo corto)",
        techniques: [
          {
            number: 1,
            description: "Ataca golpe vertical descendente. Al cargar el ataque y antes que el Chuk Kun empiece a descender punza la garganta."
          },
          {
            number: 2,
            description: "Ataca golpe vertical descendente. Al cargar el ataque y antes que el Chuk Kun empiece a descender, con la mano libre retiene la mano que empuña el Chuk Kun, mientras la otra mano punza el pecho del oponente con el mango del Tang Bong."
          },
          {
            number: 3,
            description: "Ataca golpe horizontal hacia adentro. Se mete por dentro, la mano libre controla el mango del Chuk Kun. Con el extremo largo del Tan Bong se hace girar el codo parecido a #7 de puño con llave."
          },
          {
            number: 4,
            description: "Ataca golpe horizontal hacia adentro. Se mete por dentro, la mano libre controla el mango del Chuk Kun. Con el extremo largo del Tan Bong y la palma hacia arriba, engarza la nuca para lanzar."
          },
          {
            number: 5,
            description: "Ataca golpe horizontal hacia fuera. Anticipando un poco el ataque, por fuera, golpea con el mango del Tang Bong en la sien. Esa misma mano la mete por debajo de los brazos del oponente, agarra su axila o costado, para lanzar de cadera."
          },
          {
            number: 6,
            description: "Ataca golpe horizontal hacia fuera. Por fuera la mano libre Batang Son Mon Tong Maki, simultáneamente, con el Tang Bong se punzan los genitales. La mano libre domina el mango del Chuk Kun, barre con Dichuk Miro Chagui. Desarma."
          },
          {
            number: 7,
            description: "Ataca golpe vertical ascendente por dentro. Al tener el oponente el brazo ya extendido, pero sin empezar el ascenso, con el Tang Bong se golpea la muñeca derecha. La mano libre, agarra la mano derecha del atacante para hacer como #15 de mano igual."
          },
          {
            number: 8,
            description: "Ataca golpe vertical ascendente. Hace como tenaza. El Tang Bong se mete por debajo de la mano derecha. La mano izquierda va al codo del atacante. Tumba. Remata."
          },
          {
            number: 9,
            description: "Ataca punción al tronco. Anticipando un poco el ataque, por fuera, (ayudado un poco por la mano izquierda) golpea con el mango del Tang Bong la muñeca derecha. Luego, entierra el mango del Tang Bong en la garganta a la vez que hace Dichuk Miro Chagui. Remata."
          },
          {
            number: 10,
            description: "Ataca punción alta. Se mete por dentro, la mano libre controla el mango del"
          }
        ]
      }
    ]
  }
];
