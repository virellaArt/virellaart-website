document.addEventListener("DOMContentLoaded", () => {

  document.addEventListener("click", (event) => {

    const whatsappButton = event.target.closest("a.whatsapp");

    if (!whatsappButton) return;


    console.log("WhatsApp button clicked");


    if (typeof window.gtag === "function") {

      window.gtag("event", "whatsapp_click", {
        event_category: "engagement",
        event_label: "Product WhatsApp"
      });


      console.log("WhatsApp event sent to GA4");

    } else {

      console.log("gtag not ready");

    }

  });

});