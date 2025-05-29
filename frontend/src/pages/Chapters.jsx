import { Link, useParams } from "react-router-dom";

const chapters = [
  { id: 1, name: "Algebra" },
  { id: 2, name: "Geometry" },
  { id: 3, name: "Statistics" },
];

export default function Chapters() {
  const { classNum } = useParams();

  return (
    <section className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-purple-600 mb-6">Class {classNum} Chapters</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {chapters.map((chapter) => (
          <li key={chapter.id} className="bg-white shadow-md rounded-lg p-4 hover:bg-purple-50 transition">
            <Link to={`/class/${classNum}/${chapter.name}`} className="text-xl font-semibold text-purple-600">
              {chapter.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
