function showAgent(agentId) {
    // 1. Hide the initial "Select an Agent" message
    document.getElementById('default-msg').style.display = 'none';

    // 2. Find all agent content sections and hide them
    var contents = document.getElementsByClassName('agent-content');
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = 'none';
        contents[i].classList.remove('active-content');
    }

    // 3. Show the specific agent clicked
    var selected = document.getElementById(agentId);
    if (selected) {
        selected.style.display = 'block';
        // Add a small delay for the fade-in animation
        setTimeout(() => {
            selected.classList.add('active-content');
        }, 10);
    }
}