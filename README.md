# Bangladesh Wood International Expo

Production-ready website for the **11th Bangladesh Wood International Expo**, scheduled for **11–13 November 2027** at **ICCB Exhibition Hall, Dhaka, Bangladesh**.

The project is a Next.js application with a responsive public website, event content, registration and enquiry workflows, an authenticated admin dashboard, MongoDB persistence, optional Google Sheets and SMTP delivery, technical SEO, structured data and accessible motion.

## Technology stack

- Next.js 16 App Router, React 19 and TypeScript
- Tailwind CSS 4 utilities with scoped CSS for the established visual system
- GSAP and Lenis for motion and smooth scrolling
- MongoDB for leads, visitors, badges, exhibitors and testimonials
- Zod request validation
- Jose-based signed admin sessions
- Google Sheets API integration using a service account
- Nodemailer for optional transactional email and lead alerts
- Google reCAPTCHA v2 Checkbox for production form protection
- Next.js Image optimization, metadata, sitemap, robots and JSON-LD

## Requirements

- Node.js **20.9 or newer**
- npm 10 or newer recommended
- MongoDB instance for forms and admin features

## Installation

```bash
npm ci
copy .env.example .env.local
```

On macOS or Linux, replace the second command with `cp .env.example .env.local`.

Edit `.env.local` and replace every required placeholder before testing forms or admin access.

## Development

```bash
npm run dev
```

Open `http://localhost:3000`.

For an isolated local MongoDB instance, run `npm run db:local`. The first run may download MongoDB binaries.

## Production build

```bash
npm run typecheck
npm run build
npm run start
```

The default production URL is `http://localhost:3000`. Use `npm run start -- -p 3001` to select another port.

## Environment variables

| Variable | Required | Purpose |
|---|---:|---|
| `NEXT_PUBLIC_SITE_URL` | Yes | Production base URL for canonicals, sitemap, QR links and emails |
| `MONGODB_URI` | Yes for data features | MongoDB connection string |
| `MONGODB_DB` | Yes for data features | Database name |
| `ADMIN_PASSWORD` | Yes for admin | Password used at `/admin/login` |
| `ADMIN_SESSION_SECRET` | Yes for admin | Random session-signing secret, minimum 32 characters |
| `GOOGLE_SERVICE_ACCOUNT_BASE64` | Optional | Base64-encoded Google service-account JSON |
| `GOOGLE_SHEET_ID` | Optional | Target spreadsheet ID |
| `SMTP_HOST` | Optional | SMTP server hostname |
| `SMTP_PORT` | Optional | SMTP port, normally 587 or 465 |
| `SMTP_USER` | Optional | SMTP account username |
| `SMTP_PASS` | Optional | SMTP password or app password |
| `MAIL_FROM` | Optional | Sender name and email |
| `LEADS_NOTIFY_TO` | Optional | Comma-separated lead-notification recipients |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | Production forms | Public reCAPTCHA v2 Checkbox key |
| `RECAPTCHA_SECRET_KEY` | Production forms | Private reCAPTCHA verification key |
| `RECAPTCHA_ALLOWED_HOSTNAMES` | Production forms | Comma-separated approved hostnames |
| `NEXT_PUBLIC_GA_ID` | Optional | GA4 measurement ID |
| `CRON_SECRET` | Optional | Protects the delivery-retry cron endpoint |

Legacy aliases `GOOGLE_CREDENTIALS_BASE64` and `GOOGLE_SHEETS_ID` are accepted by the code, but new deployments should use the names shown above.

## MongoDB setup

1. Create a MongoDB Atlas cluster or use a managed/self-hosted MongoDB server.
2. Create a dedicated database user with access only to the exhibition database.
3. Add the deployment's permitted network source.
4. Set `MONGODB_URI` and `MONGODB_DB`.
5. Run `node scripts/create-indexes.mjs` once after configuration.

Do not place credentials directly in source files or commit `.env.local`.

## Google Sheets setup

The current integration uses the Google Sheets API directly; no public Apps Script web hook is required.

1. Create a Google Cloud service account and enable the Google Sheets API.
2. Download its JSON key and base64-encode the complete JSON file.
3. Create a spreadsheet containing a tab named `Website Enquiries`.
4. Share the spreadsheet with the service account's `client_email` as Editor.
5. Set `GOOGLE_SERVICE_ACCOUNT_BASE64` and `GOOGLE_SHEET_ID`.

