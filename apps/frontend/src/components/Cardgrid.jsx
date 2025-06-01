const courses = [
  { title: "Math - Class 9", description: "Algebra, Geometry, and more", link: "/class/9/Math" },
  { title: "Science - Class 10", description: "Physics, Chemistry, Biology", link: "/class/10/Science" },
  { title: "English - Class 9", description: "Grammar, Literature, Composition", link: "/class/9/English" },
  { title: "Social Science - Class 10", description: "History, Geography, Civics", link: "/class/10/Social" },
];

export default function CardGrid() {
  return (
    <section className="py-12 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
      {courses.map((course, idx) => (
        <a
          key={idx}
          href={course.link}
          className="block bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 hover:shadow-2xl transition duration-300"
        >
          <h3 className="text-xl font-bold text-purple-600">{course.title}</h3>
          <p className="text-gray-700 mt-2">{course.description}</p>
        </a>
      ))}
    </section>
  );
}
