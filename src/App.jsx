import React, { useState, useEffect } from 'react';
import ThemeToggle from './components/ThemeToggle';
import Button from './components/Button';
import Input from './components/Input';
import Modal from './components/Modal';
import Card from './components/Card';
import Pill from './components/Pill';
import './index.css';


const App = () => {
  const [theme, setTheme] = useState('light');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Set the initial theme based on system preference or default to 'light'
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  useEffect(() => {
    // Save the theme to local storage
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="App p-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200">
      <header className="flex items-center justify-between mb-8">
        <h1 className="text-xl font-bold">Design System Components</h1>
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </header>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Buttons</h2>
        <div className="flex gap-4">
          <Button label="Primary Button" variant="primary" />
          <Button label="Secondary Button" variant="secondary" />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Inputs</h2>
        <div className="flex flex-col gap-4">
          <Input placeholder="Enter text" />
          <Input placeholder="Password" type="password" />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Pills</h2>
        <div className="flex gap-4">
          <Pill label="Round Pill" variant="primary" shape="round" />
          <Pill label="Square Pill" variant="secondary" shape="square" />
          <Pill label="Outlined Pill" variant="primary" shape="round" outline />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Cards</h2>
        <Card
          title="Card Title"
          subtitle="Card subtitle"
          icon={<span>📦</span>}
          footer={<button className="bg-blue-500 text-white px-4 py-2 rounded">Action</button>}
        >
          <p>This is some content inside the card component.</p>
        </Card>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Modals</h2>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setIsModalOpen(true)}
        >
          Open Modal
        </button>
        {isModalOpen && (
          <Modal
            title="Example Modal"
            footerButtons={[
              { label: "Cancel", className: "bg-gray-500 text-white px-4 py-2 rounded", onClick: () => setIsModalOpen(false) },
              { label: "Save", className: "bg-blue-500 text-white px-4 py-2 rounded", onClick: () => alert("Saved!") },
            ]}
          >
            <p>This is the modal content.</p>
          </Modal>
        )}
      </section>
    </div>
  );
};

export default App;