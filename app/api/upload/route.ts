import { NextResponse } from "next/server"
import { writeFile } from "fs/promises"
import path from "path"

export async function POST(req: Request) {
  const formData = await req.formData()
  const file = formData.get("file") as File

  if (!file) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 })
  }

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  const filename = Date.now() + "-" + file.name.replaceAll(" ", "_")
  const filepath = path.join(process.cwd(), "public", "uploads", filename)

  try {
    await writeFile(filepath, buffer)
    return NextResponse.json({ url: `/uploads/${filename}` })
  } catch (error) {
    console.error("Error saving file:", error)
    return NextResponse.json({ error: "Error uploading file" }, { status: 500 })
  }
}

