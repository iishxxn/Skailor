import { useParams } from "react-router-dom";
export default function ChapterDetail() {
  const { classNum, subject } = useParams();
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">{subject} - Class {classNum}</h1>
      <p>Here you can display lessons, videos, quizzes etc.</p>
    </div>
  );
}
