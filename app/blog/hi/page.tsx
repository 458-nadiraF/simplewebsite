import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'hi',
  description: '',
};

export default function BlogPostPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          hi
        </h1>
        <p className="mt-3 text-lg text-gray-600">
          
        </p>
      </header>
      <div
        className="prose prose-gray max-w-none
          prose-a:text-blue-600 prose-a:underline
          prose-h2:mt-8 prose-h2:mb-3 prose-h2:text-xl prose-h2:font-semibold prose-h2:text-gray-900
          prose-h3:mt-6 prose-h3:mb-2 prose-h3:text-lg prose-h3:font-semibold prose-h3:text-gray-900
          prose-p:mb-4 prose-p:text-gray-700 prose-p:leading-relaxed
          prose-ul:mb-4 prose-li:mb-1 prose-li:text-gray-700
          prose-ol:mb-4 prose-li:mb-1 prose-li:text-gray-700
          prose-blockquote:border-l-4 prose-blockquote:border-gray-300 prose-blockquote:italic prose-blockquote:pl-4 prose-blockquote:text-gray-600"
        dangerouslySetInnerHTML={{ __html: `hitest` }}
      />
    </article>
  );
}

export function generateStaticParams() {
  return [{ slug: "hi" }];
}