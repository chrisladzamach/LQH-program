// nunchakuData.ts

export interface MugiChase {
    num: number;
    description: string;
}

export interface MugiData {
    NunchakusSencillo: MugiChase[];
    NunchakusDobles: MugiChase[];
    JangBong: MugiChase[];
}
  
export const mugiData: MugiData = {
    NunchakusSencillo: [
        { num: 1, description: "Medio círculo hacia al frente y hacia arriba y cambio de mano." },
        { num: 2, description: "Vuelta por dentro y cambio de mano." },
        { num: 3, description: "Vuelta por dentro, por fuera y cambio de mano." },
        { num: 4, description: "Cambios por debajo del hombro y hacia arriba." },
        { num: 5, description: "Golpe abajo al lado contrario, al otro lado, sube y cambia de mano." },
        { num: 6, description: "3 giros hacia el frente bajando y 3 giros hacia atrás subiendo y cambia de mano." },
        { num: 7, description: "Igual que 4+3 sube y cambia de mano." },
        { num: 8, description: "Igual que 5 reemplazando el último golpe con un giro por fuera hacia atrás y cambia de mano." },
        { num: 9, description: "Inicia como 5 y envía el Nunchaku por entre las piernas, sube como 1 y cambia de mano." },
        { num: 10, description: "Golpes hacia adentro y a la cabeza cambiando de mano a lado y lado." },
        { num: 11, description: "Desde la axila giro al frente y por dentro." },
        { num: 12, description: "Igual que 11 cambiando de mano iniciando con mano cruzada." },
        { num: 13, description: "Igual que 11 pero el giro por fuera." },
        { num: 14, description: "Igual que 13 cambiando de mano iniciando con mano cruzada." },
        { num: 15, description: "Igual que 11 pero el giro por dentro y por fuera." },
        { num: 16, description: "Igual que 15 cambiando de mano iniciando con mano cruzada." },
        { num: 17, description: "Igual que 15 pero un lado." },
        { num: 18, description: "Igual que 17 cambiando de mano iniciando con mano cruzada." },
        { num: 19, description: "Igual que 18 pero cambia de lado pasando el Nunchaku por el cuello y desenvuelve terminando el 18." },
        { num: 20, description: "Igual que 4 invertido." },
        { num: 21, description: "Igual que 15 devuelve con el filo de la otra mano." },
        { num: 22, description: "Igual que 17 a un lado, sigue el giro, pasa por detrás terminado con 3 a un lado." },
        { num: 23, description: "Igual que 4 por detrás." },
        { num: 24, description: "Vuelta por encima y 5." },
        { num: 25, description: "Igual 24 cambiando el último golpe por un giro horizontal hacia afuera seguido de un giro vertical hacia el frente (para abajo)." },
        { num: 26, description: "Pasa el Nunchaku por la muñeca hacia atrás varias veces." },
        { num: 27, description: "Giro por dentro, giro por fuera pasando por la mano por fuera y luego por dentro varias veces." },
        { num: 28, description: "Igual que 24, pasa el Nunchaku por debajo como 26 y sube con 27 y 3." },
        { num: 29, description: "Igual que 28 pero con doble 27." },
        { num: 30, description: "Equis por lado y lado pasando por encima de la mano igual que 26." },
        { num: 31, description: "Igual que 26 abajo con un giro posterior." },
        { num: 32, description: "Igual que 31 pero pasando de mano." },
        { num: 33, description: "Igual que 31 pero en el medio." },
        { num: 34, description: "Igual que 19 pero con cambios como 31." },
        { num: 35, description: "Igual que 27 pero frenando el último giro quedando vertical, devuelve y vuelve a empezar." },
        { num: 36, description: "Igual que 27 pero devuelve con la mano contraria como 21 y sube con 27 cambia de mano y vuelve a empezar." },
        { num: 37, description: "1ra parte del primer callejón de I Chol Bong I Dan, solo el 24 terminando al otro lado." },
        { num: 38, description: "2da parte del primer callejón de I Chol Bong I Dan." },
        { num: 39, description: "3ra parte del primer callejón de I Chol Bong I Dan como el anterior pero pasando por detrás para iniciar por el otro lado." },
        { num: 40, description: "Are Bakkat Makki con el Nunchaku sube y cambia de lado, ejecuta 5 a la vez que hace un giro por el frente para quedar en el otro lado y vuelve a empezar." },
    ],
    NunchakusDobles: [
        { num: 1, description: "1 sim" },
        { num: 2, description: "2 sim" },
        { num: 3, description: "3 sim" },
        { num: 4, description: "4 Hombro, axila (sim)" },
        { num: 5, description: "4 trocada" },
        { num: 6, description: "6 sim" },
        { num: 7, description: "7 desde abajo" },
        { num: 8, description: "7, 15 desde axilas (sim)" },
        { num: 9, description: "7, 15, 13 (sim)" },
        { num: 10, description: "11 (sim)" },
        { num: 11, description: "13 (sim)" },
        { num: 12, description: "15 (sim)" },
        { num: 13, description: "17 (sim)" },
        { num: 14, description: "5 (alt)" },
        { num: 15, description: "8 (alt)" },
        { num: 16, description: "9 (alt) vuelta adentro afuera y arriba" },
        { num: 17, description: "Medio 24 (alt)" },
        { num: 18, description: "25 (alt)" },
        { num: 19, description: "10 (alt)" },
        { num: 20, description: "5 (sim)" },
        { num: 21, description: "8 (sim)" },
        { num: 22, description: "9 (sim)" },
        { num: 23, description: "10 (sim)" },
        { num: 24, description: "24 (sim)" },
        { num: 25, description: "25 (sim)" },
        { num: 26, description: "X adelante (sim)" },
        { num: 27, description: "X atrás (sim)" },
        { num: 28, description: "26 (sim)" },
        { num: 29, description: "27 (sim)" },
        { num: 30, description: "Disociado (17/15)" }
    ],
    JangBong: [
        { num: 1, description: "Recoge desde el piso con el pie" },
        { num: 2, description: "Descarga con el pie" },
        { num: 3, description: "Desliza entre las manos a lado y lado" },
        { num: 4, description: "Lanza un extremo y coge el otro (una mano) ±" },
        { num: 5, description: "4 pero cambiando de mano ±" },
        { num: 6, description: "Remo ±" },
        { num: 7, description: "Igual que 6 caminando de frente y de espaldas ±" },
        { num: 8, description: "Igual que 6 girando ±" },
        { num: 9, description: "Ventilador ±" },
        { num: 10, description: "Remo con una mano ±" },
        { num: 11, description: "10 cambiando de mano con 9 ±" },
        { num: 12, description: "Helicóptero ±" },
        { num: 13, description: "Igual que 12 y pasa girándolo por la espalda ±" },
        { num: 14, description: "Igual que 13 pero arrodillándose y levantándose ±" },
        { num: 15, description: "Igual que 13 pero solo arrodillado ±" },
        { num: 16, description: "Giros adentro y afuera sostenido de la punta ±" },
        { num: 17, description: "Igual que 16 pero con las dos manos ±" },
        { num: 18, description: "Giros igual que 16 pero terminando golpeando el piso." },
        { num: 19, description: "Envaina y desenvaine" },
        { num: 20, description: "Lanza por el cuello igual que 19 de Nunchacos, y recibe al otro lado" },
        { num: 21, description: "Punzón como lanza alta" },
        { num: 22, description: "Giro por la espalda y punzón de lanza" }
    ]
};
  