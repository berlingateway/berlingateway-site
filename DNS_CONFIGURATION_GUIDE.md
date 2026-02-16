# DNS-Konfigurationsanleitung für medicalcaregermany.com

## Übersicht

Diese Anleitung führt Sie Schritt für Schritt durch die DNS-Konfiguration bei Ihrem Domain-Registrar, um **medicalcaregermany.com** mit Ihrer Manus-gehosteten Website zu verbinden.

---

## Voraussetzungen

✅ Domain **medicalcaregermany.com** ist bei einem Registrar registriert (z.B. GoDaddy, Namecheap, Google Domains, etc.)  
✅ Sie haben Zugriff auf das DNS-Management-Panel Ihres Registrars  
✅ Manus-Projekt ist bereit für Custom Domain Connection

---

## Schritt 1: Manus IP-Adresse abrufen

**Bevor Sie DNS-Records konfigurieren, müssen Sie die Manus IP-Adresse abrufen:**

1. Öffnen Sie die **Manus Management UI**
2. Navigieren Sie zu: **Settings → Domains**
3. Klicken Sie auf **"Add Domain"**
4. Geben Sie ein: `medicalcaregermany.com`
5. Manus zeigt Ihnen die **IP-Adresse** an, die Sie für die DNS-Konfiguration benötigen

**Notieren Sie sich diese IP-Adresse** (z.B. `123.45.67.89`)

---

## Schritt 2: DNS-Records bei Ihrem Registrar konfigurieren

### A Record (Apex Domain)

**Zweck:** Verbindet die Root-Domain `medicalcaregermany.com` mit der Manus-IP-Adresse

| Feld | Wert |
|------|------|
| **Type** | A |
| **Name** | @ (oder leer lassen) |
| **Value** | [Manus IP-Adresse aus Schritt 1] |
| **TTL** | 3600 (oder Auto) |

### CNAME Record (WWW Subdomain)

**Zweck:** Leitet `www.medicalcaregermany.com` auf `medicalcaregermany.com` um

| Feld | Wert |
|------|------|
| **Type** | CNAME |
| **Name** | www |
| **Value** | medicalcaregermany.com |
| **TTL** | 3600 (oder Auto) |

---

## Schritt 3: Registrar-spezifische Anleitungen

### GoDaddy

