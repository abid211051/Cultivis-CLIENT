"use server";

export async function currentWeather() {
  try {
    const res = await fetch(`${process.env.SERVER_URL}/weather/currentweather`);
    const currentweather = await res.json();
    return currentweather;
  } catch (error) {
    return { error: error.message };
  }
}

export async function hourlyWeather() {
  try {
    const res = await fetch(`${process.env.SERVER_URL}/weather/hourlyforecast`);
    const hourlyweather = await res.json();

    return hourlyweather;
  } catch (error) {
    return { error: error.message };
  }
}

export async function dailyWeather() {
  try {
    const res = await fetch(`${process.env.SERVER_URL}/weather/dailyforecast`);
    const dailyweather = await res.json();

    return dailyweather;
  } catch (error) {
    return { error: error.message };
  }
}
