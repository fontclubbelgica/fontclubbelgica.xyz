---
layout: article
date: 2023-11-01
type: article
tags:
  - clearing font cache
  - troubleshooting
  - how to
  - tutorial
featuredImage: FCB_Article_Splash_Cache.jpg
thumbnailImage: FCB_ANR_Font-Caches.jpg

draft: false
---

# How to Clear Font Caches

<div markdown="1">
  <div markdown="1">

  </div>
  <div markdown="1">

<i>Font caches store font data to help speed up text rendering, but over time, they can become corrupted or outdated, leading to display issues, missing fonts, or application crashes. Clearing the font cache can resolve these issues. This guide provides step-by-step instructions for clearing font caches on both macOS and Windows.
</i>

  </div>
  </div>

<div markdown="1">
  <div markdown="1">

  ![](clear.svg)

  </div>
  <div markdown="1">

## Clearing Font Cache on macOS

### Method 1: Using Terminal

1. Close All Applications: Ensure all applications using fonts are closed.

2. Open Terminal: Press Command + Space, type "Terminal," and hit Enter.

3. Enter the Commands:

   <i>sudo atsutil databases -remove

   <i>atsutil server -shutdown

   <i>atsutil server -restart

   The first command removes font cache databases.

   The second and third commands stop and restart the font server.

4. Restart Your Mac: This ensures the changes take effect.

### Method 2: Manually Deleting Font Cache Files

1. Close All Applications.

2. Open Finder and go to <i>Go > Go to Folder</i> (Shift + Command + G).

3. Enter the Following Path:

   <i>/Library/Caches/</i>

4. Locate and Delete Font Cache Files:

   Delete files and folders starting with <i>com.apple.ATS</i>.

5. Repeat for User Cache:

   Navigate to <i>~/Library/Caches/</i> and delete <i>com.apple.ATS</i>.

6. Restart Your Mac.


## Clearing Font Cache on Windows

### Method 1: Using Windows Services

1. Close Any Open Applications.

2. Press Win + R, type <i>services.msc</i>, and hit Enter.

3. Find and Stop the "Windows Font Cache Service":

   Locate <i>"Windows Font Cache Service"</i> and <i>"Windows Presentation Foundation Font Cache"</i>.

   Right-click each service and select Stop.

4. Delete Font Cache Files:

   Open File Explorer and navigate to:

   <i>C:\Windows\ServiceProfiles\LocalService\AppData\Local\FontCache</i>

   Delete all files in this folder.

5. Restart Font Cache Services:

   Go back to services.msc.

   Right-click the previously stopped services and select Start.

6. Restart Your Computer.

### Method 2: Deleting Font Cache via Disk Cleanup

Press Win + S and search for Disk Cleanup.

Select the System Drive (C:) and Click "OK".

Check "Temporary Files" and "Thumbnails".

Click "OK" and "Delete Files".

Restart Your Computer.

## Conclusion

Clearing font caches can resolve display issues and improve system stability. If font-related problems persist, consider reinstalling affected fonts or resetting system settings. Regular maintenance can help prevent future issues.

  </div>
  </div>