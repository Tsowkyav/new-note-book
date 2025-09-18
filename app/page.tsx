
"use client";

import { useState } from "react";

export default function Home() {
  const [notes, setNotes] = useState<{ title: string; content: string }[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Add note
  const addNote = () => {
    if (!title.trim() || !content.trim()) return;
    setNotes([...notes, { title, content }]);
    setTitle("");
    setContent("");
  };

  // Delete note
  const deleteNote = (index: number) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">📝 Note App</h1>

      {/* Input Form */}
      <div className="mb-6 space-y-2">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <button
          onClick={addNote}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Note
        </button>
      </div>

      {/* Notes List */}
      <div className="space-y-4">
        {notes.length === 0 && <p className="text-gray-500">No notes yet.</p>}
        {notes.map((note, index) => (
          <div key={index} className="border p-4 rounded shadow">
            <h2 className="font-semibold">{note.title}</h2>
            <p>{note.content}</p>
            <button
              onClick={() => deleteNote(index)}
              className="text-red-600 mt-2"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
