import { NavLink } from "react-router";

const BlogCard = ({ data }) => {
  const { slug, title, excerpt, date, image } = data;
  return (
    <>
      <div
        className="bg-black/70 w-full h-full flex flex-col backdrop-blur-xs 
      mb-4 p-4 rounded-lg"
      >
        {/* image */}

        <div
          className="w-full flex items-center justify-center rounded-xl 
        overflow-hidden h-60 mb-4"
        >
          <img
            className=" object-cover w-full h-full"
            src={
              image?.url
                ? `${image.url}`
                : "/public/images/no-image.png"
            }
            alt={title}
          />
        </div>
        {/* content */}

        <div className="flex flex-col grow">
          <h3 className="text-center mb-2 md:min-h-22 capitalize font-bold text-xl ">
            {title}
          </h3>
          <p className="text-xs line-clamp-4 grow">{excerpt}</p>
          <span className="text-xs block text-right mb-2">
            {new Date(date).toDateString()}
          </span>
          <NavLink
            className="bg-blue-700 text-white px-4 py-3 rounded-xl text-sm font-bold capitalize w-34 flex 
            justify-between items-center hover:bg-blue-600 transition "
            to={`/blog/${slug}`}
          >
            read more<span>➞</span>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
