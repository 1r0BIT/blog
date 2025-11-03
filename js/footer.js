// Auto-inject footer on all pages
document.addEventListener('DOMContentLoaded', function() {
    const footer = document.querySelector('footer');
    if (!footer) return;
    
    // Original footer content
    const footerContent = `
        <div style="text-align: center; margin-top: 2em; padding: 1em 0; border-top: 1px solid #45475a;">
            <p style="opacity: 0.7; font-size: 0.9em;">
                heavily inspired by <a href="https://sillywa.re" target="_blank" style="color: #cba6f7;">sillywa.re</a>
            </p>
        </div>
    `;
    
    footer.innerHTML = footerContent;
});
