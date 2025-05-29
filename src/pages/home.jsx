// src/pages/home.jsx
import Hero from "../components/hero";

export default function home() {
  return (
    <>
      <Hero />
      <section className="max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-purple-600 mb-6">Available Classes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="/class/9" className="bg-white shadow-md rounded-lg p-4 hover:bg-purple-50 transition">
            <h3 className="text-xl font-semibold text-purple-600">Class 9</h3>
          </a>
          <a href="/class/10" className="bg-white shadow-md rounded-lg p-4 hover:bg-purple-50 transition">
            <h3 className="text-xl font-semibold text-purple-600">Class 10</h3>
          </a>
        </div>
      </section>
    </>
  );
}
