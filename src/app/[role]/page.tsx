import { roles } from "@/lib/roles";
import { notFound } from "next/navigation";
import QuestionCard from "@/components/chat/QuestionCard";
import PromptInput from "@/components/chat/PromptInput";

export async function generateStaticParams() {
  return roles.map((role) => ({
    role: role.slug,
  }));
}

export default function RolePage({ params }: { params: { role: string } }) {
  const role = roles.find((r) => r.slug === params.role);

  if (!role) return notFound();

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-black p-4 text-white">
        <div className="mb-10">
          <h1 className="font-inika text-xl">QUANTUM APPS</h1>
        </div>
        <ul className="space-y-3">
          <li>DashBoard</li>
          <li>Projects</li>
          <li>Templates</li>
          <li>Connections</li>
        </ul>
      </aside>
      <main className="flex-1 p-12 text-center">
        <h2 className="text-2xl font-bold">{role.name}</h2>
        <p className="text-gray-300 mt-2">{role.description}</p>
        <PromptInput />
        <div className="mt-12 flex flex-wrap gap-6 justify-center">
          {role.questions.map((q, i) => (
            <QuestionCard key={i} question={q} />
          ))}
        </div>
      </main>
    </div>
  );
}
