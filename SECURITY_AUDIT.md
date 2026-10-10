# Pre-publication security audit

Audit date: 2026-10-10. Scope: this project only, before its first commit.

## Findings

- Scanned all 353 original project files, including hidden files, for common
  provider API keys, passwords, tokens, private keys, JWTs, credential-bearing
  URLs, email addresses, phone numbers, personal-data fields, local paths, and
  store references. Also checked quoted opaque strings and Git metadata.
- No hardcoded credentials or customer records were identified. Password hits
  in 31 locale files are translation labels. Address hits in locale files and
  `sections/main-order.liquid` are labels and runtime Liquid references, not
  exported customer addresses. No email addresses or phone numbers were found.
- `config/settings_data.json` contains merchant settings and two store image
  references (lines 12 and 14). No credentials were detected. Excluded from Git
  to keep the merchant configuration local and prevent future accidental leaks.
- `.github-prep-baseline.json` contains 352 relative file paths mapped to SHA-256
  hashes. All hashes matched the existing files. These are file fingerprints,
  not API tokens. Excluded as local preparation metadata.
- `sections/header-group.context.*.json` contains a store-specific market
  identifier. It is not an authentication secret. Market context overrides in
  sections and templates are excluded from public version control.
- `templates/index.json` includes two Shopify image references (lines 56 and
  69) and brand marketing copy. The footer group also contains brand copy.
  These contain no detected customer data or credentials and remain eligible
  for this public theme repository. They do disclose branding and asset names.
- Git had no commits and no tracked/staged files. The local remote configuration
  contained no detected embedded credentials, URL user information, or query.

## Publication exclusions

The new `.gitignore` excludes the files above, local audit output, Shopify CLI
state/configuration, environment files, common credential files and private keys,
local editor/cache/dependency files, logs, backups, archives, and data exports.
Do not force-add these files. An ignore rule does not protect an already tracked
file; there were no tracked files at the time of this audit.

## Eligible files

The reviewed assets, layouts, locales, Liquid sections, snippets, templates,
`config/settings_schema.json`, `AGENTS.md`, `.gitignore`, and this report are
eligible for commit, except the exclusions above. The exact current path list
is saved locally in `.audit-local/safe-to-commit.txt`; it is intentionally ignored.

The excluded merchant settings and market overrides remain on disk unchanged.
A fresh clone will need suitable local settings and market configuration before
it can reproduce this store's appearance. No theme setting IDs were changed.

## Verification and limits

Checks cover file contents and filenames, JSON structure, secret-pattern and
opaque-literal searches, Git status/history/index, ignore rules, and baseline
hashes. SVGs were scanned as text; the GIF received a byte-to-text pattern scan,
not OCR or steganographic analysis. Automated pattern searches cannot prove the
absence of every possible secret or personal name. No remote authentication or
store requests were made. This is a publication/privacy audit, not a full runtime
application security review. Recheck new or changed files before publication.

No original theme files were modified. Nothing was staged, committed, or pushed,
and the Shopify store was not accessed or modified.
