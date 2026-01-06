const data = [
  { name: "Slack", connected: true },
  { name: "GitHub", connected: true },
  { name: "Stripe", connected: false }
];

const tbody = document.getElementById("apps");

function render() {
  tbody.innerHTML = "";
  data.forEach((a, i) => {
    tbody.innerHTML += `
      <tr>
        <td>${a.name}</td>
        <td class="${a.connected ? "connected" : "disconnected"}">
          ${a.connected ? "Connected" : "Disconnected"}
        </td>
        <td>
          <button onclick="toggle(${i})">
            ${a.connected ? "Disconnect" : "Connect"}
          </button>
        </td>
      </tr>
    `;
  });
}

function toggle(i) {
  data[i].connected = !data[i].connected;
  render();
}

render();
