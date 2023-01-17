import Style from '../styles/signup.module.css';

var fileTypes = [
    'image/jpeg',
    'image/pjpeg',
    'image/png'
  ]
  
  function validFileType(file) {
    for(var i = 0; i < fileTypes.length; i++) {
        if(file.type === fileTypes[i]) {
          return true;
        }
      }
  
    return false;
  }
  function returnFileSize(number) {
    if(number < 1024) {
      return number + ' octets';
    } else if(number >= 1024 && number < 1048576) {
      return (number/1024).toFixed(1) + ' Ko';
    } else if(number >= 1048576) {
      return (number/1048576).toFixed(1) + ' Mo';
    }
  }


export const handleInput = (e) => {
         var curFiles = document.form1.photoDeProfil.files;
        const preview = document.querySelector(`.${Style.preview}`)
        while(preview.firstChild) {
          preview.removeChild(preview.firstChild);
        }
    
        if(curFiles.length === 0) {
            var para = document.createElement('p');
            para.textContent = 'No files currently selected for upload';
            preview.appendChild(para);
          } else{
            if(validFileType(curFiles[0])) {
                var para = document.createElement('p');
                para.textContent = 'File name ' + curFiles[0].name + ', file size ' + returnFileSize(curFiles[0].size) + '.';
                var image = document.createElement('img');
                image.style.width = '285px';
                image.style.height = '135px';
                image.src = window.URL.createObjectURL(curFiles[0]);
        
                preview.style.borderColor = 'green'
                preview.appendChild(image);
        
              } else {
                para.textContent = 'File name ' + curFiles[0].name + ': Not a valid file type. Update your selection.';
                preview.appendChild(para);
              }
          }

}
