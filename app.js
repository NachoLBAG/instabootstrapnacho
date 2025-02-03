function showGrid() {
    document.querySelector('.gallery').style.display = 'grid';
    document.querySelector('.column-view').style.display = 'none';
}
function showColumn() {
    document.querySelector('.gallery').style.display = 'none';
    document.querySelector('.column-view').style.display = 'flex';
}
function openPostModal() {
    let postModal = new bootstrap.Modal(document.getElementById('postModal'));
    postModal.show();
}
function createPost() {
    let imageUpload = document.getElementById('imageUpload').files[0];
    let postCaption = document.getElementById('postCaption').value;
    if (imageUpload && postCaption) {
        alert('Post creado con éxito!');
        document.getElementById('postModal').querySelector('.btn-close').click();
    } else {
        alert('Por favor, selecciona una imagen y escribe un pie de foto.');
    }
}
