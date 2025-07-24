   // JavaScript to update the time
        function updateTime() {
            const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };

            // Update Pakistan time
            const pakistanElement = document.getElementById('Pakistan');
            if (pakistanElement) {
                const pakistanTime = new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Karachi', ...options });
                pakistanElement.textContent = pakistanTime;
            } else {
                console.error("Element with ID 'Pakistan' not found.");
            }

            // Update United States time (New York)
            const usaElement = document.getElementById('usa');
            if (usaElement) {
                const usaTime = new Date().toLocaleTimeString('en-US', { timeZone: 'America/New_York', ...options });
                usaElement.textContent = usaTime;
            } else {
                console.error("Element with ID 'usa' not found.");
            }

            // Update China time (Shanghai)
            const chinaElement = document.getElementById('China');
            if (chinaElement) {
                const chinaTime = new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Shanghai', ...options });
                chinaElement.textContent = chinaTime;
            } else {
                console.error("Element with ID 'China' not found.");
            }
        }

        // Update time every second
        setInterval(updateTime, 1000);

        // Initial call to display time immediately
        updateTime();