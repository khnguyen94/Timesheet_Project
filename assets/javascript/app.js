// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBC6lMeFL8PYTyVFKONgfcxhKCNklTSB9k",
    authDomain: "timesheet-kmj.firebaseapp.com",
    databaseURL: "https://timesheet-kmj.firebaseio.com",
    projectId: "timesheet-kmj",
    storageBucket: "timesheet-kmj.appspot.com",
    messagingSenderId: "888485096272",
    appId: "1:888485096272:web:73d9a30aa2e44ef0489a55"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// 
var database = firebase.database();



$("#new-employee-submit").on("click", function (event) {
    event.preventDefault();


    name = $("#new-employee-name").val().trim();
    role = $("#new-employee-role").val().trim();
    startdate = $("#email-start-date").val().trim();
    monthlyrate = $("#email-monthly-rate").val().trim();

    // Don't forget to provide initial data to your Firebase database.
    database.ref().push({
      name: name,
      role: role,
      startdate: startdate,
      monthlyrate: monthlyrate,
    });
  });