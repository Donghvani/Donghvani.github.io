class api {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    
    submitForm(formId, url, onSuccess, onError) {
        // Get the form and form data
        var form = document.getElementById(formId);
        var formData = new FormData(form);

        // Send the form data to the API endpoint
        fetch(`${this.baseUrl}${url}`, {
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            onSuccess(data);
            form.reset();
        })
        .catch(error => {
            onError(error);
        });
    }

    getResultById(id, onSuccess, onError) {
        fetch(`${this.baseUrl}/result/${id}`, {
            method: "Get"                
        })
        .then(response => response.json())
        .then(data => {
            onSuccess(data);
        })
        .catch(error => {
            onError(error);
        });
    }
}