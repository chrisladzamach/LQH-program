// Interfaces

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
          { item: 1, description: "Llave de muñeca hacia afuera" },
          { item: 2, description: "Proyección circular" }
        ]
      },
      {
        title: "Básicos sin armas",
        items: [
          { item: 1, description: "Puño doble con paso cruzado" }
        ]
      },
      {
        title: "Básicos con armas",
        items: [
          { item: 1, description: "Corte lateral con bastón corto" }
        ]
      },
      {
        title: "Figuras",
        items: [
          { item: 1, description: "Figura básica 2 – Dan Gun" }
        ]
      },
      {
        title: "Figuras sin armas",
        items: [
          { item: 1, description: "Desarme frontal sin armas" }
        ]
      },
      {
        title: "Gimnasia",
        items: [
          { item: 1, description: "Rollo atrás" },
          { item: 2, description: "Caída frontal" }
        ]
      },
      {
        title: "Patadas",
        items: [
          { item: 1, description: "Dollyo Chagui (Patada circular)" }
        ]
      }
    ]
  }
  // Continúa agregando más colores: naranja, verde, azul, etc.
];
