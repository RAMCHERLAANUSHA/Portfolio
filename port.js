document.getElementById('downloadBtn').addEventListener('click', function() {
    var fileUrl = 'anusha_resume.pdf';
    var a = document.createElement('a');
    a.href = fileUrl;
    a.download = 'cv.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});
