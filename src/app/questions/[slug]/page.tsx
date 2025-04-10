import { notFound } from "next/navigation";
import QuestionCard from "@/components/chat/QuestionCard";

interface QuestionsPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function QuestionsPage({ params }: QuestionsPageProps) {
  const { roles } = await import('@/lib/roles');
  const { slug } = await params;
  const role = roles.find((r) => r.slug === slug);

  if (!role) {
    notFound();
  }

  return (
    <div className="container mx-auto px-6 py-8 max-w-5xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {role.questions.map((question, index) => (
          <QuestionCard key={index} question={question} />
        ))}
      </div>
    </div>
  );
}
