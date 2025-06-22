/** @format */

import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export const homeData = {
  myImage: "assets/my_image.jpg",
  contactInfo: [
    {
      Icon: IoMdMail,
      Label: "mohamednbashar@gmail.com",
      Link: "/contact", // This refers to the Contact page in the website, you can change it to whatever you like
    },
    {
      Icon: FaLocationDot,
      Label: "Dakahlia, Egypt",
      Link: "https://maps.app.goo.gl/ktsASsyE6mHYt1BQ7", // This is just a simple location of my city
    },
    {
      Icon: FaPhoneAlt,
      Label: "+20 112 296 8626",
      Link: "tel:+201122968626",
    },
  ],
  education: [
    {
      Icon: FaUniversity,
      Label: "Mansoura University",
      Link: "https://myu.mans.edu.eg/",
    },
    {
      Icon: FaGraduationCap,
      Label: "Undergraduate Computer and Control Systems Engineering",
      Link: "https://myu.mans.edu.eg/",
    },
  ],

  social: [
    {
      Icon: FaGithub,
      Label: "GitHub",
      Link: "https://github.com/Mohamed-n-Bashar",
    },
    {
      Icon: FaLinkedin,
      Label: "LinkedIn",
      Link: "https://www.linkedin.com/in/mohamed-bashar-806046248/",
    },
    {
      Icon: FaFacebook,
      Label: "Facebook",
      Link: "https://www.facebook.com/share/1B8keVDTXZ/",
    },
    {
      Icon: FaInstagram,
      Label: "Instagram",
      Link: "https://www.instagram.com/mo.n.bashar?igsh=MXM1M3k2OXN4bDVtcQ==",
    },
    {
      Icon: FaTwitter,
      Label: "X",
      Link: "https://x.com/Mohamed36147260",
    },
  ],

  projects: [
    {
      AppName: "LinKat",
      Company: "null",
      Link: "https://null-tech.netlify.app/",
    },
  ],
};
