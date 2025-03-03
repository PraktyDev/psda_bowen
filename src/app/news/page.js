import { MarqueeEvent } from "@/components/EventCard"
import { Newspaper } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const page = () => {
    return (
      <section className="flex flex-col mb-10">
        <div className="flex flex-col gap-2 items-center justify-center">
          <div className="text-2xl laptop:text-4xl my-4 py-2 px-8 bg-red-600 bg-opacity-30 text-red-600 font-semibold rounded-lg">Events</div>
          <MarqueeEvent />
        </div>

        <div className="flex flex-col gap-2 items-center justify-center container mx-auto">
          <div className="text-2xl laptop:text-4xl my-4 py-2 px-8 bg-red-600 bg-opacity-30 text-red-600 font-semibold rounded-lg">News</div>
            <Card
              className="w-full laptop:max-w-3xl group cursor-pointer border border-[#e6aaaa] bg-white transition-all hover:border-red-400 hover:shadow-lg"
            >
              <CardContent className="p-3 flex gap-4">
                <div className="mb-4"><Newspaper /></div>
                <div className="flex flex-col gap-1">
                  <h2 className="mb-2 text-xl font-medium">title</h2>
                  <p className="text-sm text-gray-600 font-light">Description</p>
                </div>
              </CardContent>
            </Card>
        </div>

      </section>

    )
  }
  
  export default page