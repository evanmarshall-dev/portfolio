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
          // TODO: Uncomment NEXT_PUBLIC versions for dev environment.
          // portalId: process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID,
          // formId: process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID,
          portalId: process.env.HUBSPOT_PORTAL_ID,
          formId: process.env.HUBSPOT_FORM_ID,
          target: "#hubspotForm",
        });
      }
    });
  }, []);

  return <div id="hubspotForm" className="hubspotForm"></div>;
}
