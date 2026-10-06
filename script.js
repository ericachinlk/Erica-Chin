(function () 
{
    var tabs = Array.prototype.slice.call(document.querySelectorAll('#project-viewer [role="tab"]'));
    var panels = Array.prototype.slice.call(document.querySelectorAll('#project-viewer [role="tabpanel"]'));
    var viewer = document.getElementById('project-viewer');
    var current = 0;

    function show(i, focus) 
    {
        current = (i + tabs.length) % tabs.length;
        tabs.forEach(function (tab, n) {
            var on = n === current;
            tab.setAttribute('aria-selected', on);
            tab.tabIndex = on ? 0 : -1;
            panels[n].hidden = !on;
        });
        if (focus) tabs[current].focus();
    }

    tabs.forEach(function (tab, n) 
    {
        tab.addEventListener('click', function () 
        { 
            show(n); 
        });
        tab.addEventListener('keydown', function (e) 
        {
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); show(current + 1, true); }
            if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); show(current - 1, true); }
        });
    });

    viewer.classList.add('ready');
    show(0);
})();
