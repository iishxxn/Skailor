import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">Skailor 📚</h1>
      <p className="mt-4">Select your class:</p>
      <ul className="mt-4 space-y-2">
        <li><Link to="/class/9" className="text-blue-500 underline">Class 9</Link></li>
        <li><Link to="/class/10" className="text-blue-500 underline">Class 10</Link></li>
      </ul>
    </div>
  );
}
