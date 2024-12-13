function showNotification(setter) {
  setter(true);
  setTimeout(() => {
    setter(false);
  }, 2000);
}

export default showNotification;