const hasNewMessage = () => {
  // TODO: return true with a probability of 20%.
  return Math.random() < 0.2;
};

// const newMessage = () => {
//   // TODO: return a random message as an object with two keys, subject and sender
//   return {sender: 'GitHub Team',subject: 'Welcome to GitHub'}
// };

const newMessage = async () => {
  let result = await fetch("https://fml.shanghaiwogeng.com/api/v1/stories");
  result = await result.json();
  let randNum=Math.floor(Math.random() * result.length);
  let message = {sender: `${result[randNum]['name']}`,subject: `${result[randNum]['text']}`};
  return message;
  // This returns a Promise
};

const appendMessageToDom = (message) => {
  // TODO: append the given message to the DOM (as a new row of `#inbox`)
  let inbox = document.getElementById("inbox");
  inbox.insertAdjacentHTML('afterbegin', `<div class="row message unread"><div class="col-3">${message["sender"]}</div><div class="col-9">${message["subject"]}</div></div>`);
};

const refresh = () => {
  // TODO: Implement the global refresh logic. If there is a new message,
  //       append it to the DOM. Update the unread counter in title as well.
  if (hasNewMessage()) {
    newMessage().then((result)=>{appendMessageToDom(result)});
    let count = document.getElementById("count");
    let unreadNum = document.querySelectorAll('.unread').length;
    count.innerText = `(${unreadNum})`;
    document.title = `Ex 3. - Fake Inbox (${unreadNum})`;
  }
};

















// Do not remove these lines:
document.addEventListener("DOMContentLoaded", () => {
  setInterval(refresh, 1000); // Every 1 second, the `refresh` function is called.
});

