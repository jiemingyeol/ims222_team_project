# Home images (MJ)

Put images used on `index.html` here.

## Artist spotlight images (24 files)

`index.html` already points to these exact filenames - save each image
with this name and it shows up automatically, no code changes needed.

`NN` = order number, `code` = 2-letter artist code.

| # | Artist | Album | Artist photo | Album cover |
|---|---|---|---|---|
| 1 | Michael Jackson | Thriller | `artist-01-mj.jpg` | `album-01-mj.jpg` |
| 2 | Coldplay | A Rush of Blood to the Head | `artist-02-cp.jpg` | `album-02-cp.jpg` |
| 3 | Calvin Harris | Motion | `artist-03-ch.jpg` | `album-03-ch.jpg` |
| 4 | Billy Joel | Glass Houses | `artist-04-bj.jpg` | `album-04-bj.jpg` |
| 5 | J.Cole | Friday Night Lights | `artist-05-jc.jpg` | `album-05-jc.jpg` |
| 6 | Tame Impala | Currents | `artist-06-ti.jpg` | `album-06-ti.jpg` |
| 7 | Lauryn Hill | The Miseducation of Lauryn Hill | `artist-07-lh.jpg` | `album-07-lh.jpg` |
| 8 | Pink Floyd | Dark Side of the Moon | `artist-08-pf.jpg` | `album-08-pf.jpg` |
| 9 | Amy Winehouse | Back to Black | `artist-09-aw.jpg` | `album-09-aw.jpg` |
| 10 | The Black Skirt | THIRSTY | `artist-10-bs.jpg` | `album-10-bs.jpg` |
| 11 | Frank Ocean | channel ORANGE | `artist-11-fo.jpg` | `album-11-fo.jpg` |
| 12 | SYSTEM SEOUL | SS-POP 3 | `artist-12-ss.jpg` | `album-12-ss.jpg` |

If a source image is `.png` or `.webp`, keep that extension in the filename
and update the matching `src="..."` in `index.html` to match.

## General rule

Link images from `index.html` like this:

    <img src="images/home/your-file.jpg" alt="describe the image">

Naming: lowercase, hyphens instead of spaces, no Korean, keep the extension
lowercase (`.jpg`, not `.JPG`). Compress large photos before uploading.
