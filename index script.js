document.addEventListener('DOMContentLoaded', () => {
    const notifIcon = document.getElementById('notif-icon');
    const notifPopup = document.getElementById('notif-popup');

    notifIcon.addEventListener('click', () => {
        // Toggle the display of the popup
        if (notifPopup.style.display === 'none' || notifPopup.style.display === '') {
            notifPopup.style.display = 'block';
        } else {
            notifPopup.style.display = 'none';
        }
    });

    // Hide the popup if clicking outside of it
    document.addEventListener('click', (event) => {
        if (!notifIcon.contains(event.target) && !notifPopup.contains(event.target)) {
            notifPopup.style.display = 'none';
        }
    });
});