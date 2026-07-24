// VIRELLAART Analytics Events

document.addEventListener("DOMContentLoaded", () => {

  // WhatsApp Click Tracking
  document.addEventListener("click", (event) => {

    const target = event.target.closest("a");

    if (!target) return;


    if (target.href && target.href.includes("wa.me")) {

      gtag("event", "whatsapp_click", {
        event_category: "engagement",
        event_label: "WhatsApp Button",
      });

      console.log("WhatsApp click tracked");

    }

  });


  // Gallery Open Tracking
  document.addEventListener("click", (event) => {

    const image = event.target.closest("img");

    if (!image) return;


    if (
      image.closest(".gallery") ||
      image.closest(".lightbox") ||
      image.closest("[data-gallery]")
    ) {

      gtag("event", "gallery_open", {
        event_category: "engagement",
        event_label: "Product Gallery",
      });

      console.log("Gallery open tracked");

    }

  });

});