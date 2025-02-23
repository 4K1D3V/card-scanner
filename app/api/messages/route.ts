import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function POST(req: Request) {
  try {
    const { content, location, imageUrl, cardId } = await req.json()
    const message = await prisma.message.create({
      data: { content, location, imageUrl, cardId },
    })
    return NextResponse.json(message)
  } catch (error) {
    return NextResponse.json({ error: "Error creating message" }, { status: 500 })
  }
}

