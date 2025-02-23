import { Header } from "@/components/header"
import { Journey } from "@/components/journey"
import { Footer } from "@/components/footer"
import { MessageForm } from "@/components/message-form"
import { CardProvider } from "@/components/card-provider"

export default function CardPage({ params }: { params: { id: string } }) {
  return (
    <CardProvider cardId={params.id}>
      <div className="min-h-full flex flex-col bg-gradient-to-b from-background to-background/50">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8 flex flex-col items-center justify-center gap-8">
          <MessageForm />
          <Journey />
        </main>
        <Footer />
      </div>
    </CardProvider>
  )
}

