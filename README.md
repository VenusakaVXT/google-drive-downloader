# Google Drive Downloader
Extensions I wrote so that when I click on the shared google drive link, when I click on that link in the browser, it will automatically download the files.

# How to use extensions
First, you must download this utility as a .zip file. Then unzip it.

Open the browser and go to the extension management page (chrome://extensions, edge://extensions, ...).

Enable **Developer mode** if necessary.

Click **Load unpacked** to select the previously unpacked folder, or drag it to the extension management page to push the extension to the browser.
![image](https://github.com/VenusakaVXT/google-drive-downloader/assets/125566811/33db0b3d-19cf-494c-b1f6-d7b3aa909617)

So, you have installed the Auto Download Files extension from the Google Drive URL. You can now click the google drive link and the browser will automatically download the file to your device.

https://github.com/VenusakaVXT/google-drive-downloader/assets/125566811/05ca2cd4-2f80-4dfd-853e-e6d37a68e10e

# Explain details
```javascript 
url.split(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/)
```

This is a complex regular expression to parse a URL into elements like protocol, domain, path, query parameters, and fragment.

1. ([^:\/?#]+): get protocol "http://" or protocol "https://", if available.
2. (\/\/([^\/?#]*)): get the domain name part, for example "www.example.com".
3. ([^?#]*): get the path after the domain name, for example "/path/to/file".
4. (\?([^#]*))?: get the query parameter string after the "?".
5. (#(.*))?: get the fragment string after the "#" sign.

The result of the split() method will be an array containing the elements split from the URL according to the above regular expression.



