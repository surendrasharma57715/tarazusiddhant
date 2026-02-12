# Domain Configuration Guide

Your domain `tarazusiddhant.com` is added to Vercel, but it might not be working yet because the DNS records need to be updated where you bought the domain (e.g., GoDaddy, Namecheap, Hostinger).

## DNS Records to Add

Please check your Vercel Dashboard (**Project Settings > Domains**) to see the exact values. Usually, they are:

### 1. For the Root Domain (`tarazusiddhant.com`)
- **Type**: `A`
- **Name**: `@`
- **Value**: `76.76.21.21`

### 2. For the `www` Subdomain (`www.tarazusiddhant.com`)
- **Type**: `CNAME`
- **Name**: `www`
- **Value**: `cname.vercel-dns.com`

---

## Troubleshooting Steps

1. **Check for Errors**: In Vercel, if you see a red box saying "Invalid Configuration", it means the DNS records above are missing or wrong in your domain registrar panel.
2. **Propagation Time**: DNS changes can take **1 minute to 48 hours** to start working everywhere in the world. Usually, it works within 30 minutes.
3. **SSL Certificate**: Vercel will automatically issue an SSL certificate (the padlock icon) once the DNS is verified.

> [!TIP]
> If you bought the domain on Hostinger, go to the **DNS / Nameservers** section in Hostinger and add the records mentioned above.
