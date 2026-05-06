const copyBtn = document.getElementById("copyBtn");
const statusText = document.getElementById("statusText");

const contactText = `이름: 김태헌
직책: SideOnAI 대표
소개: "AI와 함께 놀고 있습니다. 같이 노실 분?"
이메일: th@sideonai.com
연락처: 010-1111-1111`;

async function copyContact() {
  try {
    await navigator.clipboard.writeText(contactText);
    statusText.textContent = "연락처 정보를 복사했어요.";
  } catch (error) {
    statusText.textContent = "복사 권한이 없어 수동 복사가 필요해요.";
  }
}

copyBtn?.addEventListener("click", copyContact);
