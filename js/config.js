/* ==========================================================================
   Mythwake website settings. THIS IS THE ONE FILE TO EDIT.
   Leave a value as "" and the site shows a clearly marked placeholder instead.
   ========================================================================== */

/* The Microsoft Store listing: the main way to get Mythwake. The "Download from the Microsoft Store" badges link here.
   (?mode=direct opens the Store app on Windows; elsewhere it shows the web listing.) */
const STORE_URL = "https://apps.microsoft.com/detail/9NCS6GLQ56GV?mode=direct";

/* The launcher download (the second option, under the Store badge on the Download page).
   Set it to the full link of the file players should get, for example
   "https://example.com/MythwakeSetup.exe". While it is "", the button on the
   Download page is switched off and says the download is coming soon. */
const DOWNLOAD_URL = "files/Launcher.zip";

/* Optional small line under the Download button, for example "Version 14.4, 310 MB". */
const DOWNLOAD_NOTE = "Windows 10 or 11 · 34 MB";

/* The Discord invite link, for example "https://discord.gg/xxxxxxx". */
const DISCORD_URL = "https://discord.gg/GswmKZXRVS";

/* The support email address shown on the Support page and in the footer. */
const SUPPORT_EMAIL = "baynav@playmythwake.com";

window.MYTHWAKE = {
  storeUrl: STORE_URL,
  downloadUrl: DOWNLOAD_URL,
  downloadNote: DOWNLOAD_NOTE,
  discordUrl: DISCORD_URL,
  supportEmail: SUPPORT_EMAIL
};
