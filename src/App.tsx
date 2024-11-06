import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <div className="flex space-x-4">
        <a href="https://vite.dev" target="_blank">
        </a>
        <a href="https://react.dev" target="_blank">
        </a>
      </div>
      <h1 className="text-3xl font-bold mt-6">Vite + React + Tailwind + TypeScript</h1>
      <div className="card mt-4 p-4 bg-white shadow-md rounded-md">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Count is {count}
        </button>
        <p className="mt-2 text-gray-600">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs mt-4 text-blue-600">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
