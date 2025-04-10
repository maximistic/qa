'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAppContext } from '@/contexts/AppContext';
import type { RoleSlug } from '@/lib/roles';
import { ArrowUpRight } from 'lucide-react';

interface RoleCardProps {
  name: string;
  description: string;
  slug: RoleSlug;
}

const RoleCard: React.FC<RoleCardProps> = ({ name, description, slug }) => {
  const { setSelectedRole, setCurrentStep } = useAppContext();
  const splitName = name.split(' ');
  const handleClick = () => {
    setSelectedRole(slug);
    setCurrentStep('questions');
  };

  return (
    <Card
      onClick={handleClick}
      className="cursor-pointer transition-all hover:shadow-lg hover:scale-105 border border-gray-200"
    >
      <CardHeader className="flex flex-row items-start justify-between pb-2">
      <CardTitle className="text-xl font-medium text-black">
        {splitName[0]}
        <br />
        {splitName.slice(1).join(" ")}
      </CardTitle>
        <ArrowUpRight className="h-6 w-6 text-black" />
      </CardHeader>
      <CardContent>
        <CardDescription className="text-black">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default RoleCard;
