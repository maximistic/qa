import { FiHelpCircle } from "react-icons/fi";

interface QuestionCardProps {
  question: string;
}

export default function QuestionCard({ question }: QuestionCardProps) {
  return (
    <div className="rounded-lg border border-gray-200 p-6">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-medium">{question}</h3>
        <FiHelpCircle className="text-gray-400" />
      </div>
    </div>
  );
}