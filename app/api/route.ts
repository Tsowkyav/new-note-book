import { NextResponse } from "next/server";
import { connectDB } from "../lib/MongoConnect";
import { Note } from "../models/Note";

// GET all notes
export async function GET() {
  await connectDB();
  const notes = await Note.find({});
  return NextResponse.json(notes);
}

// POST new note
export async function POST(req: Request) {
  await connectDB();
  const { title, content } = await req.json();
  if (!title || !content) {
    return NextResponse.json({ error: "Title and content required" }, { status: 400 });
  }
  const newNote = await Note.create({ title, content });
  return NextResponse.json(newNote);
}
