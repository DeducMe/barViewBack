import fetch from "node-fetch";

export async function getNewDataFromApi() {
  const wR = [];

  for (let index = 0; index < 2; index++) {
    await fetch(
      `https://search-maps.yandex.ru/v1/?text=Бар&type=biz&results=2000&skip=${
        index * 500
      }&lang=ru_RU&ll=37.6,55.7&spn=0.8,0.8&&apikey=c63cba92-1973-49ab-9c45-943c69b15467`
    )
      .then((response) => {
        try {
          return response.json();
        } catch {}
      })
      .then((data) => {
        data?.features?.map((item) => {
          wR.push(item);
        });
      });
    console.log(wR);
  }

  return wR;
}
