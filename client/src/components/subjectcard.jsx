import { Link } from 'react-router-dom'

export default function SubjectCard({ subject }) {
  return (
    <Link to={`/chapters/${subject.id}`}>
      <div className="border rounded-2xl p-6 shadow-md hover:shadow-lg transition bg-white">
        <h2 className="text-xl font-semibold">{subject.name}</h2>
        <p className="text-sm text-gray-500">{subject.chapters.length} chapters</p>
      </div>
    </Link>
  )
}