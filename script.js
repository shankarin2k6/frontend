// Tab functionality
document.addEventListener('DOMContentLoaded', function() {
    // Tab switching
    const tabBtns = document.querySelectorAll('.tab-btn');
    const navBtns = document.querySelectorAll('.nav-btn');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all tabs
            tabBtns.forEach(tab => tab.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');
        });
    });
    
    navBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all nav buttons
            navBtns.forEach(nav => nav.classList.remove('active'));
            // Add active class to clicked nav button
            this.classList.add('active');
        });
    });
    
    // Action button interactions
    const deleteBtn = document.querySelector('.delete-btn');
    const editBtn = document.querySelector('.edit-btn');
    
    deleteBtn.addEventListener('click', function() {
        if (confirm('Are you sure you want to delete this job posting?')) {
            alert('Job posting deleted successfully!');
        }
    });
    
    editBtn.addEventListener('click', function() {
        alert('Redirecting to edit job page...');
    });
    
    // User avatar dropdown simulation
    const userAvatar = document.querySelector('.user-avatar');
    const dropdownIcon = document.querySelector('.dropdown-icon');
    
    userAvatar.addEventListener('click', function() {
        alert('User menu would open here');
    });
    
    dropdownIcon.addEventListener('click', function() {
        alert('User menu would open here');
    });
    
    // Notification icon
    const notificationIcon = document.querySelector('.notification-icon');
    notificationIcon.addEventListener('click', function() {
        alert('You have 3 new notifications');
    });
    
    // Hover effects for stat items
    const statItems = document.querySelectorAll('.stat-item');
    statItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
        });
        
        item.addEventListener('click', function() {
            const label = this.querySelector('.stat-label').textContent;
            alert(`Viewing ${label.toLowerCase()} details...`);
        });
    });
    
    // Skill tag interactions
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('click', function() {
            const skill = this.textContent.trim();
            alert(`Searching for candidates with ${skill} skills...`);
        });
        
        tag.style.cursor = 'pointer';
    });
    
    // Company logo interaction
    const companyLogo = document.querySelector('.company-logo');
    companyLogo.addEventListener('click', function() {
        alert('Viewing Atlassian company profile...');
    });
    companyLogo.style.cursor = 'pointer';
});