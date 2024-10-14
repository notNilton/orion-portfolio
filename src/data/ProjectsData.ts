// Dados dos projetos


export const projects = [
  {
    id: 1,
    title: "Project 1",
    image:  "../../public/assets/image-test.png",
    duration: "3 months",
    shortDescription: "A web application to manage tasks.",
    longDescription:
      "This is a detailed task management app with collaboration features, role-based access control, and real-time notifications.",
    languages: ["JavaScript", "Python"],
    frameworks: ["React", "Django"],
    database: "PostgreSQL",
    features: [
      "Real-time collaboration",
      "Role-based access control",
      "Task prioritization",
    ],
    repository: "https://github.com/user/project1",
    status: "Active",
  },
  {
    id: 2,
    title: "Project 2",
    image:  "../../public/assets/image-test.png",
    duration: "6 months",
    shortDescription: "An e-commerce platform for small businesses.",
    longDescription:
      "This platform allows small businesses to create online stores, manage inventory, process payments, and handle customer orders with ease.",
    languages: ["TypeScript", "Node.js"],
    frameworks: ["Next.js", "Express"],
    database: "MongoDB",
    features: [
      "Inventory management",
      "Payment gateway integration",
      "Order tracking",
    ],
    repository: "https://github.com/user/project2",
    status: "In Progress",
  },
];
