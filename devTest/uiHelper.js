class uiHelper {
	displaySelectedImage(imageInputId, imageElementId) {
        // Get the input element for the image and the image element
        var imageInput = document.getElementById(imageInputId);
        var imageElement = document.getElementById(imageElementId);
    
        // Check if a file is selected
        if (imageInput.files && imageInput.files[0]) {
            // Use FileReader to read the selected file as data URL
            var reader = new FileReader();
    
            reader.onload = function (e) {
                // Create a new Image object
                var img = new Image();
    
                // Set the source of the image to the data URL
                img.src = e.target.result;
    
                // Wait for the image to load
                img.onload = function() {
                    // Access the original dimensions
                    var originalWidth = img.naturalWidth;
                    var originalHeight = img.naturalHeight;                  
    
                    // Log the original dimensions
                    console.log("Original Width: " + originalWidth);
                    console.log("Original Height: " + originalHeight);
    
                    // Display the selected image on the page
                    imageElement.src = e.target.result;
                    imageElement.style.display = "block";  // Make the image visible
                    // Log the size of the image element
                    var clientWidth = imageElement.clientWidth;
                    var clientHeight = imageElement.clientHeight;
                    console.log("Image Element Width: " + clientWidth);
                    console.log("Image Element Height: " + clientHeight);
                    var widthScale = clientWidth/originalWidth;
                    var heightScale = clientHeight/originalHeight;
                    window.widthScale = widthScale;
                    window.heightScale = heightScale;
                    console.log("widthScale: " + widthScale);
                    console.log("heightScale: " + heightScale);
                };
            };
    
            // Read the selected file as data URL
            reader.readAsDataURL(imageInput.files[0]);
        }
    }    

    getEndpoint() {
        var newEndpoint = document.getElementById("endpoint").value;
        if(newEndpoint.length > 10) {
            console.log(apiInstance.baseUrl);
            return newEndpoint;            
        } else {
            console.log('Invalid endpoint');
            return null;
        }
    }

    createRectangle(imageContainer, id, left, top, width, height, title) {
        var container = document.getElementById(imageContainer)

        var rectangle = document.createElement('div');
        rectangle.id = 'rect_' + id;
        rectangle.className = 'rectangle';
        container.appendChild(rectangle);

        rectangle.className = 'rectangle rect';
        rectangle.style.width = (width * window.widthScale) + 'px';
        rectangle.style.height = (height * window.heightScale) + 'px';
        rectangle.style.left = (left * window.widthScale) + 'px';
        rectangle.style.top = (top * window.heightScale) + 'px';
        rectangle.style.display = 'block';

        //<span style="color:blue;font-weight:bold">blue</span>
        var span = document.createElement('span');
        span.id = 'span_' + id;     
        span.className = 'facetitle rect';        
        container.appendChild(span);
        span.innerHTML = title;
        span.style.color = 'aqua';
        span.style.left = (left * window.widthScale + 10) + 'px';
        span.style.top = (top * window.heightScale + 10) + 'px';
        span.style.display = 'block';        
    }
}