const api = "http://localhost:1337/api";

export async function getBlogs(): Promise<any> {
  const res = await fetch(`${api}/blogs?populate=*`);
  const json = await res.json();
  return json.data;
}

export async function getProjects(): Promise<any> {
  const res = await fetch(`${api}/projects?populate=*`);
  const json = await res.json();
  return json.data;
}
