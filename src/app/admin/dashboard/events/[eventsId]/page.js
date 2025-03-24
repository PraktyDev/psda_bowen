import { EventForm } from "@/components/EventForm"
import { FetchData } from "../../../../../../services/apiService";


// In a real app, you would fetch the event data here
export default async function EditEventPage({ params }) {

  const { eventsId } = await params
  const eventsIdData = await FetchData("GET", `/events/${eventsId}`);
  
  const event = eventsIdData.event

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl tablet:text-3xl font-bold tracking-tight text-[#1F0954]">Edit Event</h2>
      </div>
      <EventForm defaultValues={event} />
    </div>
  )
}
