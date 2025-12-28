"use client";
import Image from "next/image";
import Link from "next/link";

// interface BlogPost {
//   id: number;
//   slug: string;
//   title: string;
//   short_description: string;
//   image?: string;
//   date: string
// }

// interface Pagination {
//   current_page: number;
//   has_next: boolean;
//   has_previous: boolean;
//   last_page: number;
//   per_page: number;
//   total_pages: number;
//   total_posts: number;
// }

export default function CaseStudy() {
//   const [posts, setPosts] = useState<BlogPost[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [pagination, setPagination] = useState<Pagination | null>(null);
//   const [page, setPage] = useState(1);
// // console.log(page, pagination);

//   useEffect(() => {
//     async function fetchBlogs(pageNumber: number) {
//       setLoading(true);
//       try {
//         const res = await fetch(
//           `https://backend.heartvalveexperts.com/wp-json/custom-api/v1/blogs?fields=title,image,image_alt,slug,short_description,date&page=${pageNumber}&per_page=9`
//         );
//         const data = await res.json();
//         // console.log(data.posts);
        
//         setPosts(data.posts);
//         setPagination(data.pagination);
//       } catch (error) {
//         console.error("Error fetching blogs:", error);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchBlogs(page);
//   }, [page]);

//   const handlePrev = () => {
//     if (pagination?.has_previous) setPage((prev) => prev - 1);
//   };

//   const handleNext = () => {
//     if (pagination?.has_next) setPage((prev) => prev + 1);
//   };

  return (
    <section className="py-12 px-4 md:px-10 bg-gray-200 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-lg uppercase tracking-wide text-blue-600 font-semibold">
            ● Innovation in Cardiac Care
          </p>
          <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mt-3">
            At HVE, innovation is the way we save lives every day.
          </h2>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-10">
         
          
                <Link href={`/case-studies/first-asia-pacific-an2-tavi-via-carotid-artery`}>
                  <div
                    style={{
                      boxShadow:
                        "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgb(255, 255, 255) 0px 30px 60px -30px, rgb(0 127 255 / 78%) 0px -2px 6px 0px inset",
                    }}
                    className="rounded-xl group overflow-hidden bg-gray-50 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    {/* Blog Image */}
                    <div className="relative w-full h-64 overflow-hidden">
                      <Image
                        src="/images/case1.webp"
                        alt={'dsfsdfdsf'}
                        width={1000}
                        height={2000}
                        className="object-cover scale-[1.07] group-hover:scale-110 duration-500 h-full w-full"
                      />
                    </div>

                    {/* Blog Content */}
                    <div className="p-4 ">
                      {/* <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                        <FaRegCalendarAlt className="text-gray-500" />
                        <span>{post.date}</span>
                      </div> */}
                      <h3 className="text-base md:text-xl font-semibold mb-2 text-gray-900 line-clamp-2">
                       First Asia-Pacific AN2 TAVI via Carotid Artery
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-3 mb-2">
                      A 69-year-old woman presented with a history of diabetes, hypertension, prior stroke, and renal impairment. She also had multiple allergies, including intolerance to blood transfusions and several medications.
                      </p>
                    </div>
                  </div>
                </Link>
        </div>

       

      </div>
    </section>
  );
}

