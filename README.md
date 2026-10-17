# henrytran.dev

Henry Tran's personal site. Plain HTML, CSS and JavaScript, hosted free on GitHub Pages.

## Everyday changes

| To change... | Edit this |
|---|---|
| Your headshot | Save it as `assets/headshot.jpg` (a square photo works best). Until then, an "HT" circle shows. |
| Echo's screenshot | Save it as `assets/echo.png`. Until then, a placeholder shows. |
| Add a project | Open `projects.js`, copy the Echo block, paste it below with a comma between, and edit it. |
| Your resume | Replace `assets/Henry_Tran_Resume.pdf` with the new file (same name). |
| Bio, experience, education, skills | Edit the text in `index.html`. |

After any change, upload the changed file to the GitHub repo (or commit and push). The live site updates in about a minute.

## First-time setup

### 1. Put the files on GitHub
1. On github.com, click **New repository**. Name it `henrytran.dev`, set it to **Public**, and click **Create repository**.
2. Click **uploading an existing file**.
3. Unzip the download and drag **everything inside the folder** (including the `assets` folder) into the upload box. Don't upload the .zip itself.
4. Click **Commit changes**.

### 2. Turn on GitHub Pages
1. In the repo, go to **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**, branch **main**, folder **/ (root)**, and click **Save**.
3. Under **Custom domain**, it should already show `henrytran.dev` (from the `CNAME` file). If not, type it and click **Save**.

### 3. Point henrytran.dev at GitHub (in Squarespace Domains)
Go to Squarespace → **Domains** → **henrytran.dev** → **DNS**.

1. **Delete** the Squarespace default records for the main site (usually grouped as **Squarespace Defaults**: A records for `@` and a `www` CNAME).
2. **Do not touch** the `echo` CNAME record. That keeps echo.henrytran.dev working.
3. **Add** four A records, host `@`, one for each value:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
4. **Add** a CNAME record: host `www`, value `henrytrandev.github.io`.

### 4. Turn on HTTPS
DNS changes take anywhere from a few minutes to a few hours. Once GitHub's Pages settings show the domain check passed, tick **Enforce HTTPS**.

`.dev` domains only work over HTTPS, so the site may not load until GitHub finishes issuing the certificate. That's normal; give it some time.
