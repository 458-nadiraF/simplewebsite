export const metadata = {
  title: 'test again',
  description: '',
};

export default function BlogPostPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          test again
        </h1>
        <p className="mt-3 text-lg text-gray-600">
          
        </p>
      </header>
      <div className="prose prose-gray max-w-none"
        dangerouslySetInnerHTML={{ __html: `hi test` }}
      />
    </article>
  );
}

export async function generateStaticParams() {
  return [{ slug: 'test-again' }];
}