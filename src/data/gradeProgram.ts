export interface GradeItem {
  item: number;
  description: string;
}

export interface GradeSection {
  title: string;
  items: GradeItem[];
}

export interface GradeProgram {
  color: string;
  duration: string;
  sections: GradeSection[];
}

export const gradeProgramData: GradeProgram[] = [
  {
    color: "blanco",
    duration: "4 meses",
    sections: [
      {
        title: "Llaves",
        items: [
          { item: 1, description: "15 Técnicas de defensa personal mano igual" },
          { item: 2, description: "5 Técnicas de defensa personal mano diferente" },
        ]
      },
      {
        title: "Básicos sin armas",
        items: [
          { item: 1, description: "1er Básico en cuadrado." },
          { item: 2, description: "1er Básico de respiración (1/3)." },
        ]
      },
      {
        title: "Básicos con armas",
        items: [
          { item: 1, description: "10 Movimientos básicos con nunchakus" }
        ]
      },
      {
        title: "Figuras sin armas",
        items: [
          { item: 1, description: "Joong Do Il Dan (esquema)" }
        ]
      },
      {
        title: "Gimnasia",
        items: [
          { item: 1, description: "Rollo básico adelante" },
          { item: 2, description: "Rollo básico hacia atrás" },
          { item: 3, description: "Rollo básico lateral izquierdo" },
          { item: 4, description: "Rollo básico lateral derecho" },
          { item: 5, description: "Caída básica frontal" },
          { item: 6, description: "Caída básica hacia atrás" },
          { item: 7, description: "Caída básica lateral izquierda" },
          { item: 8, description: "Caída básica lateral derecha" },
          { item: 9, description: "Caída básica levantando cadera" }
        ]
      },
      {
        title: "Patadas",
        items: [
          { item: 1, description: "Ap Chagi" },
          { item: 2, description: "Dwip Chagi" },
          { item: 3, description: "Yop Chagi" },
          { item: 4, description: "Dollyo Chagi" },
          { item: 5, description: "Bandal Chagi" },
          { item: 6, description: "An Dary Chagi" },
          { item: 7, description: "Bakkat Dary Chagi" },
          { item: 8, description: "Twit Dollyo Chagi" },
          { item: 9, description: "Huryeo Chagi" },
          { item: 10, description: "An Dary Chanoky Chagi" },
          { item: 11, description: "Chokto Dollygi Chagi" },
          { item: 12, description: "Mureup Chagi" }
        ]
      }
    ]
  },
  {
    color: "amarillo",
    duration: "4 meses",
    sections: [
      {
        title: "Llaves",
        items: [
          { item: 1, description: "28 Técnicas de defensa personal mano igual." },
          { item: 2, description: "10 Técnicas de defensa personal mano diferente."}
        ]
      },
      {
        title: "Básicos sin armas",
        items: [
          { item: 1, description: "2do Básico en cuadrado." },
          { item: 2, description: "1er Básico de respiración (2/3)." },

        ]
      },
      {
        title: "Básicos con armas",
        items: [
          { item: 1, description: "20 móvimientos básicos con nunchakus." }
        ]
      },
      {
        title: "Figuras",
        items: [
          { item: 1, description: "Joong Do Il Dan" }
        ]
      },
      {
        title: "Gimnasia",
        items: [
          { item: 1, description: "Rollos y caidas desde la posición de pie." },
          { item: 2, description: "Media luna por derecha y por izquierda." },
          { item: 3, description: "Rondo." },
        ]
      },
      {
        title: "Patadas",
        items: [
          { item: 1, description: "Todas las patadas saltando." }
        ]
      }
    ]
  },

  {
    color: "naranja",
    duration: "4 meses",
    sections: [
      {
        title: "Llaves",
        items: [
          { item: 1, description: "46 Técnicas de defensa personal mano igual" },
          { item: 2, description: "15 Técnicas de defensa personal mano diferente" }
        ]
      },
      {
        title: "Básicos sin armas",
        items: [
          { item: 1, description: "3er Básico en cuadrado." },
          { item: 2, description: "1er Básico de respiración." },
          { item: 3, description: "Básico de Hak Dary" }
        ]
      },
      {
        title: "Básicos con armas",
        items: [
          { item: 1, description: "25 Movimientos básicos con nunchakus" }
        ]
      },
      {
        title: "Figuras sin armas",
        items: [
          { item: 1, description: "Won Il Dan" }
        ]
      },
      {
        title: "Gimnasia",
        items: [
          { item: 1, description: "Todos los rollos y caidas, saltantando" },
          { item: 2, description: "Recuperación" },
          { item: 3, description: " Parada de manos de frente y hacia atrás." },
        ]
      },
      {
        title: "Patadas",
        items: [
          { item: 1, description: "Todas las patadas, con giro." },
        ]
      }
    ]
  },

  {
    color: "verde",
    duration: "4 meses",
    sections: [
      {
        title: "Llaves",
        items: [
          { item: 1, description: "10 Técnicas de puño contra puño." },
          { item: 2, description: "12 Técnicas de defensa contra agarres por la espalda." },
          { item: 3, description: "21 Técnicas de defensa contra agarres por la espalda con llave." }
        ]
      },
      {
        title: "Básicos sin armas",
        items: [
          { item: 1, description: "1er Básico de GeumGang" },
          { item: 2, description: "2do Básico de GeumGang" }
        ]
      },
      {
        title: "Básicos con armas",
        items: [
          { item: 1, description: "30 Movimientos básicos con nunchakus" }
        ]
      },
      {
        title: "Figuras sin armas",
        items: [
          { item: 1, description: "Joong Do I Dan" }
        ]
      },
      {
        title: "Figuras con armas",
        items: [
          { item: 1, description: "I Chol bong Il Dan" }
        ]
      },
      {
        title: "Gimnasia",
        items: [
          { item: 1, description: "Todos los rollos y caidas, saltantando" },
          { item: 2, description: "Recuperación, kit de nuca." },
          { item: 3, description: " Parada de manos de frente y hacia atrás." },
        ]
      },
      {
        title: "Patadas",
        items: [
          { item: 1, description: "Todas las patadas, con salto y giro." },
        ]
      }
    ]
  },
  {
    color: "azul",
    duration: "4 meses",
    sections: [
      {
        title: "Llaves",
        items: [
          { item: 1, description: "10 Técnicas de Patada contra puño." },
          { item: 2, description: "14 Técnicas de defensa contra abrazos." },
          { item: 3, description: "35 Técnicas de defensa contra agarres por la espalda con llave."}
        ]
      },
      {
        title: "Básicos sin armas",
        items: [
          { item: 1, description: "3er Básico de GeumGang" },
          { item: 2, description: "4to Básico de GeumGang" },
          { item: 3, description: "2do Básico de respiración. (1/2)" }
        ]
      },
      {
        title: "Básicos con armas",
        items: [
          { item: 1, description: "35 Movimientos básicos con nunchakus." },
          { item: 2, description: "10 Movimientos básicos con Jang Bong." }
        ]
      },
      {
        title: "Figuras sin armas",
        items: [
          { item: 1, description: "Won I Dan" }
        ]
      },
      {
        title: "Figuras con armas",
        items: [
          { item: 1, description: "Jang bong Il Dan" }
        ]
      },
      {
        title: "Gimnasia",
        items: [
          { item: 1, description: "Todos los rollos y caidas, saltantando" },
          { item: 2, description: "Recuperación, kit de nuca." },
          { item: 3, description: " Parada de manos de frente y hacia atrás." },
        ]
      },
      {
        title: "Patadas",
        items: [
          { item: 1, description: "Todas las patadas, con salto y giro." },
        ]
      }
    ]
  },
  {
    color: "purpura",
    duration: "4 meses",
    sections: [
      {
        title: "Llaves",
        items: [
          { item: 1, description: "16 Técnicas de defensa de sentados." },
          { item: 2, description: "46 Técnicas de defensa contra agarres por la espalda." }
        ]
      },
      {
        title: "Básicos sin armas",
        items: [
          { item: 1, description: "2do Básico de respiración." },
        ]
      },
      {
        title: "Básicos con armas",
        items: [
          { item: 1, description: "40 Movimientos básicos con nunchakus." },
          { item: 2, description: "20 Movimientos básicos con Jang Bong." },
          { item: 3, description: "Ataque y defensa con Jang Bong." }
        ]
      },
      {
        title: "Figuras sin armas",
        items: [
          { item: 1, description: "Joong Do Sam Dan" }
        ]
      },
      {
        title: "Figuras con armas",
        items: [
          { item: 1, description: "I Chol Bong I Dan" }
        ]
      },
      {
        title: "Gimnasia",
        items: [
          { item: 1, description: "Todos los rollos y caidas, saltantando" },
          { item: 2, description: "Recuperación, kit de nuca." },
          { item: 3, description: " Parada de manos de frente y hacia atrás." },
        ]
      },
      {
        title: "Patadas",
        items: [
          { item: 1, description: "Todas las patadas, con salto y giro." },
          { item: 2, description: "Sa Bal Chagi." },
        ]
      }
    ]
  },
  {
    color: "rojo",
    duration: "6 meses",
    sections: [
      {
        title: "Llaves",
        items: [
          { item: 1, description: "10 Técnicas de defensa contra agarre a dos brazos" }
        ]
      },
      {
        title: "Básicos sin armas",
        items: [
          { item: 1, description: "4to Básico en cuadrado." }
        ]
      },
      {
        title: "Básicos con armas",
        items: [
          { item: 1, description: "22 Movimientos básicos con Jang Bong." },
          { item: 2, description: "10 Movimientos básicos con Nunchakus dobles." }
        ]
      },
      {
        title: "Figuras sin armas",
        items: [
          { item: 1, description: "Won Sam Dan" },
        ]
      },
      {
        title: "Figuras con armas",
        items: [
          { item: 1, description: "Jang Bong I Dan" },
        ]
      },
      {
        title: "Gimnasia",
        items: [
          { item: 1, description: "Todos los rollos y caidas, saltantando" },
          { item: 2, description: "Recuperación, kit de nuca." },
          { item: 3, description: " Parada de manos de frente y hacia atrás." },
        ]
      },
      {
        title: "Patadas",
        items: [
          { item: 1, description: "Todas las patadas, con salto y giro." },
          { item: 2, description: "Sa Bal Chagi." },
        ]
      }
    ]
  },
  {
    color: "rojoMarron",
    duration: "8 meses",
    sections: [
      {
        title: "Llaves",
        items: [
          { item: 1, description: "14 Técnicas de defensa contra agarre a dos brazos." },
          { item: 2, description: "10 Técnicas de llave contra puño."},
          { item: 3, description: "16 Técnicas de saludo y conducción."},
        ]
      },
      {
        title: "Básicos sin armas",
        items: [
          { item: 1, description: "5to Básico en cuadrado." },
        ]
      },
      {
        title: "Básicos con armas",
        items: [
          { item: 3, description: "20 Movimientos básicos con Nunchakus dobles." },
        ]
      },
      {
        title: "Figuras sin armas",
        items: [
          { item: 1, description: "Joong Do Sa Dan" },
        ]
      },
      {
        title: "Figuras con armas",
        items: [
          { item: 1, description: "Jang Bong I Dan" },
        ]
      },
      {
        title: "Gimnasia",
        items: [
          { item: 1, description: "Todos los rollos y caidas, saltantando" },
          { item: 2, description: "Recuperación, kit de nuca." },
          { item: 3, description: " Parada de manos de frente y hacia atrás." },
        ]
      },
      {
        title: "Patadas",
        items: [
          { item: 1, description: "Todas las patadas, con salto y giro." },
          { item: 2, description: "Sa Bal Chagi." },
        ]
      }
    ]
  },
  {
    color: "marron",
    duration: "10 meses",
        sections: [
      {
        title: "Llaves",
        items: [
          { item: 1, description: "26 Técnicas de defensa contra agarres de Judo." }
        ]
      },
      {
        title: "Básicos con armas",
        items: [
          { item: 1, description: "30 Movimientos básicos con Nunchakus dobles." },
        ]
      },
      {
        title: "Figuras sin armas",
        items: [
          { item: 1, description: "Won Sa Dan" },
        ]
      },
      {
        title: "Figuras con armas",
        items: [
          { item: 1, description: "Jang Bong Sam Dan" },
        ]
      },
      {
        title: "Gimnasia",
        items: [
          { item: 1, description: "Todos los rollos y caidas, saltantando" },
          { item: 2, description: "Recuperación, kit de nuca." },
          { item: 3, description: " Parada de manos de frente y hacia atrás." },
        ]
      },
      {
        title: "Patadas",
        items: [
          { item: 1, description: "Todas las patadas, con salto y giro." },
          { item: 2, description: "Sa Bal Chagi." },
        ]
      }
    ]
  },
  {
    color: "marronNegro",
    duration: "12 meses",
        sections: [
      {
        title: "Llaves",
        items: [
          { item: 1, description: "16 Técnicas de defensa acostado." }
        ]
      },
      {
        title: "Figuras sin armas",
        items: [
          { item: 1, description: "Joong Do O' Dan" }
        ]
      },
      {
        title: "Figuras con armas",
        items: [
          { item: 1, description: "I Chol Bong Sam Dan" },
        ]
      },
      {
        title: "Gimnasia",
        items: [
          { item: 1, description: "Todos los rollos y caidas, saltantando" },
          { item: 2, description: "Recuperación, kit de nuca." },
          { item: 3, description: " Parada de manos de frente y hacia atrás." },
        ]
      },
      {
        title: "Patadas",
        items: [
          { item: 1, description: "Todas las patadas, con salto y giro." },
          { item: 2, description: "Sa Bal Chagi." },
        ]
      }
    ]
  },
  {
    color: "negro1",
    duration: "2 años",
    sections: [
      {
        title: "Llaves",
        items: [
          { item: 1, description: "20 Técnicas de llave contra patada." },
          { item: 2, description: "30 Técnicas de defensa contra cuchillo." },
          { item: 3, description: "Encadenamiento de técnicas." }
        ]
      },
      {
        title: "Básicos con armas",
        items: [
          { item: 1, description: "40 Chuk Kun Chase." },
          { item: 2, description: "22 Tang Bong Chase." },
        ]
      },
      {
        title: "Figuras sin armas",
        items: [
          { item: 1, description: "Joong Do O' Dan (música)" },
          { item: 2, description: "Joong Do Sa Dan (música)" },
        ]
      },
      {
        title: "Figuras con armas",
        items: [
          { item: 1, description: "Jang Bong Sa Dan" },
          { item: 2, description: "Dan Bong Il Dan" },
        ]
      },
      {
        title: "Gimnasia",
        items: [
          { item: 1, description: "Todos los rollos y caidas, saltantando" },
          { item: 2, description: "Recuperación, kit de nuca." },
          { item: 3, description: " Parada de manos de frente y hacia atrás." },
        ]
      },
      {
        title: "Patadas",
        items: [
          { item: 1, description: "Todas las patadas, con salto y giro." },
          { item: 2, description: "Todas las patadas se harán avanzando y con obstáculos."},
          { item: 3, description: "Sa Bal Chagi." },
        ]
      }
    ]
  },
  {
    color: "negro2",
    duration: "2 años",
    sections: [
      {
        title: "Llaves",
        items: [
          { item: 1, description: "60 Técnicas de defensa contra cuchillo." },
          { item: 2, description: "15 Técnicas de defensa con palo corto." },
          { item: 3, description: "20 Técnicas de defensa de mano vacía contra armas de fuego cortas y largas." },
          { item: 4, description: "10 Técnicas de defensa sentado en silla." },
        ]
      },
      {
        title: "Básicos con armas",
        items: [
          { item: 1, description: "Defensa de Chuk Kun con Tang Tong o Chuk Kun." },
          { item: 2, description: "Ataques y defensas con Sai." }
        ]
      },
      {
        title: "Figuras sin armas",
        items: [
          { item: 1, description: "Ki Hap" }
        ]
      },
      {
        title: "Figuras con armas",
        items: [
          { item: 1, description: "Chang Il Dan" },
          { item: 2, description: "Puche Il Dan" },
        ]
      },
      {
        title: "Gimnasia",
        items: [
          { item: 1, description: "Todos los rollos y caidas, saltantando" },
          { item: 2, description: "Recuperación, kit de nuca." },
          { item: 3, description: " Parada de manos de frente y hacia atrás." },
        ]
      },
      {
        title: "Patadas",
        items: [
          { item: 1, description: "Todas las patadas, con salto y giro." },
          { item: 2, description: "Todas las patadas se harán avanzando y con obstáculos."},
          { item: 3, description: "Sa Bal Chagi." },
        ]
      },
    ]
  },
  {
    color: "negro3",
    duration: "3 años",
    sections: [
      {
        title: "Llaves",
        items: [
          { item: 1, description: "14 Técnicas de defensa con bastón." },
          { item: 2, description: "10 Técnicas de desarmes de Tang Bong contra Chuk Kun." },
        ]
      },
      {
        title: "Básicos con armas",
        items: [
          { item: 1, description: "Enfundes y desenfundes de sable." }
        ]
      },
      {
        title: "Figuras con armas",
        items: [
          { item: 2, description: "Puche I Dan" },
        ]
      },
      {
        title: "Gimnasia",
        items: [
          { item: 1, description: "Todos los rollos y caidas, saltantando" },
          { item: 2, description: "Recuperación, kit de nuca." },
          { item: 3, description: " Parada de manos de frente y hacia atrás." },
        ]
      },
      {
        title: "Patadas",
        items: [
          { item: 1, description: "Todas las patadas, con salto y giro." },
          { item: 2, description: "Todas las patadas se harán avanzando y con obstáculos."},
          { item: 3, description: "Sa Bal Chagi." },
        ]
      },
    ] 
  },
  {
    color: "negro4",
    duration: "4 años",
    sections: [
      {
        title: "Llaves",
        items: [
          { item: 1, description: "10 Técnicas de defensa con cinturón." },
          { item: 2, description: "10 Técnicas de defensa con Chuk Kun con mano vacía." },
          { item: 3, description: "10 Técnicas de defensa contra cuchillo con Tang Bong." },
        ]
      },
      {
        title: "Básicos con armas",
        items: [
          { item: 1, description: "Manejo básico de sable." }
        ]
      },
    ]
  },
  {
    color: "negro5",
    duration: "5 años",
    sections: [
      {
        title: "Básicos con armas",
        items: [
          { item: 1, description: "Manejo de sable y aplicaciones reales de cortes." }
        ]
      }
    ]
  }
];
