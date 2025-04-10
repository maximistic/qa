'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUpRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import type { RoleSlug } from '@/lib/roles';

interface RoleCardProps {
  title: string;
  description: string;
  slug: RoleSlug;
}

const RoleQuestionCard: React.FC<RoleCardProps> = ({ title, description, slug }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/questions/${slug}`);
  };

  return (
    <Card
      onClick={handleClick}
      className="cursor-pointer transition-all hover:shadow-lg hover:scale-105 border border-gray-200"
    >
      <CardHeader className="flex flex-row items-start justify-between pb-2">
        <CardTitle className="text-xl font-medium text-black flex-1 pr-4">
          {title}
        </CardTitle>
        <div className="flex-shrink-0">
          <ArrowUpRight className="h-6 w-6 text-black" style={{ minWidth: '24px', minHeight: '24px' }} />
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-black">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default RoleQuestionCard;