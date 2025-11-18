# Analytics Setup Guide

This guide explains how to add analytics tracking to your portfolio website.

## Recommended Analytics Solutions

### 1. Google Analytics 4 (GA4)

**Pros:**
- Free and comprehensive
- Industry standard
- Detailed user behavior tracking
- Integration with other Google tools

**Cons:**
- Privacy concerns
- Can slow down page load
- Requires cookie consent in some regions

**Setup:**
1. Create a Google Analytics account at [analytics.google.com](https://analytics.google.com)
2. Create a new GA4 property
3. Copy your Measurement ID (starts with G-)
4. Add to `.env` file:
   ```
   VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
5. Add the tracking code to `index.html` (see below)

### 2. Plausible Analytics (Recommended for Privacy)

**Pros:**
- Privacy-focused (no cookies)
- Lightweight (< 1KB)
- Simple, easy-to-understand dashboard
- GDPR compliant by default
- Open source

**Cons:**
- Paid service (after trial)
- Less detailed than GA4

**Setup:**
1. Sign up at [plausible.io](https://plausible.io)
2. Add your domain
3. Add to `.env` file:
   ```
   VITE_PLAUSIBLE_DOMAIN=archieovo.github.io
   ```
4. Add the tracking code to `index.html` (see below)

### 3. Simple Analytics

**Pros:**
- Privacy-friendly
- Clean dashboard
- No cookie consent needed

**Cons:**
- Paid service

## Implementation

### Google Analytics 4

Add to `index.html` in the `<head>` section:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Plausible Analytics

Add to `index.html` before `</head>`:

```html
<script defer data-domain="archieovo.github.io" src="https://plausible.io/js/script.js"></script>
```

## What to Track

### Essential Metrics

1. **Page Views** - How many people visit your site
2. **Unique Visitors** - Individual users
3. **Traffic Sources** - Where visitors come from (GitHub, LinkedIn, direct, etc.)
4. **Popular Pages** - Which sections get the most attention
5. **Device Types** - Desktop vs mobile usage
6. **Location** - Geographic distribution of visitors

### Portfolio-Specific Metrics

1. **Project Clicks** - Which projects get the most interest
2. **Contact Form Submissions** - How many reach out
3. **External Link Clicks** - GitHub profile, LinkedIn visits
4. **Time on Page** - Engagement level
5. **Scroll Depth** - How far users scroll down

## Privacy Considerations

### Important

- Always respect user privacy
- Consider adding a privacy policy
- Be transparent about data collection
- In EU: May need cookie consent banner for GA4
- Plausible and Simple Analytics don't require consent

### Best Practices

1. Use privacy-focused analytics when possible
2. Anonymize IP addresses
3. Don't track personally identifiable information
4. Add a privacy policy link in footer
5. Give users opt-out option if using cookies

## Performance Impact

| Solution | Script Size | Page Load Impact |
|----------|-------------|------------------|
| Google Analytics | ~45KB | Medium |
| Plausible | <1KB | Minimal |
| Simple Analytics | ~3KB | Low |

## GitHub Pages Considerations

- All analytics work with GitHub Pages
- No server-side tracking available
- Must use client-side scripts
- Check GitHub's terms of service
- Be mindful of free tier limits

## Testing

After setup:

1. Visit your site in incognito/private mode
2. Check browser console for errors
3. Verify tracking in analytics dashboard (can take 24 hours)
4. Test on mobile devices
5. Check all pages are tracked

## Recommended: Start with Plausible

For a portfolio site, Plausible offers the best balance:
- Respects visitor privacy
- Extremely lightweight
- Simple, actionable insights
- No cookie consent needed
- Professional appearance

## Future Enhancements

Consider adding:
- Heat maps (Hotjar, Microsoft Clarity)
- Error tracking (Sentry)
- Performance monitoring (Web Vitals)
- A/B testing (when needed)

## Support

For questions about analytics setup:
- Google Analytics: [support.google.com/analytics](https://support.google.com/analytics)
- Plausible: [plausible.io/docs](https://plausible.io/docs)
