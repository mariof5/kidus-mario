import React from "react";
import styles from "./Contact.module.css";
import LayOut from "../../Components/Layouts/LayOut";
import Plans from "../../Components/Plans/Plans";
import ScrollAni from "../../Components/ScrollAni/ScrollAni";
import { Booking } from "../../Components/Booking/Booking"; 


export default function Contact() {
  return (
    <LayOut>
   <Plans/>
   <Booking/>
    </LayOut>
  );
}