import PromptInput from "@/components/chat/PromptInput";
import RoleQuestionCard from "@/components/chat/RoleQuestionCard";
import { roles } from "@/lib/roles";
import { notFound } from "next/navigation";

interface RolePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function RolePage({ params }: RolePageProps) {
  const { slug } = await params;
  const role = roles.find((r) => r.slug === slug);

  if (!role) {
    notFound();
  }

  return (
    <div className="container mx-auto px-6 py-8 max-w-5xl">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-2">{role.name}</h1>
        <p className="text-gray-600">{role.description}</p>
      </div>

      <div className="mb-12">
        <PromptInput />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {role.questions.map((roleQs, index) => (
          <RoleQuestionCard
          key={index}
          title={role.roleQs[index]}
          description={role.roleQSdesc[index]}
          slug={role.slug}
        />
        ))}
      </div>
    </div>
  );
}
