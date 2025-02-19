"use server";

export async function currentWeather() {
  try {
    const res = await fetch(
      `${process.env.SERVER_URL}/weather/currentweather`,
      {
        next: { revalidate: 3600 },
      }
    );
    const currentweather = await res.json();

    return currentweather;
  } catch (error) {
    console.log(error);
    return error.message;
  }
}

export async function hourlyWeather() {
  try {
    const res = await fetch(
      `${process.env.SERVER_URL}/weather/hourlyforecast`,
      {
        next: { revalidate: 3600 },
      }
    );
    const hourlyweather = await res.json();

    return hourlyweather;
  } catch (error) {
    console.log(error);
    return error.message;
  }
}

export async function dailyWeather() {
  try {
    const res = await fetch(`${process.env.SERVER_URL}/weather/dailyforecast`, {
      next: { revalidate: 3600 },
    });
    const dailyweather = await res.json();

    return dailyweather;
  } catch (error) {
    console.log(error);
    return error.message;
  }
}
