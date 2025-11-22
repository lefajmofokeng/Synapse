function toggleAccordion(headerElement) {
            const item = headerElement.parentElement;
            const content = item.querySelector('.se-acc-content');
            const allItems = document.querySelectorAll('.se-acc-item');

            // If this item is already active, close it
            if (item.classList.contains('active')) {
                // Optional: Allow collapsing all items. 
                // To force one always open, comment out the line below.
                // item.classList.remove('active');
                // content.style.height = '0';
                return; // Do nothing if clicking already active one (standard accordion behavior often keeps one open)
            }

            // Close all other items
            allItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    const otherContent = otherItem.querySelector('.se-acc-content');
                    if(otherContent) otherContent.style.height = '0';
                }
            });

            // Open clicked item
            item.classList.add('active');
            
            // Set height to scrollHeight to animate to full height
            content.style.height = content.scrollHeight + 'px';
        }

        // Initialize: Set height for the default active item
        document.addEventListener('DOMContentLoaded', () => {
            const activeItem = document.querySelector('.se-acc-item.active');
            if (activeItem) {
                const content = activeItem.querySelector('.se-acc-content');
                content.style.height = content.scrollHeight + 'px';
            }
        });