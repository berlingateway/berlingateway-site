# Domain Configuration Guide - medicalcaregermany.com

## Objective
Set `medicalcaregermany.com` as the primary domain with automatic www redirect:
- **Primary Domain:** `https://medicalcaregermany.com`
- **Automatic Redirect:** `www.medicalcaregermany.com` → `https://medicalcaregermany.com` (301 permanent redirect)

---

## Step 1: Add Custom Domain in Manus Management UI

1. **Navigate to Management UI**
   - Open the Manus Management UI (accessible via Chatbox header icon)
   - Go to: **Settings → Domains**

2. **Add Custom Domain**
   - Click "Add Domain" button
   - Enter: `medicalcaregermany.com`
   - Click "Save" or "Add"

3. **Note the DNS Configuration Instructions**
   - Manus will display the required DNS records
   - You will need these for Step 2

---

## Step 2: Configure DNS Records at Your Domain Registrar

**Important:** You must configure DNS records at your domain registrar (e.g., GoDaddy, Namecheap, Cloudflare, etc.)

### Required DNS Records:

#### A Record (for root domain)
```
Type: A
Name: @ (or leave blank, or medicalcaregermany.com)
Value: [Manus IP Address - shown in Management UI]
TTL: 3600 (or Auto)
```

#### CNAME Record (for www redirect)
```
Type: CNAME
Name: www
Value: medicalcaregermany.com (or the value shown in Management UI)
TTL: 3600 (or Auto)
```

### Example for Common Registrars:

**GoDaddy:**
1. Log in to GoDaddy account
2. Go to "My Products" → "DNS"
3. Click "Add" under Records section
4. Add both A and CNAME records as specified above

**Namecheap:**
1. Log in to Namecheap account
2. Go to "Domain List" → Click "Manage" next to your domain
3. Go to "Advanced DNS" tab
4. Add both A and CNAME records as specified above

**Cloudflare:**
1. Log in to Cloudflare account
2. Select your domain
3. Go to "DNS" tab
4. Add both A and CNAME records as specified above
5. **Important:** Set Proxy status to "DNS only" (grey cloud) for initial setup

---

## Step 3: Wait for DNS Propagation

- DNS propagation typically takes **15 minutes to 48 hours**
- Most changes are visible within **1-2 hours**
- You can check propagation status at: https://dnschecker.org

---

## Step 4: Verify SSL Certificate and HTTPS

Once DNS propagation is complete:

1. **Automatic SSL Certificate Provisioning**
   - Manus automatically provisions SSL certificate via Let's Encrypt
   - No manual action required

2. **Verify HTTPS Enforcement**
   - Visit: `https://medicalcaregermany.com`
   - Browser should show lock icon (🔒)
   - No certificate warnings

3. **Verify WWW Redirect**
   - Visit: `http://www.medicalcaregermany.com`
   - Should automatically redirect to: `https://medicalcaregermany.com`
   - HTTP status code: 301 (permanent redirect)

---

## Step 5: Test Security Headers

Your website already has production-grade security headers implemented:

- **HSTS:** Forces HTTPS for 1 year (max-age=31536000)
- **CSP:** Content Security Policy for resource loading
- **X-Frame-Options:** Prevents clickjacking (SAMEORIGIN)
- **X-Content-Type-Options:** Prevents MIME sniffing (nosniff)
- **Referrer-Policy:** Controls referrer information
- **Permissions-Policy:** Disables geolocation, microphone, camera

You can verify security headers at: https://securityheaders.com

---

## Troubleshooting

### DNS Not Propagating
- Wait longer (up to 48 hours)
- Clear browser cache and DNS cache
- Try different browser or incognito mode
- Check DNS records at registrar are correct

### SSL Certificate Not Provisioning
- Ensure DNS records are correct and propagated
- Contact Manus support if certificate not issued after 24 hours

### WWW Redirect Not Working
- Ensure CNAME record for www is configured correctly
- Wait for DNS propagation
- Clear browser cache

---

## Support

If you encounter issues:
1. Check DNS records at your registrar
2. Verify DNS propagation at https://dnschecker.org
3. Contact Manus support at https://help.manus.im

---

## Summary Checklist

- [ ] Add `medicalcaregermany.com` in Manus Management UI → Settings → Domains
- [ ] Configure A Record at domain registrar (@ → Manus IP)
- [ ] Configure CNAME Record at domain registrar (www → medicalcaregermany.com)
- [ ] Wait for DNS propagation (15 min - 48 hours)
- [ ] Verify HTTPS at `https://medicalcaregermany.com` (lock icon)
- [ ] Verify WWW redirect: `www.medicalcaregermany.com` → `https://medicalcaregermany.com`
- [ ] Test security headers at https://securityheaders.com

---

**Your website is production-ready and waiting for domain connection!**
