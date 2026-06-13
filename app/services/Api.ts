const api = import.meta.env.VITE_API_URL;

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
