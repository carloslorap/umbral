export type Estado = "En planos" | "En construcción" | "Entrega inmediata";

export interface Proyecto {
  id: string;
  nombre: string;
  distrito: string;
  direccion: string;
  dormitorios: number[];
  areaMin: number;
  areaMax: number;
  precioDesde: number;
  estado: Estado;
  entrega: string;
}

export const proyectos: Proyecto[] = [
  {
    id: "residencial-cuba",
    nombre: "Residencial Cuba",
    distrito: "Jesús María",
    direccion: "Av. Cuba 645",
    dormitorios: [2, 3],
    areaMin: 62,
    areaMax: 94,
    precioDesde: 389000,
    estado: "En construcción",
    entrega: "Marzo 2027",
  },
  {
    id: "parque-salaverry",
    nombre: "Parque Salaverry",
    distrito: "Jesús María",
    direccion: "Jr. Huiracocha 1820",
    dormitorios: [1, 2, 3],
    areaMin: 41,
    areaMax: 88,
    precioDesde: 279000,
    estado: "En planos",
    entrega: "Diciembre 2027",
  },
  {
    id: "mirador-brasil",
    nombre: "Mirador Brasil",
    distrito: "Magdalena",
    direccion: "Av. Brasil 3990",
    dormitorios: [2, 3],
    areaMin: 58,
    areaMax: 82,
    precioDesde: 345000,
    estado: "Entrega inmediata",
    entrega: "Listo para mudarte",
  },
  {
    id: "casona-bolivar",
    nombre: "Casona Bolívar",
    distrito: "Pueblo Libre",
    direccion: "Av. Bolívar 1215",
    dormitorios: [2, 3],
    areaMin: 65,
    areaMax: 102,
    precioDesde: 412000,
    estado: "En construcción",
    entrega: "Julio 2027",
  },
  {
    id: "alto-pershing",
    nombre: "Alto Pershing",
    distrito: "Magdalena",
    direccion: "Av. Pershing 510",
    dormitorios: [1, 2],
    areaMin: 38,
    areaMax: 64,
    precioDesde: 259000,
    estado: "En planos",
    entrega: "Febrero 2028",
  },
  {
    id: "jardines-lince",
    nombre: "Jardines de Lince",
    distrito: "Lince",
    direccion: "Av. Arequipa 2450",
    dormitorios: [1, 2, 3],
    areaMin: 44,
    areaMax: 86,
    precioDesde: 298000,
    estado: "Entrega inmediata",
    entrega: "Listo para mudarte",
  },
];

// Distritos únicos, en el orden en que aparecen
export const distritos = [...new Set(proyectos.map((p) => p.distrito))];
