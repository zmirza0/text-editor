const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  // waits for trigger event
  window.deferredPrompt = event;
  // shows button
  butInstall.classList.toggle("hidden", false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  // sets variable that waits for trigger event
  const promptEvent = window.deferredPrompt;
  // logic to check if trigger event has happened
  if (!promptEvent) {
    return;
  }
  // shows prompt if event has been triggered
  promptEvent.prompt();
  // resets trigger event
  window.deferredPrompt = null;
  // hides button after use
  butInstall.classList.toggle("hidden", true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  // clears prompt
  window.deferredPrompt = null;
  textHeader.textContent = "Successfully installed!";
  console.log("👍", "appinstalled", event);
});
