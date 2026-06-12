interface CaseStudyPageProps {
  params: { slug: string };
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  return (
    <main>
      <h1 className="font-serif text-linen">{params.slug}</h1>
    </main>
  );
}
