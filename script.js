// frontend/script.js

document.getElementById('getDataBtn').addEventListener('click', () => {
    fetch('http://34.228.8.238:3000/')
      .then(response => response.json())
      .then(data => {
        document.getElementById('response').innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
      })
      .catch(error => console.error('Error:', error));
  });
  
  document.getElementById('sendDataBtn').addEventListener('click', () => {
    fetch('http://34.228.8.238:3000/api/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ sample: 'data' }),
    })
      .then(response => response.json())
      .then(data => {
        document.getElementById('response').innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
      })
      .catch(error => console.error('Error:', error));
  });
  