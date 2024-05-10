"use client"


import React, { useEffect } from "react";
import "../../globals.css"
import Header from "app/components/header";


const Page = () => {


  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    
      <div className="home_page">
        <div
          className="accordion accordion-flush p-3"
          id="accordionFlushExample "
        >
          
          <div
            className="accordion-item rounded-2 mt-5 "
            style={{ position: "relative" }}
          >
            <p
              className="rounded-top text-white"
              style={{
                position: "absolute",
                right: 0,
                top: "-25px",
                zIndex: 8,
                backgroundColor: "#5b5c5c",
                width: "25%",
                textAlign: "center",
              }}
            >
              {" "}
              تنجيد
            </p>
            <div
              className="accordion-header d-flex justify-content-evenly border-bottom border-primary "
              style={{ direction: "rtl", fontWeight: 600 }}
            >
              <div
                className="accordion-button collapsed text-center rounded-end"
                

                data-bs-toggle="collapse"
                style={{ width: "60%" }}
                data-bs-target="#flush-collapseOne1"
                aria-expanded="false"
                aria-controls="flush-collapseOne1"
              >
                <div
                  style={{ fontSize: 18, width: "100%", textAlign: "start" }}
                  className="col-4"
                >
                  {" "}
                  عمر ابو خشبة{" "}
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
              id="flush-collapseOne1"
              className="rounded-bottom accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
              style={{ backgroundColor: "#acacac59" }}
            >
              <div className="accordion-body">
                <div className="d-flex justify-content-between">
                  <select
                    className="form-select text-end text-white"
                    aria-label="Default select example"
                    style={{ width: "35%", backgroundColor: "rgb(0, 82, 107)" }}
                  >
                    <option value={1}> الأحد </option>
                    <option value={1}> الاثنين </option>
                    <option value={1}> الثلاثاء </option>
                    <option value={1}> الأربعاء </option>
                    <option value={1}> الخميس </option>
                    <option value={1}> الجمعة </option>
                    <option value={1}> السبت </option>
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


          <div
            className="accordion-item rounded-2 mt-5 "
            style={{ position: "relative" }}
          >
            <p
              className="rounded-top text-white"
              style={{
                position: "absolute",
                right: 0,
                top: "-25px",
                zIndex: 8,
                backgroundColor: "#004b69",
                width: "25%",
                textAlign: "center",
              }}
            >
              {" "}
              خياطة
            </p>
            <div
              className="accordion-header d-flex justify-content-evenly border-bottom border-primary "
              style={{ direction: "rtl", fontWeight: 600 }}
            >
              <div
                className="accordion-button collapsed text-center rounded-end"

                data-bs-toggle="collapse"
                style={{ width: "60%" }}
                data-bs-target="#flush-collapseOne2"
                aria-expanded="false"
                aria-controls="flush-collapseOne2"
              >
                <div
                  style={{ fontSize: 18, width: "100%", textAlign: "start" }}
                  className="col-4"
                >
                  {" "}
                  عبد الرزاق ابو خشبة{" "}
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
                  46
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
              id="flush-collapseOne2"
              className="rounded-bottom accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
              style={{ backgroundColor: "#acacac59" }}
            >
              <div className="accordion-body">
                <div className="d-flex justify-content-between">
                  <select
                    className="form-select text-end text-white"
                    aria-label="Default select example"
                    style={{ width: "35%", backgroundColor: "rgb(0, 82, 107)" }}
                  >
                    <option value={1}> الأحد </option>
                    <option value={1}> الاثنين </option>
                    <option value={1}> الثلاثاء </option>
                    <option value={1}> الأربعاء </option>
                    <option value={1}> الخميس </option>
                    <option value={1}> الجمعة </option>
                    <option value={1}> السبت </option>
                  </select>
                  <div className="input-group" style={{ width: "40%" }}>
                    <span
                      className="input-group-text"
                      id="inputGroup-sizing-default"
                    >
                      12
                    </span>
                    <input
                      type="text"
                      className="form-control"
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


          <div
            className="accordion-item rounded-2 mt-5 "
            style={{ position: "relative" }}
          >
            <p
              className="rounded-top text-white"
              style={{
                position: "absolute",
                right: 0,
                top: "-25px",
                zIndex: 8,
                backgroundColor: "#690000",
                width: "25%",
                textAlign: "center",
              }}
            >
              {" "}
              تفصيل{" "}
            </p>
            <div
              className="accordion-header d-flex justify-content-evenly border-bottom border-primary "
              style={{ direction: "rtl", fontWeight: 600 }}
            >
              <div
                className="accordion-button collapsed text-center rounded-end"

                data-bs-toggle="collapse"
                style={{ width: "60%" }}
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                <div
                  style={{ fontSize: 18, width: "100%", textAlign: "start" }}
                  className="col-4"
                >
                  {" "}
                  سعد ابو خشبة{" "}
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
                  58
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
              id="flush-collapseOne"
              className="rounded-bottom accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
              style={{ backgroundColor: "#acacac59" }}
            >
              <div className="accordion-body">
                <div className="d-flex justify-content-between">
                  <select
                    className="form-select text-end text-white"
                    aria-label="Default select example"
                    style={{ width: "35%", backgroundColor: "rgb(0, 82, 107)" }}
                  >
                    <option value={1}> الأحد </option>
                    <option value={1}> الاثنين </option>
                    <option value={1}> الثلاثاء </option>
                    <option value={1}> الأربعاء </option>
                    <option value={1}> الخميس </option>
                    <option value={1}> الجمعة </option>
                    <option value={1}> السبت </option>
                  </select>
                  <div className="input-group" style={{ width: "40%" }}>
                    <span
                      className="input-group-text"
                      id="inputGroup-sizing-default"
                    >
                      12
                    </span>
                    <input
                      type="text"
                      className="form-control"
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


        </div>
        <Header active="home"/>
      </div>
    
  );
};

export default Page;
