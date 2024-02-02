document.getElementById('downloadBtn').addEventListener('click', function() {
    var fileUrl = 'anuWe.pdf';
    var a = document.createElement('a');
    a.href = fileUrl;
    a.download = 'cv.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});
