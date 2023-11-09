document.addEventListener('DOMContentLoaded', function () {
    var enviarBtn = document.querySelector('.btn-primary');
    var modal = new bootstrap.Modal(document.getElementById('myModal'));

    enviarBtn.addEventListener('click', function () {
        modal.show();
    });
});