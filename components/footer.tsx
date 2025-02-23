export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} CardCrafters. All rights reserved.</p>
        <p className="text-sm text-muted-foreground">Need help? Contact support</p>
      </div>
    </footer>
  )
}

