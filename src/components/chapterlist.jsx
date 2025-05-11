import { Link, useParams } from 'react-router-dom'

export default function ChapterList({ chapters }) {
  const { subjectId } = useParams()

  return (
    <ul className="space-y-4">
      {chapters.map((chapter, idx) => (
        <li key={idx} className="p-4 bg-gray-50 rounded-xl shadow-sm hover:bg-gray-100">
          <Link to={`/chapters/${subjectId}/${idx}`}>{chapter}</Link>
        </li>
      ))}
    </ul>
  )
}