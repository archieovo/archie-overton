export const blogPosts = [
  {
    id: 3,
    title: "Building My Portfolio: A Journey in Learning React and Web Security",
    slug: "building-my-portfolio",
    date: "2025-01-19",
    readTime: "10 min read",
    category: "Web Development",
    pinned: true,
    excerpt: "How I collaborated with Alex to build this portfolio site using React, and my plans to add security-driven features as I continue learning.",
    content: `
## The Beginning: Why I Needed a Portfolio

As a junior developer eager to break into the tech industry, I knew I needed a way to showcase my skills and experiences that went beyond a traditional CV. I wanted something that demonstrated not just what I'd learned, but how I could apply it. That's when I decided to build this portfolio website.

## Finding the Right Approach

I could have used a template or a portfolio builder, but I wanted to learn by doing. As someone passionate about cybersecurity and software development, I saw this as an opportunity to:
- Build something real with React
- Apply web development best practices
- Create a foundation for implementing security features
- Show potential employers my learning journey

## Collaborating with Alex

I was fortunate to work with Alex, a more experienced developer who guided me through the process. This collaboration taught me valuable lessons about how professional developers work together in the real world.

### What I Learned from Working with Alex:

**1. Breaking Down Complex Problems**
Alex showed me how to structure a React application properly. Instead of building everything at once, we broke the portfolio into components:
- Header with responsive navigation
- Hero section with my introduction
- Work experience cards
- GitHub activity integration
- Contact section

**2. Modern Development Practices**
Working with Alex, I learned about:
- Component-based architecture in React
- SCSS for maintainable styling
- Responsive design principles
- Git workflow and version control
- Code organization and file structure

**3. Problem-Solving Together**
When I encountered challenges (like making the hamburger menu work on mobile), Alex didn't just fix it for me. Instead, we worked through solutions together, which helped me understand *why* certain approaches work better than others.

## The Technology Stack

### React & Modern JavaScript
I chose React because it's widely used in the industry and teaches important concepts like:
- State management with hooks
- Component lifecycle
- Props and data flow
- Conditional rendering

### SCSS for Styling
Using SCSS instead of plain CSS taught me about:
- Variables for consistent theming
- Mixins for reusable styles
- Nested selectors for organization
- Responsive design with media queries

### GitHub API Integration
Integrating the GitHub API to display my recent projects was a great learning experience. It showed me how to:
- Make API requests in React
- Handle loading and error states
- Display dynamic data from external sources

## Challenges I Overcame

### 1. Responsive Design
Making the site work seamlessly across devices was harder than I expected. I learned about:
- Breakpoints and media queries
- Flexible layouts with flexbox and grid
- Mobile-first design thinking
- Testing across different screen sizes

### 2. State Management
Understanding when and how to use React's \`useState\` hook for things like the mobile menu toggle helped me grasp fundamental React concepts.

### 3. Component Communication
Learning how to pass data between components and handle user interactions taught me about React's data flow.

## My Plans for Security Features

As someone interested in cybersecurity, I'm excited to add security-driven features to this portfolio. Here's what I'm planning:

### Phase 1: Security Headers
\`\`\`javascript
// Implementing Content Security Policy
helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"]
    }
  }
})
\`\`\`

### Phase 2: Input Sanitization
Even though this is a static portfolio, I want to add a contact form with proper:
- Input validation
- XSS protection
- Rate limiting to prevent spam

### Phase 3: HTTPS and Security Best Practices
- Forcing HTTPS connections
- Implementing security headers
- Regular dependency updates
- Adding a security.txt file

### Phase 4: Security Audit Section
I'm planning to add a dedicated section showing:
- Security measures implemented
- Security audit results
- Best practices I'm following

## What This Project Taught Me

### Technical Skills
- React component architecture
- State management and hooks
- API integration
- Responsive web design
- Git and version control
- SCSS and CSS best practices

### Professional Skills
- Collaborating with experienced developers
- Breaking down large projects into manageable tasks
- Problem-solving through research and experimentation
- Documenting my learning process
- Understanding user experience

### Security Mindset
Even while building a simple portfolio, I'm thinking about:
- How to protect user data (when I add a contact form)
- Preventing common web vulnerabilities
- Following secure coding practices
- Planning security from the start, not as an afterthought

## The Bigger Picture

This portfolio represents more than just a website—it's proof that I can:
- Learn new technologies independently
- Work collaboratively with others
- Apply theoretical knowledge to practical projects
- Think about security throughout the development process
- Communicate my learning journey effectively

## Looking Forward

I'm excited to continue improving this portfolio by:
1. Adding more security features as I learn them
2. Implementing a secure contact form
3. Creating more blog posts about my learning journey
4. Showcasing new projects as I build them
5. Documenting security audits and improvements

## Thanks to Alex

I'm incredibly grateful to Alex for taking the time to mentor me through this project. Working with someone experienced showed me what professional development looks like and gave me confidence that I can contribute meaningfully to a development team.

## My Advice to Other Junior Developers

If you're building your own portfolio:

**✅ DO:**
- Build something real, not just a template
- Work with others when you can—collaboration teaches you so much
- Think about security from the start
- Document your learning process
- Make it responsive and accessible
- Show your personality

**❌ DON'T:**
- Copy-paste without understanding
- Ignore security considerations
- Overcomplicate things
- Be afraid to ask for help
- Forget to test on different devices

## Final Thoughts

Building this portfolio has been one of the most valuable learning experiences of my journey so far. It's given me confidence in my abilities, shown me areas where I need to grow, and demonstrated to potential employers that I'm serious about becoming a professional developer.

If you're a junior developer like me, I encourage you to build something real. The challenges you face and overcome will teach you more than any tutorial ever could.

And remember: every senior developer was once a junior who kept learning and building.

## Connect With Me

If you have questions about how I built this or want to share your own portfolio journey, I'd love to hear from you! You can reach me through the contact section or connect with me on LinkedIn and GitHub.

Let's learn and grow together!
    `,
    tags: ["React", "Portfolio", "Learning Journey", "Web Development", "Security"]
  },
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
