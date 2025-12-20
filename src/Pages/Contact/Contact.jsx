import React from "react";
import styles from "./Contact.module.css";
import Layout from "../../Components/Layouts/Layout";
import Plans from "../../Components/Plans/Plans";
import ScrollAni from "../../Components/ScrollAni/ScrollAni";
import { Booking } from "../../Components/Booking/Booking";


export default function Contact() {
  return (
    <Layout>
      <Plans />
      <Booking />
    </Layout>
  );
}