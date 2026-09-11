# The Daily Aux

A small 5-page website about a favorite music album.
Course project for IMS222 (Intro to Interaction Design).

- **Live site:** https://jiemingyeol.github.io/ims222_team_project/
- **Repository:** https://github.com/jiemingyeol/ims222_team_project
- **Team:** 4 members

## Pages

| Page     | File            | Editor  |
|----------|-----------------|---------|
| Home     | `index.html`    | MJ      |
| Info     | `info.html`     | Carson  |
| FaQ      | `faq.html`      | Owen    |
| About Us | `about.html`    | Morgan  |
| Contact  | `contact.html`  | Owen    |

**MJ only** (nobody else edits these):
`style.css`, plus the `[SHARED HEADER]` and `[SHARED FOOTER]` blocks inside every HTML file.

## Images

Each page has its own folder under `images/`. Put your page's images only in
your folder, so filenames never clash.

| Folder             | For           | Editor  |
|--------------------|---------------|---------|
| `images/home/`     | `index.html`  | MJ      |
| `images/info/`     | `info.html`   | Carson  |
| `images/faq/`      | `faq.html`    | Owen    |
| `images/about/`    | `about.html`  | Morgan  |
| `images/contact/`  | `contact.html`| Owen    |
| `images/shared/`   | every page    | MJ      |

To add an image on github.com: open your folder, **Add file -> Upload files**,
drag the image in, **Commit changes**. Then link it in your page:

    <img src="images/about/your-file.jpg" alt="describe the image">

Naming: lowercase, hyphens instead of spaces, no Korean, lowercase extension
(`.jpg` not `.JPG`). Compress large photos before uploading.

## How to edit (team members)

You do not install anything. You only use github.com in your browser.

1. Open the repository on github.com.
2. Click **your** page file (see the table above).
3. Click the **pencil icon** near the top right of the file view.
4. Edit **only the text between `<main>` and `</main>`**.
5. Scroll down and click **Commit changes**, then **Commit changes** again in the popup.
6. Wait about 1 minute, then refresh the live site to see your change.

### Do

- Edit only your own page.
- Edit only inside `<main>` ... `</main>`.
- Change the text only. Leave the tags themselves (`<main>`, `</main>`, `</body>`, `</html>`) exactly as they are.
- Make small changes and commit often.

### Don't

- Don't edit anyone else's page.
- Don't touch the `[SHARED HEADER]` or `[SHARED FOOTER]` blocks.
- Don't edit `style.css`.
- Don't delete or rename files.

### If something goes wrong

- **"Can't commit, the file has changed"** - refresh the page and redo your edit. (Someone edited the same file at the same time. Rare, since each person has their own page.)
- **The live site looks broken after your commit** - tell the team chat. MJ can roll it back.

## Status

The layout and wireframe are **not decided yet**. The HTML files contain only
placeholder structure. Real content is added after the wireframe meeting.
