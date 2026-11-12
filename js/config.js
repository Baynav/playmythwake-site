/* ==========================================================================
   Mythwake website settings. THIS IS THE ONE FILE TO EDIT.
   Leave a value as "" and the site shows a clearly marked placeholder instead.
   ========================================================================== */

/* The Windows download. Every "Download" button on the site uses it.
   Set it to the full link of the file players should get, for example
   "https://example.com/MythwakeSetup.exe". While it is "", the button on the
   Download page is switched off and says the download is coming soon. */
const DOWNLOAD_URL = "";

/* Optional small line under the Download button, for example "Version 14.4, 310 MB". */
const DOWNLOAD_NOTE = "v1.0";

/* The Discord invite link, for example "https://discord.gg/xxxxxxx". */
const DISCORD_URL = "https://discord.gg/GswmKZXRVS";

/* The support email address shown on the Support page and in the footer. */
const SUPPORT_EMAIL = "baynav@playmythwake.com";

window.MYTHWAKE = {
  downloadUrl: DOWNLOAD_URL,
  downloadNote: DOWNLOAD_NOTE,
  discordUrl: DISCORD_URL,
  supportEmail: SUPPORT_EMAIL
};