1. Melden Sie sich bei [GoDaddy](https://www.godaddy.com) an
2. Gehen Sie zu: **My Products → Domains**
3. Klicken Sie auf **DNS** neben Ihrer Domain
4. Scrollen Sie zu **Records**
5. **A Record hinzufügen:**
   - Klicken Sie auf **Add**
   - Type: **A**
   - Name: **@**
   - Value: **[Manus IP-Adresse]**
   - TTL: **1 Hour** (oder Auto)
   - Klicken Sie auf **Save**
6. **CNAME Record hinzufügen:**
   - Klicken Sie auf **Add**
   - Type: **CNAME**
   - Name: **www**
   - Value: **medicalcaregermany.com**
   - TTL: **1 Hour** (oder Auto)
   - Klicken Sie auf **Save**

### Namecheap

1. Melden Sie sich bei [Namecheap](https://www.namecheap.com) an
2. Gehen Sie zu: **Domain List**
3. Klicken Sie auf **Manage** neben Ihrer Domain
4. Gehen Sie zum Tab **Advanced DNS**
5. **A Record hinzufügen:**
   - Klicken Sie auf **Add New Record**
   - Type: **A Record**
   - Host: **@**
   - Value: **[Manus IP-Adresse]**
   - TTL: **Automatic**
   - Klicken Sie auf **Save All Changes**
6. **CNAME Record hinzufügen:**
   - Klicken Sie auf **Add New Record**
   - Type: **CNAME Record**
   - Host: **www**
   - Value: **medicalcaregermany.com**
   - TTL: **Automatic**
   - Klicken Sie auf **Save All Changes**

### Google Domains

1. Melden Sie sich bei [Google Domains](https://domains.google.com) an
2. Klicken Sie auf Ihre Domain **medicalcaregermany.com**
3. Gehen Sie zu: **DNS** (linke Seitenleiste)
4. Scrollen Sie zu **Custom resource records**
5. **A Record hinzufügen:**
   - Name: **@** (oder leer lassen)
   - Type: **A**
   - TTL: **1H**
   - Data: **[Manus IP-Adresse]**
   - Klicken Sie auf **Add**
6. **CNAME Record hinzufügen:**
   - Name: **www**
   - Type: **CNAME**
   - TTL: **1H**
   - Data: **medicalcaregermany.com.**
   - Klicken Sie auf **Add**

### Cloudflare

1. Melden Sie sich bei [Cloudflare](https://www.cloudflare.com) an
2. Wählen Sie Ihre Domain **medicalcaregermany.com**
3. Gehen Sie zu: **DNS** (linke Seitenleiste)
4. **A Record hinzufügen:**
   - Klicken Sie auf **Add record**
   - Type: **A**
   - Name: **@**
   - IPv4 address: **[Manus IP-Adresse]**
   - Proxy status: **Proxied** (Orange Cloud) - **WICHTIG: Deaktivieren Sie Proxy für Manus!** (Grau)
   - TTL: **Auto**
   - Klicken Sie auf **Save**
5. **CNAME Record hinzufügen:**
   - Klicken Sie auf **Add record**
   - Type: **CNAME**
   - Name: **www**
   - Target: **medicalcaregermany.com**
   - Proxy status: **Proxied** (Orange Cloud) - **WICHTIG: Deaktivieren Sie Proxy für Manus!** (Grau)
   - TTL: **Auto**
   - Klicken Sie auf **Save**

**⚠️ WICHTIG für Cloudflare:** Deaktivieren Sie den Proxy (Orange Cloud → Grau) für beide Records, sonst funktioniert die Manus-Integration nicht!

### 1&1 IONOS

1. Melden Sie sich bei [IONOS](https://www.ionos.de) an
2. Gehen Sie zu: **Domains & SSL**
3. Klicken Sie auf **Domain verwalten** neben Ihrer Domain
4. Gehen Sie zu: **DNS-Einstellungen**
5. **A Record hinzufügen:**
   - Klicken Sie auf **Hinzufügen**
   - Type: **A**
   - Host: **@**
   - Verweist auf: **[Manus IP-Adresse]**
   - TTL: **3600**
   - Klicken Sie auf **Speichern**
6. **CNAME Record hinzufügen:**
   - Klicken Sie auf **Hinzufügen**
   - Type: **CNAME**
   - Host: **www**
   - Verweist auf: **medicalcaregermany.com**
   - TTL: **3600**
   - Klicken Sie auf **Speichern**

---

## Schritt 4: DNS-Propagation abwarten

**DNS-Änderungen benötigen Zeit, um weltweit zu propagieren:**

- **Minimum:** 15-30 Minuten
- **Typisch:** 1-2 Stunden
- **Maximum:** 24-48 Stunden

**Während dieser Zeit:**
- Ihre Website ist möglicherweise nicht erreichbar
- SSL-Zertifikat wird noch nicht ausgestellt
- Geduld ist erforderlich

---

## Schritt 5: Domain in Manus Management UI hinzufügen

**Nachdem DNS-Records konfiguriert sind:**

1. Öffnen Sie die **Manus Management UI**
2. Navigieren Sie zu: **Settings → Domains**
3. Klicken Sie auf **"Add Domain"**
4. Geben Sie ein: `medicalcaregermany.com`
5. Manus überprüft automatisch die DNS-Konfiguration
6. Nach erfolgreicher Verifizierung:
   - SSL-Zertifikat wird automatisch ausgestellt
   - HTTPS wird erzwungen
   - Domain wird als Primary Domain gesetzt

---

## Schritt 6: Website veröffentlichen

**Nachdem Domain verbunden ist:**

1. Öffnen Sie die **Manus Management UI**
2. Klicken Sie auf den **"Publish"** Button (Header, oben rechts)
3. Warten Sie, bis Deployment abgeschlossen ist
4. Ihre Website ist jetzt unter `https://www.medicalcaregermany.com` erreichbar

---

## Schritt 7: SSL-Zertifikat verifizieren

**Überprüfen Sie, ob SSL korrekt funktioniert:**

1. Öffnen Sie `https://www.medicalcaregermany.com` in Ihrem Browser
2. **Überprüfen Sie das Schloss-Symbol** in der Adressleiste:
   - ✅ **Grünes Schloss:** SSL ist aktiv und korrekt
   - ❌ **Warnung:** SSL-Zertifikat ist noch nicht ausgestellt (warten Sie 15-30 Minuten)
3. Klicken Sie auf das Schloss-Symbol → **Zertifikat anzeigen**
4. Überprüfen Sie:
   - **Ausgestellt für:** medicalcaregermany.com
   - **Ausgestellt von:** Let's Encrypt (oder Manus)
   - **Gültig bis:** [Datum in der Zukunft]

---

## Schritt 8: WWW-Redirect testen

**Überprüfen Sie, ob www-Redirect funktioniert:**

1. Öffnen Sie `http://www.medicalcaregermany.com` (ohne HTTPS)
2. Browser sollte automatisch zu `https://www.medicalcaregermany.com` umleiten
3. Öffnen Sie `http://medicalcaregermany.com` (ohne www)
4. Browser sollte automatisch zu `https://www.medicalcaregermany.com` umleiten

**Erwartetes Verhalten:**
- Alle URLs leiten zu `https://www.medicalcaregermany.com` um (301 Redirect)
- Schloss-Symbol erscheint in allen Fällen

---

## Troubleshooting

### Problem: DNS-Records werden nicht erkannt

**Lösung:**
1. Überprüfen Sie, ob DNS-Records korrekt konfiguriert sind (Schritt 2)
2. Warten Sie 1-2 Stunden für DNS-Propagation
3. Verwenden Sie [DNS Checker](https://dnschecker.org) um DNS-Propagation zu überprüfen:
   - Geben Sie ein: `medicalcaregermany.com`
   - Type: **A**
   - Überprüfen Sie, ob Manus IP-Adresse weltweit sichtbar ist

### Problem: SSL-Zertifikat wird nicht ausgestellt

**Lösung:**
1. Warten Sie 15-30 Minuten nach Domain-Connection
2. Überprüfen Sie, ob DNS-Records korrekt sind (A Record muss auf Manus IP zeigen)
3. Wenn Cloudflare: Deaktivieren Sie Proxy (Orange Cloud → Grau)
4. Kontaktieren Sie Manus Support, wenn Problem nach 24 Stunden weiterhin besteht

### Problem: Website zeigt "404 Not Found"

**Lösung:**
1. Überprüfen Sie, ob Website über Manus Management UI veröffentlicht wurde (Publish Button)
2. Warten Sie 5-10 Minuten nach Publish
3. Leeren Sie Browser-Cache (Strg + Shift + R)
4. Versuchen Sie Inkognito-Modus

### Problem: WWW-Redirect funktioniert nicht

**Lösung:**
1. Überprüfen Sie, ob CNAME Record korrekt konfiguriert ist (www → medicalcaregermany.com)
2. Warten Sie 1-2 Stunden für DNS-Propagation
3. Leeren Sie Browser-Cache
4. Überprüfen Sie mit [DNS Checker](https://dnschecker.org):
   - Geben Sie ein: `www.medicalcaregermany.com`
   - Type: **CNAME**
   - Überprüfen Sie, ob CNAME auf `medicalcaregermany.com` zeigt

### Problem: Manus-Subdomain ist noch sichtbar

**Erwartetes Verhalten:**
- Manus-Subdomain (*.manus.space) bleibt als technischer Fallback aktiv
- Dies ist **normal** und **kann nicht deaktiviert werden**
- Öffentliche Besucher sehen automatisch die Custom Domain
- Manus-Subdomain wird nur für Management UI, Preview, Dev-Server verwendet

**Keine Aktion erforderlich** - Dies ist Standard bei allen Hosting-Plattformen.

---

## DNS-Verifizierung Tools

**Verwenden Sie diese Tools, um DNS-Konfiguration zu überprüfen:**

1. **DNS Checker:** https://dnschecker.org
   - Überprüft DNS-Propagation weltweit
   - Zeigt A Records, CNAME Records, etc.

2. **What's My DNS:** https://www.whatsmydns.net
   - Zeigt DNS-Records von verschiedenen Standorten

3. **MX Toolbox:** https://mxtoolbox.com/SuperTool.aspx
   - Umfassendes DNS-Diagnose-Tool

4. **Google DNS Lookup:** https://dns.google
   - Offizielles Google DNS-Tool

---

## Zusammenfassung

**Erforderliche DNS-Records:**

```
Type: A
Name: @
Value: [Manus IP-Adresse]
TTL: 3600

Type: CNAME
Name: www
Value: medicalcaregermany.com
TTL: 3600
```

**Nach DNS-Konfiguration:**
1. ✅ Warten Sie 1-2 Stunden für DNS-Propagation
2. ✅ Domain in Manus Management UI hinzufügen
3. ✅ SSL-Zertifikat wird automatisch ausgestellt
4. ✅ Website über Publish Button veröffentlichen
5. ✅ Überprüfen Sie SSL und WWW-Redirect

**Ihre Website ist jetzt unter `https://www.medicalcaregermany.com` erreichbar!**

---

## Support

**Bei Problemen:**
- Überprüfen Sie Troubleshooting-Sektion
- Verwenden Sie DNS-Verifizierung Tools
- Kontaktieren Sie Manus Support über Management UI

**Wichtige Links:**
- Manus Management UI: [Ihr Projekt-Link]
- DNS Checker: https://dnschecker.org
- Domain Configuration Guide: DOMAIN_CONFIGURATION_GUIDE.md (im Projekt-Root)
