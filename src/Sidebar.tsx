import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="w-64 bg-gray-800 text-white h-full p-4">
      <ul className="space-y-4">
        <li>
          <Link to="/" className="block p-2 hover:bg-gray-700 rounded">Next.js</Link>
        </li>
        <li>
          <Link to="/react" className="block p-2 hover:bg-gray-700 rounded">React</Link>
        </li>
        <li>
          <Link to="/vite" className="block p-2 hover:bg-gray-700 rounded">Vite</Link>
        </li>
        <li>
          <Link to="/typescript" className="block p-2 hover:bg-gray-700 rounded">TypeScript</Link>
        </li>
        <li>
          <Link to="/tailwind" className="block p-2 hover:bg-gray-700 rounded">Tailwind CSS</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
