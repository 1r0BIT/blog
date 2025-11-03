// ASCII logo for index page
const asciiLogo = `
/*********************
 *  r 0 B I T . i o  *
 *********************/`;

// Collection of infosec quotes and sayings
const quotes = [
    "0 Days since it was DNS.",

    "kali lincox. the louder u r the less u hear.",

    "It's not DNS.\nThere's no way it's DNS.\nIt was DNS.",

    "Beacon Timeout.\n18hrs 53min 56sec since last callback.",
    
    "Anything can be a C2 if you're brave enough.",
    
    "Kerberos doesn't like IP Addresses.\nNeither do I.",

    "Security is a people problem wearing a technical costume.\n- Timsux Wales",

    "One time I tried to explain Kerberos to someone.\n Then we both didn't understand it.\n- SwiftOnSecurity",

    "If you think technology can solve your security problems,\nthen you don't understand the problems\nand you don't understand the technology.\n— Bruce Schneier",
    
    "You can't defend. You can't prevent.\nThe only thing you can do is detect and respond.\n— Bruce Schneier",
    
    "Red team got in via:\n☐ Zero-day exploit\n☐ AITM Phish\n☑ Password was 'Summer2025!'",
];

// Function to get a random quote
function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

// Function to display quote in container on page load
function displayRandomQuote() {
    const quoteContainer = document.getElementById('quote-container');
    
    if (quoteContainer) {
        // Check if we're on the index page
        const isIndexPage = window.location.pathname.endsWith('index.html') || 
                           window.location.pathname.endsWith('/') ||
                           window.location.pathname === '/Blog/' ||
                           window.location.pathname === '/Blog/index.html';
        
        const quote = document.createElement('pre');
        quote.className = 'quote-display';
        quote.textContent = isIndexPage ? asciiLogo : getRandomQuote();
        quoteContainer.appendChild(quote);
    }
}

// Run when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', displayRandomQuote);
} else {
    displayRandomQuote();
}
