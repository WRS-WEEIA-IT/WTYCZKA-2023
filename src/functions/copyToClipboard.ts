const copyToClipboard = async (text: string) => {
  if (/^[.,!?]/.test(text)) {
    text = text.slice(1);
  }
  if (/[.,!?]$/.test(text)) {
    text = text.slice(0, -1);
  }
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};

export default copyToClipboard;
