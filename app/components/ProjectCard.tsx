
type ProjectCardProps = {
    title: string;
    description: string;
    githubUrl: string;
  };
  
  export default function ProjectCard({ title, description, githubUrl }: ProjectCardProps) {
    return (
      <div className="p-4 border rounded-lg shadow-lg bg-white">
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <h3 className="text-xl font-semibold hover:underline">{title}</h3>
        </a>
        <p className="text-gray-700 mt-2">{description}</p>
      </div>
    );
  }
  
  