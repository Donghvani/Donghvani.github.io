var uiHelperInstance = new uiHelper();
var apiInstance = new api("http://127.0.0.1:5000/api");

function displaySelectedImage() {
    uiHelperInstance.displaySelectedImage("image","selectedImage");
    
}

function submitKnownPerson() {
    function onSuccess(data) {
        var PersonDetailsForm = document.getElementById("personDetailsForm");
        show(PersonDetailsForm);
        var personIdText = document.getElementById("person_id");
        personIdText.value = data.person_id;
        alert('"' + data.label + ' has been added');
    }
    function onError(error) {
        console.error('Error:', error)
    }

    apiInstance.submitForm("uploadForm", "/known_face", onSuccess, onError);
}

function submitPersonDetails() {
    function onSuccess(data) {
        console.log(data)
    }
    function onError(error) {
        console.error('Error:', error)
    }
    apiInstance.submitForm("personDetailsForm", "/person_details", onSuccess, onError);
}

function setEndpoint() {
    apiInstance.baseUrl = uiHelperInstance.getEndpoint()
}