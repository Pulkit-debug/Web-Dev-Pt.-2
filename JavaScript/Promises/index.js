// Promise is an Object that indicates the success and failure of an asyncrhonus task

var userLoggedIn = false;

var promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (userLoggedIn) resolve();
    // for success
    else reject();
  }, 1000);
});

promise
  .then(() => {
    console.log("success");
  })
  .catch(() => {
    console.log("rejected");
  });
