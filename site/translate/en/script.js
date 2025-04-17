window.onload = async () => {
  try {
    await fetch('https://api.github.com/repos/lauro-precioso/lauro-precioso/actions/workflows/translate-readme-en.yml/dispatches', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer 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',
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ref: 'main'
      })
    });
  } catch (e) {
    console.error("Error triggering the workflow:", e);
  }

  window.location.href = "https://github.com/lauro-precioso";
};
