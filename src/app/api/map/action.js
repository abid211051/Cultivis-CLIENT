"use server";

export async function createPolygon(corrdinate) {
  try {
    console.log(corrdinate);

    const res = await fetch(`${process.env.SERVER_URL}/map/createpoly`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(corrdinate),
    });
    return await res.json();
  } catch (error) {
    return { error: error?.message };
  }
}
