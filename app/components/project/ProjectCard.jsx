const ProjectCard = ({ data }) => {
  const { title, description, date, view_demo, source_code, image } = data;

  return (
    <div className="bg-black/70 w-full backdrop-blur-xs mb-4 p-4 rounded-lg">
      <div className="w-full flex items-center justify-center rounded-lg overflow-hidden h-60 mb-4">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={
            image?.formats?.small?.url 
              ? `http://localhost:1337${image.formats.small.url}`
              : "/public/images/no-image.png"
          }
          alt={title}
        />
      </div>

      <div className="flex flex-col grow">
        <h3 className="text-center mb-4 capitalize font-bold text-xl">
          {title}
        </h3>

        <p className="text-xs grow">{description}</p>

        <span className="text-xs block text-right mb-2">
          {new Date(date).toDateString()}
        </span>

        <div className="flex justify-center gap-4">
          <a
            className="p-3 w-36 text-center text-sm font-bold bg-blue-700 rounded-xl hover:bg-blue-600 transition"
            href={view_demo}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Demo
          </a>

          <a
            className="p-3 w-36 text-center text-sm font-bold bg-green-600 rounded-xl hover:bg-green-500 transition"
            href={source_code}
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
