import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("routes/layout/Layout.jsx", [
    index("routes/homePage/Index.jsx"),
    route("about", "./routes/aboutPage/AboutPage.jsx"),
    route("contact", "./routes/contactPage/ContactPage.jsx"),
    route("project", "./routes/projectPage/ProjectPage.jsx"),
    route("blog", "./routes/blogPage/BlogPage.jsx"),
    route("/blog/:slug", "./components/blog/BlogCardDetails.jsx"),
  ]),
] satisfies RouteConfig;
