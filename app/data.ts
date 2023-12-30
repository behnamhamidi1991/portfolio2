interface ProjectItems {
  id: number;
  title: string;
  description: string;
  imgUrl: string;
}

export const projects: ProjectItems[] = [
  {
    id: 1,
    title: "Travel Website",
    description: "This is a travel website",
    imgUrl: "/projects/travel.jpg",
  },
  {
    id: 2,
    title: "Course Selling React Project",
    description: "This is a travel website",
    imgUrl: "/projects/smarterdev.jpg",
  },
  {
    id: 3,
    title: "React TodoApp",
    description: "This is a travel website",
    imgUrl: "/projects/todo.jpg",
  },
  {
    id: 4,
    title: "Portfolio with Next.js",
    description: "This is a travel website",
    imgUrl: "/projects/portfolio.jpg",
  },
];
