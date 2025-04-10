'use client';

import { Card, CardContent, CardDescription } from '@/components/ui/card';
import { ArrowUpRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface QuestionCardProps {
  question: string;
}

export default function QuestionCard({ question }: QuestionCardProps) {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/`);
  };
  return (
    <Card
    onClick={handleClick}
    className="cursor-pointer transition-all hover:shadow-lg hover:scale-105 border border-gray-200"
    >
    <CardContent>
      <CardDescription className="text-black">{question} </CardDescription>
      <ArrowUpRight className="h-6 w-6 text-black" />
    </CardContent>
    </Card>
  );
}