import { Compass, MessageSquare, Settings } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { SidebarTrigger } from "@/components/ui/sidebar"

export function Navbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-background px-6">
      <div className="flex items-center gap-4">
        <SidebarTrigger />
        <div>
          <h1 className="text-lg font-semibold">Welcome back, Jack!</h1>
          <p className="text-sm text-muted-foreground">You have 5 new deliveries today</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon">
          <Compass className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <MessageSquare className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5" />
        </Button>
        <Button variant="default">Create new order</Button>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="User" />
          <AvatarFallback>JR</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}

