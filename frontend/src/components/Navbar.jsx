export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold text-purple-600">Skailor</div>
      <ul className="flex space-x-4 text-gray-700">
        <li><a href="/">Home</a></li>
        <li><a href="/class/9">Courses</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}
