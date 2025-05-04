export interface PoomsaeStep {
  step: number;
  description: string;
}

export interface Poomsae {
  name: string;
  type: "JoongDo" | "Won";
  steps: PoomsaeStep[];
}

export interface GradePoomsae {
  grade: string;
  poomsae: Poomsae;
}

export const poomsaesData: GradePoomsae[] = [
  {
    grade: "Blanco",
    poomsae: {
      name: "Joong Do Il Dan",
      type: "JoongDo",
      steps: [
        { step: 1, description: "Chumbi, Inicio de Joong-do." },
        { step: 2, description: "A la izquierda en Ap Kubi, Montong Bakkat Pal Makki, Montong Chumok Chirigui, Ap Chagui, cae adelante en Ap Kubi y Montong Chumok Chirigui." },
        { step: 3, description: "Realiza el paso 2 al otro lado." },
        { step: 4, description: "Por el callejón: Mueve el pie izquierdo para meterse al callejón, Orum  Are Pal  Makki, Montong Chumok Chigui, avanza en Ap Kubi dejando el puño extendido al frente, hace Montong An Makki, Olgul Makki (transición en Bom Sogui), al pasar al Ap Kubi golpea Montong Chumok, repite este paso 3 veces. (Grito)." },
        { step: 5, description: "Gira por la espalda en Ohja Sogui Kun Gam Iop Chumok, la mano que bloque punza con Pion Son Kup palma hacia arriba por debajo del brazo que golpea. Luego la mano que estaba golpeando (izquierda) hace Son Nal Bakkat Chirigui en Dip Kubi." },
        { step: 6, description: "Recoge la pierna de adelante y realiza el paso 5 al otro lado." },
        { step: 7, description: "Por el callejón de regreso: En Moap Sogui bloquea Dul Pal Montong An Makki, Are Jecho Makki. En Koap Sogui bloquea Are Sonal Dung Makki y Chumok con la palma hacia arriba (la mano y el brazo forman un ángulo de 90°), mano derecha. Repite luego con la mano izquierda. Avanza en Koap Sogui con pierna derecha por delante a la vez que agarra y trae al enemigo. Patea Wen Iop Chagui. Cae y da un giro completo para bloquear Montong Son Nal Bakkat Makki en Andari Sogui (pierna derecha mano izqueirda), cae atras en Agun Son Chirigui (pierna izquierda adelante). (Grito)." },
        { step: 8, description: "Gira al lado derecho por el frente moviendo el pie izquierdo en Ap Sogui a la vez que realiza Montong An Son Nal Makki y Bakkat Son Nal Chigui con la misma mano, avanza pierna derecha adelante y golpea en Agun Son." },
        { step: 9, description: "Gira por delante, realiza el paso 8 al otro lado." },
        { step: 10, description: "Recoge la pierna izquierda para terminar en Chumbi." }
      ]
    }
  },
  {
    grade: "Amarillo",
    poomsae: {
      name: "Joong Do 2",
      type: "JoongDo",
      steps: [
        { step: 1, description: "Posición juchum-seogi con guardia media" },
        { step: 2, description: "Giro con defensa interior" },
        { step: 3, description: "Patada circular con pierna trasera" },
        { step: 4, description: "Golpe descendente" },
        { step: 5, description: "Guardia neutral final" }
      ]
    }
  },
  {
    grade: "Marrón",
    poomsae: {
      name: "Won 1",
      type: "Won",
      steps: [
        { step: 1, description: "Inicio con defensa cruzada" },
        { step: 2, description: "Patada lateral" },
        { step: 3, description: "Giro rápido hacia la izquierda" },
        { step: 4, description: "Golpe de martillo" },
        { step: 5, description: "Posición final firme" }
      ]
    }
  }
  // Agrega más si necesitas
];
