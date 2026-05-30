const blogDateEl = document.querySelector('.blog-date');
if (blogDateEl) {
    const blogDate = new Date();
    const day = blogDate.toLocaleDateString('en-US', { day: '2-digit' });
    const month = blogDate.toLocaleDateString('en-US', { month: 'short' });
    const year = blogDate.toLocaleDateString('en-US', { year: 'numeric' });

    blogDateEl.textContent = `Published ${day} ${month} ${year}`;
} else {
    blogDateEl.textContent = `No publiction date available`;
}
