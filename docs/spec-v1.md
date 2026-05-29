# Metaverse Listing Copilot V1.0 Spec

Standalone internal webtool for Metaverse listing workflow.

## Scope

- Bulk upload JPG / PNG / WEBP card images.
- Single Image mode: one image per card asset.
- Front / Back Pair mode: images are paired in upload order.
- Generate eBay-ready titles with confidence routing: HIGH / UNSURE / FAILED.
- Show reason, extracted fields, copy button, estimated request count, and estimated API cost.

## Exclusions

- No eBay API integration.
- No automatic listing.
- No folder export or ZIP generation.
- No cloud drive sync.
- No multi-tenant account system.

## Production

Target domain: `listing.lyncafei.team`.

Required Vercel env vars:

```text
METAVERSE_USERNAME
METAVERSE_PASSWORD
METAVERSE_AUTH_SECRET
OPENAI_API_KEY
OPENAI_LISTING_MODEL
```
