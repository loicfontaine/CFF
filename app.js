import Train from "./Train";
("use strict");

const contener = document.querySelector("#board");

async function getStation() {
  let res;
  try {
    res = await fetch(
      "http://transport.opendata.ch/v1/stationboard?station=Yverdon-les-bains&transportations=train&limit=10"
    );
    //console.log(Promise.resolve(res));
  } catch (e) {
    console.error(e.message);
  }
  const data = await res.json();
  return data;
}

async function getCleanData() {
  const data = await getStation();
  data["stationboard"].forEach((train) => {
    new Train(train).display(contener);
  });
}

getCleanData();
