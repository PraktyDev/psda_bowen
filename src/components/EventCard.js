import { cn } from "@/lib/utils";
import { Marquee } from "./magicui/marquee";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FetchData } from "../../services/apiService";

const Eventcard = ({ name, location, image, time }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className=" w-full mx-1 group/card">
          <div
            className={cn(
              "cursor-pointer overflow-hidden relative card h-96 w-96 rounded-md mx-auto backgroundImage flex flex-col justify-end p-4 bg-cover"
            )}
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
            <div className="flex flex-col">
              <h1 className="font-bold text-xl tablet:text-2xl text-gray-50 relative z-10">
                {name}
              </h1>
              <p className="font-normal truncate text-sm text-gray-50 relative z-10">
                {location}
              </p>
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="p-1.5">
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="w-full">
          <div
            className={cn(
              "cursor-pointer overflow-hidden relative card h-96 rounded-md max-w-sm mx-auto backgroundImage flex flex-col justify-end p-4 bg-cover"
            )}
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
            <div className="text content">
              <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                {name}
              </h1>
              <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                {location}
                <br />
                {time}
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export async function MarqueeEvent() {
  const eventsData = await FetchData("GET", "/events");

  const events = eventsData.events;

  const firstRow = events.slice(0, events.length / 2);
  const secondRow = events.slice(events.length / 2);

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((event) => (
          <Eventcard key={event.id} {...event} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((event) => (
          <Eventcard key={event.id} {...event} />
        ))}
      </Marquee>
    </div>
  );
}
