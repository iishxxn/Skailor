import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Chapters() {
  const { classNum } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get(`https://your-backend-url.onrender.com/data/${classNum}`)
      .then(res => setData(res.data))
      .catch(() => alert("Error loading data"));
  }, [classNum]);
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Class {classNum} Subjects</h1>
      {Object.keys(data).map(subject => (
        <div key={subject}>
          <h2 className="text-xl mt-4">{subject}</h2>
          <ul className="ml-4 list-disc">
            {data[subject].Chapters.map(chap => (
              <li key={chap}>
                <Link to={`/class/${classNum}/${subject}`} className="text-blue-500">{chap}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
