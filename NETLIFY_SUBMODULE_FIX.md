# Netlify: “No url found for submodule path 'privacy_policy_bolomde'”

This error happens **before** `npm run build`. Netlify runs `git submodule` checkout; your GitHub repo has **`privacy_policy_bolomde` recorded as a submodule**, but **`.gitmodules` has no valid `url`** (or is missing lines).

**Your React code is fine.** You need to fix the Git repository on GitHub.

## Quick check on GitHub

1. Open your repo: `https://github.com/ikutsia/Bolomde_Affirmations_Privacy_Policy`
2. Look for a file **`.gitmodules`** at the repo root.
3. Open the **`privacy_policy_bolomde`** folder: if it shows like a submodule (sometimes a special icon / commit link only), it’s a submodule, not normal files.

## Fix: turn the submodule into a normal folder (recommended)

Do this **in a local clone of the same GitHub repo** (the one Netlify uses).

### 1. Clone and enter the repo

```bash
git clone https://github.com/ikutsia/Bolomde_Affirmations_Privacy_Policy.git
cd Bolomde_Affirmations_Privacy_Policy
```

### 2. Remove the submodule registration (keep your files on disk)

**PowerShell (Windows):**

```powershell
# Stop tracking as submodule (does not delete files inside the folder)
git rm --cached privacy_policy_bolomde

# Remove submodule metadata if it exists
Remove-Item -Recurse -Force .git\modules\privacy_policy_bolomde -ErrorAction SilentlyContinue

# Remove or edit .gitmodules — delete the file if it only listed this submodule
Remove-Item -Force .gitmodules -ErrorAction SilentlyContinue
```

**If `privacy_policy_bolomde` is empty** after `git rm --cached`, copy your full React app into that folder again (from your machine), then continue.

### 3. If there is a nested `.git` inside `privacy_policy_bolomde`, remove it

Otherwise Git will still treat it as a separate repo:

```powershell
Remove-Item -Recurse -Force privacy_policy_bolomde\.git -ErrorAction SilentlyContinue
```

### 4. Add as normal files and push

```powershell
git add privacy_policy_bolomde
git add .gitmodules  # only if you edited instead of deleting — usually `git add -A`
git status
git commit -m "Fix Netlify: remove broken submodule, track privacy_policy_bolomde as normal files"
git push origin main
```

Then trigger a new deploy on Netlify.

## Alternative: deploy only this React app

Create a **new** GitHub repository whose root **is** the contents of `privacy_policy_bolomde` (single `package.json` at root, no parent submodule). Connect Netlify to that repo — no submodule involved.

## Netlify settings (after Git is fixed)

- **Build command:** `npm run build`
- **Publish directory:** `build`

If the React app lives in a subfolder of a monorepo, set **Base directory** in Netlify to that folder (e.g. `privacy_policy_bolomde`). The submodule issue must still be fixed first, or clone will keep failing.

See also `netlify.toml` in this folder for the same build/publish defaults.
