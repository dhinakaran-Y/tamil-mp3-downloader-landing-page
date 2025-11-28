import '../scss/style.scss'

import * as bootstrap from 'bootstrap'

// const popoverTriggerList = document.querySelectorAll(
//   '[data-bs-toggle="popover"]'
// );
// const popoverList = [...popoverTriggerList].map(
//   (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
// );

document.addEventListener("DOMContentLoaded", function () {
  var popoverTriggerEl = document.getElementById("permanentPopover");
  // Initialize the popover instance
  var popover = new bootstrap.Popover(popoverTriggerEl, {
    trigger: "manual", // Set trigger to manual
  });

  // Manually show the popover
  popover.show();
});
