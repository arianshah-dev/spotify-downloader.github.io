const form = document.getElementById("downloadForm");
const statusText = document.getElementById("statusText");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const url = formData.get("spotifyUrl");
  const quality = formData.get("quality");

  statusText.textContent = `Preparing download for ${url} at ${quality}kbps...`;

  window.setTimeout(() => {
    statusText.textContent =
      "Demo complete. Connect this form to your backend endpoint for real downloads.";
  }, 1100);
});
