function toggleDropdown() {
    const dropdown = document.getElementById('dropdown');
    dropdown.classList.toggle('active');
}

function toggleNested(event) {
    event.preventDefault(); /* stops link from navigating */
    event.stopPropagation(); /* stops main dropdown from closing */
    const dropdown2 = document.getElementById('dropdown2');
    dropdown2.classList.toggle('active');
}