import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function POST(req: Request) {
  try {
    const { theme } = await req.json()
    const card = await prisma.card.create({
      data: { theme },
    })
    return NextResponse.json(card)
  } catch (error) {
    return NextResponse.json({ error: "Error creating card" }, { status: 500 })
  }
}

