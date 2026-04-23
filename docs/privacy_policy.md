---
layout: default
lang: en
permalink: /privacy_policy.html
---
# Privacy Policy

_Last updated: April 23, 2026_

This policy applies to the **Chords Grid Crafter** Google Docs add-on (the "Add-On").

## What the Add-On does

Chords Grid Crafter is a sidebar tool that lets you build chord grid notation images and insert them into the Google Doc you currently have open. All chord-grid rendering happens locally in your browser (on a canvas element inside the sidebar). No servers belonging to this project are involved.

## What data is accessed and how it is used

**Your Google Document**

The Add-On reads and writes only the Google Doc that is currently open in your browser at the moment you use the sidebar. Specifically, it:
- Inserts or replaces an inline PNG image containing your chord grid.
- Reads or writes the image's alt-text field to store and recover the chord grid configuration (prefixed `CGC_DATA`).

This access is limited to the active document. The Add-On cannot read any other file in your Drive or any other Google service.

**Your locale**

The Add-On reads your locale setting (e.g., `en`, `fr`) through the Google Apps Script runtime in order to display the sidebar in your language. This value is used only for that purpose and is never stored or transmitted anywhere.

**Nothing else**

The Add-On does not read your name, email address, profile picture, Google Drive file list, or any other personal information. It does not access any document other than the one you are currently editing.

## Data the developer can see

None. The Add-On runs entirely as a Google Apps Script attached to your Google account. The developer has no server, no backend, no logging infrastructure, and no analytics. Nothing you type, insert, or store via this Add-On is visible to or accessible by the developer.

## Third-party services

The sidebar UI loads fonts and icons from Google Fonts (`fonts.googleapis.com`, `fonts.gstatic.com`) and the standard Apps Script stylesheet (`ssl.gstatic.com`). These are Google's own CDN services. Loading them sends a standard HTTP request from your browser to Google's servers (your IP address and browser headers are involved, as with any web page that loads a Google Font). No chord grid data or document content is included in these requests. Google's handling of those CDN requests is governed by [Google's Privacy Policy](https://policies.google.com/privacy).

No data is sent to any other third party.

## Google API compliance

This Add-On complies with the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy), including the Limited Use requirements.

## Data retention and deletion

The Add-On stores nothing outside your own Google Document. Chord grid configuration lives exclusively in the alt-text field of images you have inserted into your own documents. To delete it, delete the image from the document. The developer retains no copy of any data.

## Your rights

Because the developer holds no personal data about you, there is nothing to request, correct, or delete on the developer's end. To remove all traces of Add-On activity, uninstall the Add-On through Google Workspace and delete any chord grid images from your documents.

## Security

The Add-On is open-source. The full source code is available at [github.com/the8tre/gdocs-chords-grid-crafter](https://github.com/the8tre/gdocs-chords-grid-crafter). All processing happens within Google's infrastructure (Apps Script + your browser). The developer operates no servers, databases, or external endpoints.

## Policy updates

If this policy is updated, the "Last updated" date at the top of this page will change. For material changes, a notice will be posted in the Add-On's [GitHub repository](https://github.com/the8tre/gdocs-chords-grid-crafter). Continued use of the Add-On after a policy update constitutes acceptance of the revised policy.

## EEA notice

For users in the European Economic Area: the developer of this Add-On is a private individual acting in a non-commercial capacity. The Add-On is a free hobby project that generates no income. The developer is not a "trader" as defined under EU consumer law.

## Contact

For privacy questions or concerns, please open an issue in the [GitHub repository](https://github.com/the8tre/gdocs-chords-grid-crafter/issues).

## About

This Add-On was built because chord grid notation is genuinely useful for band arrangements, and there was no easy way to create it directly in Google Docs. The developer is a code-and-bass-loving hobbyist with a day job. There is no business, no income, and no interest in your data.
