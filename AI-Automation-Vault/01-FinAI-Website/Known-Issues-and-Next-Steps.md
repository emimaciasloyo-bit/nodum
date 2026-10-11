---
title: FinAI Known Issues & Next Steps
date: 2026-10-11
tags: [finai, todo, issues]
---
# FinAI Known Issues & Next Steps

Found by reading the code on 2026-10-11.

## Issues
- [ ] **Code is deleted from `main`.** The last commit removed `finai-final 4/`; restore it (and drop the space in the folder name).
- [ ] **Open proxy.** `api/chat.js` allows any origin (`Access-Control-Allow-Origin: *`) and accepts any `model` and `max_tokens` from the client — anyone could use our Anthropic key. Lock the origin to our domain, fix the model server-side, cap `max_tokens`, and add rate limiting.
- [ ] **Chat error handling bug.** `sendChat()` reads `d.error.message`, but the proxy returns `error` as a string — errors show as `undefined`. Use `d.error.message || d.error`.
- [ ] **Old model ID.** Code uses `claude-sonnet-4-20250514`; move to a current Claude model and keep the ID in one constant on the server.
- [ ] **No accounts/sync.** All data is in `localStorage` (see [Data & Storage](Data-and-Storage.md)).
- [ ] **Single 3,800-line file.** Fine for now; split into modules if it keeps growing.

## Next steps
1. Restore the code and redeploy ([Deployment](Deployment.md)).
2. Secure the proxy.
3. Pick the first automation from [Automation Ideas for FinAI](../02-AI-Automation/Automation-Ideas-for-FinAI.md).

Related: [Architecture](Architecture.md) · [Overall Goal](../00-Goal/Overall-Goal.md)
