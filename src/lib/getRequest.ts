export default async function getComments() {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments", {
    next: {revalidate: 86400},
  });
  const data = await res.json();
  return data;
}

export async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
}
