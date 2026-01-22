const BASE_URL = `https://backend.heartvalveexperts.com/wp-json/custom-api/v1`;

// export async function getSingleDoctor(slug: string) {
//   const res = await fetch(`${BASE_URL}/cardiologists?slug=${slug}`, {
//     next: { revalidate: 60 },
//   });
//   return res.json();
// }

export async function getRelatedBLog() {
  const res = await fetch(`${BASE_URL}/blogs?fields=title,image,image_alt,slug,date&page=1&per_page=6`, {
    next: { revalidate: 60 },
  });
  return res.json();
}