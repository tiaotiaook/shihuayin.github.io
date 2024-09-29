// 获取按钮和消息元素
const greetButton = document.getElementById("greetButton");
const greetMessage = document.getElementById("greetMessage");

// 当按钮被点击时，显示问候消息
greetButton.addEventListener("click", () => {
  greetMessage.textContent = "Hello, welcome to my website!";
});
