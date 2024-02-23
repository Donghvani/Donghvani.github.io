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
                // Display the selected image on the page
                imageElement.src = e.target.result;
                imageElement.style.display = "block";  // Make the image visible
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
}