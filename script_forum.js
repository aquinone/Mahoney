function showBlurb(id, sectionId) {
    const container = document.getElementById(sectionId);
    
    // 1. Activate the container (this triggers the 50/50 split)
    container.classList.add('active');
    
    // 2. Hide all blurbs in this specific section
    const blurbs = container.querySelectorAll('.blurb-text');
    blurbs.forEach(b => b.classList.remove('active'));
    
    // 3. Show the specific blurb clicked
    document.getElementById(id).classList.add('active');
    
    // 4. Smooth scroll to the section so the user sees the change
    container.scrollIntoView({ behavior: 'smooth' });
}

function closeBlurb(sectionId) {
    const container = document.getElementById(sectionId);
    container.classList.remove('active');
}