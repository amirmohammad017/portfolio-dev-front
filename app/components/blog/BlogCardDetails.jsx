import { NavLink, useParams, useRouteLoaderData } from "react-router";
import { IoArrowBack } from "react-icons/io5";
import ReactMarkdown from "react-markdown";

const BlogCardDetails = () => {
  const { blogs } = useRouteLoaderData("root");
  const { slug } = useParams();

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return (
      <div
        className="max-w-2xl mx-auto text-center pt-10 bg-black/70 w-full h-80 
        flex flex-col justify-center backdrop-blur-xs mb-4 p-4 rounded-lg"
      >
        <h1 className="text-4xl font-bold mb-6">
          404 <br />
          no blog found...
        </h1>

        <NavLink
          to="/"
          className="p-4 bg-blue-700 w-42 rounded-xl 
          font-bold capitalize flex items-center justify-between"
        >
          <IoArrowBack size={20} className="font-extrabold" />
          go back home
        </NavLink>
      </div>
    );
  }

  const { title, date, image, body } = blog;

  return (
    <div
      className="max-w-2xl mx-auto bg-black/70 w-full h-full flex flex-col 
      backdrop-blur-xs mb-4 p-4 rounded-lg"
    >
      <h2 className="text-3xl font-extrabold text-center mb-6">{title}</h2>

      <span className="mb-2">{new Date(date).toDateString()}</span>

      <div className="rounded-lg mb-4">
        <img
          className="object-cover rounded-lg"
          src={
            image?.url
              ? `${image.url}`
              : "/public/images/no-image.png"
          }
          alt={title}
        />
      </div>

      <div className="mb-6 prose prose-invert">
        <ReactMarkdown>{body}</ReactMarkdown>
      </div>

      <NavLink
        to="/blog"
        className="bg-blue-700 px-2 py-3 rounded-xl w-34 font-bold flex 
        items-center justify-between text-sm capitalize"
      >
        <IoArrowBack size={20} />
        back to blogs
      </NavLink>
    </div>
  );
};

export default BlogCardDetails;
