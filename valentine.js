function openLetter() {
  document.querySelector('.envelope').classList.add('open');
}

function yes() {
  document.body.innerHTML = `
    <div style="text-align:center;">
      <h1>YAYYY 💕💘</h1>
      <p>You just made my heart very happy.</p>
    </div>
  `;
}
