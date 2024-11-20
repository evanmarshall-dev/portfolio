"use client";

import { useEffect } from "react";

export default function ContactForm() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/v2.js";
    document.body.appendChild(script);

    script.addEventListener("load", () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID,
          formId: process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID,
          target: "#hubspotForm",
        });
      }
    });
  }, []);

  return <div id="hubspotForm" className="hubspotForm"></div>;
}
