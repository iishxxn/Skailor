import { useParams } from "react-router-dom";

export default function ChapterDetail() {
  const { classNum, subject } = useParams();

  return (
    <section className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-purple-600">Class {classNum} - {subject}</h2>
      <p className="mt-4 text-lg text-gray-700">
        Here you will find detailed lessons, exercises, and interactive content for {subject}.
      </p>
    </section>
  );
}
