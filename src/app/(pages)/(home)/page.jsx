"use client";

import React, { useEffect, useState } from "react";
import "../../globals.css";
import Header from "app/components/header";
import { notFound } from "next/navigation";
import moment from "moment";
import "moment/locale/ar";

const Page = () => {
  moment.locale("ar");

  const arabicDayName = moment().format("dddd");

  const [selectedDay, setSelectedDay] = useState(arabicDayName);


  const [arrData, setstate] = useState([]);

  const isDisabled = (day) => {
    const currentDay = moment().format("dddd");
    return moment(day, "dddd").isAfter(moment(currentDay, "dddd"));
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("https://nextback-seven.vercel.app/");
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await res.json();
        setstate(data);
      } catch (error) {
        console.error('Error data:', error);
        notFound();
      }
    };
  
    getData();
  }, []);
  

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <div className="home_page">
      <div
        className="accordion accordion-flush p-3"
        id="accordionFlushExample "
        style={{ width: "90%", margin: "auto" }}
      >
        {arrData.map((user, index) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <div
              className="accordion-item rounded-2 mt-5 "
              style={{ position: "relative" }}
              key={user._id}
            >
              <p
                className="rounded-top text-white"
                style={{
                  position: "absolute",
                  right: 0,
                  top: "-25px",
                  zIndex: 8,
                  backgroundColor: `${
                    user.select === "تفصيل"
                      ? "#681500"
                      : user.select === "خياطة"
                      ? "#002046"
                      : "#5b5c5c"
                  }`,
                  width: "25%",
                  textAlign: "center",
                }}
              >
                {" "}
                {user.select}
              </p>
              <div
                className="accordion-header d-flex justify-content-evenly border-bottom border-primary "
                style={{ direction: "rtl", fontWeight: 600 }}
              >
                <div
                  className="accordion-button collapsed text-center rounded-end"
                  data-bs-toggle="collapse"
                  style={{ width: "60%" }}
                  data-bs-target={`#flush-collapseOne${index}`}
                  aria-expanded="false"
                  aria-controls={`flush-collapseOne${index}`}
                >
                  <div
                    style={{ fontSize: 18, width: "100%", textAlign: "start" }}
                    className="col-4"
                  >
                    {user.name}
                  </div>
                </div>
                <div
                  className="d-flex justify-content-evenly"
                  style={{ width: "40%" }}
                >
                  <p
                    className="rounded-2"
                    style={{
                      marginTop: 12,
                      padding: 5,
                      backgroundColor: "rgba(145, 5, 0, 0.815)",
                      width: "40%",
                      textAlign: "center",
                      color: "aliceblue",
                      letterSpacing: "1.2px",
                    }}
                  >
                    35
                  </p>
                  <div className="vr" />
                  <button>
                    <i
                      className="fa-solid fa-circle-info fa-2xl"
                      style={{ color: "#ffba42" }}
                    />
                  </button>
                </div>
              </div>
              <div
                id={`flush-collapseOne${index}`}
                className="rounded-bottom accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
                style={{ backgroundColor: "#c2c2c2" }}
              >
                <div className="accordion-body">
                  <div className="d-flex justify-content-between">

                    <select
                      className="form-select text-end text-white"
                      aria-label="Default select example"
                      style={{
                        width: "35%",
                        backgroundColor: "rgb(0, 82, 107)",
                      }}
                      value={selectedDay}
                      onChange={(e) => setSelectedDay(e.target.value)}
                    >
                      <option value="السبت" disabled={isDisabled("السبت")}>السبت</option>
                      <option value="الأحد" disabled={isDisabled("الأحد")}>الأحد</option>
                      <option value="الاثنين" disabled={isDisabled("الإثنين")}>الاثنين</option>
                      <option value="الثلاثاء" disabled={isDisabled("الثلاثاء")}>الثلاثاء</option>
                      <option value="الأربعاء" disabled={isDisabled("الأربعاء")}>الأربعاء</option>
                      <option value="الخميس" disabled={isDisabled("الخميس")}>الخميس</option>
                      <option value="الجمعة" disabled={isDisabled("الجمعة")}>الجمعة</option>
                    </select>
                    
                    <div className="input-group" style={{ width: "40%" }}>
                      <span
                        className="input-group-text"
                        id="inputGroup-sizing-default"
                      >
                        12
                      </span>
                      <input
                        type="number"
                        className="form-control text-center"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-100 d-flex justify-content-evenly">
                  <button
                    className="text-white btn btn-success"
                    style={{ padding: "0px 15px 0px 15px" }}
                  >
                    {" "}
                    اضافة{" "}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Header active="home" />
    </div>
  );
};

export default Page;
