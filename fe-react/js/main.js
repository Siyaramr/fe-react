const toggleHiddenClass = (ev) => {
    document.getElementById('prod-submenu-desk').classList.toggle('hidden')

}
document.getElementById('productBtn').addEventListener('click',toggleHiddenClass)
