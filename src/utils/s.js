// import fetch from "node-fetch"; // Import the fetch library if not already installed

export async function getNewsletterData() {
  //   const apiUrl = `${process.env.BASE_URL}/api/newsletter`; // Use the appropriate URL

  try {
    const response = await fetch(`http://localhost:3000/api/newsletter`);
    // if (!response.ok) {
    //   throw new Error("Failed to fetch data");
    // }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
