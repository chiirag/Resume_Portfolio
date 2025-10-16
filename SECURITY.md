# Security Policy

## Security Features

This portfolio application implements multiple security best practices:

### 1. **HTTP Security Headers**

All responses include the following security headers:

- **Strict-Transport-Security (HSTS)**: Forces HTTPS connections for 2 years
- **X-Frame-Options**: Prevents clickjacking attacks (SAMEORIGIN)
- **X-Content-Type-Options**: Prevents MIME-type sniffing (nosniff)
- **X-XSS-Protection**: Enables browser XSS filtering
- **Content-Security-Policy (CSP)**: Restricts resource loading to trusted sources
- **Referrer-Policy**: Controls referrer information (strict-origin-when-cross-origin)
- **Permissions-Policy**: Disables unnecessary browser features (camera, microphone, etc.)

### 2. **Content Security Policy (CSP)**

The application enforces a strict Content Security Policy:

```
default-src 'self'
script-src 'self' 'unsafe-eval' 'unsafe-inline'
style-src 'self' 'unsafe-inline'
img-src 'self' data: https:
font-src 'self' data:
connect-src 'self'
frame-ancestors 'self'
```

This prevents:
- Loading of external scripts
- Cross-site scripting (XSS) attacks
- Iframe embedding from unauthorized sources
- Data exfiltration attempts

### 3. **React Security**

- **React Strict Mode**: Enabled to catch potential issues
- **Input Sanitization**: All user inputs are handled safely
- **No eval()**: No dynamic code execution
- **Safe Links**: External links use `rel="noopener noreferrer"`

### 4. **Next.js Security**

- **Standalone Output**: Minimizes attack surface in production
- **TypeScript**: Type safety prevents common vulnerabilities
- **Automatic Static Optimization**: Reduces server-side attack vectors

### 5. **Data Privacy**

- **No Analytics Tracking**: No third-party tracking scripts
- **No Cookies**: No cookies are set
- **Minimal Data Collection**: Only contact form submissions
- **GDPR Compliant**: No personal data stored

### 6. **Dependency Security**

- Regular dependency updates
- No known vulnerabilities in packages
- Minimal dependency tree
- Automated security scanning

## Reporting Security Issues

If you discover a security vulnerability, please email:

**Email**: chiragjaindsm@gmail.com

Please include:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

## Security Response

- Security issues are treated as highest priority
- Acknowledgment within 24 hours
- Fix deployed within 72 hours for critical issues
- Public disclosure after fix is deployed

## Security Best Practices for Users

1. Always access via HTTPS
2. Keep your browser updated
3. Don't share sensitive information via contact form
4. Verify the domain before entering any information

## Security Audits

- Last security audit: October 2025
- Next scheduled audit: January 2026

## Compliance

This application follows:
- OWASP Top 10 security guidelines
- CWE/SANS Top 25 Most Dangerous Software Errors
- Next.js security best practices
- React security best practices

## Security Updates

Security updates are applied automatically via Vercel's platform. The application is continuously monitored for:

- Dependency vulnerabilities
- Security header compliance
- SSL/TLS configuration
- Performance and availability

## Contact

For security concerns, contact:
- **Email**: chiragjaindsm@gmail.com
- **LinkedIn**: https://linkedin.com/in/chiragjain3

---

**Last Updated**: October 16, 2025
