
const input  = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const result = document.getElementById("result");


function isPalindrome(text) {
  const cleaned  = text.toLowerCase().replace(/[^a-z0-9]/gi, ""); 
  const reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
}


function handleCheck() {
  const original = input.value;

  if (original.trim() === "") {
    alert("Please input a value");
    return;
  }


  const message = original + (isPalindrome(original)
    ? " is a palindrome."
    : " is not a palindrome.");


  result.textContent = message;
}


button.addEventListener("click", handleCheck);


input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") handleCheck();
});
