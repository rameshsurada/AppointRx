import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { assets } from "../assets/assets_frontend/assets";
import RelatedDoctors from "./RelatedDoctors";
//import { doctors } from "../assets/assets_frontend/assets";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
    console.log(docInfo);
  };

  const getAvailableSlots = async () => {
    const allSlots = [];
    const today = new Date();

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      // Set start time: 8:00 AM
      currentDate.setHours(8);
      currentDate.setMinutes(0);
      currentDate.setSeconds(0);
      currentDate.setMilliseconds(0);

      // Set end time: 10:00 PM
      const endTime = new Date(currentDate);
      endTime.setHours(22); // 10 PM

      const slots = [];

      while (currentDate < endTime) {
        const formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit"
        });

        slots.push({
          datetime: new Date(currentDate),
          time: formattedTime
        });

        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      allSlots.push(slots);
    }

    setDocSlots(allSlots);
  };

  useEffect(() => {
    getAvailableSlots();
  }, [docInfo]);

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {}, [docSlots]);

  return (
    docInfo && (
      <div>
        {/* doctor details */}{" "}
        <div className="flex flex-row">
          <div className="flex flex-col sm:flex-row gap-4">
            <div>
              <img
                src={docInfo.image}
                className="bg-primary w-full sm:max-w-72 rounded-lg "
              />
            </div>
            <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
              {/* -- doc info : name,degerree,experience */}
              <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
                {" "}
                {docInfo.name}{" "}
                <img className="w-5" src={assets.verified_icon} />
              </p>
              <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
                <p>
                  {" "}
                  {docInfo.degree} - {docInfo.speciality}
                </p>
                <button className="py-0.5 px-2 border text-xs rounded-full">
                  {" "}
                  {docInfo.experience}
                </button>
              </div>
              <div>
                {/* --- doctors about --- */}
                <div>
                  <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
                    {" "}
                    About <img src={assets.info_icon} />
                  </p>
                  <p className="text-sm text-gray-500 max-w-[700px] mt-1">
                    {" "}
                    {docInfo.about}
                  </p>
                </div>
                <p className="text-gray-500 font-medium mt-4">
                  Appointment fee:{" "}
                  <span className="text-gray-600 ">
                    {" "}
                    {currencySymbol}
                    {docInfo.fees}
                  </span>
                </p>
              </div>
            </div>{" "}
          </div>
        </div>
        {/* -- Booking Slots -- */}
        <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
          <p>Booking Slots</p>

          {/* Days Row */}
          <div className="flex gap-3 items-center w-full overflow-x-auto mt-4">
            {docSlots.length > 0 &&
              docSlots.map((daySlots, index) => {
                const slot = daySlots[0];
                if (!slot) return null;
                const dateObj = new Date(slot.datetime);
                return (
                  <div
                    key={index}
                    onClick={() => {
                      setSlotIndex(index);
                      setSlotTime(""); // ✅ Clear selected time when day changes
                    }}
                    className={`text-center py-6 min-w-[4rem] rounded-full cursor-pointer transition-all ${
                      slotIndex === index
                        ? "bg-primary text-white"
                        : "border border-gray-200"
                    }`}
                  >
                    <p>{daysOfWeek[dateObj.getDay()]}</p>
                    <p>{dateObj.getDate()}</p>
                  </div>
                );
              })}
          </div>

          {/* Time Slots */}
          <div className="flex items-center gap-3 w-full overflow-x-auto mt-4">
            {docSlots.length > 0 &&
              docSlots[slotIndex]?.map((slot, index) => (
                <p
                  key={index}
                  onClick={() => setSlotTime(slot.time)}
                  className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer transition-all ${
                    slot.time === slotTime
                      ? "bg-primary text-white"
                      : "text-gray-400 border border-gray-300"
                  }`}
                >
                  {slot.time.toLowerCase()}
                </p>
              ))}
          </div>

          {/* Book Button */}
          <button
            className={`bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6 transition-all ${
              !slotTime ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={!slotTime}
          >
            Book an appointment
          </button>
        </div>
        {/* listing related doctors */}
        <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
      </div>
    )
  );
};

export default Appointment;
