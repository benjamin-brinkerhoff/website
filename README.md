# Quorum Website

A simple static website for an LDS church quorum. Built with plain HTML, CSS, and JavaScript, designed to be hosted on **GitHub Pages**.

## Pages

| File | Description |
|---|---|
| `index.html` | Home page with quick links |
| `announcements.html` | Announcements / news page |
| `calendar.html` | Calendar page (Google Calendar embed) |
| `style.css` | Shared stylesheet |
| `script.js` | Active nav link highlighting |

## Deploying to GitHub Pages

1. Push this repository to GitHub (already done if you're reading this).
2. Go to **Settings → Pages** in your repository.
3. Under **Source**, select **Deploy from a branch**, choose `main` (or `master`) and `/ (root)`, then click **Save**.
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/` within a minute or two.

## Connecting Your Google Calendar

1. Open [Google Calendar](https://calendar.google.com).
2. In the left sidebar, click the **three-dot menu** next to the calendar you want to embed and choose **Settings and sharing**.
3. Scroll to **Integrate calendar** and copy the **Embed code** (`<iframe>` snippet).
4. Open `calendar.html` and replace the existing `<iframe>` with your copied code.
   - Make sure the iframe has `style="border:0; width:100%; min-height:600px;"` so it fills the page.
5. Commit and push — the calendar will update automatically.

## Adding Announcements

Open `announcements.html` and copy one of the existing `<article class="card">` blocks, paste it at the top of the list, and update the title, date, and body text. Then commit and push.
