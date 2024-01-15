import Image from "next/image";
import Link from "next/link";
import { projects } from "@/app/data";

interface Props {
  params: string;
}

const Project: React.FC<Props> = ({ params: { id } }) => {
  const project = projects.find((project) => project.id === id);
  if (!project) {
    return <div> This page does not exist </div>;
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <Image
        src={project.imgUrl}
        width={400}
        height={600}
        alt={project.title}
      />
      <p>{project.description}</p>
    </div>
  );
};

export default Project;
