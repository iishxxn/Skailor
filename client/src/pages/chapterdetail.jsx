import { useParams, useNavigate } from 'react-router-dom'
import { subjects } from '../data/subjects'
import { useState } from 'react'

export default function ChapterDetail() {
  const { subjectId, chapterIndex } = useParams()
  const navigate = useNavigate()
  const subject = subjects.find((s) => s.id === subjectId)
  const chapter = subject?.chapters[chapterIndex]

  const [aiInput, setAiInput] = useState('')
  const [aiResponse, setAiResponse] = useState('')

  if (!subject || !chapter) return <div className="p-10">Chapter not found.</div>

  const handleAskAI = () => {
    // Placeholder logic for AI (to be replaced with API call)
    setAiResponse(`🤖 Skailor AI says: "${aiInput}" is a great question! Let's explore it.`);
  }

  return (
    <div className="p-8 max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">{chapter}</h1>
      <p className="text-gray-600">
        [Placeholder] This chapter explains the core concepts in depth. Video, notes, and interactive content will be here.
      </p>

      <div className="mt-6 border-t pt-6">
        <h2 className="text-2xl font-semibold mb-2">Ask Skailor AI</h2>
        <div className="flex flex-col md:flex-row gap-3">
          <input
            type="text"
            className="border p-2 flex-1 rounded-xl"
            placeholder="Ask a question about this chapter..."
            value={aiInput}
            onChange={(e) => setAiInput(e.target.value)}
          />
          <button
            onClick={handleAskAI}
            className="bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800"
          >
            Ask AI
          </button>
        </div>
        {aiResponse && (
          <div className="mt-4 p-4 bg-gray-100 rounded-xl">
            <p>{aiResponse}</p>
          </div>
        )}
      </div>

      <button
        onClick={() => navigate(-1)}
        className="mt-8 text-blue-500 hover:underline"
      >
        ← Back to Chapters
      </button>
    </div>
  )
}