const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const currentYear = document.querySelector('[data-current-year]');
if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

const form = document.querySelector('[data-contact-form]');
const successMessage = document.querySelector('[data-success-message]');
const mailtoButton = document.querySelector('[data-mailto-button]');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = form.querySelector('[name="name"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    const organization = form.querySelector('[name="organization"]').value.trim();
    const inquiryType = form.querySelector('[name="inquiry_type"]').value.trim();
    const message = form.querySelector('[name="message"]').value.trim();

    if (!name || !email || !inquiryType || !message) {
      form.querySelectorAll('[required]').forEach((field) => {
        if (!field.value.trim()) {
          field.setAttribute('aria-invalid', 'true');
        } else {
          field.removeAttribute('aria-invalid');
        }
      });
      return;
    }

    const subject = `Avoren Group Inquiry: ${inquiryType}`;
    const bodyLines = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Organization: ${organization || 'Not provided'}`,
      '',
      message,
    ];

    const mailtoLink = `mailto:inquiries@avorengroup.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      bodyLines.join('\n')
    )}`;

    if (successMessage) {
      successMessage.classList.add('active');
    }

    if (mailtoButton) {
      mailtoButton.setAttribute('href', mailtoLink);
      mailtoButton.removeAttribute('aria-disabled');
    }
  });
}
