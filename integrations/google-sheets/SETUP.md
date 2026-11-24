# Google Sheets integration

The website writes lead records through the official Google Sheets API. MongoDB remains the system of record; Sheets is an operational copy for the exhibition team.

## Prepare Google Cloud

1. Create or select a Google Cloud project.
2. Enable the **Google Sheets API**.
3. Create a service account with no broader project role than required.
4. Create and download a JSON key for that service account.
5. Base64-encode the complete JSON file and store the result as `GOOGLE_SERVICE_ACCOUNT_BASE64` in the hosting platform.

PowerShell example:

```powershell
[Convert]::ToBase64String([IO.File]::ReadAllBytes('service-account.json'))
```

Never place the JSON key or its encoded value in the repository.

## Prepare the spreadsheet

1. Create a Google spreadsheet.
2. Add a tab named exactly `Website Enquiries`.
3. Share the spreadsheet with the service account's `client_email` as Editor.
4. Copy the spreadsheet ID from its URL and set it as `GOOGLE_SHEET_ID`.

The application creates the header row when the tab is empty. If headers already exist, columns A through T must match this order:

```text
Date
Platform
Register As
Company Name
Contact Person
Designation
Email Id
Mobile No.
Website
Address
Country
Area of Interest
Info. Get From
Message
Corrections
STATUS 1
STATUS 2
STATUS 3
STATUS 4
STATUS 5
```

Column U is reserved for `Lead ID`, which prevents duplicate delivery.

## Configure and test

Set:

```text
GOOGLE_SERVICE_ACCOUNT_BASE64=<base64-encoded-service-account-json>
GOOGLE_SHEET_ID=<spreadsheet-id>
```

Restart or redeploy the site, submit a test visitor or exhibitor enquiry, and confirm that a row appears in `Website Enquiries`. Check application logs if delivery is skipped or rejected.

The old `Code.gs` file remains only as a legacy reference and is not required by the current direct API integration.