See `integrations/google-sheets/SETUP.md` for detailed instructions and required columns.

## Email configuration

Email is optional. When SMTP variables are configured, the system can send visitor confirmations and lead notifications. Use a dedicated transactional SMTP provider or an app password. Never use a normal mailbox password in the repository.

Configure `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `MAIL_FROM` and `LEADS_NOTIFY_TO`, then submit a test enquiry and verify delivery.

## reCAPTCHA configuration

Create a Google reCAPTCHA **v2 Checkbox** key pair for the production domain and `www` hostname. Add `localhost` only when local testing requires it. Set the public site key, private secret and allowed hostnames. Production form requests fail safely when verification is not configured.

## Deployment

### Vercel

1. Import this project into Vercel.
2. Keep the framework preset as Next.js and the build command as `npm run build`.
3. Add the environment variables from `.env.example` in Project Settings.
4. Add the production domain and configure DNS.
5. Deploy, then test a visitor registration and stand enquiry end-to-end.
6. Confirm MongoDB records, email delivery, Google Sheets delivery and `/admin` access.
7. Submit `https://bangladeshwoodexpo.com/sitemap.xml` in Google Search Console.

### Other Node.js hosting

Run `npm ci`, `npm run build`, then `npm run start` behind HTTPS and a reverse proxy. Persist environment variables in the hosting platform, not in the project directory.

## Project architecture

```text
src/
  app/
    (site)/                 Public App Router pages
    admin/                  Authenticated dashboard and editors
    api/                    Forms, conference, admin and cron APIs
  assets/
    bangladesh-2026/        Optimized official exhibition photographs
  components/               Layout, motion, blocks, forms and UI
  lib/                      Event content, database, mail, Sheets, auth and SEO
public/
  brand/                    Exhibition branding
  partners/                 Organiser, sponsor and media logos
  downloads/                Official brochure and post-show report
scripts/                    Database, audit and maintenance utilities
integrations/               External integration documentation
```

The `src/assets/bangladesh-2026` folder contains the required **12 optimized official exhibition photographs**.

## Key content locations

| Content | File/folder |
|---|---|
| Event dates, venue, contacts, organisers, sponsors and navigation | `src/lib/site.ts` |
| Product zones, FAQs, editions, seminars and visitor/exhibitor content | `src/lib/content.ts` |
| SEO and JSON-LD generators | `src/lib/seo.ts` |
| Gallery data and captions | `src/lib/gallery.ts` |
| Official images | `src/assets/bangladesh-2026/` |
| Logos | `public/brand/` and `public/partners/` |
| PDFs | `public/downloads/` |

## Admin setup

1. Configure MongoDB.
2. Set a strong `ADMIN_PASSWORD`.
3. Generate a random `ADMIN_SESSION_SECRET` of at least 32 characters.
4. Deploy over HTTPS.
5. Sign in at `/admin/login` and test the dashboard, exports and badge check-in.

Admin routes and visitor badges use `noindex` directives. The admin session cookie is HTTP-only, SameSite Lax and Secure in production.

## Verification utilities

```bash
npm run typecheck
npm run build
node scripts/audit-public.mjs
```

The public audit expects a running production server at `http://127.0.0.1:3000` unless `AUDIT_BASE_URL` is set. It checks public routes at desktop and mobile sizes, metadata, images, console errors, horizontal overflow and internal links.

## Confirmed and pending event information

Confirmed:

- 11th edition
- 11–13 November 2027
- ICCB Exhibition Hall, Dhaka, Bangladesh
- Futurex Trade Fair and Events and ASK Trade & Exhibitions as organisers
- Best CNC Router as title sponsor

Still requiring official confirmation before publication:

- Daily opening and closing times
- Detailed conference and seminar schedule, speakers and participation terms
- Visitor-entry terms and registration opening status
- Official travel, parking and hotel guidance
- Final exhibitor directory and sponsorship availability

Do not invent these details. Update the central content files only after receiving organiser-approved information.

## Security handover checklist

- Never commit `.env.local` or any credential file.
- Rotate credentials if they were ever shared outside the approved deployment team.
- Use separate production and staging databases and keys.
- Restrict MongoDB access and service-account permissions.
- Confirm reCAPTCHA hostnames before launch.
- Test backups, exports and the delivery-retry cron before opening registration.
