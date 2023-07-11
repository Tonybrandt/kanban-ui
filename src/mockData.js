import { v4 as uuidv4 } from "uuid";

const mockData = [
  {
    id: uuidv4(),
    title: "📋 Por hacer",
    tasks: [
      {
        id: uuidv4(),
        title: "Estudiar JavaScript",
      },
      {
        id: uuidv4(),
        title: "Estudiar React",
      },
      {
        id: uuidv4(),
        title: "Estudiar PHP",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "📝 En progreso",
    tasks: [
      {
        id: uuidv4(),
        title: "Curso JavaScript",
      },
      {
        id: uuidv4(),
        title: "Curso React",
      },
      {
        id: uuidv4(),
        title: "Curso PHP",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "✅ Completado",
    tasks: [
      {
        id: uuidv4(),
        title: "Curso HTML",
      },
      {
        id: uuidv4(),
        title: "Curso CSS",
      }
    ],
  }
];

export default mockData;
