document.addEventListener('DOMContentLoaded', () => {
    const uploadSection = document.querySelector('.upload-section');
    const fileInput = document.getElementById('file-upload');

    // When the upload section is clicked, trigger the file input click
    uploadSection.addEventListener('click', () => {
        fileInput.click();
    });

    // Handle file selection
    fileInput.addEventListener('change', () => {
        if (fileInput.files.length > 0) {
            const fileName = fileInput.files[0].name;
            alert(`File yang dipilih: ${fileName}`);
            // You can add more functionality here, such as displaying the file name or uploading the file
        }
    });
});