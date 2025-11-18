export const blogPosts = [
  {
    id: 1,
    title: "Understanding OWASP Top 10: A Junior Developer's Guide",
    slug: "owasp-top-10-guide",
    date: "2025-01-15",
    readTime: "8 min read",
    category: "Cybersecurity",
    excerpt: "Learn about the most critical web application security risks and how to prevent them in your code.",
    content: `
## What is OWASP Top 10?

The OWASP Top 10 is a standard awareness document for developers and web application security. It represents a broad consensus about the most critical security risks to web applications.

## Why Should Junior Developers Care?

As a junior developer, understanding security from day one is crucial. Security vulnerabilities can lead to:
- Data breaches exposing user information
- Financial losses for companies
- Reputational damage
- Legal consequences

## The Top 3 Risks Explained

### 1. Broken Access Control

**What is it?**
Access control enforces policies such that users cannot act outside of their intended permissions. Failures typically lead to unauthorized information disclosure, modification, or destruction.

**Example:**
\`\`\`javascript
// Bad - No authorization check
app.get('/api/users/:id', (req, res) => {
  const user = db.getUser(req.params.id);
  res.json(user);
});

// Good - Verify user can access this data
app.get('/api/users/:id', (req, res) => {
  if (req.user.id !== req.params.id && !req.user.isAdmin) {
    return res.status(403).json({ error: 'Forbidden' });
  }
  const user = db.getUser(req.params.id);
  res.json(user);
});
\`\`\`

### 2. Cryptographic Failures

**What is it?**
Previously known as "Sensitive Data Exposure," this category focuses on failures related to cryptography which often lead to exposure of sensitive data.

**Example:**
\`\`\`javascript
// Bad - Storing passwords in plain text
const user = {
  username: 'alice',
  password: 'password123' // Never do this!
};

// Good - Hash passwords with bcrypt
const bcrypt = require('bcrypt');
const hashedPassword = await bcrypt.hash('password123', 10);
const user = {
  username: 'alice',
  password: hashedPassword
};
\`\`\`

### 3. Injection

**What is it?**
Injection flaws, such as SQL, NoSQL, and command injection occur when untrusted data is sent to an interpreter as part of a command or query.

**Example:**
\`\`\`javascript
// Bad - SQL Injection vulnerability
const query = "SELECT * FROM users WHERE username = '" + username + "'";

// Good - Use parameterized queries
const query = "SELECT * FROM users WHERE username = ?";
db.execute(query, [username]);
\`\`\`

## Key Takeaways

1. **Never trust user input** - Always validate and sanitize
2. **Use security libraries** - Don't roll your own crypto
3. **Follow the principle of least privilege** - Give users minimum necessary permissions
4. **Keep dependencies updated** - Vulnerabilities are constantly discovered
5. **Learn and practice** - Security is an ongoing process

## Resources for Learning More

- [OWASP Official Website](https://owasp.org/www-project-top-ten/)
- [Web Security Academy by PortSwigger](https://portswigger.net/web-security)
- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/)

Remember: Security is not a feature to be added later—it should be built into your code from the start!
    `,
    tags: ["OWASP", "Web Security", "Best Practices"]
  },
  {
    id: 2,
    title: "Password Security 101: What Every Developer Should Know",
    slug: "password-security-101",
    date: "2025-01-10",
    readTime: "6 min read",
    category: "Cybersecurity",
    excerpt: "A practical guide to implementing secure password handling in your applications.",
    content: `
## Why Password Security Matters

In 2023, over 80% of data breaches involved weak or stolen passwords. As developers, we have a responsibility to protect our users' credentials properly.

## Common Password Security Mistakes

### Mistake #1: Storing Plain Text Passwords

**Never, ever do this:**
\`\`\`javascript
// WRONG - This is a security disaster
const user = {
  email: 'user@example.com',
  password: 'MyPassword123'
};
\`\`\`

If your database is compromised, attackers have immediate access to all user accounts.

### Mistake #2: Using Weak Hashing Algorithms

**Don't use MD5 or SHA-1 for passwords:**
\`\`\`javascript
// WRONG - MD5 is too fast and easily cracked
const crypto = require('crypto');
const hash = crypto.createHash('md5').update(password).digest('hex');
\`\`\`

These algorithms are too fast, making them vulnerable to brute-force attacks.

### Mistake #3: Not Using Salt

Even with strong hashing, identical passwords produce identical hashes, making rainbow table attacks possible.

## The Right Way: Using bcrypt

### Installation
\`\`\`bash
npm install bcrypt
\`\`\`

### Hashing a Password
\`\`\`javascript
const bcrypt = require('bcrypt');

async function hashPassword(plainPassword) {
  const saltRounds = 10; // Cost factor
  const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
  return hashedPassword;
}

// Example usage
const userPassword = 'SecurePass123!';
const hash = await hashPassword(userPassword);
console.log(hash); // $2b$10$...
\`\`\`

### Verifying a Password
\`\`\`javascript
async function verifyPassword(plainPassword, hashedPassword) {
  const match = await bcrypt.compare(plainPassword, hashedPassword);
  return match; // true or false
}

// Example usage
const isValid = await verifyPassword('SecurePass123!', hash);
if (isValid) {
  console.log('Login successful!');
} else {
  console.log('Invalid password');
}
\`\`\`

## Password Requirements Best Practices

### What Makes a Strong Password?

Instead of arbitrary rules like "must have 1 number, 1 special character," focus on:

1. **Length over complexity** - Minimum 12 characters
2. **Check against common passwords** - Use libraries like "pwned-passwords"
3. **Allow passphrases** - "correct-horse-battery-staple" is stronger than "P@ssw0rd!"

### Implementing Password Validation
\`\`\`javascript
function validatePassword(password) {
  const errors = [];

  // Check minimum length
  if (password.length < 12) {
    errors.push('Password must be at least 12 characters');
  }

  // Check for common passwords
  const commonPasswords = ['password', '12345678', 'qwerty'];
  if (commonPasswords.includes(password.toLowerCase())) {
    errors.push('Password is too common');
  }

  return {
    valid: errors.length === 0,
    errors
  };
}
\`\`\`

## Additional Security Measures

### 1. Rate Limiting Login Attempts
\`\`\`javascript
const rateLimit = require('express-rate-limit');

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 attempts
  message: 'Too many login attempts, please try again later'
});

app.post('/login', loginLimiter, async (req, res) => {
  // Login logic here
});
\`\`\`

### 2. Two-Factor Authentication (2FA)

Consider implementing 2FA using libraries like:
- \`speakeasy\` for TOTP
- \`authy\` for SMS-based 2FA

### 3. Password Reset Tokens
\`\`\`javascript
const crypto = require('crypto');

function generateResetToken() {
  return crypto.randomBytes(32).toString('hex');
}

// Store with expiration
const resetToken = {
  token: generateResetToken(),
  expires: Date.now() + 3600000 // 1 hour
};
\`\`\`

## Key Takeaways

✅ **DO:**
- Use bcrypt, argon2, or scrypt for hashing
- Implement rate limiting on login endpoints
- Require minimum 12 character passwords
- Use secure password reset flows
- Consider implementing 2FA

❌ **DON'T:**
- Store passwords in plain text
- Use MD5, SHA-1, or SHA-256 for passwords
- Implement your own crypto
- Email passwords to users
- Limit password length unnecessarily

## Resources

- [OWASP Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)
- [Have I Been Pwned API](https://haveibeenpwned.com/API/v3)
- [NIST Password Guidelines](https://pages.nist.gov/800-63-3/sp800-63b.html)

Remember: Your users trust you with their credentials. Handle them with care!
    `,
    tags: ["Passwords", "Authentication", "bcrypt", "Security"]
  }
];
