let alreadySubmitted = false;

function appendModal(
  nameValue,
  emailValue,
  podcastValue,
  categoryValue,
  optionValue,
  episodeValue,
  messageValue
) {
  if (alreadySubmitted === true) {
    //remove elements

    const usedNameField = document.getElementById("nameField");
    usedNameField.remove();

    const usedEmailField = document.getElementById("emailField");
    usedEmailField.remove();

    const usedPodcastField = document.getElementById("podcastField");
    usedPodcastField.remove();

    const usedCategoryField = document.getElementById("categoryField");
    usedCategoryField.remove();

    const usedOptionField = document.getElementById("optionField");
    usedOptionField.remove();

    const usedEpisodeField = document.getElementById("episodeField");
    usedEpisodeField.remove();

    const usedMessageField = document.getElementById("messageField");
    usedMessageField.remove();
  }

  // Add name text to modal
  const nameField = document.createElement("p");
  nameField.setAttribute("id", "nameField");
  nameField.textContent = nameValue;
  document.getElementById("nameDiv").appendChild(nameField);

  // Add topic text to modal
  const emailField = document.createElement("p");
  emailField.setAttribute("id", "emailField");
  emailField.textContent = emailValue;
  document.getElementById("emailDiv").appendChild(emailField);

  const podcastField = document.createElement("p");
  podcastField.setAttribute("id", "podcastField");
  podcastField.textContent = podcastValue;
  document.getElementById("podcastDiv").appendChild(podcastField);

  const categoryField = document.createElement("p");
  categoryField.setAttribute("id", "categoryField");
  categoryField.textContent = categoryValue;
  document.getElementById("categoryDiv").appendChild(categoryField);

  const optionField = document.createElement("p");
  optionField.setAttribute("id", "optionField");
  optionField.textContent = optionValue;
  document.getElementById("optionDiv").appendChild(optionField);

  const episodeField = document.createElement("p");
  episodeField.setAttribute("id", "episodeField");
  episodeField.textContent = episodeValue;
  document.getElementById("episodeDiv").appendChild(episodeField);

  // Add message text to modal
  const messageField = document.createElement("p");
  messageField.setAttribute("id", "messageField");
  messageField.textContent = messageValue;
  document.getElementById("messageDiv").appendChild(messageField);

  alreadySubmitted = true;
}

// appendModal(
//   "Code First Girls",
//   "Email address",
//   "Link",
//   "Health",
//   "We want a new website, please help!"
// );

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nameField = document.getElementsByName("f_name")[0].value;
  const emailField = document.getElementsByName("f_email")[0].value;
  const podcastField = document.getElementsByName("f_url")[0].value;
  const categoryField = document.getElementsByName("f_category")[0].value;
  const optionField = document.getElementsByName("f_option")[0].value;
  const episodeField = document.getElementsByName("ff_url")[0].value;
  const messageField = document.getElementsByName("f_message")[0].value;

  appendModal(
    nameField,
    emailField,
    podcastField,
    categoryField,
    optionField,
    episodeField,
    messageField
  );

  $("#exampleModal").modal();
});

// Add event listener

//Search bar JavaScript
// FIlter anything
$(document).ready(function () {
  $("#anythingSearch").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#myDIV *").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});
