import PromptInput from "@/components/chat/PromptInput";
import QuestionCard from "@/components/chat/QuestionCard";
import { roles } from "@/lib/roles";
import { notFound } from "next/navigation";

interface RolePageProps {
  params: {
    slug: string;
  };
}

export default function RolePage({ params }: RolePageProps) {
  const { slug } = params;
  
  // Find the role by slug
  const role = roles.find(r => r.slug === slug);
  
  // If role not found, show 404
  if (!role) {
    notFound();
  }
  
  return (
    <div className="container mx-auto px-6 py-8 max-w-5xl">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-2">{role.name}</h1>
        <p className="text-gray-600">
          {role.description}
        </p>
      </div>

      <div className="mb-12">
        <PromptInput />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {role.questions.map((question, index) => (
          <QuestionCard
            key={index}
            question={question}
          />
        ))}
      </div>
    </div>
  );
}