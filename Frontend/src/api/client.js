const configuredApiUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";
const apiBaseUrl = configuredApiUrl.replace(/\/+$/, "");

export async function createEnquiry(enquiry) {
  const response = await fetch(`${apiBaseUrl}/api/enquiries`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(enquiry),
  });

  const result = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(result.message || "We couldn't send your enquiry. Please try again.");
  }

  return result;
}
