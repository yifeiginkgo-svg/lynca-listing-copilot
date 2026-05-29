const form = document.querySelector("#loginForm");
const message = document.querySelector("#loginMessage");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  message.textContent = "Signing in...";
  const response = await fetch("/api/login", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ username: username.value, password: password.value })
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok || !payload.ok) {
    message.textContent = payload.message || "Login failed.";
    return;
  }
  const next = new URLSearchParams(location.search).get("next") || "/";
  location.href = next;
});
