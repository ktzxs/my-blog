import Link from "next/link";

const postagens = [
    {
        slug: "html",
        titulo: "html",
        descricao: "Lorem ipsum dolor sit amet, consectetur ",  
    },
    {
        slug: "css",
        titulo: "css",
        descricao: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae voluptates",
    },
    {
        slug: "javascript",
        titulo: "JavaScript ",
        descricao: "Lorem ipsum, dolor sit amet consectet", 
    },
];

export default function BlogPage() {
  return (
    <section className="bg-white p-8 rounded-xl">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>

      <div className="space-y-4">
        {postagens.map((post) => (
          <div
            key={post.slug}
            className="border p-4 rounded-lg flex justify-between items-center"
          >
            <div>
              <h2 className="text-xl font-semibold">{post.titulo}</h2>
              <p className="text-gray-600 text-sm mt-1">{post.descricao}</p>
            </div>

            <Link
              href={`/blog/${post.slug}`}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Ler
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}