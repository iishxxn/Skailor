import { subjects } from '../data/subjects'
import SubjectCard from '../ components/SubjectCard'

export default function Home() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Choose a Subject</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {subjects.map((subj) => (
          <SubjectCard key={subj.id} subject={subj} />
        ))}
      </div>
    </div>
  )
}