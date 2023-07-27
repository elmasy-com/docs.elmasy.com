---
title: Certbot
keywords: ["certbot"]
description: Use Certbot to obtain free TLS certificate from Let's Encrypt.
tags: ["tls", "nginx"]
---

# Certbot

## Nginx

```bash
apt install certbot python-certbot-nginx
```

```bash
certbot certonly --nginx -d example.com --rsa-key-size 4096
```