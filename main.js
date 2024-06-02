// Check if the browser supports service workers and PWA functionality
if ('serviceWorker' in navigator && 'BeforeInstallPromptEvent' in window) {
    let deferredPrompt;
  
    window.addEventListener('beforeinstallprompt', (event) => {
      // Prevent the default browser install prompt
      event.preventDefault();
  
      // Store the event for later use
      deferredPrompt = event;
  
      // Show the install button
      const installButton = document.getElementById('installButton');
      installButton.style.display = 'block';
  
      // Add click event listener to trigger the install prompt
      installButton.addEventListener('click', () => {
        // Trigger the install prompt
        deferredPrompt.prompt();
  
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the PWA installation');
          } else {
            console.log('User dismissed the PWA installation');
          }
  
          // Reset the deferredPrompt
          deferredPrompt = null;
        });
  
        // Hide the button
        installButton.style.display = 'none';
      });
    });
  
    // Check if the PWA is already installed
    window.addEventListener('appinstalled', () => {
      const installButton = document.getElementById('installButton');
      installButton.style.display = 'none';
    });
  }