window.addEventListener('DOMContentLoaded', function() {
    // Get user data from the server or wherever you store it
    var userData = {
      name: "Mai Khac Viet",
      description: "Describe",
      age: 25,
      email: "khacviet@gmail.com",
      phone: "0868112198",
      address: "Sai Son, Quoc Oai, Ha Noi, Viet Nam",
      job: "Programmer",
      work: "Ha Noi"
    };

    // Update the profile information with user data
    document.getElementById('profile-image').src = "https://chiemtaimobile.vn/images/companies/1/%E1%BA%A2nh%20Blog/avatar-facebook-dep/Hinh-dai-dien-hai-huoc-cam-dep-duoi-ai-do.jpg?1704789789335";
    document.getElementById('profile-name').textContent = userData.name;
    document.getElementById('profile-description').textContent = userData.description;
    document.getElementById('profile-age').textContent = userData.age;
    document.getElementById('profile-email').textContent = userData.email;
    document.getElementById('profile-phone').textContent = userData.phone;
    document.getElementById('profile-address').textContent = userData.address;
    document.getElementById('profile-job').textContent = userData.job;
    document.getElementById('profile-work').textContent = userData.work;
  });