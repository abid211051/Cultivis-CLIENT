"use server";
import "dotenv/config";

export async function getPolygon(userId) {
  try {
    const res = await fetch(`${process.env.SERVER_URL}/map/getpoly/${userId}`);
    return await res.json();
  } catch (error) {
    return { error: error?.message };
  }
}

export async function createPolygon(field) {
  try {
    const res = await fetch(`${process.env.SERVER_URL}/map/createpoly`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(field),
    });
    return await res.json();
  } catch (error) {
    return { error: error?.message };
  }
}

export async function editPolygon(id, field) {
  try {
    const res = await fetch(`${process.env.SERVER_URL}/map/editpoly/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(field),
    });
    return await res.json();
  } catch (error) {
    return { error: error?.message };
  }
}

export async function deletePolygon(id) {
  try {
    const res = await fetch(`${process.env.SERVER_URL}/map/deletepoly/${id}`, {
      method: "DELETE",
    });
    return await res.json();
  } catch (error) {
    return { error: error?.message };
  }
}
