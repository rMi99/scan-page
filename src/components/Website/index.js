
let WebsiteNew = ({ qrData }) => {
  window.location.replace(qrData.url.startsWith('https://') ? qrData.url : `https://${qrData.url}`);

};

export default WebsiteNew;
