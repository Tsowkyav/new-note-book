export default function NoteList({ notes, onDelete }) {
  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id} style={{ marginBottom: "1rem" }}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <button onClick={() => onDelete(note.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
