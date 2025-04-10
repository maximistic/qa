import PromptInput from "@/components/chat/PromptInput";
import RoleCard from "@/components/chat/RoleCard";
import { roles } from "@/lib/roles";

export default function RoleSelectionPage() {
  return (
    <div className="container mx-auto px-6 py-8 max-w-5xl">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold">AI That Thinks.</h1>
        <h1 className="text-3xl font-bold mb-2">Data That Works.</h1>
        <p className="text-gray-600 mt-2">
          Building smarter systems for a connected world.
          <br />
          Transform your data infrastructure with AI-powered insights and seamless integration.
        </p>
      </div>

      <div className="mb-12">
        <PromptInput />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {roles.map((role) => (
          <RoleCard
            key={role.slug}
            name={role.name}
            description={role.description}
            slug={role.slug}
          />
        ))}
      </div>
    </div>
  );
}