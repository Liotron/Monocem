import type { Metadata } from "next";
import ComingSoon from "@/components/templates/ComingSoon";

export const metadata: Metadata = {
  title: "Training Academy | MONOCEM",
  description: "Professional microcement training and certification through the MONOCEM Training Academy.",
  alternates: { canonical: "/trade/training-academy" },
};

export default function TrainingAcademyPage() {
  return (
    <ComingSoon
      title="Training Academy"
      description="Details of our professional training and certification programme are coming soon."
    />
  );
}
