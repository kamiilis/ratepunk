'use server'
export async function sendEmail(email: string) {
  const data  = JSON.stringify({'email': email});

  try {
    const response = await fetch("https://api.jsonbin.io/v3/b", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-MASTER-KEY": "$2a$10$yfddQnz3Wp2/NzlGH3b/3O0ivrQCHMN9TXFkYWjK5KrSv95//ZtDa",
        "X-Collection-Id": "65db6e69dc74654018a9b03e"
      },
      body: data,
    });

    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}
