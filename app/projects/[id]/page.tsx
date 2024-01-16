import Image from "next/image";
import Link from "next/link";
import { projects } from "@/app/data";
import styles from "./project.module.css";

const Project = ({ params: { id } }: any) => {
  const project = projects.find((project) => project.id === id);
  if (!project) {
    return <div> This page does not exist </div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <Image
            src={project.imgUrl}
            width={400}
            height={600}
            alt={project.title}
            className={styles.image}
          />
        </div>
        <div className={styles.btnContainer}>
          <Link
            href={project.demoLink}
            className="bg-gradient-to-r from-purple-700 to-cyan-600 mx-2 py-3 px-4"
          >
            Demo
          </Link>
          <Link href={project.codeLink} className={styles.btnTwo}>
            Code
          </Link>
        </div>
      </div>

      <div className={styles.description}>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default Project;
