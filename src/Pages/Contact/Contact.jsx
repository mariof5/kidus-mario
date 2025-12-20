import React from "react";
import styles from "./Contact.module.css";
import Layout from "../../Components/Layouts/Layout.jsx";
import Plans from "../../Components/Plans/Plans.jsx";
import ScrollAni from "../../Components/ScrollAni/ScrollAni.jsx";
import { Booking } from "../../Components/Booking/Booking.jsx";


export default function Contact() {
  return (
    <Layout>
      <Plans />
      <Booking />
    </Layout>
  );
}