export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white text-center py-20">
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
        Master Learning with Skailor
      </h1>
      <p className="text-lg md:text-2xl mb-8">
        Explore curated courses, chapters, and interactive content.
      </p>
      <a href="/class/9" className="bg-white text-purple-600 font-bold py-3 px-6 rounded-full shadow-lg hover:bg-purple-100 transition duration-300">
        Browse Courses
      </a>
    </section>
  );
}
