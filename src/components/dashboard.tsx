"use client"

import { BarChart3, CircleDot, Package } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/sidebar"
import { Navbar } from "@/components/navbar"

export default function Dashboard() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Navbar />
        <div className="space-y-6 p-6">
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">This month orders</CardTitle>
                <Package className="size-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">132</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                <div className="mt-4 space-y-2">
                  <div className="h-1.5 w-full rounded-full bg-primary/10">
                    <div className="h-1.5 w-[75%] rounded-full bg-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Average weight</CardTitle>
                <BarChart3 className="size-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">32 lbs</div>
                <p className="text-xs text-muted-foreground">+4.1% from last month</p>
                <div className="mt-4 space-y-2">
                  <div className="h-1.5 w-full rounded-full bg-primary/10">
                    <div className="h-1.5 w-[45%] rounded-full bg-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Average distance</CardTitle>
                <CircleDot className="size-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">872 mi</div>
                <p className="text-xs text-muted-foreground">+12.5% from last month</p>
                <div className="mt-4 space-y-2">
                  <div className="h-1.5 w-full rounded-full bg-primary/10">
                    <div className="h-1.5 w-[65%] rounded-full bg-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="md:col-span-4">
              <CardHeader>
                <CardTitle>Package Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] rounded-lg bg-muted" />
              </CardContent>
            </Card>
            <Card className="md:col-span-3">
              <CardHeader>
                <CardTitle>Speed Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex aspect-square items-center justify-center">
                  <div className="relative size-40">
                    <svg className="size-full -rotate-90">
                      <circle
                        className="text-primary/20"
                        cx="80"
                        cy="80"
                        r="70"
                        strokeWidth="12"
                        stroke="currentColor"
                        fill="none"
                      />
                      <circle
                        className="text-primary"
                        cx="80"
                        cy="80"
                        r="70"
                        strokeWidth="12"
                        stroke="currentColor"
                        fill="none"
                        strokeDasharray={440}
                        strokeDashoffset={440 * 0.4}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">65</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

