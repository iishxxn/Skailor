import { useParams } from 'react-router-dom'
import { subjects } from '../data/subjects'
import ChapterList from '../ components/ChapterList'

export default function Chapters() {
  const { subjectId } = useParams()
  const subject = subjects.find((s) => s.id === subjectId)

  if (!subject) return <div className="p-10">Subject not found.</div>

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{subject.name}</h1>
      <ChapterList chapters={subject.chapters} />
    </div>
  )
}