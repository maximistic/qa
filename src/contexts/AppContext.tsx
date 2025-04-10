
import React, { createContext, useContext, useState, ReactNode } from 'react';
import type { RoleSlug } from '@/lib/roles';

export type Role = RoleSlug;


// Define the steps of the application
export type Step = 'role-selection' | 'questions' | 'sub-questions' | 'chat';

// Types for questions and sub-questions
export interface Question {
  id: string;
  title: string;
  description: string;
}

export interface SubQuestion {
  id: string;
  text: string;
}

interface AppContextType {
  currentStep: Step;
  setCurrentStep: (step: Step) => void;
  selectedRole: Role | null;
  setSelectedRole: (role: Role | null) => void;
  selectedQuestion: Question | null;
  setSelectedQuestion: (question: Question | null) => void;
  selectedSubQuestion: SubQuestion | null;
  setSelectedSubQuestion: (subQuestion: SubQuestion | null) => void;
  prompt: string;
  setPrompt: (prompt: string) => void;
  messages: Array<{ sender: 'user' | 'ai'; content: string }>;
  addMessage: (message: { sender: 'user' | 'ai'; content: string }) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState<Step>('role-selection');
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(null);
  const [selectedSubQuestion, setSelectedSubQuestion] = useState<SubQuestion | null>(null);
  const [prompt, setPrompt] = useState<string>('');
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'ai'; content: string }>>([]);

  const addMessage = (message: { sender: 'user' | 'ai'; content: string }) => {
    setMessages(prevMessages => [...prevMessages, message]);
  };

  return (
    <AppContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        selectedRole,
        setSelectedRole,
        selectedQuestion,
        setSelectedQuestion,
        selectedSubQuestion,
        setSelectedSubQuestion,
        prompt,
        setPrompt,
        messages,
        addMessage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
