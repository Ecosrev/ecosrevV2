document.addEventListener("DOMContentLoaded", function() {
    const tabLinks = document.querySelectorAll(".tab-link");
    const tabs = document.querySelectorAll(".tab");

    tabLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetTabId = link.getAttribute("href").substring(1); // Remove o "#" do href
            tabs.forEach(tab => tab.style.display = "none");
            document.getElementById(targetTabId).style.display = "block";
        });
    });

    // Mostrar a aba "Cadastrar" por padrão
    document.getElementById("cadastrar").style.display = "block";
});
