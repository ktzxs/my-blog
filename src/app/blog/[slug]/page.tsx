type Postagem = {
    slug: string;
    titulo: string;
    conteudo: string;
};

const postagens: Postagem[] = [
    {
        slug: "html",
        titulo: "html",
        conteudo: "Lorem Ipsum is simply dummy text of the printing and typesetting ",
    },
    {
        slug: "css",
        titulo: "css",
        conteudo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
    },
    {
        slug: "javascript",
        titulo: "JavaScript",
        conteudo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    },
];

export default async function PostagemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = postagens.find((item) => item.slug === slug);

  if (!post) {
    return (
      <section className="bg-white p-8 rounded-xl shadow">
        <h1 className="text-2xl font-bold text-red-600">Post não encontrado</h1>
      </section>
    );
  }

  return (
    <section className="bg-white p-8 rounded-xl">
      <h1 className="text-3xl font-bold mb-4">{post.titulo}</h1>
      <p className="text-lg text-gray-700">{post.conteudo}</p>
      <p className="mt-4 text-sm text-gray-400">slug: {slug}</p>
    </section>
  );
}
