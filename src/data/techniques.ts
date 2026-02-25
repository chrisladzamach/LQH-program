export interface Techniques {
  number: number;
  description: string;
}

export interface Subgroup {
  subgroup: string;
  techniques: Techniques[]
}

export interface Group {
  name: string;
  subgroup?: Subgroup[];
  techniques?: Techniques[];
}
export const techniquesContent: Group[] = [
  {
    name: "Agarre lineal de muñeca", subgroup: [
      {
        subgroup: "Muñeca", techniques: [
          { number: 1, description: "Abre la mano, hace un chuzón a los ojos con la palma hacia arriba, y luego, pega un puño con el nudillo medio a los metacarpos de la mano que sujeta." },
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
        ]
      }
    ]
  }
]