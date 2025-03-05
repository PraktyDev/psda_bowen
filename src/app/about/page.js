import Image from "next/image";

export default function page() {
  return (
    <div className="container mx-auto px-4 py-16 relative overflow-hidden">
      <div className="absolute top-10 right-32">
        <div className="w-6 h-6 rounded-full bg-red-500 opacity-80"></div>
      </div>
      <div className="absolute bottom-20 right-10">
        <div className="w-10 h-10 rounded-full bg-pink-700 opacity-80"></div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="w-full tablet:w-1/2 space-y-6">
          <h1 className="text-4xl font-bold text-red-500 text-center">
            About Us
          </h1>

          <div className="space-y-4 text-gray-600 text-justify">
            <p>
              Welcome to PDSA website! We're excited to have you onboard. PDSA
              is political science, International Relations and Politics & Law
              students' organisation that was established in 5th May ,2015 with
              the aim of fostering unity, progress and well-being of members in
              Bowen University, Iwo., Nigeria.
              <br />
              We also assist students to do well in their academics and social
              activities while on campus. With the launch of the PDSA Stars, we
              are in touch with our our Alumni community too.
              <br />
              This platform provides opportunities for knowledge sharing ,
              community service and career development
              <br /><br />
              Thank you.
              <br /><br /><br />
              Best wishes,
              <br />
              <span className="font-semibold">Dr Leo Asumu</span>
              <br />
              Politics & Law Programme
              <br />
              Bowen University, Iwo
              <br /><br />
              Tel: +2348033899858
            </p>
          </div>
        </div>

        <div className="w-full tablet:w-1/2 relative">
          <div className="relative w-[300px] h-[300px] mx-auto">
            <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src={"/dr-leo-asumu.jpg"}
                alt="staff advisor"
                width={1000}
                height={1000}
                className="object-cover rounded-full w-full h-full"
              />
            </div>

            <div className="absolute bottom-3 bg-red-600 right-4 w-14 h-14 rounded-full overflow-hidden border-4 border-white shadow-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
